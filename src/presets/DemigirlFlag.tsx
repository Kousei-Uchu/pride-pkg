'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function DemigirlFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#7d7d7d', 1], ['#c4c4c4', 1], ['#ffaec9', 1], ['#fefefe', 1], ['#ffaec9', 1], ['#c4c4c4', 1], ['#7d7d7d', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}