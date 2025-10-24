'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function AlloromanticAsexualFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#d50000', 1], ['#f85858', 1], ['#fff', 1], ['#800080', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}