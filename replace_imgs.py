import os, re

src_dir = r'C:\Users\franc\Desktop\serviningenieria2026-main\src'
count = 0

for root, dirs, files in os.walk(src_dir):
    for f in files:
        if not f.endswith(('.jsx', '.js', '.tsx', '.ts')):
            continue
        path = os.path.join(root, f)
        with open(path, 'r', encoding='utf-8') as fh:
            content = fh.read()

        original = content

        # Match local image paths in quotes: "/path/to/file.png"
        content = re.sub(
            r'(["\'])(/[^"\']*?)\.(jpg|jpeg|png)\1',
            lambda m: m.group(1) + m.group(2) + '.webp' + m.group(1),
            content,
            flags=re.IGNORECASE
        )

        if content != original:
            count += 1
            with open(path, 'w', encoding='utf-8') as fh:
                fh.write(content)
            print(f'Updated: {path}')

if count == 0:
    print('No files were updated')
else:
    print(f'Done. {count} files updated.')
