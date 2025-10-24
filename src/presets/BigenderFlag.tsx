'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function BigenderFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#c376a0', 1], ['#eba3cc', 1], ['#d3c6e4', 1], ['#fefefe', 1], ['#d3c6e4', 1], ['#98c6e7', 1], ['#6c83cd', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}