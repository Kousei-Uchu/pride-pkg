'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function AltBigenderFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#ed78ab', 1], ['#fef54d', 1], ['#fff', 1], ['#ad6dbe', 1], ['#719ee3', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}