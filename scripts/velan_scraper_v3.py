#!/usr/bin/env python3
"""
Velan Valve Scraper V3 - Con Descripciones Completas y Traducciones al Español
Extrae productos de válvulas industriales de velan.com
Genera JSONs con información completa en inglés y español
"""

import requests
from bs4 import BeautifulSoup
import json
import time
import re
from datetime import datetime
import os

# Intentar importar deep-translator para traducciones
try:
    from deep_translator import GoogleTranslator
    TRANSLATOR_AVAILABLE = True
except ImportError:
    TRANSLATOR_AVAILABLE = False
    print("⚠️ deep-translator no instalado. Ejecute: pip install deep-translator")

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

# Categorías de Product Line a extraer
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

# Diccionario de traducciones técnicas comunes
TECHNICAL_TRANSLATIONS = {
    # Tipos de válvulas
    "ball valve": "válvula esférica",
    "gate valve": "válvula de compuerta",
    "globe valve": "válvula de globo",
    "check valve": "válvula de retención",
    "butterfly valve": "válvula mariposa",
    "control valve": "válvula de control",
    "safety valve": "válvula de seguridad",
    "relief valve": "válvula de alivio",
    "plug valve": "válvula de tapón",
    
    # Términos técnicos
    "trunnion": "muñón",
    "seat": "asiento",
    "stem": "vástago",
    "body": "cuerpo",
    "bonnet": "tapa/bonete",
    "flange": "brida",
    "welded": "soldado",
    "bolted": "atornillado",
    "forged": "forjado",
    "cast": "fundido",
    "stainless steel": "acero inoxidable",
    "carbon steel": "acero al carbono",
    "pressure": "presión",
    "temperature": "temperatura",
    "size range": "rango de tamaños",
    "pressure class": "clase de presión",
    "end connections": "conexiones finales",
    "face-to-face": "cara a cara",
    
    # Aplicaciones
    "oil & gas": "petróleo y gas",
    "power generation": "generación de energía",
    "petrochemical": "petroquímica",
    "refinery": "refinería",
    "cryogenic": "criogénico",
    "high pressure": "alta presión",
    "high temperature": "alta temperatura",
    "severe service": "servicio severo",
    "offshore": "costa afuera",
    "subsea": "submarino",
    "pipeline": "tubería/oleoducto",
    
    # Características
    "anti-static": "antiestático",
    "blowout proof": "a prueba de expulsión",
    "fire safe": "seguro contra incendios",
    "fugitive emissions": "emisiones fugitivas",
    "bidirectional": "bidireccional",
    "tight shutoff": "cierre hermético",
    "low torque": "bajo torque",
}


def translate_text(text, target='es'):
    """Traduce texto al español usando Google Translator"""
    if not text or not TRANSLATOR_AVAILABLE:
        return text
    
    try:
        # Dividir textos largos en chunks
        if len(text) > 4500:
            chunks = [text[i:i+4500] for i in range(0, len(text), 4500)]
            translated_chunks = []
            for chunk in chunks:
                translator = GoogleTranslator(source='en', target=target)
                translated_chunks.append(translator.translate(chunk))
                time.sleep(0.2)
            return ' '.join(translated_chunks)
        else:
            translator = GoogleTranslator(source='en', target=target)
            return translator.translate(text)
    except Exception as e:
        print(f"      ⚠️ Error traduciendo: {e}")
        return text


def translate_list(items, target='es'):
    """Traduce una lista de strings"""
    if not items or not TRANSLATOR_AVAILABLE:
        return items
    
    translated = []
    for item in items:
        translated.append(translate_text(item, target))
        time.sleep(0.1)
    return translated


def translate_dict(d, target='es'):
    """Traduce los valores de un diccionario"""
    if not d or not TRANSLATOR_AVAILABLE:
        return d
    
    translated = {}
    for key, value in d.items():
        if isinstance(value, str):
            translated[key] = translate_text(value, target)
        else:
            translated[key] = value
        time.sleep(0.1)
    return translated


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
            print(f"    ⚠️ Error extrayendo producto: {e}")
    
    return products


def has_next_page(html):
    """Verifica si existe una página siguiente"""
    soup = BeautifulSoup(html, 'html.parser')
    
    pagination = soup.find('nav', class_='pagination')
    if pagination:
        next_link = pagination.find('a', class_='next')
        if next_link:
            return True
    
    next_links = soup.find_all('a', class_='next')
    for link in next_links:
        if 'page-numbers' in link.get('class', []):
            return True
    
    return False


def extract_product_details(html):
    """Extrae detalles COMPLETOS de la página de un producto (sin truncar)"""
    soup = BeautifulSoup(html, 'html.parser')
    details = {}
    
    try:
        # ===== SECCIÓN HERO =====
        hero = soup.find('section', class_='product-hero')
        if hero:
            img = hero.find('img')
            if img:
                details['image'] = img.get('src', '')
                details['image_alt'] = img.get('alt', '')
            
            h1 = hero.find('h1')
            if h1:
                details['title'] = h1.get_text(strip=True)
            
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
            main_div = desc_section.find('div', class_='description-and-details-main')
            if main_div:
                # Extraer DESCRIPCIÓN COMPLETA (sin truncar)
                paragraphs = main_div.find_all('p')
                desc_text = ' '.join([p.get_text(strip=True) for p in paragraphs if p.get_text(strip=True)])
                # NO TRUNCAMOS - guardamos descripción completa
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
            for doc in doc_articles[:5]:
                doc_info = {}
                
                doc_type = doc.find('div', class_='post-loop-literature-document-type')
                if doc_type:
                    doc_info['type'] = doc_type.get_text(strip=True)
                
                doc_code = doc.find('div', class_='post-loop-literature-code')
                if doc_code:
                    span = doc_code.find('span')
                    if span:
                        doc_info['code'] = span.get_text(strip=True)
                
                doc_h3 = doc.find('h3')
                if doc_h3:
                    doc_info['title'] = doc_h3.get_text(strip=True)
                
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
    
    if specs:
        specs_text = ' '.join(str(v) for v in specs.values()).upper()
        if 'ASME' in specs_text and 'ASME B16.34' not in norms:
            norms.append('ASME B16.34')
        if 'API 6D' in specs_text and 'API 6D' not in norms:
            norms.append('API 6D')
        if 'IEC' in specs_text:
            norms.append('IEC 60534')
    
    if features:
        features_text = ' '.join(features).upper()
        if 'API 6FA' in features_text or 'API 607' in features_text:
            norms.append('API 6FA/607')
        if 'ISO15848' in features_text or 'ISO 15848' in features_text:
            norms.append('ISO 15848')
        if 'SIL' in features_text:
            norms.append('SIL 3')
    
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


def process_category(product_line_info, with_translation=True):
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
    max_pages = 50
    
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
    print(f"\n  📋 Paso 2: Extrayendo detalles COMPLETOS de productos...")
    
    products_with_details = []
    total = len(unique_products)
    
    for idx, product in enumerate(unique_products, 1):
        print(f"\n    [{idx}/{total}] {product['name'][:45]}...")
        
        html = get_page(product['url'])
        if html:
            details = extract_product_details(html)
            product['details'] = details
            desc_len = len(details.get('description', ''))
            print(f"      ✅ Detalles extraídos (descripción: {desc_len} caracteres)")
        else:
            product['details'] = {}
            print(f"      ❌ Error")
        
        products_with_details.append(product)
        time.sleep(0.3)
    
    # Paso 3: Formatear productos con traducciones
    print(f"\n  📋 Paso 3: Formateando productos" + (" y traduciendo..." if with_translation else "..."))
    
    formatted = []
    for idx, p in enumerate(products_with_details, 1):
        details = p.get('details', {})
        
        # Descripción COMPLETA (sin truncar)
        desc_en = details.get('description', '')
        if not desc_en:
            desc_en = f"High quality {name} valve for industrial applications."
        
        # Especificaciones
        specs_en = details.get('specifications', {})
        
        # Features
        features_en = details.get('features', [])
        
        # Normas
        norms = extract_norms(p.get('product_line', ''), specs_en, features_en)
        
        # Aplicaciones (ya en español)
        apps = extract_applications(desc_en, features_en, p.get('product_line', ''))
        
        # Nombre del producto
        nombre_en = details.get('title', '') or p.get('name', '')
        
        formatted_product = {
            'id': idx,
            'categoria': categoria_servin,
            'product_line': name,
            'nombre': nombre_en,
            'descripcion': desc_en,  # DESCRIPCIÓN COMPLETA
            'normas': norms,
            'aplicaciones': apps,
            'imagen': details.get('image', '') or p.get('image', ''),
            'url_velan': p.get('url', ''),
            'especificaciones': specs_en,
            'caracteristicas': features_en[:15] if features_en else [],  # Más características
            'documentos': details.get('documents', [])
        }
        
        # Agregar traducciones al español si está habilitado
        if with_translation and TRANSLATOR_AVAILABLE:
            print(f"      [{idx}/{len(products_with_details)}] Traduciendo al español...")
            
            # Traducir descripción
            desc_es = translate_text(desc_en, 'es')
            formatted_product['descripcion_es'] = desc_es
            
            # Traducir características
            features_es = translate_list(features_en[:15], 'es')
            formatted_product['caracteristicas_es'] = features_es
            
            # Traducir especificaciones (solo valores)
            specs_es = translate_dict(specs_en, 'es')
            formatted_product['especificaciones_es'] = specs_es
            
            time.sleep(0.3)  # Evitar rate limiting
        
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
    print("🔧 VELAN VALVE SCRAPER V3 - Descripciones Completas + Español")
    print("=" * 70)
    print(f"📅 Fecha: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"📁 Categorías a procesar: {len(PRODUCT_LINES)}")
    print(f"🌐 Traducciones: {'✅ Habilitadas' if TRANSLATOR_AVAILABLE else '❌ Deshabilitadas (instalar deep-translator)'}")
    
    # Crear directorio de salida
    output_dir = os.path.join(os.path.dirname(__file__), 'output_v3')
    os.makedirs(output_dir, exist_ok=True)
    
    all_results = []
    all_products = []
    
    # Procesar cada categoría
    for i, pl_info in enumerate(PRODUCT_LINES, 1):
        print(f"\n\n{'#'*70}")
        print(f"# CATEGORÍA {i}/{len(PRODUCT_LINES)}: {pl_info['name']}")
        print(f"{'#'*70}")
        
        result = process_category(pl_info, with_translation=TRANSLATOR_AVAILABLE)
        
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
            'categorias_procesadas': len(all_results),
            'con_traducciones': TRANSLATOR_AVAILABLE,
            'version': 'v3 - Descripciones completas + Español'
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
    complete_path = os.path.join(output_dir, 'velan_catalogo_completo_v3.json')
    with open(complete_path, 'w', encoding='utf-8') as f:
        json.dump(complete_output, f, ensure_ascii=False, indent=2)
    print(f"\n✅ Catálogo completo: velan_catalogo_completo_v3.json")
    
    # JSON para React (con descripciones completas y en español)
    react_output = {
        'valvulas': [
            {
                'id': p['id'],
                'categoria': p['categoria'],
                'product_line': p['product_line'],
                'nombre': p['nombre'],
                'descripcion': p['descripcion'],
                'descripcion_es': p.get('descripcion_es', p['descripcion']),
                'normas': p['normas'],
                'aplicaciones': p['aplicaciones'],
                'imagen': p['imagen'],
                'especificaciones': p.get('especificaciones', {}),
                'especificaciones_es': p.get('especificaciones_es', p.get('especificaciones', {})),
                'caracteristicas': p.get('caracteristicas', []),
                'caracteristicas_es': p.get('caracteristicas_es', p.get('caracteristicas', [])),
            }
            for p in all_products
        ]
    }
    
    react_path = os.path.join(output_dir, 'velan_react_v3.json')
    with open(react_path, 'w', encoding='utf-8') as f:
        json.dump(react_output, f, ensure_ascii=False, indent=2)
    print(f"✅ JSON para React: velan_react_v3.json")
    
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
    print("🎉 ¡Extracción V3 completada exitosamente!")
    print(f"{'='*70}")


if __name__ == "__main__":
    main()
