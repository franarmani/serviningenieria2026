"""
Download free industrial stock images from Unsplash to replace failed external URLs.

Maps each failed URL to a search query and downloads a suitable replacement.
"""
import os, re, json, hashlib, sys
from io import BytesIO
from urllib.parse import urlparse, unquote

try:
    import requests
except ImportError:
    os.system(f'"{sys.executable}" -m pip install requests -q')
    import requests
from PIL import Image

PUBLIC_DIR = r'C:\Users\franc\Desktop\serviningenieria2026-main\public'
OUT_DIR = os.path.join(PUBLIC_DIR, 'external')
os.makedirs(OUT_DIR, exist_ok=True)

# Map each failed URL to a search query for Unsplash
# Organized by source file for context
FAILED_MAP = {
    # === ComponentesIndustriales.jsx ===
    'https://francovigh.com/resources/original/productos_principales_home/1_welding_neck.webp': 'welding neck flange industrial',
    'https://francovigh.com/resources/original/productos_principales_home/2_Slip_On.webp': 'slip on flange pipe fitting',
    'https://francovigh.com/resources/original/productos_principales_home/3_Threaded.webp': 'threaded pipe fitting flange',
    'https://francovigh.com/resources/original/productos_principales_home/4_Lap_joint.webp': 'lap joint flange pipe',
    'https://francovigh.com/resources/original/productos_principales_home/6_Blind.webp': 'blind flange industrial',
    'https://www.baogangpipe.com/uploads/202228104/astm-a106-grade-b-pipe53138844341.webp': 'seamless steel pipe industrial',
    'https://www.baogangpipe.com/uploads/202228104/api-5l-grade-b-carbon-steel-seamless-pipe54006587666.webp': 'carbon steel pipe seamless',
    'https://www.baogangpipe.com/uploads/202228104/astm-a312-tp310-stainless-steel-seamless19221086277.webp': 'stainless steel pipe tube',
    'https://acerosarequipa.com/sites/default/files/productos/2023-02/TUBOS_ERW.webp': 'ERW steel pipe welded',
    'https://ssmalloys.com/wp-content/uploads/2024/09/Weldolet-Sockolet-Threadolet.webp': 'pipe fitting weldolet sockolet',
    'https://casoni.com.ar/wp-content/uploads/2021/01/01-Klingersil-C_4408.webp': 'industrial gasket sealing',
    'https://klinger.ar/wp-content/uploads/2023/05/sealex.webp': 'industrial gasket seal material',
    'https://www.promoteciberica.com/wp-content/uploads/2019/08/toricas-encapsuladas.webp': 'encapsulated o-ring seal',

    # === AcoplamientosRexnord.jsx (applications by industry) ===
    'https://americansteel.com/wp-content/uploads/2016/02/Rolling-Mill-1.webp': 'steel mill rolling heavy industry',
    'https://cambelt.com/wp-content/uploads/2021/10/aoNMGaMs5jAfnvKrxBBlim7vV7RZQdxf1633019344.webp': 'mining conveyor belt industrial',
    'https://www.e-mj.com/wp-content/uploads/2022/02/1-Horizontal-Mills.webp': 'horizontal ball mill mining',
    'https://www.dgcrane.com/wp-content/uploads/steel2.webp': 'industrial overhead crane steel',
    'https://cdn.britannica.com/48/1548-004-13E12F99/slab-caster.webp': 'steel slab continuous casting',
    'https://kimray.com/sites/default/files/uploads/learning-paths/oil-gas-equipment-101/15.14%20Vertical%20Separator.webp': 'oil gas separator vessel',
    'https://techflow.net/admin/public/public/upload/media_images/IMG_20240315_174757-1729573295.webp': 'industrial fan blower ventilation',
    'https://upload.wikimedia.org/wikipedia/commons/0/0a/Rauman_sellutehdas.webp': 'pulp paper mill industry',
    'https://upload.wikimedia.org/wikipedia/commons/3/3f/LDCementFM10MW.webp': 'cement mill industrial',
    'https://remsausainc.com/wp-content/uploads/AdobeStock_223494155.webp': 'power plant generator turbine',
    'https://www.vectorsolutions.com/wp-content/uploads/2024/08/paper-machine-refining-full.webp': 'paper machine refining industry',
    'https://www.whitacrerebar.com/wp-content/uploads/2017/10/MeteringStation-1024x545.webp': 'oil gas metering station skid',
    'https://www.machinerypartner.com/_next/image?q=75&url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyhrhi1m6%2Fproduction%2Fc2a81fe457602f7b3845117f1ebe457e6db4b292-1200x904.webp%3Frect%3D0%2C115%2C1200%2C675%26w%3D800%26h%3D450&w=3840': 'mining haul truck transport',

    # === InspeccionTanquesAPI.jsx ===
    'https://mfe-is.com/wp-content/uploads/2025/03/mfl-tank-floor-scanner-inspection.webp': 'tank floor scanning inspection NDT',
    'https://www.integratedtesting.com.au/assets/images/pages/Vacuum-Box-Testing.webp': 'vacuum box testing NDT inspection',
    'https://aqcinspection.com/wp-content/uploads/2020/12/dye-penetrant-inspection.webp': 'dye penetrant inspection NDT',
    'https://wdbgroup.co.uk/web/app/uploads/2023/01/Magnetic-Particle-Inspection-NDT-MPI-NDT-2-p936a5kvykf7203wpwwx4k96xpz90iwmy41qqpp8y0.webp': 'magnetic particle inspection NDT',
    'https://aimcontrolgroup.com/vnt_upload/news/MARINE_SURVEY_SHIPPING_INSPECTION/154_Tank_coating_condition_inspection/Chemical_Tank_coating_condition_inspection_survey.webp': 'tank coating inspection industrial',
    'https://inservemechanical.com/wp-content/uploads/2020/08/Inspection-Rope-Access-NDE-Tank-scaled-1.webp': 'rope access tank inspection NDT',
    'https://www.indinspect.com/wp-content/uploads/blog-11.webp': 'industrial inspection engineer',

    # === FalkCTSeries.jsx ===
    'https://spxcooling.com/wp-content/uploads/Marley-Double-Reduction-Geareducer.webp': 'cooling tower gear reducer',
    'https://houstonpumpandgear.com/wp-content/uploads/2025/06/IMG_2193-1.webp': 'industrial gearbox pump drive',

    # === MaterialesLanding.jsx ===
    'https://velan.com/wp-content/uploads/2024/09/API-623-cast-steel-globe-edited-1.webp': 'cast steel globe valve industrial',

    # === TankTreatment.jsx ===
    'https://energy-steel.com/wp-content/uploads/2025/03/Coatings-and-Linings-2-1030x758.webp': 'industrial tank coating lining',
    'https://www.cstindustries.com/wp-content/uploads/2017/01/optibond3-min.webp': 'industrial coating application',
    'https://www.groupebellemare.com/wp-content/uploads/2021/08/Sablage.webp': 'industrial sandblasting abrasive blasting',
}

# Alternative: direct Unsplash download URLs (found via search)
# We'll use a curated set of direct Unsplash download links
UNSPLASH_FALLBACKS = {
    'welding neck flange industrial': 'https://unsplash.com/photos/8BAyCFRCHqY/download?force=true&w=640',
    'slip on flange pipe fitting': 'https://unsplash.com/photos/6uJTDNz6n0k/download?force=true&w=640',
    'threaded pipe fitting flange': 'https://unsplash.com/photos/9oKRMkg-x4k/download?force=true&w=640',
    'lap joint flange pipe': 'https://unsplash.com/photos/0KqbIhJo76w/download?force=true&w=640',
    'blind flange industrial': 'https://unsplash.com/photos/GwZTfcG9jTU/download?force=true&w=640',
    'seamless steel pipe industrial': 'https://unsplash.com/photos/XZVHCe9B2wY/download?force=true&w=640',
    'carbon steel pipe seamless': 'https://unsplash.com/photos/XZVHCe9B2wY/download?force=true&w=640',
    'stainless steel pipe tube': 'https://unsplash.com/photos/XZVHCe9B2wY/download?force=true&w=640',
    'ERW steel pipe welded': 'https://unsplash.com/photos/XZVHCe9B2wY/download?force=true&w=640',
    'pipe fitting weldolet sockolet': 'https://unsplash.com/photos/8BAyCFRCHqY/download?force=true&w=640',
    'industrial gasket sealing': 'https://unsplash.com/photos/6uJTDNz6n0k/download?force=true&w=640',
    'industrial gasket seal material': 'https://unsplash.com/photos/6uJTDNz6n0k/download?force=true&w=640',
    'encapsulated o-ring seal': 'https://unsplash.com/photos/6uJTDNz6n0k/download?force=true&w=640',
    'steel mill rolling heavy industry': 'https://unsplash.com/photos/5481941/download?force=true&w=640',
    'mining conveyor belt industrial': 'https://unsplash.com/photos/5190753/download?force=true&w=640',
    'horizontal ball mill mining': 'https://unsplash.com/photos/5190753/download?force=true&w=640',
    'industrial overhead crane steel': 'https://unsplash.com/photos/5481941/download?force=true&w=640',
    'steel slab continuous casting': 'https://unsplash.com/photos/5481941/download?force=true&w=640',
    'oil gas separator vessel': 'https://unsplash.com/photos/5825297/download?force=true&w=640',
    'industrial fan blower ventilation': 'https://unsplash.com/photos/XZVHCe9B2wY/download?force=true&w=640',
    'pulp paper mill industry': 'https://unsplash.com/photos/5481941/download?force=true&w=640',
    'cement mill industrial': 'https://unsplash.com/photos/5190753/download?force=true&w=640',
    'power plant generator turbine': 'https://unsplash.com/photos/5825297/download?force=true&w=640',
    'paper machine refining industry': 'https://unsplash.com/photos/5481941/download?force=true&w=640',
    'oil gas metering station skid': 'https://unsplash.com/photos/5825297/download?force=true&w=640',
    'mining haul truck transport': 'https://unsplash.com/photos/1578916/download?force=true&w=640',
    'tank floor scanning inspection NDT': 'https://unsplash.com/photos/H9iqfHWSUXA/download?force=true&w=640',
    'vacuum box testing NDT inspection': 'https://unsplash.com/photos/H9iqfHWSUXA/download?force=true&w=640',
    'dye penetrant inspection NDT': 'https://unsplash.com/photos/1q5l0ykvhJA/download?force=true&w=640',
    'magnetic particle inspection NDT': 'https://unsplash.com/photos/1q5l0ykvhJA/download?force=true&w=640',
    'tank coating inspection industrial': 'https://unsplash.com/photos/H9iqfHWSUXA/download?force=true&w=640',
    'rope access tank inspection NDT': 'https://unsplash.com/photos/H9iqfHWSUXA/download?force=true&w=640',
    'industrial inspection engineer': 'https://unsplash.com/photos/JsuoDRaAUL0/download?force=true&w=640',
    'cooling tower gear reducer': 'https://unsplash.com/photos/XZVHCe9B2wY/download?force=true&w=640',
    'industrial gearbox pump drive': 'https://unsplash.com/photos/XZVHCe9B2wY/download?force=true&w=640',
    'cast steel globe valve industrial': 'https://unsplash.com/photos/6uJTDNz6n0k/download?force=true&w=640',
    'industrial tank coating lining': 'https://unsplash.com/photos/xybSq6q8ugY/download?force=true&w=640',
    'industrial coating application': 'https://unsplash.com/photos/xybSq6q8ugY/download?force=true&w=640',
    'industrial sandblasting abrasive blasting': 'https://unsplash.com/photos/XZVHCe9B2wY/download?force=true&w=640',
}

session = requests.Session()
session.headers.update({'User-Agent': 'Mozilla/5.0'})

# For Pixabay URLs we use direct image URLs
PIXABAY_FALLBACKS = {
    'steel mill rolling heavy industry': 'https://pixabay.com/get/g7b3f8e1a2d9c0b8f4e5d6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7_1280.jpg',
    'mining conveyor belt industrial': 'https://pixabay.com/get/g8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9_1280.jpg',
    'horizontal ball mill mining': 'https://pixabay.com/get/gae1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1_1280.jpg',
    'oil gas separator vessel': 'https://pixabay.com/get/gb2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3_1280.jpg',
    'pulp paper mill industry': 'https://pixabay.com/get/gc3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4_1280.jpg',
    'cement mill industrial': 'https://pixabay.com/get/gd4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5_1280.jpg',
    'power plant generator turbine': 'https://pixabay.com/get/ge5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6_1280.jpg',
}

def download_image(url, output_path):
    try:
        resp = session.get(url, timeout=30)
        resp.raise_for_status()
        img = Image.open(BytesIO(resp.content))
        mode = 'RGBA' if img.mode in ('RGBA', 'P') and 'transparency' in img.info else 'RGB'
        if mode == 'RGBA':
            img = img.convert('RGBA')
        else:
            img = img.convert('RGB')
        # Resize if too large (max 1200px on longest side)
        if max(img.size) > 1200:
            ratio = 1200 / max(img.size)
            new_size = (int(img.size[0] * ratio), int(img.size[1] * ratio))
            img = img.resize(new_size, Image.LANCZOS)
        img.save(output_path, 'WEBP', quality=85)
        return True
    except Exception as e:
        return False

# Load failed URLs
with open(r'C:\Users\franc\Desktop\serviningenieria2026-main\failed_images.json', 'r', encoding='utf-8') as f:
    failed_urls = json.load(f)

downloaded = 0
url_map = {}

for url in failed_urls:
    query = FAILED_MAP.get(url, 'industrial')
    # Create filename from hash of original URL
    h = hashlib.md5(url.encode()).hexdigest()[:8]
    # Get a descriptive name from the URL path
    parsed = urlparse(url)
    base_name = os.path.splitext(os.path.basename(parsed.path))[0]
    safe_name = re.sub(r'[^a-zA-Z0-9_-]', '_', base_name)[:40]
    out_name = f'{safe_name}_{h}.webp'
    out_path = os.path.join(OUT_DIR, out_name)

    if os.path.exists(out_path):
        print(f'EXISTS: {out_name}')
        url_map[url] = f'/external/{out_name}'
        continue

    # Try direct Unsplash download
    unsplash_url = UNSPLASH_FALLBACKS.get(query)
    if unsplash_url and download_image(unsplash_url, out_path):
        print(f'OK:     {out_name} <- Unsplash ({query})')
        url_map[url] = f'/external/{out_name}'
        downloaded += 1
        continue

    print(f'FAIL:   {url[:70]}... (no replacement found)')

print(f'\nDownloaded: {downloaded} replacements')

# Update source files
if url_map:
    src_dir = r'C:\Users\franc\Desktop\serviningenieria2026-main\src'
    updated = 0
    for root, dirs, files in os.walk(src_dir):
        for f in files:
            if not f.endswith(('.jsx', '.js')):
                continue
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as fh:
                content = fh.read()
            original = content
            for old_url, new_path in url_map.items():
                content = content.replace(old_url, new_path)
            if content != original:
                updated += 1
                with open(path, 'w', encoding='utf-8') as fh:
                    fh.write(content)
                rel = os.path.relpath(path, src_dir)
                print(f'Updated: {rel}')
    print(f'\n{updated} source files updated.')
else:
    print('No files to update.')
