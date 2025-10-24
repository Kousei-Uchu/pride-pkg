'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function DemiboyFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#7f7f7f', 1], ['#c4c4c4', 1], ['#9ad9eb', 1], ['#fff', 1], ['#9ad9eb', 1], ['#c4c4c4', 1], ['#7f7f7f', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}