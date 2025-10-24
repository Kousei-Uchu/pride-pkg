'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function GenderdoeFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#96c3a4', 1], ['#c2deae', 1], ['#f8f9cd', 1], ['#fffffe', 1], ['#fba1c4', 1], ['#d989e2', 1], ['#aa7edd', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}