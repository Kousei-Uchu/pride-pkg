//ADD GLYPH

'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function AltAbrosexualFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#a8e0ff', 3], ['#00a3fc', 1], ['#000000', 3], ['#fe0045', 1], ['#ff94b1', 3]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}