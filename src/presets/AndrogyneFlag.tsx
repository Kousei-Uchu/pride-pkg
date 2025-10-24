//MAKE VERTICAL

'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function AndrogyneFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#fe007f', 1], ['#9832ff', 1], ['#00b8e7', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}