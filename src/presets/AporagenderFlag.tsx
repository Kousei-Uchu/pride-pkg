'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function AporagenderFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#f37cca', 1], ['#e1bdf0', 1], ['#fff982', 1], ['#e1bdf0', 1], ['#7bbbdd', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}