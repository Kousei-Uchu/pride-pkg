'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function DemigenderFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#7f7f7f', 1], ['#c3c2c2', 1], ['#fafe73', 1], ['#fefefe', 1], ['#fafe73', 1], ['#c3c2c2', 1], ['#7f7f7f', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}