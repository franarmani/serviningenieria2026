import React, { useMemo } from 'react';

/**
 * VimeoPlayer - Reproductor de Vimeo simplificado
 * 
 * @param videoId - ID del video de Vimeo
 * @param hash - Hash privado del video (si es privado)
 * @param title - Título para accesibilidad
 * @param autoplay - Si debe reproducirse automáticamente (requiere muted=true)
 * @param muted - Si debe estar muteado
 * @param loop - Si debe repetirse en bucle
 * @param background - Modo background (sin controles, autoplay, muted, loop)
 * @param className - Clases CSS adicionales
 * @param videoStyle - Estilos inline para el iframe
 */
export default function VimeoPlayer({
  videoId,
  hash,
  title = 'Video de Vimeo',
  autoplay = false,
  muted = false,
  loop = false,
  background = false,
  className = '',
  videoStyle,
}) {
  const src = useMemo(() => {
    const params = new URLSearchParams();
    
    // Hash para videos privados
    if (hash) params.set('h', hash);
    
    // Modo background: autoplay + muted + loop + sin controles
    if (background) {
      params.set('background', '1');
      params.set('autoplay', '1');
      params.set('muted', '1');
      params.set('loop', '1');
    } else {
      // Modo normal con controles de Vimeo
      if (autoplay) params.set('autoplay', '1');
      if (muted) params.set('muted', '1');
      if (loop) params.set('loop', '1');
    }
    
    // Ocultar metadata (título, autor, etc.) pero mantener controles
    params.set('title', '0');
    params.set('byline', '0');
    params.set('portrait', '0');
    params.set('badge', '0');
    params.set('dnt', '1');
    params.set('playsinline', '1');
    
    return `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
  }, [videoId, hash, autoplay, muted, loop, background]);

  return (
    <div className={`relative ${className}`}>
      <iframe
        title={title}
        src={src}
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        allowFullScreen
        style={videoStyle}
      />
    </div>
  );
}
