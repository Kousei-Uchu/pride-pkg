'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function GenderqueerFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#b57edc', 1], ['#fff', 1], ['#4a8123', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}