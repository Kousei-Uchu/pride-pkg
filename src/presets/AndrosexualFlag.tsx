'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function AndrosexualFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#01ccff', 1], ['#603524', 1], ['#b799de', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}