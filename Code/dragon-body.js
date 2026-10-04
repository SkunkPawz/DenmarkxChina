/* Bend one illustrated skin strip along the dragon's continuous spine. */
(function () {
  'use strict';

  const boundsCache = new WeakMap();

  function textureBounds(image) {
    const sourceWidth = image.naturalWidth || image.width;
    const sourceHeight = image.naturalHeight || image.height;
    const specified = image.dragonTextureBounds;
    if (specified && specified.width > 0 && specified.height > 0) {
      return specified;
    }
    if (boundsCache.has(image)) return boundsCache.get(image);

    let bounds = { x: 0, y: 0, width: sourceWidth, height: sourceHeight };
    try {
      // A small temporary bitmap is enough to find transparent outer margins.
      const ratio = Math.min(1, 768 / Math.max(sourceWidth, sourceHeight));
      const probe = document.createElement('canvas');
      probe.width = Math.max(1, Math.round(sourceWidth * ratio));
      probe.height = Math.max(1, Math.round(sourceHeight * ratio));
      const context = probe.getContext('2d', { willReadFrequently: true });
      context.drawImage(image, 0, 0, probe.width, probe.height);
      const pixels = context.getImageData(0, 0, probe.width, probe.height).data;
      let left = probe.width, top = probe.height, right = -1, bottom = -1;
      for (let y = 0; y < probe.height; y++) {
        for (let x = 0; x < probe.width; x++) {
          if (pixels[(y * probe.width + x) * 4 + 3] < 14) continue;
          left = Math.min(left, x); right = Math.max(right, x);
          top = Math.min(top, y); bottom = Math.max(bottom, y);
        }
      }
      if (right >= left && bottom >= top) {
        const scaleX = sourceWidth / probe.width;
        const scaleY = sourceHeight / probe.height;
        const x = Math.max(0, Math.floor((left - 1) * scaleX));
        const y = Math.max(0, Math.floor((top - 1) * scaleY));
        bounds = {
          x, y,
          width: Math.min(sourceWidth, Math.ceil((right + 2) * scaleX)) - x,
          height: Math.min(sourceHeight, Math.ceil((bottom + 2) * scaleY)) - y
        };
      }
    } catch (_) {
      // Some file:// browsers disallow pixel reads. Drawing still works, and
      // callers can provide dragonTextureBounds to remove transparent margins.
    }
    boundsCache.set(image, bounds);
    return bounds;
  }

  function prepareCanvas(canvas, width, height) {
    // One bitmap pixel per CSS pixel keeps a whole-page ribbon inexpensive.
    const targetWidth = Math.max(1, Math.ceil(width));
    const targetHeight = Math.max(1, Math.ceil(height));
    if (canvas.width !== targetWidth) canvas.width = targetWidth;
    if (canvas.height !== targetHeight) canvas.height = targetHeight;
    const context = canvas.getContext('2d');
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, targetWidth, targetHeight);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';
    return context;
  }

  function smoothstep(value) {
    const clamped = Math.max(0, Math.min(1, value));
    return clamped * clamped * (3 - 2 * clamped);
  }

  window.renderDragonBody = function (backCanvas, frontCanvas, route, textureImage, width, frontRanges, w, h) {
    const back = prepareCanvas(backCanvas, w, h);
    const front = prepareCanvas(frontCanvas, w, h);
    const length = route.getTotalLength();
    if (!(length > 0 && width > 0 && (textureImage.naturalWidth || textureImage.width))) {
      return { length, slices: 0 };
    }

    const crop = textureBounds(textureImage);
    const step = 8;
    const overlap = 2;
    const sourcePerPixel = crop.height / width;
    let slices = 0;

    for (let distance = 0; distance < length; distance += step) {
      const span = Math.min(step, length - distance);
      const center = distance + span / 2;
      const point = route.getPointAtLength(center);
      const before = route.getPointAtLength(Math.max(0, center - 3));
      const after = route.getPointAtLength(Math.min(length, center + 3));
      const angle = Math.atan2(after.y - before.y, after.x - before.x);

      const neck = 0.75 + 0.25 * smoothstep(center / 80);
      const fullness = 1 + 0.035 * Math.sin(center / 270) + 0.018 * Math.sin(center / 91);
      const tail = smoothstep((length - center) / 85);
      const diameter = width * neck * fullness * Math.max(0.018, tail);
      const drawWidth = span + overlap * 2;
      const sourceSpan = drawWidth * sourcePerPixel;
      let sourceX = ((distance - overlap) * sourcePerPixel % crop.width + crop.width) % crop.width;

      back.save();
      back.translate(point.x, point.y);
      back.rotate(angle);
      // Match the head's right-hand belly at the downward neck; this also
      // keeps the belly below the scales on the first sweeping crossing.
      back.scale(1, -1);

      // Keep the scale size consistent in both axes. When a strip repeats,
      // split a slice at its image edge instead of stretching its final pixels.
      let remaining = sourceSpan;
      let destinationX = -drawWidth / 2;
      while (remaining > 0.001) {
        const sourcePart = Math.min(remaining, crop.width - sourceX);
        const destinationPart = sourcePart / sourcePerPixel;
        back.drawImage(textureImage,
          crop.x + sourceX, crop.y, sourcePart, crop.height,
          destinationX, -diameter / 2, destinationPart, diameter);
        destinationX += destinationPart;
        remaining -= sourcePart;
        sourceX = 0;
      }
      back.restore();
      slices++;
    }

    // Both depth layers share identical pixels, so there can be no body jumps
    // where it emerges from behind a panel.
    if (frontRanges && frontRanges.length) {
      front.save();
      front.beginPath();
      frontRanges.forEach(range => {
        if (range.height > 0) front.rect(0, range.y, w, range.height);
      });
      front.clip();
      front.drawImage(backCanvas, 0, 0);
      front.restore();
    }
    return { length, slices, textureBounds: crop };
  };
})();
