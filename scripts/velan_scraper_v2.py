#!/usr/bin/env python3
"""
Velan Valve Scraper V2 - Versión Completa y Separada por Categoría
Extrae productos de válvulas industriales de velan.com
Genera JSONs separados para cada categoría de Product Line
"""

import requests
from bs4 import BeautifulSoup
import json
import time
import re
from datetime import datetime
import os

# Configuración
BASE_URL = "https://velan.com"
PRODUCTS_URL = "https://velan.com/products/"

# Headers para simular navegador
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Connection": "keep-alive",
    "Upgrade-Insecure-Requests": "1",
}

# Categorías de Product Line a extraer (slug y nombre legible)
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
    """Obtiene el contenido HTML de una página con reintentos"""
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
    """Construye la URL para una categoría específica"""
    if page == 1:
        return f"{PRODUCTS_URL}?paged=1&filter_block%5Btaxonomy%5D%5Bproduct-line%5D%5B%5D={slug}"
    else:
        return f"{PRODUCTS_URL}page/{page}/?filter_block%5Btaxonomy%5D%5Bproduct-line%5D%5B0%5D={slug}"


def extract_products_from_page(html):
    """Extrae lista de productos de una página de listado"""
    soup = BeautifulSoup(html, 'html.parser')
    products = []
    
    # Buscar artículos de productos
    articles = soup.find_all('article', class_='post-loop-product')
    
    for article in articles:
        try:
            link = article.find('a')
            if not link:
                continue
            
            product_url = link.get('href', '')
            
            # Imagen
            img = article.find('img')
            image_url = img.get('src', '') if img else ''
            
            # Product Line (categoría)
            meta = article.find('div', class_='post-loop-product-meta')
            product_line = meta.get_text(strip=True) if meta else ''
            
            # Nombre
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
            print(f"    ⚠️ Error extrayendo producto: {e}")
    
    return products


def has_next_page(html):
    """Verifica si existe una página siguiente"""
    soup = BeautifulSoup(html, 'html.parser')
    
    # Buscar paginación
    pagination = soup.find('nav', class_='pagination')
    if pagination:
        next_link = pagination.find('a', class_='next')
        if next_link:
            return True
    
    # Buscar enlace "Next"
    next_links = soup.find_all('a', class_='next')
    for link in next_links:
        if 'page-numbers' in link.get('class', []):
            return True
    
    return False


def extract_product_details(html):
    """Extrae detalles completos de la página de un producto"""
    soup = BeautifulSoup(html, 'html.parser')
    details = {}
    
    try:
        # ===== SECCIÓN HERO =====
        hero = soup.find('section', class_='product-hero')
        if hero:
            # Imagen principal
            img = hero.find('img')
            if img:
                details['image'] = img.get('src', '')
                details['image_alt'] = img.get('alt', '')
            
            # Título H1
            h1 = hero.find('h1')
            if h1:
                details['title'] = h1.get_text(strip=True)
            
            # Product Line y Product Type desde dl/dt/dd
            dl = hero.find('dl')
            if dl:
                dts = dl.find_all('dt')
                dds = dl.find_all('dd')
                for dt, dd in zip(dts, dds):
                    key = dt.get_text(strip=True).lower().replace(' ', '_')
                    lis = dd.find_all('li')
                    if lis:
                        values = [li.get_text(strip=True) for li in lis]
                        details[key] = values[0] if len(values) == 1 else values
                    else:
                        details[key] = dd.get_text(strip=True)
        
        # ===== SECCIÓN DESCRIPCIÓN Y DETALLES =====
        desc_section = soup.find('section', class_='description-and-details')
        if desc_section:
            # Descripción principal
            main_div = desc_section.find('div', class_='description-and-details-main')
            if main_div:
                # Párrafos de descripción
                paragraphs = main_div.find_all('p')
                desc_text = ' '.join([p.get_text(strip=True) for p in paragraphs if p.get_text(strip=True)])
                details['description'] = desc_text
                
                # Características (listas ul)
                all_features = []
                uls = main_div.find_all('ul')
                for ul in uls:
                    lis = ul.find_all('li')
                    for li in lis:
                        text = li.get_text(strip=True)
                        if text:
                            all_features.append(text)
                if all_features:
                    details['features'] = all_features
            
            # Tabla de especificaciones
            aside = desc_section.find('div', class_='description-and-details-aside')
            if aside:
                table = aside.find('table')
                if table:
                    specs = {}
                    rows = table.find_all('tr')
                    for row in rows:
                        th = row.find('th', scope='row')
                        td = row.find('td')
                        if th and td:
                            spec_name = th.get_text(strip=True)
                            spec_value = td.get_text(strip=True)
                            specs[spec_name] = spec_value
                    if specs:
                        details['specifications'] = specs
        
        # ===== SECCIÓN DOCUMENTOS =====
        resources = soup.find('section', class_='resources-display')
        if resources:
            documents = []
            doc_articles = resources.find_all('article', class_='post-loop-literature')
            for doc in doc_articles[:5]:  # Limitar a 5 documentos
                doc_info = {}
                
                # Tipo
                doc_type = doc.find('div', class_='post-loop-literature-document-type')
                if doc_type:
                    doc_info['type'] = doc_type.get_text(strip=True)
                
                # Código
                doc_code = doc.find('div', class_='post-loop-literature-code')
                if doc_code:
                    span = doc_code.find('span')
                    if span:
                        doc_info['code'] = span.get_text(strip=True)
                
                # Título
                doc_h3 = doc.find('h3')
                if doc_h3:
                    doc_info['title'] = doc_h3.get_text(strip=True)
                
                # URL
                doc_link = doc.find('a')
                if doc_link:
                    doc_info['url'] = doc_link.get('href', '')
                
                if doc_info:
                    documents.append(doc_info)
            
            if documents:
                details['documents'] = documents
    
    except Exception as e:
        print(f"    ⚠️ Error extrayendo detalles: {e}")
    
    return details


def extract_norms(product_line, specs, features):
    """Extrae normas aplicables basadas en el contenido"""
    norms = []
    
    # Buscar en product_line
    pl_upper = product_line.upper() if product_line else ""
    if 'API 6A' in pl_upper or 'API 6D' in pl_upper:
        norms.extend(['API 6A', 'API 6D'])
    if 'API 600' in pl_upper:
        norms.append('API 600')
    if 'API 602' in pl_upper:
        norms.append('API 602')
    if 'API 603' in pl_upper:
        norms.append('API 603')
    if 'API 594' in pl_upper:
        norms.append('API 594')
    if 'API 608' in pl_upper:
        norms.append('API 608')
    if 'API 609' in pl_upper:
        norms.append('API 609')
    
    # Buscar en especificaciones
    if specs:
        specs_text = ' '.join(str(v) for v in specs.values()).upper()
        if 'ASME' in specs_text and 'ASME B16.34' not in norms:
            norms.append('ASME B16.34')
        if 'API 6D' in specs_text and 'API 6D' not in norms:
            norms.append('API 6D')
        if 'IEC' in specs_text:
            norms.append('IEC 60534')
    
    # Buscar en features
    if features:
        features_text = ' '.join(features).upper()
        if 'API 6FA' in features_text or 'API 607' in features_text:
            norms.append('API 6FA/607')
        if 'ISO15848' in features_text or 'ISO 15848' in features_text:
            norms.append('ISO 15848')
        if 'SIL' in features_text:
            norms.append('SIL 3')
    
    # Default si no hay norms
    if not norms:
        if 'ball' in product_line.lower():
            norms = ['API 608', 'ASME B16.34']
        elif 'gate' in product_line.lower() or 'globe' in product_line.lower():
            norms = ['API 600', 'ASME B16.34']
        elif 'check' in product_line.lower():
            norms = ['API 594', 'ASME B16.34']
        else:
            norms = ['ASME B16.34']
    
    return list(set(norms))[:4]


def extract_applications(description, features, product_line):
    """Extrae aplicaciones del producto"""
    applications = []
    
    text = f"{description or ''} {' '.join(features or [])} {product_line or ''}".lower()
    
    app_keywords = {
        'oil': 'Oil & Gas',
        'gas': 'Oil & Gas',
        'refin': 'Refinerías',
        'petrochem': 'Petroquímica',
        'power': 'Generación de energía',
        'nuclear': 'Nuclear',
        'cryogen': 'Criogénico',
        'lng': 'GNL',
        'steam': 'Vapor',
        'water': 'Agua',
        'chemical': 'Químicos',
        'mining': 'Minería',
        'pulp': 'Celulosa y papel',
        'marine': 'Marina',
        'offshore': 'Offshore',
        'subsea': 'Subsea',
        'high pressure': 'Alta presión',
        'high temperature': 'Alta temperatura',
        'severe': 'Servicios severos',
        'corrosiv': 'Corrosivos',
        'abrasiv': 'Abrasivos',
        'hf': 'Alquilación HF',
        'hydrofluoric': 'Alquilación HF',
        'coker': 'Coquización',
        'pipeline': 'Pipelines',
    }
    
    for keyword, app in app_keywords.items():
        if keyword in text and app not in applications:
            applications.append(app)
    
    if not applications:
        applications = ['Oil & Gas', 'Petroquímica', 'Proceso']
    
    return applications[:4]


def process_category(product_line_info):
    """Procesa una categoría completa de productos"""
    slug = product_line_info['slug']
    name = product_line_info['name']
    categoria_servin = product_line_info['categoria_servin']
    
    print(f"\n{'='*60}")
    print(f"📁 Procesando: {name}")
    print(f"   Slug: {slug}")
    print(f"{'='*60}")
    
    all_products = []
    page = 1
    max_pages = 50  # Límite de seguridad
    
    # Paso 1: Obtener todos los productos del listado
    print(f"\n  📋 Paso 1: Extrayendo listado de productos...")
    
    while page <= max_pages:
        url = build_category_url(slug, page)
        print(f"\n    📄 Página {page}...")
        
        html = get_page(url)
        if not html:
            print(f"    ❌ Error obteniendo página {page}")
            break
        
        products = extract_products_from_page(html)
        
        if not products:
            print(f"    ℹ️ No hay productos en página {page}")
            break
        
        print(f"    ✅ {len(products)} productos encontrados")
        all_products.extend(products)
        
        if not has_next_page(html):
            print(f"    ℹ️ Última página: {page}")
            break
        
        page += 1
        time.sleep(0.5)
    
    print(f"\n  📊 Total productos en listado: {len(all_products)}")
    
    if not all_products:
        return None
    
    # Eliminar duplicados
    seen_urls = set()
    unique_products = []
    for p in all_products:
        if p['url'] not in seen_urls:
            seen_urls.add(p['url'])
            unique_products.append(p)
    
    print(f"  📊 Productos únicos: {len(unique_products)}")
    
    # Paso 2: Obtener detalles de cada producto
    print(f"\n  📋 Paso 2: Extrayendo detalles de productos...")
    
    products_with_details = []
    total = len(unique_products)
    
    for idx, product in enumerate(unique_products, 1):
        print(f"\n    [{idx}/{total}] {product['name'][:45]}...")
        
        html = get_page(product['url'])
        if html:
            details = extract_product_details(html)
            product['details'] = details
            print(f"      ✅ Detalles extraídos")
        else:
            product['details'] = {}
            print(f"      ❌ Error")
        
        products_with_details.append(product)
        time.sleep(0.3)
    
    # Paso 3: Formatear productos
    print(f"\n  📋 Paso 3: Formateando productos...")
    
    formatted = []
    for idx, p in enumerate(products_with_details, 1):
        details = p.get('details', {})
        
        # Descripción
        desc = details.get('description', '')
        if not desc:
            desc = f"Válvula {name} de alta calidad para aplicaciones industriales."
        desc_short = desc[:250] + '...' if len(desc) > 250 else desc
        
        # Especificaciones
        specs = details.get('specifications', {})
        
        # Features
        features = details.get('features', [])
        
        # Normas
        norms = extract_norms(p.get('product_line', ''), specs, features)
        
        # Aplicaciones
        apps = extract_applications(desc, features, p.get('product_line', ''))
        
        formatted_product = {
            'id': idx,
            'categoria': categoria_servin,
            'product_line': name,
            'nombre': details.get('title', '') or p.get('name', ''),
            'descripcion': desc_short,
            'normas': norms,
            'aplicaciones': apps,
            'imagen': details.get('image', '') or p.get('image', ''),
            'url_velan': p.get('url', ''),
            'especificaciones': specs,
            'caracteristicas': features[:10] if features else [],
            'documentos': details.get('documents', [])
        }
        
        formatted.append(formatted_product)
    
    return {
        'product_line': name,
        'slug': slug,
        'categoria_servin': categoria_servin,
        'total_productos': len(formatted),
        'productos': formatted
    }


def main():
    """Función principal"""
    print("=" * 70)
    print("🔧 VELAN VALVE SCRAPER V2 - Extracción Completa por Categoría")
    print("=" * 70)
    print(f"📅 Fecha: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"📁 Categorías a procesar: {len(PRODUCT_LINES)}")
    
    # Crear directorio de salida
    output_dir = os.path.join(os.path.dirname(__file__), 'output')
    os.makedirs(output_dir, exist_ok=True)
    
    all_results = []
    all_products = []
    
    # Procesar cada categoría
    for i, pl_info in enumerate(PRODUCT_LINES, 1):
        print(f"\n\n{'#'*70}")
        print(f"# CATEGORÍA {i}/{len(PRODUCT_LINES)}: {pl_info['name']}")
        print(f"{'#'*70}")
        
        result = process_category(pl_info)
        
        if result:
            all_results.append(result)
            all_products.extend(result['productos'])
            
            # Guardar JSON individual para esta categoría
            filename = f"velan_{pl_info['slug'].replace('-', '_')}.json"
            filepath = os.path.join(output_dir, filename)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(result, f, ensure_ascii=False, indent=2)
            
            print(f"\n  💾 Guardado: {filename}")
            print(f"     Productos: {result['total_productos']}")
        
        # Pausa entre categorías
        time.sleep(1)
    
    # Reasignar IDs únicos globales
    print(f"\n\n{'='*70}")
    print("📋 Generando archivos finales...")
    print(f"{'='*70}")
    
    for idx, p in enumerate(all_products, 1):
        p['id'] = idx
    
    # JSON completo con todos los productos
    complete_output = {
        'metadata': {
            'source': 'Velan Corporation',
            'source_url': 'https://velan.com',
            'scraped_at': datetime.now().isoformat(),
            'total_productos': len(all_products),
            'categorias_procesadas': len(all_results)
        },
        'categorias_servin': [
            {'id': 'todos', 'nombre': 'Todos', 'nombreCorto': 'Todos'},
            {'id': 'esclusas-globo-retencion', 'nombre': 'Esclusas / Globo / Retención', 'nombreCorto': 'Esclusas'},
            {'id': 'esfericas-mariposas-diafragma', 'nombre': 'Esféricas / Mariposas / Diafragma', 'nombreCorto': 'Esféricas'},
            {'id': 'especiales', 'nombre': 'Servicios Especiales', 'nombreCorto': 'Especiales'},
            {'id': 'seguridad', 'nombre': 'Seguridad y Automatización', 'nombreCorto': 'Seguridad'}
        ],
        'product_lines': [r['product_line'] for r in all_results],
        'valvulas': all_products
    }
    
    # Guardar JSON completo
    complete_path = os.path.join(output_dir, 'velan_catalogo_completo.json')
    with open(complete_path, 'w', encoding='utf-8') as f:
        json.dump(complete_output, f, ensure_ascii=False, indent=2)
    print(f"\n✅ Catálogo completo: velan_catalogo_completo.json")
    
    # JSON simplificado para React
    react_output = {
        'valvulas': [
            {
                'id': p['id'],
                'categoria': p['categoria'],
                'product_line': p['product_line'],
                'nombre': p['nombre'],
                'descripcion': p['descripcion'],
                'normas': p['normas'],
                'aplicaciones': p['aplicaciones'],
                'imagen': p['imagen']
            }
            for p in all_products
        ]
    }
    
    react_path = os.path.join(output_dir, 'velan_react.json')
    with open(react_path, 'w', encoding='utf-8') as f:
        json.dump(react_output, f, ensure_ascii=False, indent=2)
    print(f"✅ JSON para React: velan_react.json")
    
    # Resumen final
    print(f"\n\n{'='*70}")
    print("📊 RESUMEN FINAL")
    print(f"{'='*70}")
    print(f"\n  Total productos extraídos: {len(all_products)}")
    print(f"\n  Por Product Line:")
    for r in all_results:
        print(f"    • {r['product_line']}: {r['total_productos']} productos")
    
    print(f"\n  Por Categoría SERVIN:")
    cat_counts = {}
    for p in all_products:
        cat = p['categoria']
        cat_counts[cat] = cat_counts.get(cat, 0) + 1
    for cat, count in sorted(cat_counts.items()):
        print(f"    • {cat}: {count} productos")
    
    print(f"\n  Archivos generados en: {output_dir}")
    print(f"\n{'='*70}")
    print("🎉 ¡Extracción completada exitosamente!")
    print(f"{'='*70}")


if __name__ == "__main__":
    main()
