'use client';

import React, { ImgHTMLAttributes, useMemo } from 'react';

export interface PrideFlagCustomProps extends ImgHTMLAttributes<HTMLImageElement> {
  colors: [string, number][];
  rounded?: boolean;
  width?: number;
  height?: number;
}

export const PrideFlagCustom: React.FC<PrideFlagCustomProps> = ({
  colors,
  rounded = false,
  width = 60,
  height = 60,
  ...rest
}) => {
  const dataUrl = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';

    const totalUnits = colors.reduce((sum, [, repeats]) => sum + repeats, 0);
    let y = 0;
    for (const [color, repeats] of colors) {
      const stripeHeight = (repeats / totalUnits) * height;
      ctx.fillStyle = color;
      ctx.fillRect(0, y, width, stripeHeight);
      y += stripeHeight;
    }

    if (rounded) {
      const maskCanvas = document.createElement('canvas');
      maskCanvas.width = width;
      maskCanvas.height = height;
      const maskCtx = maskCanvas.getContext('2d');
      if (!maskCtx) return canvas.toDataURL();

      const radius = Math.min(width, height) * 0.2;
      maskCtx.clearRect(0, 0, width, height);
      maskCtx.beginPath();
      maskCtx.moveTo(radius, 0);
      maskCtx.lineTo(width - radius, 0);
      maskCtx.quadraticCurveTo(width, 0, width, radius);
      maskCtx.lineTo(width, height - radius);
      maskCtx.quadraticCurveTo(width, height, width - radius, height);
      maskCtx.lineTo(radius, height);
      maskCtx.quadraticCurveTo(0, height, 0, height - radius);
      maskCtx.lineTo(0, radius);
      maskCtx.quadraticCurveTo(0, 0, radius, 0);
      maskCtx.closePath();
      maskCtx.clip();
      maskCtx.drawImage(canvas, 0, 0);
      return maskCanvas.toDataURL();
    }

    return canvas.toDataURL();
  }, [colors, width, height, rounded]);

  return <img src={dataUrl} width={width} height={height} style={{ borderRadius: rounded ? 12 : 0 }} alt="Custom Pride Flag" {...rest} />;
};