//ADD GLYPH

'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function AmbiamorousFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#4848c3', 2], ['#3e3f81', 1], ['#303044', 1], ['#1e1e1e', 2], ['#443231', 1], ['#7c4342', 1], ['#c04a49', 2]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}