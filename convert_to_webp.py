import os
from PIL import Image

ROOT = os.path.join(os.path.dirname(__file__), 'public')
EXTENSIONS = ('.jpg', '.jpeg', '.png')

for dirpath, _, filenames in os.walk(ROOT):
    for f in filenames:
        if not f.lower().endswith(EXTENSIONS):
            continue
        src = os.path.join(dirpath, f)
        dst = os.path.join(dirpath, os.path.splitext(f)[0] + '.webp')
        if os.path.exists(dst):
            print(f'  SKIP (exists): {dst}')
            continue
        try:
            img = Image.open(src)
            mode = 'RGBA' if img.mode in ('RGBA', 'P') and 'transparency' in img.info else 'RGB'
            if mode == 'RGBA':
                img = img.convert('RGBA')
            else:
                img = img.convert('RGB')
            img.save(dst, 'WEBP', quality=85)
            print(f'  OK: {src} -> {dst}')
        except Exception as e:
            print(f'  ERROR: {src} -> {e}')
