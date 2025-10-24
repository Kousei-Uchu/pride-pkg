'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function BisexualFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#d60270', 1], ['#d60270', 1], ['#9b4f96', 1], ['#0038a8', 1], ['#0038a8', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}