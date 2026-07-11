import os
import re

pt_words = {'você', 'como', 'para', 'seu', 'que', 'mais', 'não', 'são', 'isso', 'com', 'neste', 'guia', 'aprender', 'sobre', 'jogos', 'desempenho'}
skip_folders = {'.git', 'node_modules', '.next'}
results = []

def clean_text(text):
    text = re.sub(r'href="[^"]+"', '', text)
    text = re.sub(r'src="[^"]+"', '', text)
    text = re.sub(r'id:[^,]+', '', text)
    text = re.sub(r'import\s+.*', '', text)
    text = re.sub(r'from\s+.*', '', text)
    return text.lower()

base_path = 'E:/Minhas Coisas/Desktop/APLICATIVO VOLTRIS/Site Voltris/app'
for root, dirs, files in os.walk(base_path):
    dirs[:] = [d for d in dirs if d not in skip_folders]
    for file in files:
        if file == 'page.tsx':
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                cleaned = clean_text(content)
                words = set(re.findall(r'\b\w+\b', cleaned))
                
                # Check for intersection
                matches = pt_words.intersection(words)
                if len(matches) > 3: 
                    results.append(filepath)
            except Exception as e:
                pass

for res in results:
    print(res)

print(f'\\nFound {len(results)} files to translate')
