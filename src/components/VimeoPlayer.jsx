import React, { useEffect, useMemo, useRef, useState } from 'react';
import Player from '@vimeo/player';

const buildVimeoSrc = ({ videoId, hash, autoplay, muted }) => {
  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    muted: muted ? '1' : '0',
    controls: '0',
    title: '0',
    byline: '0',
    portrait: '0',
    badge: '0',
    dnt: '1',
    playsinline: '1'
  });

  return `https://player.vimeo.com/video/${videoId}${hash ? `?h=${hash}&${params.toString()}` : `?${params.toString()}`}`;
};

export default function VimeoPlayer({
  videoId,
  hash,
  title,
  autoplay = false,
  muted = false,
  className = '',
  videoStyle,
}) {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const src = useMemo(() => buildVimeoSrc({ videoId, hash, autoplay, muted }), [videoId, hash, autoplay, muted]);

  useEffect(() => {
    if (!iframeRef.current) return;

    const player = new Player(iframeRef.current);
    playerRef.current = player;

    let isMounted = true;

    const syncState = async () => {
      try {
        const paused = await player.getPaused();
        if (isMounted) setIsPlaying(!paused);
      } catch {
        // ignore
      }
    };

    player.ready().then(() => {
      if (!isMounted) return;
      setIsReady(true);
      syncState();
    });

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onFsChange = ({ fullscreen }) => setIsFullscreen(Boolean(fullscreen));

    player.on('play', onPlay);
    player.on('pause', onPause);
    player.on('fullscreenchange', onFsChange);

    return () => {
      isMounted = false;
      try {
        player.off('play', onPlay);
        player.off('pause', onPause);
        player.off('fullscreenchange', onFsChange);
        player.destroy();
      } catch {
        // ignore
      }
      playerRef.current = null;
    };
  }, [src]);

  const togglePlay = async () => {
    if (!playerRef.current) return;
    try {
      const paused = await playerRef.current.getPaused();
      if (paused) {
        await playerRef.current.play();
      } else {
        await playerRef.current.pause();
      }
    } catch {
      // ignore
    }
  };

  const toggleFullscreen = async () => {
    if (!playerRef.current) return;
    try {
      const fullscreen = await playerRef.current.getFullscreen();
      if (fullscreen) {
        await playerRef.current.exitFullscreen();
      } else {
        await playerRef.current.requestFullscreen();
      }
    } catch {
      // ignore
    }
  };

  return (
    <div className={`relative ${className}`}>
      <iframe
        ref={iframeRef}
        title={title}
        src={src}
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        allowFullScreen
        style={videoStyle}
      />

      {/* Controles propios (sin UI de Vimeo) */}
      <div className="absolute inset-0 pointer-events-none">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
          className="pointer-events-auto absolute inset-0 flex items-center justify-center"
        >
          <span className="sr-only">{isPlaying ? 'Pausar' : 'Reproducir'}</span>
          <span
            className={`bg-corporate-red flex items-center justify-center shadow-2xl transform transition-transform duration-300 ${isReady ? 'opacity-100' : 'opacity-80'} ${isPlaying ? 'scale-95 opacity-0' : 'hover:scale-110'}`}
            style={{ width: '80px', height: '80px', borderRadius: '50%' }}
          >
            <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>

        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          className="pointer-events-auto absolute top-4 right-4 w-10 h-10 bg-black/40 hover:bg-black/55 rounded-full flex items-center justify-center transition-colors"
        >
          {isFullscreen ? (
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
            </svg>
          )}
        </button>
      </div>

      {/* Botón pausa (solo visible cuando está reproduciendo) */}
      {isPlaying && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Pausar video"
          className="absolute bottom-4 left-4 w-10 h-10 bg-black/40 hover:bg-black/55 rounded-full flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>
      )}
    </div>
  );
}
