import guidesManifest from './guides-manifest.json';

export interface GuideMetadata {
    id: string; // The slug (folder name)
    title: string;
    description: string;
    category: string;
    difficulty: string;
    time: string;
}

/**
 * Returns the metadata for every guide.
 *
 * The list comes from lib/guides-manifest.json, which is generated at
 * prebuild time by scripts/generate-guides-manifest.js (it scans every guide
 * folder under app/[locale]/guides and extracts the exported `guideMetadata`).
 *
 * We intentionally do NOT read the filesystem here: on Vercel the source
 * folder (app/[locale]/guides) is not part of the serverless bundle, so an
 * fs.readdirSync at runtime returns [] and the guides listing page shows
 * "No guide found" for every locale. Importing the JSON bundles it into the
 * function, so the listing always has data at build AND runtime.
 *
 * Note: when adding/renaming guides, run `npm run prebuild` (or a full build)
 * to refresh the manifest, exactly like app/sitemap-routes.json.
 */
export function getAllGuides(): GuideMetadata[] {
    return guidesManifest as GuideMetadata[];
}
