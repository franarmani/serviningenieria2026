import React from 'react';

const RichContentRenderer = ({ content }) => {
  // Handle legacy content (string) or new content (blocks array)
  if (typeof content === 'string') {
    // Legacy content - render as paragraphs
    return (
      <div className="prose max-w-none">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-corporate-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  // New block-based content
  if (!Array.isArray(content)) {
    return null;
  }

  const getYouTubeEmbedUrl = (url) => {
    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s]+)/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : url;
  };

  return (
    <div className="space-y-8">
      {content.map((block, index) => {
        switch (block.type) {
          case 'text':
            if (!block.content || block.content.trim() === '') return null;
            return (
              <div key={block.id || index} className="prose max-w-none">
                {block.content.split('\n').map((line, lineIndex) => (
                  line.trim() ? (
                    <p key={lineIndex} className="mb-4 text-corporate-gray-700 leading-relaxed text-lg">
                      {line}
                    </p>
                  ) : (
                    <br key={lineIndex} />
                  )
                ))}
              </div>
            );

          case 'image':
            return (
              <div 
                key={block.id || index} 
                className={`flex my-8 ${
                  block.alignment === 'center' ? 'justify-center' : 
                  block.alignment === 'right' ? 'justify-end' : 
                  'justify-start'
                }`}
              >
                <figure className="max-w-4xl">
                  <img 
                    src={block.src} 
                    alt={block.caption || `Imagen ${index + 1}`} 
                    className="rounded-lg shadow-xl w-full hover:shadow-2xl transition-shadow duration-300"
                  />
                  {block.caption && (
                    <figcaption className="mt-3 text-sm text-corporate-gray-600 italic text-center bg-corporate-gray-50 p-3 rounded">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              </div>
            );

          case 'video':
            return (
              <div 
                key={block.id || index} 
                className={`flex my-8 ${
                  block.alignment === 'center' ? 'justify-center' : 
                  block.alignment === 'right' ? 'justify-end' : 
                  'justify-start'
                }`}
              >
                <figure className="w-full max-w-4xl">
                  <div className="relative pb-[56.25%] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <iframe
                      src={getYouTubeEmbedUrl(block.src)}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={block.caption || `Video ${index + 1}`}
                    />
                  </div>
                  {block.caption && (
                    <figcaption className="mt-3 text-sm text-corporate-gray-600 italic text-center bg-corporate-gray-50 p-3 rounded">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default RichContentRenderer;
