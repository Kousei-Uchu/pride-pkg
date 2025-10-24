'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function AroaceFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#e28c00', 1], ['#eccd00', 1], ['#fff', 1], ['#62aedc', 1], ['#203856', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}