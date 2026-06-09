import { NextRequest, NextResponse } from 'next/server';
import { createClient as createServerClient } from '@/utils/supabase/server';

export async function POST(request: NextRequest) {
  try {
    // SECURITY: Require admin authentication to generate images
    const supabase = await createServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { data: profile } = await supabase.from('profiles').select('is_admin').eq('id', user.id).single();
    if (!profile?.is_admin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

    const { description } = await request.json();

    console.log('Received description:', description);

    if (!description) {
      return NextResponse.json(
        { error: 'Description is required' },
        { status: 400 }
      );
    }

    const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

    if (!unsplashAccessKey) {
      return NextResponse.json(
        { error: 'Unsplash API key not configured' },
        { status: 500 }
      );
    }

    // Search multiple images on Unsplash
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(description)}&orientation=landscape&per_page=5&client_id=${unsplashAccessKey}`,
      {
        headers: {
          'Accept-Version': 'v1'
        }
      }
    );

    const data = await response.json();
    console.log('Unsplash API response:', data);

    if (!response.ok) {
      console.error('Unsplash API error:', data);
      return NextResponse.json(
        { error: 'Error fetching image', details: data },
        { status: 500 }
      );
    }

    if (!data.results || data.results.length === 0) {
      return NextResponse.json(
        { error: 'No image found for the provided description.', details: data },
        { status: 404 }
      );
    }

    // Build images array
    const images = data.results.map((img: any) => ({
      imageUrl: img.urls.regular,
      thumbUrl: img.urls.thumb,
      downloadUrl: img.links.download,
      photographer: img.user.name,
      photographerUrl: img.user.links.html
    }));

    return NextResponse.json({ images });

  } catch (error) {
    console.error('Error fetching image:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : error },
      { status: 500 }
    );
  }
} 