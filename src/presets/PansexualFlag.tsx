'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function PansexualFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#ff218c', 1], ['#ffd800', 1], ['#21b1ff', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}