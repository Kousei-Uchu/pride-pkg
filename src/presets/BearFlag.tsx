'use client';

import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function BearFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#623500', 1], ['#d66300', 1], ['#fede63', 1], ['#ffffff', 1], ['#fae2b3', 1], ['#ffffff', 1], ['#545454', 1], ['#000000', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}