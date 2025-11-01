interface ImagePlaceholderProps {
  aspectRatio?: '16/9' | '21/9' | '3/4' | '4/5' | '1/1' | '16/6' | '2/3';
  altText?: string;
  className?: string;
  caption?: string;
}

// Helper function to get placeholder image URL based on alt text
function getPlaceholderImage(altText: string, aspectRatio: string): string {
  const lowerAlt = altText.toLowerCase();

  // Determine dimensions based on aspect ratio
  let width = 1200;
  let height = 800;

  switch(aspectRatio) {
    case '21/9':
      width = 2100;
      height = 900;
      break;
    case '16/9':
      width = 1600;
      height = 900;
      break;
    case '4/5':
      width = 1000;
      height = 1250;
      break;
    case '3/4':
      width = 1200;
      height = 1600;
      break;
    case '1/1':
      width = 1000;
      height = 1000;
      break;
    case '16/6':
      width = 1600;
      height = 600;
      break;
    case '2/3':
      width = 1000;
      height = 1500;
      break;
  }

  // Map keywords to Unsplash search terms
  if (lowerAlt.includes('portrait') || lowerAlt.includes('nina') || lowerAlt.includes('astral') || lowerAlt.includes('facilitator')) {
    // Portrait/person images
    return `https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=${width}&h=${height}&fit=crop&q=80`;
  } else if (lowerAlt.includes('desert') || lowerAlt.includes('sonoran')) {
    // Desert landscapes
    return `https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=${width}&h=${height}&fit=crop&q=80`;
  } else if (lowerAlt.includes('toad') || lowerAlt.includes('bufo')) {
    // Toad/amphibian
    return `https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=${width}&h=${height}&fit=crop&q=80`;
  } else if (lowerAlt.includes('beach') || lowerAlt.includes('mazunte') || lowerAlt.includes('ocean') || lowerAlt.includes('sunset')) {
    // Beach/ocean scenes
    return `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=${width}&h=${height}&fit=crop&q=80`;
  } else if (lowerAlt.includes('ceremony') || lowerAlt.includes('sacred')) {
    // Ceremony/sacred space
    return `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=${width}&h=${height}&fit=crop&q=80`;
  } else if (lowerAlt.includes('meditation') || lowerAlt.includes('altar')) {
    // Meditation/altar
    return `https://images.unsplash.com/photo-1545389336-cf090694435e?w=${width}&h=${height}&fit=crop&q=80`;
  } else if (lowerAlt.includes('breathwork') || lowerAlt.includes('meditative')) {
    // Meditation/yoga
    return `https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=${width}&h=${height}&fit=crop&q=80`;
  } else if (lowerAlt.includes('integration') || lowerAlt.includes('circle') || lowerAlt.includes('group')) {
    // Group/community
    return `https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=${width}&h=${height}&fit=crop&q=80`;
  } else if (lowerAlt.includes('journal') || lowerAlt.includes('nature')) {
    // Nature/reflection
    return `https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=${width}&h=${height}&fit=crop&q=80`;
  } else if (lowerAlt.includes('retreat') || lowerAlt.includes('space')) {
    // Retreat space
    return `https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=${width}&h=${height}&fit=crop&q=80`;
  } else if (lowerAlt.includes('entrance')) {
    // Sacred entrance
    return `https://images.unsplash.com/photo-1519681393784-d120267933ba?w=${width}&h=${height}&fit=crop&q=80`;
  } else {
    // Default nature scene
    return `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=${width}&h=${height}&fit=crop&q=80`;
  }
}

export default function ImagePlaceholder({
  aspectRatio = '16/9',
  altText = 'Image placeholder',
  className = '',
  caption
}: ImagePlaceholderProps) {
  const imageUrl = getPlaceholderImage(altText, aspectRatio);

  return (
    <div className={`relative ${className}`}>
      <div
        className="w-full bg-gradient-to-br from-desert-sand/30 via-sacred-cream to-desert-clay/20 overflow-hidden relative"
        style={{ aspectRatio }}
      >
        {/* Actual placeholder image */}
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Overlay to indicate it's a placeholder */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/40 via-transparent to-transparent pointer-events-none"></div>

        {/* Small indicator badge */}
        <div className="absolute top-4 right-4 bg-earth-900/80 backdrop-blur-sm text-sacred-gold text-xs px-3 py-1 rounded-full font-medium">
          Placeholder
        </div>
      </div>

      {caption && (
        <p className="text-sm text-earth-700/60 italic mt-3 text-center">{caption}</p>
      )}
    </div>
  );
}
