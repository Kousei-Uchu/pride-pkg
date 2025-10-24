'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function CeterosexualFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#fcf980', 1], ['#169c47', 1], ['#fff', 1], ['#000000', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}