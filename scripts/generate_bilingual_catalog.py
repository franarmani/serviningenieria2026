#!/usr/bin/env python3
"""
Script para crear catálogo bilingüe con traducciones predefinidas.
Más rápido y confiable que la API de traducción en línea.
"""

import json
import os
import re
from datetime import datetime

# Diccionario de traducciones técnicas para válvulas
TRANSLATIONS = {
    # Tipos de válvulas
    "Ball Valve": "Válvula de Bola",
    "Gate Valve": "Válvula de Compuerta",
    "Globe Valve": "Válvula Globo",
    "Check Valve": "Válvula de Retención",
    "Swing Check Valve": "Válvula de Retención de Columpio",
    "Piston Check Valve": "Válvula de Retención de Pistón",
    "Tilting Disc Check Valve": "Válvula de Retención de Disco Oscilante",
    "Triple Offset Valve": "Válvula de Triple Excentricidad",
    "Butterfly Valve": "Válvula Mariposa",
    "Control Valve": "Válvula de Control",
    "Choke Valve": "Válvula de Estrangulamiento",
    "Isolation Valve": "Válvula de Aislamiento",
    "Dual Plate Check Valve": "Válvula de Retención de Doble Disco",
    "Pilot-Operated Check Valve": "Válvula de Retención Operada por Piloto",
    
    # Componentes
    "Trunnion": "Muñón",
    "Floating": "Flotante",
    "Side-Entry": "Entrada Lateral",
    "Top-Entry": "Entrada Superior",
    "Split-Body": "Cuerpo Dividido",
    "Bolted Bonnet": "Bonete Atornillado",
    "Bolted Cover": "Tapa Atornillada",
    "Pressure Seal": "Sello de Presión",
    "Bellows Seal": "Sello de Fuelle",
    "Metal-Seated": "Asiento Metálico",
    "Resilient-Seated": "Asiento Resiliente",
    "Soft-Seated": "Asiento Blando",
    "Double Block and Bleed": "Doble Bloqueo y Purga",
    "Fully Welded": "Totalmente Soldada",
    
    # Materiales
    "Forged Steel": "Acero Forjado",
    "Cast Steel": "Acero Fundido",
    "Stainless Steel": "Acero Inoxidable",
    "Carbon Steel": "Acero al Carbono",
    "Alloy Steel": "Acero Aleado",
    "Corrosion Resistant": "Resistente a la Corrosión",
    
    # Aplicaciones
    "Oil & Gas": "Petróleo y Gas",
    "Petrochemical": "Petroquímica",
    "Power Generation": "Generación de Energía",
    "Nuclear": "Nuclear",
    "Cryogenic": "Criogénico",
    "High Temperature": "Alta Temperatura",
    "High Pressure": "Alta Presión",
    "Subsea": "Submarino/Subsea",
    "Pipeline": "Tuberías/Gasoductos",
    "Refinery": "Refinería",
    "Chemical": "Químico",
    "LNG": "GNL (Gas Natural Licuado)",
    "Hydrofluoric Acid": "Ácido Fluorhídrico",
    "Alkylation": "Alquilación",
    "Coker": "Coquización",
    "Severe Service": "Servicio Severo",
    "General Purpose": "Propósito General",
    "Slurry": "Lodo/Slurry",
    
    # Características
    "Fire Safe": "Resistente al Fuego",
    "Fugitive Emission": "Emisiones Fugitivas",
    "Anti-Static": "Antiestático",
    "Anti-Blow out": "Anti-expulsión",
    "Low Torque": "Bajo Torque",
    "Bidirectional": "Bidireccional",
    "Full Bore": "Paso Total",
    "Reduced Bore": "Paso Reducido",
    "Extended Body": "Cuerpo Extendido",
    
    # Operadores
    "Manual": "Manual",
    "Gear Operated": "Operada por Engranaje",
    "Electric Actuator": "Actuador Eléctrico",
    "Pneumatic Actuator": "Actuador Neumático",
    "Hydraulic Actuator": "Actuador Hidráulico",
    
    # Normas
    "API": "API",
    "ASME": "ASME",
    "ANSI": "ANSI",
    "ISO": "ISO",
    "BS": "BS (Norma Británica)",
    
    # Otros términos comunes
    "Features": "Características",
    "Applications": "Aplicaciones",
    "Specifications": "Especificaciones",
    "Testing & certifications": "Pruebas y Certificaciones",
    "Seat design": "Diseño del Asiento",
    "Operator": "Operador",
    "Size Range": "Rango de Tamaño",
    "Pressure Class": "Clase de Presión",
    "Temperature Range": "Rango de Temperatura",
    "End Connections": "Conexiones de Extremo",
    "Face-to-face": "Cara a Cara",
    "Body design": "Diseño del Cuerpo",
    "Digital Solutions": "Soluciones Digitales",
    "Remote Monitoring": "Monitoreo Remoto",
    
    # Frases descriptivas
    "Developed from a traditional": "Desarrollada a partir de un diseño tradicional de",
    "offers high performance": "ofrece alto rendimiento",
    "maximum flow capacity": "máxima capacidad de flujo",
    "designed for": "diseñada para",
    "suitable for": "adecuada para",
    "ideal for": "ideal para",
    "available in": "disponible en",
    "manufactured by": "fabricada por",
}

# Categorías traducidas
CATEGORY_TRANSLATIONS = {
    "API 6A and 6D valves": "Válvulas API 6A y 6D",
    "Cast steel gate, globe and check valves": "Válvulas de Acero Fundido (Compuerta, Globo y Retención)",
    "Corrosion resistant cast stainless steel valves": "Válvulas de Acero Inoxidable Resistente a la Corrosión",
    "Digital Solutions": "Soluciones Digitales",
    "Dual plate check valves": "Válvulas de Retención de Doble Disco",
    "Hydrofluoric acid alkylation valves": "Válvulas para Ácido Fluorhídrico y Alquilación",
    "Large forged bolted bonnet valves": "Válvulas Forjadas de Bonete Atornillado (Grande)",
    "Metal-seated ball valves": "Válvulas de Bola con Asiento Metálico",
    "Pilot-operated check valve": "Válvula de Retención Operada por Piloto",
    "Pressure seal valves": "Válvulas de Sello de Presión",
    "Resilient-seated ball valves": "Válvulas de Bola con Asiento Resiliente",
    "Severe service metal-seated ball valves": "Válvulas de Bola para Servicio Severo",
    "Small forged valves": "Válvulas Forjadas Pequeñas",
    "Triple offset valves": "Válvulas de Triple Excentricidad"
}

def smart_translate(text):
    """
    Traduce texto usando el diccionario de traducciones técnicas.
    Mantiene términos técnicos y códigos sin cambios.
    """
    if not text or not text.strip():
        return ""
    
    result = text
    
    # Ordenar por longitud (más largo primero) para evitar reemplazos parciales
    sorted_translations = sorted(TRANSLATIONS.items(), key=lambda x: len(x[0]), reverse=True)
    
    for en, es in sorted_translations:
        # Usar regex para reemplazar solo palabras completas
        pattern = re.compile(re.escape(en), re.IGNORECASE)
        result = pattern.sub(es, result)
    
    return result

def translate_product(product):
    """Traduce un producto al español usando diccionario técnico."""
    
    nombre = product.get('nombre', '')
    descripcion = product.get('descripcion', '')
    product_line = product.get('product_line', '')
    
    # Crear versión bilingüe
    translated = {
        # Datos base
        "id": product.get("id"),
        "categoria": product.get("categoria"),
        "product_line": product_line,
        "product_line_es": CATEGORY_TRANSLATIONS.get(product_line, product_line),
        "imagen": product.get("imagen"),
        "url_velan": product.get("url_velan"),
        
        # Textos bilingües
        "nombre": nombre,
        "nombre_es": smart_translate(nombre),
        "descripcion": descripcion,
        "descripcion_es": smart_translate(descripcion),
        
        # Listas traducidas
        "normas": product.get("normas", []),
        "aplicaciones": product.get("aplicaciones", []),
        "aplicaciones_es": [smart_translate(app) for app in product.get("aplicaciones", [])],
        "caracteristicas": product.get("caracteristicas", []),
        "caracteristicas_es": [smart_translate(c) for c in product.get("caracteristicas", [])],
        
        # Especificaciones (mantener en inglés con etiquetas traducidas)
        "especificaciones": product.get("especificaciones", {}),
        
        # Documentos sin cambios
        "documentos": product.get("documentos", [])
    }
    
    return translated

def main():
    print("=" * 60)
    print("🌐 GENERADOR DE CATÁLOGO BILINGÜE VELAN")
    print("=" * 60)
    print(f"📅 {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print()
    
    # Rutas
    input_file = os.path.join(os.path.dirname(__file__), "output_v3", "velan_catalogo_completo_v3.json")
    output_file = os.path.join(os.path.dirname(__file__), "output_v3", "velan_catalogo_bilingue.json")
    react_file = os.path.join(os.path.dirname(__file__), "..", "src", "data", "velanCatalogoCompleto.json")
    
    # Cargar catálogo
    print(f"📖 Cargando: {input_file}")
    with open(input_file, 'r', encoding='utf-8') as f:
        catalog = json.load(f)
    
    valvulas = catalog.get('valvulas', [])
    total = len(valvulas)
    print(f"   {total} productos encontrados")
    print()
    
    # Traducir productos
    print("🔄 Procesando traducciones...")
    translated_valvulas = []
    
    for idx, product in enumerate(valvulas, 1):
        nombre = product.get('nombre', '')[:50]
        print(f"  [{idx}/{total}] {nombre}...")
        translated = translate_product(product)
        translated_valvulas.append(translated)
    
    # Crear catálogo final
    final_catalog = {
        "metadata": {
            "source": "Velan Corporation",
            "generated_at": datetime.now().isoformat(),
            "total_productos": len(translated_valvulas),
            "languages": ["en", "es"],
            "version": "3.0"
        },
        "categorias": [
            {"id": "api-6a-6d", "nombre_en": "API 6A and 6D valves", "nombre_es": "Válvulas API 6A y 6D"},
            {"id": "cast-steel", "nombre_en": "Cast steel gate, globe and check valves", "nombre_es": "Válvulas de Acero Fundido"},
            {"id": "corrosion-resistant", "nombre_en": "Corrosion resistant cast stainless steel valves", "nombre_es": "Válvulas Resistentes a la Corrosión"},
            {"id": "digital-solutions", "nombre_en": "Digital Solutions", "nombre_es": "Soluciones Digitales"},
            {"id": "dual-plate", "nombre_en": "Dual plate check valves", "nombre_es": "Válvulas de Retención de Doble Disco"},
            {"id": "hf-alkylation", "nombre_en": "Hydrofluoric acid alkylation valves", "nombre_es": "Válvulas para Ácido Fluorhídrico"},
            {"id": "large-forged", "nombre_en": "Large forged bolted bonnet valves", "nombre_es": "Válvulas Forjadas Grandes"},
            {"id": "metal-seated", "nombre_en": "Metal-seated ball valves", "nombre_es": "Válvulas de Bola con Asiento Metálico"},
            {"id": "pilot-operated", "nombre_en": "Pilot-operated check valve", "nombre_es": "Válvula de Retención Operada por Piloto"},
            {"id": "pressure-seal", "nombre_en": "Pressure seal valves", "nombre_es": "Válvulas de Sello de Presión"},
            {"id": "resilient-seated", "nombre_en": "Resilient-seated ball valves", "nombre_es": "Válvulas de Bola con Asiento Resiliente"},
            {"id": "severe-service", "nombre_en": "Severe service metal-seated ball valves", "nombre_es": "Válvulas para Servicio Severo"},
            {"id": "small-forged", "nombre_en": "Small forged valves", "nombre_es": "Válvulas Forjadas Pequeñas"},
            {"id": "triple-offset", "nombre_en": "Triple offset valves", "nombre_es": "Válvulas de Triple Excentricidad"}
        ],
        "valvulas": translated_valvulas
    }
    
    # Guardar archivos
    print()
    print("💾 Guardando archivos...")
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(final_catalog, f, ensure_ascii=False, indent=2)
    print(f"   ✅ {output_file}")
    
    with open(react_file, 'w', encoding='utf-8') as f:
        json.dump(final_catalog, f, ensure_ascii=False, indent=2)
    print(f"   ✅ {react_file}")
    
    print()
    print("=" * 60)
    print(f"✅ COMPLETADO: {total} productos con traducción bilingüe")
    print("=" * 60)

if __name__ == "__main__":
    main()
