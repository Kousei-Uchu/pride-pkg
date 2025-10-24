'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function AbrosexualFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#75ca91', 1], ['#b3e4c7', 1], ['#fff', 1], ['#e695b5', 1], ['#d9446c', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}