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
      {/* Drag Handle - SIEMPRE VISIBLE */}
      <div className="absolute -left-14 top-1/2 -translate-y-1/2 z-20">
        <div
          {...listeners}
          {...attributes}
          className={`bg-corporate-red text-white p-3 rounded-lg cursor-move hover:bg-corporate-accent transition-all shadow-lg hover:scale-110 ${
            isDragging ? 'scale-125 bg-corporate-accent' : ''
          }`}
          title="☰ ARRASTRAR para mover este bloque arriba o abajo"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </div>
        <div className="text-xs text-corporate-gray-600 font-bold mt-1 text-center">
          MOVER
        </div>
      </div>

      {/* Delete Button - SIEMPRE VISIBLE */}
      <div className="absolute -right-14 top-1/2 -translate-y-1/2 z-20">
        <button
          type="button"
          onClick={() => deleteBlock(block.id)}
          disabled={blocksLength === 1}
          className="bg-corporate-red text-white p-3 rounded-lg hover:bg-corporate-accent transition-all shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110"
          title="🗑️ ELIMINAR este bloque"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="text-xs text-corporate-gray-600 font-bold mt-1 text-center">
          BORRAR
        </div>
      </div>

      {/* Block Number Badge */}
      <div className="absolute -top-3 -left-3 bg-corporate-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg z-10">
        {index + 1}
      </div>

      {renderBlock(block, index)}
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
    
    // Fallback for any other case
    return [{ id: '1', type: 'text', content: '' }];
  });

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
          <div className="bg-white border-2 border-corporate-gray-300 rounded-lg p-5 hover:border-corporate-red transition-all shadow-md hover:shadow-xl">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-corporate-gray-200">
              <span className="text-2xl">✏️</span>
              <span className="font-display font-bold text-corporate-gray-700">Bloque de Texto</span>
            </div>
            <textarea
              value={block.content}
              onChange={(e) => updateBlockContent(block.id, e.target.value)}
              placeholder="✍️ Escriba su texto aquí... Presione Enter para nuevos párrafos."
              className="w-full min-h-[150px] p-4 border-2 border-corporate-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-corporate-red resize-y text-corporate-gray-800 leading-relaxed text-lg"
            />
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-corporate-gray-200">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => openMediaModal(index, 'image')}
                  className="px-4 py-2 text-sm bg-corporate-red/10 text-corporate-red rounded-lg hover:bg-corporate-red/20 transition-colors flex items-center gap-2 font-display font-semibold"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  Imagen
                </button>
                <button
                  type="button"
                  onClick={() => openMediaModal(index, 'video')}
                  className="px-4 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-2 font-display font-semibold"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  Video
                </button>
                <button
                  type="button"
                  onClick={() => addTextBlock(index)}
                  className="px-4 py-2 text-sm bg-corporate-gray-100 text-corporate-gray-700 rounded-lg hover:bg-corporate-gray-200 transition-colors flex items-center gap-2 font-display font-semibold"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Texto
                </button>
              </div>
              <span className="text-sm text-corporate-gray-500 font-display">✏️ Texto</span>
            </div>
          </div>
        );

      case 'image':
        return (
          <div className="bg-white border-2 border-corporate-gray-300 rounded-lg p-5 hover:border-corporate-red transition-all shadow-md hover:shadow-xl">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-corporate-gray-200">
              <span className="text-2xl">📷</span>
              <span className="font-display font-bold text-corporate-gray-700">Bloque de Imagen</span>
            </div>
            <div className={`flex ${block.alignment === 'center' ? 'justify-center' : block.alignment === 'right' ? 'justify-end' : 'justify-start'}`}>
              <div className="max-w-3xl">
                <img 
                  src={block.src} 
                  alt={block.caption || 'Imagen del artículo'} 
                  className="rounded-lg shadow-lg w-full hover:shadow-xl transition-shadow" 
                />
                {block.caption && (
                  <p className="text-sm text-corporate-gray-600 mt-3 italic text-center bg-corporate-gray-50 p-2 rounded">{block.caption}</p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-corporate-gray-200">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => updateBlockAlignment(block.id, 'left')}
                  className={`px-3 py-2 text-sm rounded-lg font-display font-semibold transition-colors ${block.alignment === 'left' ? 'bg-corporate-red text-white' : 'bg-corporate-gray-100 text-corporate-gray-700 hover:bg-corporate-gray-200'}`}
                  title="Alinear izquierda"
                >
                  ⬅️ Izq
                </button>
                <button
                  type="button"
                  onClick={() => updateBlockAlignment(block.id, 'center')}
                  className={`px-3 py-2 text-sm rounded-lg font-display font-semibold transition-colors ${block.alignment === 'center' ? 'bg-corporate-red text-white' : 'bg-corporate-gray-100 text-corporate-gray-700 hover:bg-corporate-gray-200'}`}
                  title="Centrar"
                >
                  ↔️ Centro
                </button>
                <button
                  type="button"
                  onClick={() => updateBlockAlignment(block.id, 'right')}
                  className={`px-3 py-2 text-sm rounded-lg font-display font-semibold transition-colors ${block.alignment === 'right' ? 'bg-corporate-red text-white' : 'bg-corporate-gray-100 text-corporate-gray-700 hover:bg-corporate-gray-200'}`}
                  title="Alinear derecha"
                >
                  Der ➡️
                </button>
              </div>
              <span className="text-sm text-corporate-gray-500 font-display">📷 Imagen</span>
            </div>
          </div>
        );

      case 'video':
        return (
          <div className="bg-white border-2 border-corporate-gray-300 rounded-lg p-5 hover:border-corporate-red transition-all shadow-md hover:shadow-xl">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-corporate-gray-200">
              <span className="text-2xl">🎥</span>
              <span className="font-display font-bold text-corporate-gray-700">Bloque de Video</span>
            </div>
            <div className={`flex ${block.alignment === 'center' ? 'justify-center' : block.alignment === 'right' ? 'justify-end' : 'justify-start'}`}>
              <div className="w-full max-w-4xl">
                <div className="relative pb-[56.25%] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <iframe
                    src={getYouTubeEmbedUrl(block.src)}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {block.caption && (
                  <p className="text-sm text-corporate-gray-600 mt-3 italic text-center bg-corporate-gray-50 p-2 rounded">{block.caption}</p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-corporate-gray-200">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => updateBlockAlignment(block.id, 'left')}
                  className={`px-3 py-2 text-sm rounded-lg font-display font-semibold transition-colors ${block.alignment === 'left' ? 'bg-corporate-red text-white' : 'bg-corporate-gray-100 text-corporate-gray-700 hover:bg-corporate-gray-200'}`}
                  title="Alinear izquierda"
                >
                  ⬅️ Izq
                </button>
                <button
                  type="button"
                  onClick={() => updateBlockAlignment(block.id, 'center')}
                  className={`px-3 py-2 text-sm rounded-lg font-display font-semibold transition-colors ${block.alignment === 'center' ? 'bg-corporate-red text-white' : 'bg-corporate-gray-100 text-corporate-gray-700 hover:bg-corporate-gray-200'}`}
                  title="Centrar"
                >
                  ↔️ Centro
                </button>
                <button
                  type="button"
                  onClick={() => updateBlockAlignment(block.id, 'right')}
                  className={`px-3 py-2 text-sm rounded-lg font-display font-semibold transition-colors ${block.alignment === 'right' ? 'bg-corporate-red text-white' : 'bg-corporate-gray-100 text-corporate-gray-700 hover:bg-corporate-gray-200'}`}
                  title="Alinear derecha"
                >
                  Der ➡️
                </button>
              </div>
              <span className="text-sm text-corporate-gray-500 font-display">🎥 Video</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-3 shadow-md">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-display font-bold text-blue-900 mb-3 text-xl flex items-center gap-2">
              ✨ Editor de Contenido Enriquecido con Drag & Drop
            </h4>
            <div className="bg-white rounded-lg p-4 mb-3 border-2 border-blue-200">
              <p className="text-blue-900 font-bold mb-2 text-lg">🎯 Cómo Reorganizar Bloques (Drag & Drop):</p>
              <ol className="list-decimal list-inside space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold min-w-[20px]">1.</span>
                  <span>Haga <strong>clic y mantenga presionado</strong> el botón rojo <span className="inline-block bg-corporate-red text-white px-2 py-1 rounded text-xs">☰ MOVER</span> a la izquierda de cualquier bloque</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold min-w-[20px]">2.</span>
                  <span><strong>Arrastre</strong> el bloque hacia arriba o abajo mientras mantiene presionado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold min-w-[20px]">3.</span>
                  <span><strong>Suelte</strong> cuando el bloque esté en la posición deseada</span>
                </li>
              </ol>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">☰</span>
                  <span className="font-bold text-blue-900">MOVER (Drag)</span>
                </div>
                <p className="text-sm text-blue-700">Click + arrastre para reorganizar</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">📷</span>
                  <span className="font-bold text-blue-900">Medios</span>
                </div>
                <p className="text-sm text-blue-700">Agregue imágenes y videos</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">⬅️↔️➡️</span>
                  <span className="font-bold text-blue-900">Alinear</span>
                </div>
                <p className="text-sm text-blue-700">Posicione sus medios</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-red-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">🗑️</span>
                  <span className="font-bold text-red-900">BORRAR</span>
                </div>
                <p className="text-sm text-corporate-accent">Elimine bloques innecesarios</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={blocks.map(b => b.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-6 bg-corporate-gray-50 p-6 rounded-xl border-2 border-dashed border-corporate-gray-300">
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 mb-4">
              <p className="text-yellow-900 font-bold text-center text-lg">
                👇 Haga clic en el botón <span className="inline-block bg-corporate-red text-white px-3 py-1 rounded mx-1">☰ MOVER</span> y arrastre para reorganizar los bloques 👇
              </p>
            </div>
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

      {/* Media Modal */}
      {showMediaModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 border-b border-corporate-gray-200 flex items-center justify-between sticky top-0 bg-white z-10 rounded-t-xl">
              <h3 className="font-display text-2xl font-bold text-corporate-black flex items-center gap-2">
                {mediaType === 'image' ? '📷 Insertar Imagen' : '🎥 Insertar Video'}
              </h3>
              <button
                onClick={() => setShowMediaModal(false)}
                className="text-corporate-gray-500 hover:text-corporate-black transition-colors p-2 hover:bg-corporate-gray-100 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {mediaType === 'image' ? (
                <>
                  <div>
                    <label className="block text-sm font-display font-bold text-corporate-black mb-3">
                      📁 Subir Archivo desde su Computadora
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleMediaUpload}
                      className="block w-full text-sm text-corporate-gray-600 
                        file:mr-4 file:py-3 file:px-6 
                        file:rounded-lg file:border-0 
                        file:text-sm file:font-bold file:font-display
                        file:bg-gradient-to-r file:from-corporate-red file:to-corporate-accent 
                        file:text-white hover:file:from-corporate-accent hover:file:to-corporate-red
                        file:cursor-pointer file:transition-all file:shadow-md hover:file:shadow-lg"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t-2 border-corporate-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-corporate-gray-600 font-display font-semibold">O BIEN</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-display font-bold text-corporate-black mb-3">
                      🌐 URL de Imagen desde Internet
                    </label>
                    <input
                      type="url"
                      value={mediaUrl}
                      onChange={(e) => {
                        setMediaUrl(e.target.value);
                        setMediaFile(null);
                      }}
                      placeholder="https://ejemplo.com/imagen.jpg"
                      className="w-full px-4 py-3 border-2 border-corporate-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-corporate-red transition-all"
                    />
                  </div>
                </>
              ) : (
                <div>
                  <label className="block text-sm font-display font-bold text-corporate-black mb-3">
                    🎬 URL de Video (YouTube, Vimeo)
                  </label>
                  <input
                    type="url"
                    value={mediaUrl}
                    onChange={(e) => setMediaUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full px-4 py-3 border-2 border-corporate-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-corporate-red transition-all"
                  />
                  <p className="text-xs text-corporate-gray-600 mt-2 bg-blue-50 p-3 rounded-lg">
                    💡 <strong>Tip:</strong> Copie y pegue el enlace completo de YouTube, por ejemplo: https://www.youtube.com/watch?v=dQw4w9WgXcQ
                  </p>
                </div>
              )}

              <div>
                <label className="block text-sm font-display font-bold text-corporate-black mb-3">
                  ✍️ Descripción (Opcional)
                </label>
                <input
                  type="text"
                  value={mediaCaption}
                  onChange={(e) => setMediaCaption(e.target.value)}
                  placeholder="Texto descriptivo que aparecerá debajo del contenido"
                  className="w-full px-4 py-3 border-2 border-corporate-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-corporate-red transition-all"
                />
              </div>

              {/* Preview */}
              {(mediaFile || mediaUrl) && (
                <div className="border-2 border-corporate-gray-300 rounded-lg p-4 bg-corporate-gray-50">
                  <p className="text-sm font-display font-bold text-corporate-black mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    Vista Previa:
                  </p>
                  {mediaType === 'image' ? (
                    <img src={mediaFile || mediaUrl} alt="Preview" className="max-h-80 mx-auto rounded-lg shadow-lg" />
                  ) : (
                    <div className="relative pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src={getYouTubeEmbedUrl(mediaUrl)}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                      />
                    </div>
                  )}
                  {mediaCaption && (
                    <p className="text-sm text-corporate-gray-600 mt-3 italic text-center">{mediaCaption}</p>
                  )}
                </div>
              )}
            </div>

            <div className="p-6 border-t border-corporate-gray-200 flex justify-end gap-3 sticky bottom-0 bg-white rounded-b-xl">
              <button
                onClick={() => setShowMediaModal(false)}
                className="px-6 py-3 border-2 border-corporate-gray-300 text-corporate-gray-700 rounded-lg font-display font-bold hover:bg-corporate-gray-50 transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={insertMedia}
                disabled={!mediaFile && !mediaUrl}
                className="px-6 py-3 bg-gradient-to-r from-corporate-red to-corporate-accent text-white rounded-lg font-display font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                ✓ Insertar {mediaType === 'image' ? 'Imagen' : 'Video'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RichContentEditor;
