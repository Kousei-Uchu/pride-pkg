import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function PrideFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#e40303', 1], ['#ff8c00', 1], ['#ffed00', 1], ['#008026', 1], ['#24408e', 1], ['#732982', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}