//ADD GLYPH

'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function AbrosexualFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#9ac6e9', 3], ['#fafdea', 2], ['#9ac6e9', 3]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}