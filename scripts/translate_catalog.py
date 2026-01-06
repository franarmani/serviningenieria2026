#!/usr/bin/env python3
"""
Script para traducir el catálogo de válvulas Velan al español.
Usa googletrans (API gratuita de Google Translate).
"""

import json
import time
import os
from datetime import datetime

# Intentar usar googletrans primero, si falla usar deep_translator
try:
    from deep_translator import GoogleTranslator
    USE_DEEP_TRANSLATOR = True
    print("✓ Usando deep_translator")
except ImportError:
    USE_DEEP_TRANSLATOR = False
    print("⚠ deep_translator no disponible")

# Directorio de entrada y salida
INPUT_FILE = os.path.join(os.path.dirname(__file__), "output_v3", "velan_catalogo_completo_v3.json")
OUTPUT_FILE = os.path.join(os.path.dirname(__file__), "output_v3", "velan_catalogo_bilingue.json")
OUTPUT_REACT_FILE = os.path.join(os.path.dirname(__file__), "..", "src", "data", "velanCatalogoCompleto.json")

# Cache de traducciones para no repetir
translation_cache = {}

def translate_text(text, max_retries=3):
    """Traduce texto al español con reintentos."""
    if not text or not text.strip():
        return ""
    
    text = text.strip()
    
    # Revisar cache
    if text in translation_cache:
        return translation_cache[text]
    
    # Si el texto es muy corto o parece código/número, no traducir
    if len(text) < 3 or text.replace('.', '').replace('-', '').replace(' ', '').isdigit():
        return text
    
    for attempt in range(max_retries):
        try:
            if USE_DEEP_TRANSLATOR:
                # Dividir texto largo en chunks de 4500 caracteres
                if len(text) > 4500:
                    chunks = [text[i:i+4500] for i in range(0, len(text), 4500)]
                    translated_chunks = []
                    for chunk in chunks:
                        translator = GoogleTranslator(source='en', target='es')
                        translated_chunks.append(translator.translate(chunk))
                        time.sleep(0.3)
                    result = ''.join(translated_chunks)
                else:
                    translator = GoogleTranslator(source='en', target='es')
                    result = translator.translate(text)
                
                if result:
                    translation_cache[text] = result
                    return result
            
            return text  # Si no hay traductor disponible
            
        except Exception as e:
            print(f"    ⚠ Error traduciendo (intento {attempt + 1}/{max_retries}): {str(e)[:50]}")
            time.sleep(2 * (attempt + 1))  # Espera exponencial
    
    return text  # Devolver original si falla

def translate_list(items, prefix=""):
    """Traduce una lista de strings."""
    if not items:
        return []
    
    translated = []
    for item in items:
        if isinstance(item, str):
            translated.append(translate_text(item))
        elif isinstance(item, dict):
            translated.append(translate_dict(item))
        else:
            translated.append(item)
    return translated

def translate_dict(d, keys_to_translate=None):
    """Traduce valores específicos de un diccionario."""
    if not d:
        return {}
    
    # Si no se especifican claves, traducir todas las strings
    if keys_to_translate is None:
        keys_to_translate = list(d.keys())
    
    translated = {}
    for key, value in d.items():
        if key in keys_to_translate and isinstance(value, str):
            translated[key] = translate_text(value)
        elif isinstance(value, list):
            translated[key] = translate_list(value)
        elif isinstance(value, dict):
            translated[key] = translate_dict(value, keys_to_translate)
        else:
            translated[key] = value
    
    return translated

def translate_product(product, idx, total):
    """Traduce un producto manteniendo estructura bilingüe."""
    nombre = product.get('nombre', '')
    print(f"  [{idx}/{total}] {nombre[:50]}...")
    
    # Crear versión bilingüe
    translated = {
        # Mantener datos originales
        "id": product.get("id"),
        "categoria": product.get("categoria"),
        "product_line": product.get("product_line"),
        "imagen": product.get("imagen"),
        "url_velan": product.get("url_velan"),
        
        # Versión en inglés
        "nombre_en": nombre,
        "descripcion_en": product.get("descripcion", ""),
        "caracteristicas_en": product.get("caracteristicas", []),
        "aplicaciones_en": product.get("aplicaciones", []),
        
        # Mantener normas sin traducir (son códigos)
        "normas": product.get("normas", []),
        
        # Mantener especificaciones en inglés (términos técnicos)
        "especificaciones": product.get("especificaciones", {}),
        
        # Mantener documentos sin cambios
        "documentos": product.get("documentos", [])
    }
    
    # Traducir al español
    time.sleep(0.5)  # Pequeña pausa entre productos
    
    try:
        translated["nombre_es"] = translate_text(nombre)
        time.sleep(0.3)
        
        desc = product.get("descripcion", "")
        translated["descripcion_es"] = translate_text(desc) if desc else ""
        time.sleep(0.3)
        
        # Traducir características
        caracteristicas = product.get("caracteristicas", [])
        translated["caracteristicas_es"] = []
        for caract in caracteristicas:
            translated["caracteristicas_es"].append(translate_text(caract))
            time.sleep(0.2)
        
        # Traducir aplicaciones
        aplicaciones = product.get("aplicaciones", [])
        translated["aplicaciones_es"] = []
        for app in aplicaciones:
            translated["aplicaciones_es"].append(translate_text(app))
            time.sleep(0.2)
            
    except Exception as e:
        print(f"    ⚠ Error en producto {idx}: {e}")
        # Usar originales como fallback
        translated["nombre_es"] = nombre
        translated["descripcion_es"] = product.get("descripcion", "")
        translated["caracteristicas_es"] = product.get("caracteristicas", [])
        translated["aplicaciones_es"] = product.get("aplicaciones", [])
    
    return translated

def main():
    print("=" * 60)
    print("🌐 TRADUCTOR DE CATÁLOGO VELAN")
    print("=" * 60)
    print(f"📅 {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print()
    
    # Cargar catálogo
    print(f"📖 Cargando: {INPUT_FILE}")
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        catalog = json.load(f)
    
    valvulas = catalog.get('valvulas', [])
    total = len(valvulas)
    print(f"   {total} productos encontrados")
    print()
    
    # Traducir cada producto
    print("🔄 Traduciendo productos...")
    translated_valvulas = []
    
    for idx, product in enumerate(valvulas, 1):
        try:
            translated = translate_product(product, idx, total)
            translated_valvulas.append(translated)
            
            # Guardar progreso cada 10 productos
            if idx % 10 == 0:
                print(f"   💾 Guardando progreso ({idx}/{total})...")
                temp_catalog = {
                    "metadata": {
                        "source": "Velan Corporation",
                        "translated_at": datetime.now().isoformat(),
                        "total_productos": len(translated_valvulas),
                        "languages": ["en", "es"]
                    },
                    "valvulas": translated_valvulas
                }
                with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
                    json.dump(temp_catalog, f, ensure_ascii=False, indent=2)
                    
        except Exception as e:
            print(f"   ❌ Error fatal en producto {idx}: {e}")
            # Agregar producto sin traducir
            translated_valvulas.append(product)
    
    # Guardar resultado final
    print()
    print("💾 Guardando catálogo final...")
    
    final_catalog = {
        "metadata": {
            "source": "Velan Corporation",
            "translated_at": datetime.now().isoformat(),
            "total_productos": len(translated_valvulas),
            "languages": ["en", "es"]
        },
        "valvulas": translated_valvulas
    }
    
    # Guardar en output_v3
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(final_catalog, f, ensure_ascii=False, indent=2)
    print(f"   ✅ {OUTPUT_FILE}")
    
    # Guardar copia para React
    with open(OUTPUT_REACT_FILE, 'w', encoding='utf-8') as f:
        json.dump(final_catalog, f, ensure_ascii=False, indent=2)
    print(f"   ✅ {OUTPUT_REACT_FILE}")
    
    print()
    print("=" * 60)
    print(f"✅ COMPLETADO: {total} productos traducidos")
    print("=" * 60)

if __name__ == "__main__":
    main()
