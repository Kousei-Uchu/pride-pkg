'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function BicuriousFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#f347f8', 2], ['#f687f9', 1], ['#fdc6fd', 1], ['#ffffff', 2], ['#cce3fd', 1], ['#76b5fa', 1], ['#2d8cf7', 2]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}