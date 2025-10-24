'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function AromanticAllosexualFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#3da542', 1], ['#a8d379', 1], ['#fff', 1], ['#fae34b', 1], ['#e8ba00', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}