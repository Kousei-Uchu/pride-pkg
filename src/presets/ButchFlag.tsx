'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function ButchFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#2f3d6c', 1], ['#6b79a5', 1], ['#8991a8', 1], ['#ececea', 1], ['#bfb3d9', 1], ['#754ec5', 1], ['#51038a', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}