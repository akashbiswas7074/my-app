import React, { useState } from 'react';
import AB from "./13.png"
const ZoomableImage = ({ src, alt }) => {
  const [scale, setScale] = useState(1);

  const handlePinch = (event) => {
    const newScale = Math.min(Math.max(1, scale * event.scale), 3);
    setScale(newScale);
  };

  const handleDoubleTap = () => {
    const newScale = scale === 1 ? 2 : 1;
    setScale(newScale);
  };

  return (
    <div
      style={{
        overflow: 'hidden',
        touchAction: 'manipulation', // Enable touch events
        userSelect: 'none', // Disable text selection
      }}
    >
      <img
        src={AB}
        alt={alt}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: '0 0', // Zoom from the top-left corner
          transition: 'transform 0.2s ease-out',
          width: '100%',
          height: 'auto',
          cursor: 'pointer',
        }}
        onTouchMove={(e) => e.preventDefault()} // Prevent scrolling while zooming
        onTouchStart={(e) => {
          if (e.touches.length === 2) {
            // Pinch gesture
            const distance = Math.hypot(
              e.touches[0].clientX - e.touches[1].clientX,
              e.touches[0].clientY - e.touches[1].clientY
            );
            e.pinchDistance = distance;
          }
        }}
        onTouchMove={(e) => {
          if (e.touches.length === 2) {
            // Pinch gesture
            const distance = Math.hypot(
              e.touches[0].clientX - e.touches[1].clientX,
              e.touches[0].clientY - e.touches[1].clientY
            );
            e.scale = distance / e.pinchDistance;
            handlePinch(e);
          }
        }}
        onTouchEnd={() => {
          if (scale !== 1) {
            // Reset scale after pinch
            setScale(1);
          }
        }}
        onClick={handleDoubleTap} // Double tap for zooming
      />
    </div>
  );
};

export default ZoomableImage;
