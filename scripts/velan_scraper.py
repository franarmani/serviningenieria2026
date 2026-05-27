#!/usr/bin/env python3
"""
Velan Valve Scraper
Extrae productos de válvulas industriales de velan.com
Genera un JSON para el catálogo de SERVIN Ingeniería
"""

import requests
from bs4 import BeautifulSoup
import json
import time
import re
from urllib.parse import urljoin
from datetime import datetime

# Configuración
BASE_URL = "https://velan.com"
PRODUCTS_URL = "https://velan.com/products/"

# Filtros de Product Line a extraer
PRODUCT_LINE_FILTERS = [
    "api-6a-and-6d",
    "cast-steel-gate-globe-and-check-valves",
    "corrosion-resistant-cast-stainless-steel-valves",
    "digital-solutions",
    "dual-plate-check-valves",
    "hydrofluoric-acid-alkylation-valves",
    "large-forged-bolted-bonnet-valves",
    "metal-seated-ball-valves",
    "pilot-operated-check-valve",
    "pressure-seal-valves",
    "resilient-seated-ball-valves",
    "severe-service-metal-seated-ball-valves",
    "small-forged-valves",
    "triple-offset-valves"
]

# Mapeo de categorías para el catálogo SERVIN
CATEGORY_MAPPING = {
    "api-6a-and-6d": "esclusas-globo-retencion",
    "cast-steel-gate-globe-and-check-valves": "esclusas-globo-retencion",
    "corrosion-resistant-cast-stainless-steel-valves": "esclusas-globo-retencion",
    "digital-solutions": "seguridad",
    "dual-plate-check-valves": "esclusas-globo-retencion",
    "hydrofluoric-acid-alkylation-valves": "especiales",
    "large-forged-bolted-bonnet-valves": "esclusas-globo-retencion",
    "metal-seated-ball-valves": "esfericas-mariposas-diafragma",
    "pilot-operated-check-valve": "esclusas-globo-retencion",
    "pressure-seal-valves": "esclusas-globo-retencion",
    "resilient-seated-ball-valves": "esfericas-mariposas-diafragma",
    "severe-service-metal-seated-ball-valves": "esfericas-mariposas-diafragma",
    "small-forged-valves": "esclusas-globo-retencion",
    "triple-offset-valves": "esfericas-mariposas-diafragma"
}

# Headers para simular un navegador
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Connection": "keep-alive",
}


def build_filter_url(page=1):
    """Construye la URL con todos los filtros de product line"""
    if page == 1:
        base = f"{PRODUCTS_URL}?paged=1"
    else:
        base = f"{PRODUCTS_URL}page/{page}/?"
    
    # Agregar filtros
    filter_params = []
    for i, filter_slug in enumerate(PRODUCT_LINE_FILTERS):
        filter_params.append(f"filter_block%5Btaxonomy%5D%5Bproduct-line%5D%5B{i}%5D={filter_slug}")
    
    return base + "&".join(filter_params) if page == 1 else base + "&".join(filter_params)


def get_page_content(url, retries=3):
    """Obtiene el contenido de una página con reintentos"""
    for attempt in range(retries):
        try:
            response = requests.get(url, headers=HEADERS, timeout=30)
            response.raise_for_status()
            return response.text
        except requests.RequestException as e:
            print(f"  ⚠️ Error en intento {attempt + 1}: {e}")
            if attempt < retries - 1:
                time.sleep(2 ** attempt)  # Backoff exponencial
    return None


def extract_products_from_listing(html):
    """Extrae la lista de productos de una página de listado"""
    soup = BeautifulSoup(html, 'html.parser')
    products = []
    
    # Buscar todos los artículos de productos
    articles = soup.find_all('article', class_='post-loop-product')
    
    for article in articles:
        try:
            # Extraer enlace
            link_elem = article.find('a')
            if not link_elem:
                continue
            
            product_url = link_elem.get('href', '')
            
            # Extraer imagen
            img_elem = article.find('img')
            image_url = img_elem.get('src', '') if img_elem else ''
            
            # Extraer categoría/product line
            meta_elem = article.find('div', class_='post-loop-product-meta')
            product_line = meta_elem.get_text(strip=True) if meta_elem else ''
            
            # Extraer nombre
            h3_elem = article.find('h3')
            name = h3_elem.get_text(strip=True) if h3_elem else ''
            
            products.append({
                'url': product_url,
                'image': image_url,
                'product_line': product_line,
                'name': name
            })
            
        except Exception as e:
            print(f"  ⚠️ Error extrayendo producto: {e}")
            continue
    
    return products


def check_has_next_page(html):
    """Verifica si hay más páginas de productos"""
    soup = BeautifulSoup(html, 'html.parser')
    
    # Buscar paginación
    pagination = soup.find('nav', class_='pagination') or soup.find('div', class_='pagination')
    if pagination:
        next_link = pagination.find('a', class_='next') or pagination.find('a', text=re.compile(r'Next|→|»'))
        return next_link is not None
    
    # Alternativa: buscar link de siguiente página
    next_link = soup.find('a', class_='next')
    return next_link is not None


def extract_product_details(html, product_url):
    """Extrae los detalles completos de un producto individual"""
    soup = BeautifulSoup(html, 'html.parser')
    details = {}
    
    try:
        # Imagen principal
        hero_img = soup.find('section', class_='product-hero')
        if hero_img:
            img = hero_img.find('img')
            if img:
                details['image'] = img.get('src', '')
                details['image_srcset'] = img.get('srcset', '')
        
        # Título del producto
        h1 = soup.find('h1')
        details['title'] = h1.get_text(strip=True) if h1 else ''
        
        # Product Line y Product Type
        dl = soup.find('dl')
        if dl:
            dts = dl.find_all('dt')
            dds = dl.find_all('dd')
            
            for dt, dd in zip(dts, dds):
                key = dt.get_text(strip=True).lower().replace(' ', '_')
                # Extraer todos los li dentro del dd
                li_items = dd.find_all('li')
                if li_items:
                    values = [li.get_text(strip=True) for li in li_items]
                    details[key] = values if len(values) > 1 else values[0]
                else:
                    details[key] = dd.get_text(strip=True)
        
        # Features & Benefits (descripción)
        desc_section = soup.find('section', class_='description-and-details')
        if desc_section:
            main_div = desc_section.find('div', class_='description-and-details-main')
            if main_div:
                # Extraer párrafos
                paragraphs = main_div.find_all('p')
                details['description'] = ' '.join([p.get_text(strip=True) for p in paragraphs])
                
                # Extraer características (lista ul)
                features_ul = main_div.find('ul')
                if features_ul:
                    features = [li.get_text(strip=True) for li in features_ul.find_all('li')]
                    details['features'] = features
        
        # Product Details (tabla de especificaciones)
        specs_table = soup.find('table')
        if specs_table:
            specs = {}
            rows = specs_table.find_all('tr')
            for row in rows:
                th = row.find('th', scope='row')
                td = row.find('td')
                if th and td:
                    spec_name = th.get_text(strip=True)
                    spec_value = td.get_text(strip=True)
                    specs[spec_name] = spec_value
            details['specifications'] = specs
        
        # Documentos relacionados
        resources_section = soup.find('section', class_='resources-display')
        if resources_section:
            documents = []
            doc_articles = resources_section.find_all('article', class_='post-loop-literature')
            for doc in doc_articles:
                doc_info = {}
                
                # Tipo de documento
                doc_type = doc.find('div', class_='post-loop-literature-document-type')
                if doc_type:
                    doc_info['type'] = doc_type.get_text(strip=True)
                
                # Código
                doc_code = doc.find('div', class_='post-loop-literature-code')
                if doc_code:
                    code_span = doc_code.find('span')
                    doc_info['code'] = code_span.get_text(strip=True) if code_span else ''
                
                # Título
                doc_title = doc.find('h3')
                if doc_title:
                    doc_info['title'] = doc_title.get_text(strip=True)
                
                # Link
                doc_link = doc.find('a')
                if doc_link:
                    doc_info['url'] = doc_link.get('href', '')
                
                if doc_info:
                    documents.append(doc_info)
            
            details['documents'] = documents
        
    except Exception as e:
        print(f"  ⚠️ Error extrayendo detalles: {e}")
    
    return details


def determine_category(product_line):
    """Determina la categoría SERVIN basada en el product line de Velan"""
    product_line_lower = product_line.lower()
    
    # Mapeo basado en palabras clave
    if any(keyword in product_line_lower for keyword in ['gate', 'globe', 'check', 'dual plate', 'forged', 'pressure seal', 'api 6']):
        return 'esclusas-globo-retencion'
    elif any(keyword in product_line_lower for keyword in ['ball', 'triple offset', 'butterfly']):
        return 'esfericas-mariposas-diafragma'
    elif any(keyword in product_line_lower for keyword in ['hf', 'acid', 'hydrofluoric', 'coker']):
        return 'especiales'
    elif any(keyword in product_line_lower for keyword in ['safety', 'control', 'digital']):
        return 'seguridad'
    
    return 'esclusas-globo-retencion'  # Default


def extract_norms_from_specs(specifications, product_line):
    """Extrae normas aplicables de las especificaciones"""
    norms = []
    
    # Buscar en el product line
    product_line_upper = product_line.upper()
    if 'API 6A' in product_line_upper or 'API 6D' in product_line_upper:
        norms.extend(['API 6A', 'API 6D'])
    if 'API 600' in product_line_upper:
        norms.append('API 600')
    if 'API 602' in product_line_upper:
        norms.append('API 602')
    if 'API 603' in product_line_upper:
        norms.append('API 603')
    
    # Buscar ASME en especificaciones
    if specifications:
        for key, value in specifications.items():
            if 'ASME' in str(value).upper():
                if 'ASME B16.34' not in norms:
                    norms.append('ASME B16.34')
            if 'CLASS' in key.upper() or 'PRESSURE' in key.upper():
                if 'ASME B16.34' not in norms:
                    norms.append('ASME B16.34')
    
    # Normas por defecto según tipo
    if not norms:
        if 'gate' in product_line.lower() or 'globe' in product_line.lower():
            norms = ['API 600', 'ASME B16.34']
        elif 'ball' in product_line.lower():
            norms = ['API 608', 'ASME B16.34']
        elif 'check' in product_line.lower():
            norms = ['API 594', 'ASME B16.34']
        elif 'triple offset' in product_line.lower():
            norms = ['API 609', 'ASME B16.34']
        else:
            norms = ['ASME B16.34']
    
    return norms


def extract_applications(description, features, product_line):
    """Extrae aplicaciones del producto"""
    applications = []
    
    text = f"{description} {' '.join(features or [])} {product_line}".lower()
    
    # Mapeo de palabras clave a aplicaciones
    keyword_apps = {
        'oil': 'Oil & Gas',
        'gas': 'Oil & Gas',
        'refiner': 'Refinerías',
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
        'paper': 'Celulosa y papel',
        'marine': 'Marina',
        'offshore': 'Offshore',
        'high pressure': 'Alta presión',
        'high temperature': 'Alta temperatura',
        'severe service': 'Servicios severos',
        'corrosive': 'Corrosivos',
        'abrasive': 'Abrasivos',
        'hf': 'Alquilación HF',
        'hydrofluoric': 'Alquilación HF',
        'coker': 'Coquización',
    }
    
    for keyword, app in keyword_apps.items():
        if keyword in text and app not in applications:
            applications.append(app)
    
    # Aplicaciones por defecto si no se encontraron
    if not applications:
        applications = ['Oil & Gas', 'Petroquímica', 'Proceso']
    
    return applications[:4]  # Máximo 4 aplicaciones


def format_for_servin_catalog(products_with_details):
    """Formatea los productos para el catálogo de SERVIN"""
    formatted_products = []
    
    for idx, product in enumerate(products_with_details, start=1):
        details = product.get('details', {})
        
        # Determinar categoría
        product_line = product.get('product_line', '') or details.get('product_line', '')
        categoria = determine_category(product_line)
        
        # Extraer normas
        specifications = details.get('specifications', {})
        normas = extract_norms_from_specs(specifications, product_line)
        
        # Extraer aplicaciones
        description = details.get('description', '')
        features = details.get('features', [])
        aplicaciones = extract_applications(description, features, product_line)
        
        # Construir descripción corta
        desc_short = description[:200] + '...' if len(description) > 200 else description
        if not desc_short:
            desc_short = f"Válvula {product_line} de alta calidad para aplicaciones industriales."
        
        formatted_product = {
            'id': idx,
            'categoria': categoria,
            'nombre': product.get('name', '') or details.get('title', ''),
            'descripcion': desc_short,
            'normas': normas,
            'aplicaciones': aplicaciones,
            'imagen': product.get('image', '') or details.get('image', ''),
            'url_velan': product.get('url', ''),
            'product_line': product_line,
            'especificaciones': specifications,
            'caracteristicas': features,
            'documentos': details.get('documents', [])
        }
        
        formatted_products.append(formatted_product)
    
    return formatted_products


def main():
    """Función principal del scraper"""
    print("=" * 60)
    print("🔧 VELAN VALVE SCRAPER para SERVIN Ingeniería")
    print("=" * 60)
    print(f"📅 Fecha: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print()
    
    all_products = []
    page = 1
    max_pages = 20  # Límite de seguridad
    
    print("📋 Paso 1: Extrayendo listado de productos...")
    print("-" * 40)
    
    while page <= max_pages:
        url = build_filter_url(page)
        print(f"\n📄 Página {page}: {url[:80]}...")
        
        html = get_page_content(url)
        if not html:
            print(f"  ❌ No se pudo obtener la página {page}")
            break
        
        products = extract_products_from_listing(html)
        
        if not products:
            print(f"  ℹ️ No se encontraron más productos en página {page}")
            break
        
        print(f"  ✅ Encontrados {len(products)} productos")
        all_products.extend(products)
        
        # Verificar si hay más páginas
        if not check_has_next_page(html):
            print(f"  ℹ️ No hay más páginas después de {page}")
            break
        
        page += 1
        time.sleep(1)  # Pausa entre páginas
    
    print(f"\n📊 Total productos encontrados: {len(all_products)}")
    
    # Eliminar duplicados por URL
    seen_urls = set()
    unique_products = []
    for product in all_products:
        if product['url'] not in seen_urls:
            seen_urls.add(product['url'])
            unique_products.append(product)
    
    print(f"📊 Productos únicos: {len(unique_products)}")
    
    print("\n📋 Paso 2: Extrayendo detalles de cada producto...")
    print("-" * 40)
    
    products_with_details = []
    total = len(unique_products)
    
    for idx, product in enumerate(unique_products, start=1):
        print(f"\n[{idx}/{total}] {product['name'][:50]}...")
        
        if not product['url']:
            print("  ⚠️ Sin URL, saltando...")
            products_with_details.append(product)
            continue
        
        html = get_page_content(product['url'])
        if html:
            details = extract_product_details(html, product['url'])
            product['details'] = details
            print(f"  ✅ Detalles extraídos")
        else:
            print(f"  ❌ Error obteniendo detalles")
            product['details'] = {}
        
        products_with_details.append(product)
        time.sleep(0.5)  # Pausa entre productos
    
    print("\n📋 Paso 3: Formateando para catálogo SERVIN...")
    print("-" * 40)
    
    # Formatear para el catálogo
    formatted_products = format_for_servin_catalog(products_with_details)
    
    # Crear estructura final del JSON
    output = {
        'metadata': {
            'source': 'Velan Corporation',
            'source_url': 'https://velan.com',
            'scraped_at': datetime.now().isoformat(),
            'total_products': len(formatted_products),
            'product_lines': PRODUCT_LINE_FILTERS
        },
        'categorias': [
            {'id': 'todos', 'nombre': 'Todos', 'nombreCorto': 'Todos'},
            {'id': 'esclusas-globo-retencion', 'nombre': 'Esclusas / Globo / Retención', 'nombreCorto': 'Esclusas'},
            {'id': 'esfericas-mariposas-diafragma', 'nombre': 'Esféricas / Mariposas / Diafragma', 'nombreCorto': 'Esféricas'},
            {'id': 'especiales', 'nombre': 'Servicios Especiales', 'nombreCorto': 'Especiales'},
            {'id': 'seguridad', 'nombre': 'Seguridad y Automatización', 'nombreCorto': 'Seguridad'}
        ],
        'valvulas': formatted_products
    }
    
    # Guardar JSON
    output_file = 'velan_valvulas_catalogo.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    
    print(f"\n✅ JSON guardado: {output_file}")
    
    # También guardar versión simplificada para React
    react_output = {
        'valvulas': [
            {
                'id': p['id'],
                'categoria': p['categoria'],
                'nombre': p['nombre'],
                'descripcion': p['descripcion'],
                'normas': p['normas'],
                'aplicaciones': p['aplicaciones'],
                'imagen': p['imagen']
            }
            for p in formatted_products
        ]
    }
    
    react_file = 'velan_valvulas_react.json'
    with open(react_file, 'w', encoding='utf-8') as f:
        json.dump(react_output, f, ensure_ascii=False, indent=2)
    
    print(f"✅ JSON para React guardado: {react_file}")
    
    # Resumen por categoría
    print("\n📊 Resumen por categoría:")
    print("-" * 40)
    cat_counts = {}
    for p in formatted_products:
        cat = p['categoria']
        cat_counts[cat] = cat_counts.get(cat, 0) + 1
    
    for cat, count in sorted(cat_counts.items()):
        print(f"  • {cat}: {count} productos")
    
    print("\n" + "=" * 60)
    print("🎉 ¡Scraping completado exitosamente!")
    print("=" * 60)
    
    return output


if __name__ == "__main__":
    main()
