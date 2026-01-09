import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Help Instructions Component
const HelpInstructions = ({ isOpen, onToggle }) => {
  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-lg font-display font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base mb-5"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
        <span>Guía rápida: ver cómo usar</span>
      </button>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#0c0c0c] to-[#151515] border border-blue-700/60 rounded-xl p-4 sm:p-5 shadow-xl mb-6">
      <div className="flex items-start gap-3 sm:gap-4 mb-4">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-2.5 shadow-md">
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h4 className="font-display font-bold text-white text-base sm:text-lg leading-tight">
              Editor de bloques reorganizables
            </h4>
            <button
              onClick={onToggle}
              className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-semibold transition-colors"
            >
              Ocultar
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">Click + arrastre el mango rojo para mover, suelte para soltar.</p>
        </div>
      </div>
      
      <div className="bg-[#111111] rounded-lg p-3 sm:p-4 mb-4 border border-blue-900/40">
        <p className="text-blue-300 font-semibold mb-3 text-sm sm:text-base flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
          </svg>
          Cómo mover bloques
        </p>
        <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
          <li>Presione el botón rojo <span className="inline-flex items-center gap-1 bg-corporate-red text-white px-2 py-0.5 rounded text-[11px] font-bold"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" /></svg>MOVER</span>.</li>
          <li>Arrastre hacia arriba/abajo mientras mantiene presionado.</li>
          <li>Suelte cuando esté en la posición deseada.</li>
        </ol>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        <div className="bg-[#111111] rounded-lg p-3 border border-gray-800">
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
            <span className="font-bold text-white text-xs sm:text-sm">Mover</span>
          </div>
          <p className="text-[11px] sm:text-sm text-gray-400">Click + arrastre.</p>
        </div>
        <div className="bg-[#111111] rounded-lg p-3 border border-gray-800">
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <span className="font-bold text-white text-xs sm:text-sm">Medios</span>
          </div>
          <p className="text-[11px] sm:text-sm text-gray-400">Imágenes y videos.</p>
        </div>
        <div className="bg-[#111111] rounded-lg p-3 border border-gray-800">
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <span className="font-bold text-white text-xs sm:text-sm">Alinear</span>
          </div>
          <p className="text-[11px] sm:text-sm text-gray-400">Posicione medios.</p>
        </div>
        <div className="bg-[#111111] rounded-lg p-3 border border-red-900/40">
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-5 h-5 text-red-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="font-bold text-red-300 text-xs sm:text-sm">Borrar</span>
          </div>
          <p className="text-[11px] sm:text-sm text-red-200">Eliminar bloque.</p>
        </div>
      </div>
    </div>
  );
};

// Sortable Block Component
const SortableBlock = ({ block, index, renderBlock, deleteBlock, blocksLength }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: block.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      className={`relative transition-all duration-200 ${
        isDragging 
          ? 'scale-105 shadow-2xl ring-4 ring-corporate-red z-50' 
          : 'hover:shadow-lg'
      }`}
    >
      <div className="absolute top-2 left-2 flex items-center gap-2 z-20">
        <div className="bg-corporate-red text-white w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shadow-lg">
          {index + 1}
        </div>
        <div className="flex items-center gap-1 bg-[#0f0f0f]/90 border border-gray-800 rounded-lg px-2.5 py-1.5 shadow-md backdrop-blur">
          <button
            {...listeners}
            {...attributes}
            className={`flex items-center gap-1 text-white text-xs font-semibold bg-corporate-red px-2 py-1 rounded-md cursor-move hover:bg-corporate-accent transition-all shadow-sm ${
              isDragging ? 'scale-105 bg-corporate-accent' : ''
            }`}
            title="☰ Arrastre para mover este bloque"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
            <span className="hidden sm:inline">Mover</span>
          </button>
        </div>
      </div>

      <div className="absolute top-2 right-2 z-20">
        <button
          type="button"
          onClick={() => deleteBlock(block.id)}
          disabled={blocksLength === 1}
          className="flex items-center gap-1 bg-[#0f0f0f]/90 border border-gray-800 text-red-200 text-xs font-semibold px-2.5 py-1.5 rounded-lg hover:text-white hover:bg-red-800/60 transition-all shadow-md disabled:opacity-40 disabled:cursor-not-allowed backdrop-blur"
          title="🗑️ Eliminar este bloque"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="hidden sm:inline">Borrar</span>
        </button>
      </div>

      <div className="pt-12 sm:pt-12">
        {renderBlock(block, index)}
      </div>
    </div>
  );
};

const RichContentEditor = ({ value, onChange }) => {
  const [blocks, setBlocks] = useState(() => {
    // Handle if value is undefined, null, or empty
    if (!value) {
      return [{ id: '1', type: 'text', content: '' }];
    }
    
    // Handle if value is a string (legacy content format)
    if (typeof value === 'string') {
      return [{ id: '1', type: 'text', content: value }];
    }
    
    // Handle if value is an array but empty
    if (Array.isArray(value) && value.length === 0) {
      return [{ id: '1', type: 'text', content: '' }];
    }
    
    // Handle if value is already a valid blocks array
    if (Array.isArray(value)) {
      return value;
    }
    
    return [{ id: '1', type: 'text', content: '' }];
  });
  
  const [showHelp, setShowHelp] = useState(false);

  const [showMediaModal, setShowMediaModal] = useState(false);
  const [insertPosition, setInsertPosition] = useState(null);
  const [mediaType, setMediaType] = useState('image');
  const [mediaUrl, setMediaUrl] = useState('');
  const [mediaFile, setMediaFile] = useState(null);
  const [mediaCaption, setMediaCaption] = useState('');

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const updateBlocks = (newBlocks) => {
    setBlocks(newBlocks);
    onChange(newBlocks);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = blocks.findIndex((block) => block.id === active.id);
      const newIndex = blocks.findIndex((block) => block.id === over.id);
      const newBlocks = arrayMove(blocks, oldIndex, newIndex);
      updateBlocks(newBlocks);
    }
  };

  const addTextBlock = (position) => {
    const newBlock = {
      id: `block-${Date.now()}`,
      type: 'text',
      content: ''
    };
    const newBlocks = [...blocks];
    newBlocks.splice(position + 1, 0, newBlock);
    updateBlocks(newBlocks);
  };

  const openMediaModal = (position, type) => {
    setInsertPosition(position);
    setMediaType(type);
    setMediaUrl('');
    setMediaFile(null);
    setMediaCaption('');
    setShowMediaModal(true);
  };

  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMediaFile(reader.result);
        setMediaUrl('');
      };
      reader.readAsDataURL(file);
    }
  };

  const insertMedia = () => {
    const mediaSource = mediaFile || mediaUrl;
    if (!mediaSource) return;

    const newBlock = {
      id: `block-${Date.now()}`,
      type: mediaType,
      src: mediaSource,
      caption: mediaCaption,
      alignment: 'center'
    };

    const newBlocks = [...blocks];
    newBlocks.splice(insertPosition + 1, 0, newBlock);
    updateBlocks(newBlocks);
    setShowMediaModal(false);
  };

  const updateBlockContent = (id, content) => {
    const newBlocks = blocks.map(block =>
      block.id === id ? { ...block, content } : block
    );
    updateBlocks(newBlocks);
  };

  const updateBlockAlignment = (id, alignment) => {
    const newBlocks = blocks.map(block =>
      block.id === id ? { ...block, alignment } : block
    );
    updateBlocks(newBlocks);
  };

  const deleteBlock = (id) => {
    if (blocks.length === 1) return;
    const newBlocks = blocks.filter(block => block.id !== id);
    updateBlocks(newBlocks);
  };

  const getYouTubeEmbedUrl = (url) => {
    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s]+)/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : url;
  };

  const renderBlock = (block, index) => {
    switch (block.type) {
      case 'text':
        return (
          <div className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border-2 border-gray-800 rounded-xl p-5 sm:p-6 hover:border-corporate-red transition-all shadow-xl hover:shadow-2xl">
            {/* Header con diseño profesional */}
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-800">
              <div className="bg-corporate-red/20 rounded-lg p-2">
                <svg className="w-5 h-5 text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-white text-base sm:text-lg leading-tight">Contenido de Texto</span>
                <p className="text-xs text-gray-500 mt-0.5">Editor de párrafos y contenido escrito</p>
              </div>
            </div>

            {/* Textarea mejorado */}
            <textarea
              value={block.content}
              onChange={(e) => updateBlockContent(block.id, e.target.value)}
              placeholder="Escriba su contenido aquí... Use Enter para crear nuevos párrafos."
              className="w-full min-h-[150px] p-4 bg-[#0a0a0a] border-2 border-gray-800 rounded-xl focus:ring-2 focus:ring-corporate-red focus:border-corporate-red resize-y text-white leading-[1.7] text-sm sm:text-base placeholder:text-gray-600 transition-all"
              style={{fontFamily: 'Inter, system-ui, sans-serif'}}
            />

            {/* Footer con botones de acción */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => openMediaModal(index, 'image')}
                  className="px-3.5 py-2 text-xs sm:text-sm bg-[#0d0d0d] text-corporate-red rounded-lg hover:bg-corporate-red hover:text-white transition-all flex items-center gap-1.5 font-semibold border border-corporate-red/40 hover:border-corporate-red"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  Imagen
                </button>
                <button
                  type="button"
                  onClick={() => openMediaModal(index, 'video')}
                  className="px-3.5 py-2 text-xs sm:text-sm bg-[#0d0d0d] text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all flex items-center gap-1.5 font-semibold border border-blue-600/40 hover:border-blue-600"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  Video
                </button>
                <button
                  type="button"
                  onClick={() => addTextBlock(index)}
                  className="px-3.5 py-2 text-xs sm:text-sm bg-[#0d0d0d] text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all flex items-center gap-1.5 font-semibold border border-gray-700 hover:border-gray-500"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Texto
                </button>
              </div>
              <span className="hidden sm:inline-flex text-[11px] text-gray-500 font-semibold uppercase tracking-wide bg-gray-900 px-2.5 py-1.5 rounded-lg">Texto</span>
            </div>
          </div>
        );

      case 'image':
        return (
          <div className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border-2 border-gray-800 rounded-xl p-5 sm:p-6 hover:border-blue-600 transition-all shadow-xl hover:shadow-2xl">
            {/* Header con diseño profesional */}
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-800">
              <div className="bg-blue-600/20 rounded-lg p-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-white text-base sm:text-lg leading-tight">Bloque de Imagen</span>
                <p className="text-xs text-gray-500 mt-0.5">Contenido multimedia visual</p>
              </div>
            </div>

            {/* Imagen siempre centrada */}
            <div className="flex justify-center mb-5">
              <div className="max-w-4xl relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <img 
                  src={block.src} 
                  alt={block.caption || 'Imagen del artículo'} 
                  className="rounded-xl shadow-2xl w-full border-2 border-gray-700 group-hover:border-blue-600/50 transition-all relative z-10" 
                />
                {block.caption && (
                  <p className="text-sm text-gray-400 mt-4 italic text-center bg-[#0a0a0a] border border-gray-800 p-3 rounded-lg">{block.caption}</p>
                )}
              </div>
            </div>

            {/* Sin controles de alineación: siempre centrado */}
          </div>
        );

      case 'video':
        return (
          <div className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border-2 border-gray-800 rounded-xl p-5 sm:p-6 hover:border-purple-600 transition-all shadow-xl hover:shadow-2xl">
            {/* Header con diseño profesional */}
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-800">
              <div className="bg-purple-600/20 rounded-lg p-2">
                <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-white text-base sm:text-lg leading-tight">Bloque de Video</span>
                <p className="text-xs text-gray-500 mt-0.5">Contenido multimedia embebido</p>
              </div>
            </div>

            {/* Video con alineación */}
            <div className={`flex ${block.alignment === 'center' ? 'justify-center' : block.alignment === 'right' ? 'justify-end' : 'justify-start'} mb-5`}>
              <div className="w-full max-w-4xl relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl pointer-events-none"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-gray-700 group-hover:border-purple-600/50 transition-all">
                  <div className="relative pb-[56.25%]">
                    <iframe
                      src={getYouTubeEmbedUrl(block.src)}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                {block.caption && (
                  <p className="text-sm text-gray-400 mt-4 italic text-center bg-[#0a0a0a] border border-gray-800 p-3 rounded-lg">{block.caption}</p>
                )}
              </div>
            </div>

            {/* Footer con controles de alineación */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => updateBlockAlignment(block.id, 'left')}
                  className={`group px-3.5 py-2 text-xs sm:text-sm rounded-lg font-semibold transition-all flex items-center gap-1.5 border ${
                    block.alignment === 'left' 
                      ? 'bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-600/30' 
                      : 'bg-[#0a0a0a] text-gray-400 border-gray-800 hover:border-purple-600/50 hover:text-purple-400'
                  }`}
                  title="Alinear izquierda"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h16" />
                  </svg>
                  <span className="uppercase tracking-wider text-[11px] sm:text-xs">Izq</span>
                </button>
                <button
                  type="button"
                  onClick={() => updateBlockAlignment(block.id, 'center')}
                  className={`group px-3.5 py-2 text-xs sm:text-sm rounded-lg font-semibold transition-all flex items-center gap-1.5 border ${
                    block.alignment === 'center' 
                      ? 'bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-600/30' 
                      : 'bg-[#0a0a0a] text-gray-400 border-gray-800 hover:border-purple-600/50 hover:text-purple-400'
                  }`}
                  title="Centrar"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M7 12h10M4 18h16" />
                  </svg>
                  <span className="uppercase tracking-wider text-[11px] sm:text-xs">Centro</span>
                </button>
                <button
                  type="button"
                  onClick={() => updateBlockAlignment(block.id, 'right')}
                  className={`group px-3.5 py-2 text-xs sm:text-sm rounded-lg font-semibold transition-all flex items-center gap-1.5 border ${
                    block.alignment === 'right' 
                      ? 'bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-600/30' 
                      : 'bg-[#0a0a0a] text-gray-400 border-gray-800 hover:border-purple-600/50 hover:text-purple-400'
                  }`}
                  title="Alinear derecha"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M10 12h10M4 18h16" />
                  </svg>
                  <span className="uppercase tracking-wider text-[11px] sm:text-xs">Der</span>
                </button>
              </div>
              <span className="hidden sm:inline-flex text-[11px] text-gray-500 font-semibold uppercase tracking-wide bg-gray-900 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5">
                <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 6v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                Video
              </span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <HelpInstructions isOpen={showHelp} onToggle={() => setShowHelp(!showHelp)} />

      {/* Editor Container con mejor diseño */}
      <div className="bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#0a0a0a] border-2 border-gray-800 rounded-2xl p-5 sm:p-7 shadow-2xl">
        {/* Header del Editor */}
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-corporate-red to-red-700 rounded-xl p-2.5 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white leading-tight">Editor de Bloques</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Arrastre para reorganizar • {blocks.length} {blocks.length === 1 ? 'bloque' : 'bloques'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-[#0a0a0a] border border-gray-800 rounded-lg px-3 py-1.5">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider">Editando</span>
          </div>
        </div>

        {/* Área de bloques */}
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={blocks.map(b => b.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-6">
              {blocks.map((block, index) => (
                <SortableBlock
                  key={block.id}
                  block={block}
                  index={index}
                  renderBlock={renderBlock}
                  deleteBlock={deleteBlock}
                  blocksLength={blocks.length}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>

      {/* Media Modal */}
      {showMediaModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-[#0a0a0a] to-[#141414] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-800">
            {/* Header mejorado */}
            <div className="p-6 border-b border-gray-800 flex items-center justify-between sticky top-0 bg-gradient-to-r from-[#1a1a1a] to-[#141414] z-10 rounded-t-2xl">
              <div className="flex items-center gap-4">
                <div className="bg-corporate-red/20 rounded-xl p-3">
                  {mediaType === 'image' ? (
                    <svg className="w-7 h-7 text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-7 h-7 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">
                    {mediaType === 'image' ? 'Insertar Imagen' : 'Insertar Video'}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {mediaType === 'image' ? 'Agregue imágenes desde archivo o URL' : 'Inserte videos de YouTube o Vimeo'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowMediaModal(false)}
                className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {mediaType === 'image' ? (
                <>
                  {/* Upload desde archivo */}
                  <div className="bg-[#1a1a1a] border-2 border-gray-800 rounded-xl p-5 hover:border-corporate-red/50 transition-all">
                    <label className="block mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-corporate-red/20 rounded-lg p-2">
                          <svg className="w-5 h-5 text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-sm font-bold text-white">Subir Archivo</span>
                          <p className="text-xs text-gray-500 mt-0.5">Seleccione una imagen de su computadora</p>
                        </div>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleMediaUpload}
                        className="block w-full text-sm text-gray-400 
                          file:mr-4 file:py-3 file:px-6 
                          file:rounded-lg file:border-0 
                          file:text-sm file:font-bold
                          file:bg-gradient-to-r file:from-corporate-red file:to-red-700 
                          file:text-white hover:file:from-red-700 hover:file:to-corporate-red
                          file:cursor-pointer file:transition-all file:shadow-lg hover:file:shadow-xl"
                      />
                    </label>
                  </div>

                  {/* Separador */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-800"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-full text-xs uppercase tracking-wider">
                        O bien use URL
                      </span>
                    </div>
                  </div>

                  {/* URL desde internet */}
                  <div className="bg-[#1a1a1a] border-2 border-gray-800 rounded-xl p-5 hover:border-blue-600/50 transition-all">
                    <label className="block">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-600/20 rounded-lg p-2">
                          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-sm font-bold text-white">URL de Imagen</span>
                          <p className="text-xs text-gray-500 mt-0.5">Pegue la dirección web de la imagen</p>
                        </div>
                      </div>
                      <input
                        type="url"
                        value={mediaUrl}
                        onChange={(e) => {
                          setMediaUrl(e.target.value);
                          setMediaFile(null);
                        }}
                        placeholder="https://ejemplo.com/imagen.jpg"
                        className="w-full px-4 py-3.5 bg-[#0a0a0a] border-2 border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-white placeholder:text-gray-600"
                      />
                    </label>
                  </div>
                </>
              ) : (
                <div className="bg-[#1a1a1a] border-2 border-gray-800 rounded-xl p-5 hover:border-blue-600/50 transition-all">
                  <label className="block">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-600/20 rounded-lg p-2">
                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm font-bold text-white">URL de Video</span>
                        <p className="text-xs text-gray-500 mt-0.5">YouTube, Vimeo u otras plataformas</p>
                      </div>
                    </div>
                    <input
                      type="url"
                      value={mediaUrl}
                      onChange={(e) => setMediaUrl(e.target.value)}
                      placeholder="https://www.youtube.com/watch?v=..."
                      className="w-full px-4 py-3.5 bg-[#0a0a0a] border-2 border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-white placeholder:text-gray-600"
                    />
                    <div className="mt-3 flex items-start gap-2 bg-blue-600/10 border border-blue-600/30 p-3 rounded-lg">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <p className="text-xs text-blue-300">
                        Copie y pegue el enlace completo de YouTube, por ejemplo: https://www.youtube.com/watch?v=dQw4w9WgXcQ
                      </p>
                    </div>
                  </label>
                </div>
              )}

              {/* Descripción */}
              <div className="bg-[#1a1a1a] border-2 border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-all">
                <label className="block">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gray-700/40 rounded-lg p-2">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white">Descripción</span>
                      <p className="text-xs text-gray-500 mt-0.5">Opcional - Texto que aparecerá debajo</p>
                    </div>
                  </div>
                  <input
                    type="text"
                    value={mediaCaption}
                    onChange={(e) => setMediaCaption(e.target.value)}
                    placeholder="Texto descriptivo que aparecerá debajo del contenido"
                    className="w-full px-4 py-3.5 bg-[#0a0a0a] border-2 border-gray-800 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all text-white placeholder:text-gray-600"
                  />
                </label>
              </div>

              {/* Preview */}
              {(mediaFile || mediaUrl) && (
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-green-600/20 rounded-lg p-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-white">Vista Previa</span>
                  </div>
                  {mediaType === 'image' ? (
                    <img src={mediaFile || mediaUrl} alt="Preview" className="max-h-80 mx-auto rounded-lg shadow-2xl border border-gray-700" />
                  ) : (
                    <div className="relative pb-[56.25%] rounded-lg overflow-hidden shadow-2xl border border-gray-700">
                      <iframe
                        src={getYouTubeEmbedUrl(mediaUrl)}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                      />
                    </div>
                  )}
                  {mediaCaption && (
                    <p className="text-sm text-gray-400 mt-4 italic text-center bg-[#0a0a0a] border border-gray-800 p-3 rounded-lg">{mediaCaption}</p>
                  )}
                </div>
              )}
            </div>

            {/* Footer con botones */}
            <div className="p-6 border-t border-gray-800 flex justify-end gap-3 sticky bottom-0 bg-gradient-to-r from-[#1a1a1a] to-[#141414] rounded-b-2xl">
              <button
                onClick={() => setShowMediaModal(false)}
                className="px-6 py-3 border-2 border-gray-800 text-gray-300 rounded-lg font-bold hover:bg-gray-800 hover:text-white transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={insertMedia}
                disabled={!mediaFile && !mediaUrl}
                className="px-6 py-3 bg-gradient-to-r from-corporate-red to-red-700 text-white rounded-lg font-bold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Insertar {mediaType === 'image' ? 'Imagen' : 'Video'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RichContentEditor;
