import os, re, json

src_dir = r'C:\Users\franc\Desktop\serviningenieria2026-main\src'
urls = set()

for root, dirs, files in os.walk(src_dir):
    for f in files:
        if not f.endswith(('.jsx', '.js')):
            continue
        path = os.path.join(root, f)
        with open(path, 'r', encoding='utf-8') as fh:
            content = fh.read()
        found = re.findall(r'https?://[^\s"\'()>]+\.(?:jpg|jpeg|png|webp)[^\s"\'()>]*', content)
        for u in found:
            u = u.strip().rstrip('",')
            if 'ejemplo.com' not in u and 'serviningenieria.com.ar' not in u:
                urls.add(u)

output = sorted(urls)
for u in output:
    print(u)

with open('failed_images.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print(f'\nTotal: {len(output)} URLs')
