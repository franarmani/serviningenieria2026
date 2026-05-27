#!/usr/bin/env python3
"""
Script para traducir el catálogo de válvulas Velan al español.
Versión mejorada con batching y manejo robusto de errores.
"""

import json
import time
import os
from datetime import datetime

# Configuración
INPUT_FILE = os.path.join(os.path.dirname(__file__), "output_v3", "velan_catalogo_completo_v3.json")
OUTPUT_FILE = os.path.join(os.path.dirname(__file__), "output_v3", "velan_catalogo_bilingue.json")
REACT_FILE = os.path.join(os.path.dirname(__file__), "..", "src", "data", "velanCatalogoCompleto.json")

# Intentar importar traductor
try:
    from deep_translator import GoogleTranslator
    TRANSLATOR_AVAILABLE = True
except ImportError:
    TRANSLATOR_AVAILABLE = False
    print("⚠ deep_translator no disponible. Instalando...")

def translate_text(text, retries=3):
    """Traduce un texto con reintentos."""
    if not text or not text.strip() or not TRANSLATOR_AVAILABLE:
        return text
    
    text = text.strip()
    
    # No traducir si es muy corto o es un código
    if len(text) < 5:
        return text
    
    for attempt in range(retries):
        try:
            translator = GoogleTranslator(source='en', target='es')
            
            # Dividir textos largos
            if len(text) > 4000:
                # Dividir por oraciones
                sentences = text.replace('. ', '.|').split('|')
                chunks = []
                current_chunk = ""
                
                for sentence in sentences:
                    if len(current_chunk) + len(sentence) < 4000:
                        current_chunk += sentence
                    else:
                        if current_chunk:
                            chunks.append(current_chunk)
                        current_chunk = sentence
                
                if current_chunk:
                    chunks.append(current_chunk)
                
                translated_parts = []
                for chunk in chunks:
                    result = translator.translate(chunk)
                    translated_parts.append(result)
                    time.sleep(0.2)
                
                return ' '.join(translated_parts)
            else:
                result = translator.translate(text)
                return result if result else text
                
        except Exception as e:
            if attempt < retries - 1:
                time.sleep(1 * (attempt + 1))
            else:
                return text
    
    return text

def translate_list(items):
    """Traduce una lista de strings."""
    if not items:
        return []
    
    result = []
    for item in items:
        if isinstance(item, str) and item.strip():
            translated = translate_text(item)
            result.append(translated)
        else:
            result.append(item)
    return result

def process_product(product, idx, total):
    """Procesa un producto y agrega traducciones."""
    nombre = product.get('nombre', '')
    print(f"  [{idx}/{total}] {nombre[:45]}...")
    
    result = {
        # Datos originales
        "id": product.get("id"),
        "categoria": product.get("categoria"),
        "product_line": product.get("product_line"),
        "imagen": product.get("imagen"),
        "url_velan": product.get("url_velan"),
        
        # Nombre bilingüe
        "nombre": nombre,
        "nombre_es": translate_text(nombre),
        
        # Descripción bilingüe
        "descripcion": product.get("descripcion", ""),
        "descripcion_es": translate_text(product.get("descripcion", "")),
        
        # Normas (no traducir - son códigos)
        "normas": product.get("normas", []),
        
        # Aplicaciones bilingües
        "aplicaciones": product.get("aplicaciones", []),
        "aplicaciones_es": translate_list(product.get("aplicaciones", [])),
        
        # Características bilingües
        "caracteristicas": product.get("caracteristicas", []),
        "caracteristicas_es": translate_list(product.get("caracteristicas", [])),
        
        # Especificaciones (mantener en inglés)
        "especificaciones": product.get("especificaciones", {}),
        
        # Documentos (sin cambios)
        "documentos": product.get("documentos", [])
    }
    
    # Pequeña pausa entre productos
    time.sleep(0.3)
    
    return result

def main():
    print("=" * 60)
    print("🌐 TRADUCTOR VELAN - VERSIÓN ROBUSTA")
    print("=" * 60)
    print(f"📅 {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    if not TRANSLATOR_AVAILABLE:
        print("❌ Error: deep_translator no está instalado")
        return
    
    print()
    
    # Cargar catálogo
    print(f"📖 Cargando: {INPUT_FILE}")
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        catalog = json.load(f)
    
    valvulas = catalog.get('valvulas', [])
    total = len(valvulas)
    print(f"   {total} productos encontrados")
    print()
    
    # Traducir categorías de línea de producto
    product_lines = {}
    for v in valvulas:
        pl = v.get('product_line', '')
        if pl and pl not in product_lines:
            product_lines[pl] = translate_text(pl)
            time.sleep(0.2)
    
    print(f"📁 {len(product_lines)} categorías traducidas")
    print()
    
    # Procesar productos
    print("🔄 Traduciendo productos...")
    translated_valvulas = []
    
    for idx, product in enumerate(valvulas, 1):
        try:
            translated = process_product(product, idx, total)
            
            # Agregar categoría traducida
            pl = product.get('product_line', '')
            translated['product_line_es'] = product_lines.get(pl, pl)
            
            translated_valvulas.append(translated)
            
            # Guardar progreso cada 20 productos
            if idx % 20 == 0:
                print(f"   💾 Guardando progreso ({idx}/{total})...")
                save_catalog(translated_valvulas, product_lines)
                
        except Exception as e:
            print(f"   ❌ Error en producto {idx}: {e}")
            translated_valvulas.append(product)
    
    # Guardar resultado final
    save_catalog(translated_valvulas, product_lines)
    
    print()
    print("=" * 60)
    print(f"✅ COMPLETADO: {len(translated_valvulas)} productos traducidos")
    print("=" * 60)

def save_catalog(valvulas, product_lines):
    """Guarda el catálogo en los archivos de salida."""
    
    # Crear lista de categorías
    categorias = []
    for en_name, es_name in product_lines.items():
        cat_id = en_name.lower().replace(' ', '-').replace(',', '').replace('(', '').replace(')', '')
        categorias.append({
            "id": cat_id,
            "nombre_en": en_name,
            "nombre_es": es_name
        })
    
    catalog = {
        "metadata": {
            "source": "Velan Corporation",
            "generated_at": datetime.now().isoformat(),
            "total_productos": len(valvulas),
            "languages": ["en", "es"],
            "version": "3.0"
        },
        "categorias": categorias,
        "valvulas": valvulas
    }
    
    # Guardar archivos
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(catalog, f, ensure_ascii=False, indent=2)
    
    with open(REACT_FILE, 'w', encoding='utf-8') as f:
        json.dump(catalog, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()
