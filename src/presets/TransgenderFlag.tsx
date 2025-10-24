'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function TransgenderFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#55cdfc', 1], ['#f7a8b8', 1], ['#ffffff', 1], ['#f7a8b8', 1], ['#55cdfc', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}