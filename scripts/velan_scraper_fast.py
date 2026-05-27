#!/usr/bin/env python3
"""
Velan Valve Scraper V3 - SOLO EXTRACCIÓN (Sin traducciones)
Extrae descripciones COMPLETAS de válvulas industriales de velan.com
"""

import requests
from bs4 import BeautifulSoup
import json
import time
from datetime import datetime
import os

# Configuración
BASE_URL = "https://velan.com"
PRODUCTS_URL = "https://velan.com/products/"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}

PRODUCT_LINES = [
    {"slug": "api-6a-and-6d", "name": "API 6A and 6D valves", "categoria_servin": "esclusas-globo-retencion"},
    {"slug": "cast-steel-gate-globe-and-check-valves", "name": "Cast steel gate, globe and check valves", "categoria_servin": "esclusas-globo-retencion"},
    {"slug": "corrosion-resistant-cast-stainless-steel-valves", "name": "Corrosion resistant cast stainless steel valves", "categoria_servin": "esclusas-globo-retencion"},
    {"slug": "digital-solutions", "name": "Digital Solutions", "categoria_servin": "seguridad"},
    {"slug": "dual-plate-check-valves", "name": "Dual plate check valves", "categoria_servin": "esclusas-globo-retencion"},
    {"slug": "hydrofluoric-acid-alkylation-valves", "name": "Hydrofluoric acid alkylation valves", "categoria_servin": "especiales"},
    {"slug": "large-forged-bolted-bonnet-valves", "name": "Large forged bolted bonnet valves", "categoria_servin": "esclusas-globo-retencion"},
    {"slug": "metal-seated-ball-valves", "name": "Metal-seated ball valves", "categoria_servin": "esfericas-mariposas-diafragma"},
    {"slug": "pilot-operated-check-valve", "name": "Pilot-operated check valve", "categoria_servin": "esclusas-globo-retencion"},
    {"slug": "pressure-seal-valves", "name": "Pressure seal valves", "categoria_servin": "esclusas-globo-retencion"},
    {"slug": "resilient-seated-ball-valves", "name": "Resilient-seated ball valves", "categoria_servin": "esfericas-mariposas-diafragma"},
    {"slug": "severe-service-metal-seated-ball-valves", "name": "Severe service metal-seated ball valves", "categoria_servin": "esfericas-mariposas-diafragma"},
    {"slug": "small-forged-valves", "name": "Small forged valves", "categoria_servin": "esclusas-globo-retencion"},
    {"slug": "triple-offset-valves", "name": "Triple offset valves", "categoria_servin": "esfericas-mariposas-diafragma"},
]


def get_page(url, retries=3):
    for attempt in range(retries):
        try:
            response = requests.get(url, headers=HEADERS, timeout=30)
            response.raise_for_status()
            return response.text
        except requests.RequestException as e:
            print(f"    ⚠️ Error intento {attempt + 1}: {e}")
            if attempt < retries - 1:
                time.sleep(2 ** attempt)
    return None


def build_category_url(slug, page=1):
    if page == 1:
        return f"{PRODUCTS_URL}?paged=1&filter_block%5Btaxonomy%5D%5Bproduct-line%5D%5B%5D={slug}"
    return f"{PRODUCTS_URL}page/{page}/?filter_block%5Btaxonomy%5D%5Bproduct-line%5D%5B0%5D={slug}"


def extract_products_from_page(html):
    soup = BeautifulSoup(html, 'html.parser')
    products = []
    articles = soup.find_all('article', class_='post-loop-product')
    
    for article in articles:
        try:
            link = article.find('a')
            if not link:
                continue
            product_url = link.get('href', '')
            img = article.find('img')
            image_url = img.get('src', '') if img else ''
            meta = article.find('div', class_='post-loop-product-meta')
            product_line = meta.get_text(strip=True) if meta else ''
            h3 = article.find('h3')
            name = h3.get_text(strip=True) if h3 else ''
            
            if product_url and name:
                products.append({
                    'url': product_url,
                    'image': image_url,
                    'product_line': product_line,
                    'name': name
                })
        except Exception as e:
            print(f"    ⚠️ Error: {e}")
    return products


def has_next_page(html):
    soup = BeautifulSoup(html, 'html.parser')
    pagination = soup.find('nav', class_='pagination')
    if pagination and pagination.find('a', class_='next'):
        return True
    return False


def extract_product_details(html):
    """Extrae TODOS los detalles sin truncar"""
    soup = BeautifulSoup(html, 'html.parser')
    details = {}
    
    try:
        hero = soup.find('section', class_='product-hero')
        if hero:
            img = hero.find('img')
            if img:
                details['image'] = img.get('src', '')
            h1 = hero.find('h1')
            if h1:
                details['title'] = h1.get_text(strip=True)
        
        desc_section = soup.find('section', class_='description-and-details')
        if desc_section:
            main_div = desc_section.find('div', class_='description-and-details-main')
            if main_div:
                # DESCRIPCIÓN COMPLETA - NO TRUNCAR
                paragraphs = main_div.find_all('p')
                details['description'] = ' '.join([p.get_text(strip=True) for p in paragraphs if p.get_text(strip=True)])
                
                # Todas las características
                features = []
                for ul in main_div.find_all('ul'):
                    for li in ul.find_all('li'):
                        text = li.get_text(strip=True)
                        if text:
                            features.append(text)
                details['features'] = features
            
            aside = desc_section.find('div', class_='description-and-details-aside')
            if aside:
                table = aside.find('table')
                if table:
                    specs = {}
                    for row in table.find_all('tr'):
                        th = row.find('th', scope='row')
                        td = row.find('td')
                        if th and td:
                            specs[th.get_text(strip=True)] = td.get_text(strip=True)
                    details['specifications'] = specs
        
        resources = soup.find('section', class_='resources-display')
        if resources:
            documents = []
            for doc in resources.find_all('article', class_='post-loop-literature')[:5]:
                doc_info = {}
                doc_type = doc.find('div', class_='post-loop-literature-document-type')
                if doc_type:
                    doc_info['type'] = doc_type.get_text(strip=True)
                doc_code = doc.find('div', class_='post-loop-literature-code')
                if doc_code and doc_code.find('span'):
                    doc_info['code'] = doc_code.find('span').get_text(strip=True)
                doc_h3 = doc.find('h3')
                if doc_h3:
                    doc_info['title'] = doc_h3.get_text(strip=True)
                doc_link = doc.find('a')
                if doc_link:
                    doc_info['url'] = doc_link.get('href', '')
                if doc_info:
                    documents.append(doc_info)
            details['documents'] = documents
    except Exception as e:
        print(f"    ⚠️ Error: {e}")
    
    return details


def extract_norms(product_line, specs, features):
    norms = []
    pl = (product_line or "").upper()
    
    for norm in ['API 6A', 'API 6D', 'API 600', 'API 602', 'API 603', 'API 594', 'API 608', 'API 609']:
        if norm in pl:
            norms.append(norm)
    
    if specs:
        txt = ' '.join(str(v) for v in specs.values()).upper()
        if 'ASME' in txt:
            norms.append('ASME B16.34')
        if 'IEC' in txt:
            norms.append('IEC 60534')
        if 'ISO 15848' in txt:
            norms.append('ISO 15848')
    
    if not norms:
        norms = ['ASME B16.34']
    
    return list(set(norms))[:4]


def extract_applications(desc, features, pl):
    apps = []
    text = f"{desc or ''} {' '.join(features or [])} {pl or ''}".lower()
    
    keywords = {
        'oil': 'Oil & Gas', 'gas': 'Oil & Gas', 'refin': 'Refinerías',
        'power': 'Generación de energía', 'nuclear': 'Nuclear', 'cryogen': 'Criogénico',
        'lng': 'GNL', 'water': 'Agua', 'offshore': 'Offshore', 'subsea': 'Subsea',
        'high pressure': 'Alta presión', 'high temperature': 'Alta temperatura',
        'corrosiv': 'Corrosivos', 'abrasiv': 'Abrasivos', 'pipeline': 'Pipelines',
    }
    
    for kw, app in keywords.items():
        if kw in text and app not in apps:
            apps.append(app)
    
    return apps[:4] if apps else ['Oil & Gas', 'Petroquímica']


def process_category(pl_info):
    slug, name, cat = pl_info['slug'], pl_info['name'], pl_info['categoria_servin']
    
    print(f"\n{'='*50}")
    print(f"📁 {name}")
    print(f"{'='*50}")
    
    all_products = []
    page = 1
    
    while page <= 50:
        url = build_category_url(slug, page)
        html = get_page(url)
        if not html:
            break
        
        products = extract_products_from_page(html)
        if not products:
            break
        
        print(f"  Página {page}: {len(products)} productos")
        all_products.extend(products)
        
        if not has_next_page(html):
            break
        page += 1
        time.sleep(0.3)
    
    # Eliminar duplicados
    seen = set()
    unique = [p for p in all_products if not (p['url'] in seen or seen.add(p['url']))]
    print(f"  Total: {len(unique)} productos únicos")
    
    if not unique:
        return None
    
    # Extraer detalles
    formatted = []
    for idx, p in enumerate(unique, 1):
        print(f"    [{idx}/{len(unique)}] {p['name'][:40]}...", end="")
        html = get_page(p['url'])
        if html:
            details = extract_product_details(html)
            desc = details.get('description', '')
            print(f" ✓ ({len(desc)} chars)")
        else:
            details = {}
            print(" ✗")
        
        specs = details.get('specifications', {})
        features = details.get('features', [])
        
        formatted.append({
            'id': idx,
            'categoria': cat,
            'product_line': name,
            'nombre': details.get('title', '') or p.get('name', ''),
            'descripcion': details.get('description', ''),  # COMPLETA
            'normas': extract_norms(p.get('product_line', ''), specs, features),
            'aplicaciones': extract_applications(details.get('description', ''), features, p.get('product_line', '')),
            'imagen': details.get('image', '') or p.get('image', ''),
            'url_velan': p.get('url', ''),
            'especificaciones': specs,
            'caracteristicas': features[:15],
            'documentos': details.get('documents', [])
        })
        time.sleep(0.2)
    
    return {
        'product_line': name,
        'slug': slug,
        'categoria_servin': cat,
        'total_productos': len(formatted),
        'productos': formatted
    }


def main():
    print("="*60)
    print("🔧 VELAN SCRAPER - DESCRIPCIONES COMPLETAS")
    print("="*60)
    print(f"📅 {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    output_dir = os.path.join(os.path.dirname(__file__), 'output_v3')
    os.makedirs(output_dir, exist_ok=True)
    
    all_results = []
    all_products = []
    
    for i, pl in enumerate(PRODUCT_LINES, 1):
        print(f"\n[{i}/{len(PRODUCT_LINES)}] {pl['name']}")
        result = process_category(pl)
        
        if result:
            all_results.append(result)
            all_products.extend(result['productos'])
            
            # Guardar individual
            fname = f"velan_{pl['slug'].replace('-', '_')}.json"
            with open(os.path.join(output_dir, fname), 'w', encoding='utf-8') as f:
                json.dump(result, f, ensure_ascii=False, indent=2)
        
        time.sleep(0.5)
    
    # Reasignar IDs
    for idx, p in enumerate(all_products, 1):
        p['id'] = idx
    
    # JSON completo
    complete = {
        'metadata': {
            'source': 'Velan Corporation',
            'scraped_at': datetime.now().isoformat(),
            'total_productos': len(all_products),
        },
        'valvulas': all_products
    }
    
    with open(os.path.join(output_dir, 'velan_catalogo_completo_v3.json'), 'w', encoding='utf-8') as f:
        json.dump(complete, f, ensure_ascii=False, indent=2)
    
    print(f"\n\n{'='*60}")
    print(f"✅ COMPLETADO: {len(all_products)} productos")
    print(f"📁 Guardado en: {output_dir}")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
