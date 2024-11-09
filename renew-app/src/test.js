import React, { useRef, useEffect } from 'react';

/**
 * Renders an RGB GeoTiff image into an HTML canvas in a React component.
 *
 * The GeoTiff image must include 3 rasters (bands) which correspond to 
 * [Red, Green, Blue] in that order.
 *
 * @param {Object} props
 * @param {GeoTiff} props.rgb GeoTiff with RGB values of the image.
 * @param {GeoTiff} [props.mask] Optional mask for transparency, defaults to opaque.
 * @returns {JSX.Element} Canvas element with the rendered image.
 */
function RGBCanvas({ rgb, mask }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!rgb || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions based on the mask or RGB data layer size.
    canvas.width = mask ? mask.width : rgb.width;
    canvas.height = mask ? mask.height : rgb.height;

    // Calculate scale factors for RGB layers if different from canvas dimensions.
    const dw = rgb.width / canvas.width;
    const dh = rgb.height / canvas.height;

    // Create a blank ImageData object.
    const img = ctx.createImageData(canvas.width, canvas.height);

    // Populate ImageData with RGB values from the GeoTiff data.
    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const rgbIdx = Math.floor(y * dh) * rgb.width + Math.floor(x * dw);
        const maskIdx = y * canvas.width + x;
        const imgIdx = (y * canvas.width + x) * 4;

        img.data[imgIdx + 0] = rgb.rasters[0][rgbIdx]; // Red
        img.data[imgIdx + 1] = rgb.rasters[1][rgbIdx]; // Green
        img.data[imgIdx + 2] = rgb.rasters[2][rgbIdx]; // Blue
        img.data[imgIdx + 3] = mask 
          ? mask.rasters[0][maskIdx] * 255 // Alpha from mask
          : 255; // Default to opaque
      }
    }

    // Draw ImageData onto the canvas.
    ctx.putImageData(img, 0, 0);
  }, [rgb, mask]); // Re-render when rgb or mask data changes

  return <canvas ref={canvasRef} />;
}

export default RGBCanvas;