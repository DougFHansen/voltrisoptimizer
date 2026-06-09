const fs = require('fs');
const path = require('path');

const GEMINI_API_KEY = "AIzaSyC6NiLNs8qm-PSrC_if9E6yH_v9hlHgFQI";
const PT_REGEX = /(?<!\/\/.*|>)[a-zá-ü]+\s+(para|com|você|que|mais|como|sobre|atendimento|contato)\s+[a-zá-ü]+/i;

function getFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (!filePath.includes('node_modules') && !filePath.includes('.next') && !filePath.includes('.git')) {
        getFiles(filePath, filesList);
      }
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      filesList.push(filePath);
    }
  }
  return filesList;
}

const allFiles = getFiles('./app');
const filesToTranslate = [];

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (PT_REGEX.test(content)) {
    filesToTranslate.push(file);
  }
}

console.log(`Found ${filesToTranslate.length} files to translate.`);

async function translateFile(filePath) {
  const originalContent = fs.readFileSync(filePath, 'utf8');
  
  const prompt = `You are a translator. Given the following Next.js TypeScript code, translate ALL Portuguese text (UI text, metadata strings, array values, html content) to ENGLISH.
CRITICAL RULES:
1. ONLY translate strings and plain text intended for the UI.
2. DO NOT modify any variable names, function names, logic, syntax, HTML tags, or component names.
3. IGNORE comments (do not translate anything after // or inside /* */).
4. Do NOT wrap your answer in \`\`\`tsx block. Output ONLY the raw modified file content.
5. If the file is already 100% english, return it exactly as is.

File content:
${originalContent}
`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.1 }
      })
    });
    
    if (!response.ok) {
       console.error(`Error with ${filePath}: ${response.statusText}`);
       return false;
    }
    
    const data = await response.json();
    let translated = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (translated) {
      if (translated.startsWith('\`\`\`')) {
        translated = translated.replace(/^\`\`\`[a-z]*\n/, '').replace(/\n\`\`\`$/, '');
      }
      fs.writeFileSync(filePath, translated, 'utf8');
      console.log(`Translated -> ${filePath}`);
      return true;
    } else {
      console.error(`No output for ${filePath}`);
      return false;
    }
  } catch (err) {
    console.error(`Translation failed for ${filePath}`, err.message);
    return false;
  }
}

async function run() {
  const BATCH_SIZE = 5;
  for (let i = 0; i < filesToTranslate.length; i += BATCH_SIZE) {
    const batch = filesToTranslate.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(translateFile));
    await new Promise(r => setTimeout(r, 2000)); // sleep to avoid rate limits
  }
  console.log('All files translated!');
}

run();
