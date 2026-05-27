import os, re, hashlib, sys
from urllib.parse import urlparse, unquote
from PIL import Image
from io import BytesIO

try:
    import requests
except ImportError:
    os.system(f'"{sys.executable}" -m pip install requests -q')
    import requests

SRC_DIR = r'C:\Users\franc\Desktop\serviningenieria2026-main\src'
OUT_DIR = r'C:\Users\franc\Desktop\serviningenieria2026-main\public\external'
os.makedirs(OUT_DIR, exist_ok=True)

SKIP_DOMAINS = {'ejemplo.com', 'serviningenieria.com.ar'}

def is_placeholder(url):
    return 'ejemplo.com' in url or 'placeholder' in url.lower()

def clean_url(url):
    url = url.strip().strip('"').strip("'")
    # Remove query params for downloading
    parsed = urlparse(url)
    base = f'{parsed.scheme}://{parsed.netloc}{parsed.path}'
    return base if base else url

def url_to_filename(url):
    parsed = urlparse(url)
    path = unquote(parsed.path.rstrip('/'))
    name = os.path.splitext(os.path.basename(path))[0] if path else 'image'
    if not name or name == '/':
        name = 'image'
    # Use hash for unique, safe filenames
    safe = re.sub(r'[^a-zA-Z0-9_-]', '_', name)[:60]
    h = hashlib.md5(url.encode()).hexdigest()[:8]
    return f'{safe}_{h}.webp'

session = requests.Session()
session.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
})

files_to_update = {}
url_map = {}

for root, dirs, files in os.walk(SRC_DIR):
    for fname in files:
        if not fname.endswith(('.jsx', '.js')):
            continue
        path = os.path.join(root, fname)
        with open(path, 'r', encoding='utf-8') as fh:
            content = fh.read()

        urls = re.findall(
            r'https?://[^\s"\'()]+\.(?:jpg|jpeg|png|webp)[^\s"\'()]*',
            content
        )
        for url in urls:
            url = url.rstrip('",\'')
            if is_placeholder(url):
                continue
            if any(skip in url for skip in SKIP_DOMAINS):
                continue
            files_to_update.setdefault(path, set()).add(url)

print(f'Found {sum(len(v) for v in files_to_update.values())} external image references across {len(files_to_update)} files.')

downloaded = 0
failed = 0
skipped = 0

for filepath, urls in files_to_update.items():
    for url in sorted(urls):
        if url in url_map:
            continue

        out_name = url_to_filename(url)
        out_path = os.path.join(OUT_DIR, out_name)

        if os.path.exists(out_path):
            print(f'  EXISTS: {out_name}')
            url_map[url] = f'/external/{out_name}'
            skipped += 1
            continue

        # Try to download
        dl_url = clean_url(url)
        try:
            resp = session.get(dl_url, timeout=30)
            resp.raise_for_status()
            img = Image.open(BytesIO(resp.content))
            img = img.convert('RGBA') if img.mode in ('RGBA', 'P') and 'transparency' in img.info else img.convert('RGB')
            img.save(out_path, 'WEBP', quality=85)
            url_map[url] = f'/external/{out_name}'
            downloaded += 1
            print(f'  OK:   {out_name} ({img.size[0]}x{img.size[1]})')
        except Exception as e:
            failed += 1
            print(f'  FAIL: {url[:80]} -> {e}')

print(f'\nDownloaded: {downloaded}, Skipped: {skipped}, Failed: {failed}')

# Now update source files with local paths
if url_map:
    updated_files = set()
    for root, dirs, files in os.walk(SRC_DIR):
        for fname in files:
            if not fname.endswith(('.jsx', '.js')):
                continue
            path = os.path.join(root, fname)
            with open(path, 'r', encoding='utf-8') as fh:
                content = fh.read()
            original = content
            for old_url, new_path in url_map.items():
                content = content.replace(old_url, new_path)
            if content != original:
                updated_files.add(path)
                with open(path, 'w', encoding='utf-8') as fh:
                    fh.write(content)

    print(f'Updated {len(updated_files)} source files.')
    for f in sorted(updated_files):
        rel = os.path.relpath(f, SRC_DIR)
        print(f'  {rel}')
else:
    print('No URLs to update.')
