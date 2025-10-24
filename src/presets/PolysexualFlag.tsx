'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function PolysexualFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#f61cb6', 1], ['#00d669', 1], ['#1593f6', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}