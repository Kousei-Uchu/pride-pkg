'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function AsexualFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#000', 1], ['#a3a3a3', 1], ['#fff', 1], ['#810081', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}