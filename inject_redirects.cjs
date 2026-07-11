const fs = require('fs');

const nextConfigPath = './next.config.js';
let content = fs.readFileSync(nextConfigPath, 'utf8');

// The file contents were already read into the first script but the regex failed to match.
// I will just read rename_guides.cjs and parse its map.
const scriptContent = fs.readFileSync('./rename_guides.cjs', 'utf8');
const mapStr = scriptContent.substring(scriptContent.indexOf('const map = {'), scriptContent.indexOf('const guidesDir =') - 3);

// Evaluate the map safely
const map = eval(`(() => { ${mapStr}; return map; })()`);

let redirectsToInject = `\n      // ============================================================
      // MASS REDIRECTS: PORTUGUESE GUIDES -> ENGLISH GUIDES
      // ============================================================\n`;

for (const [ptSlug, enSlug] of Object.entries(map)) {
  redirectsToInject += `      { source: '/guides/${ptSlug}', destination: '/guides/${enSlug}', permanent: true },\n`;
}

// Find a good place to inject. Let's find "      { source: '/guides/windows-formatting', destination: '/guides/clean-install-windows-11-rufus-gpt', permanent: true },"
const anchor = "      { source: '/guides/windows-formatting', destination: '/guides/clean-install-windows-11-rufus-gpt', permanent: true },";
if (content.includes(anchor)) {
    content = content.replace(anchor, anchor + "\n" + redirectsToInject);
    fs.writeFileSync(nextConfigPath, content, 'utf8');
    console.log("Successfully injected redirects.");
} else {
    console.log("Could not find anchor.");
}
