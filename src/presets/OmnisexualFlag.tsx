'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function OmnisexualFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#ff9bcf', 1], ['#ff55c0', 1], ['#240047', 1], ['#675eff', 1], ['#8ea6ff', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}