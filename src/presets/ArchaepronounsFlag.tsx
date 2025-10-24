'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function ArchaepronounsFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#737373', 2], ['#ffffff', 1], ['#ffc60a', 2]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}