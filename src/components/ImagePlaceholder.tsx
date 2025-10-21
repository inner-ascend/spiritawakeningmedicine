interface ImagePlaceholderProps {
  aspectRatio?: '16/9' | '21/9' | '3/4' | '4/5' | '1/1' | '16/6' | '2/3';
  altText?: string;
  className?: string;
  caption?: string;
}

export default function ImagePlaceholder({
  aspectRatio = '16/9',
  altText = 'Image placeholder',
  className = '',
  caption
}: ImagePlaceholderProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="w-full bg-gradient-to-br from-desert-sand/30 via-sacred-cream to-desert-clay/20 rounded-2xl overflow-hidden relative"
        style={{ aspectRatio }}
      >
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 123, 110, 0.3) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>

        {/* Center icon/text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-earth-700/30">
            <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm font-sans">{altText}</p>
          </div>
        </div>
      </div>

      {caption && (
        <p className="text-sm text-earth-700/60 italic mt-3 text-center">{caption}</p>
      )}
    </div>
  );
}
