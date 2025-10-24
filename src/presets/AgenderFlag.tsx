'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function AgenderFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#000', 1], ['#bfbfbf', 1], ['#fff', 1], ['#bfbfbf', 1], ['#000', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}