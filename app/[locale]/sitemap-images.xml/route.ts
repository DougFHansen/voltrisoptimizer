import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;
  const baseUrl = 'https://www.voltrisoptimizer.com';

  // Map pages to images with the dynamic locale subpath
  const pages = [
    {
      loc: `${baseUrl}/${locale}`,
      images: [
        {
          loc: `${baseUrl}/logo.png`,
          title: 'VOLTRIS Main Logo',
          caption: 'Official VOLTRIS logo for visual identity and Google Snippet'
        },
        {
          loc: `${baseUrl}/logo-v2.webp`,
          title: 'VOLTRIS Logo Version 2',
          caption: 'Updated VOLTRIS logo in optimized WebP format'
        },
        {
          loc: `${baseUrl}/logogoogle.webp`,
          title: 'VOLTRIS Google Logo',
          caption: 'Logo optimized for Google Services integration'
        }
      ]
    },
    {
      loc: `${baseUrl}/${locale}/about`,
      images: [
        {
          loc: `${baseUrl}/about-img.webp`,
          title: 'About the Company',
          caption: 'Illustrative image of the VOLTRIS team and services'
        }
      ]
    }
  ];

  // Generate XML
  const xmlContent = pages.map(page => `
    <url>
      <loc>${page.loc}</loc>
      ${page.images.map(img => `
      <image:image>
        <image:loc>${img.loc}</image:loc>
        <image:title><![CDATA[${img.title}]]></image:title>
        <image:caption><![CDATA[${img.caption}]]></image:caption>
      </image:image>
      `).join('')}
    </url>
  `).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${xmlContent}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}