import React from 'react';
import { PrideFlagCustom } from '../CustomFlag';

export default function NonBinaryFlag(props: Omit<React.ComponentProps<typeof PrideFlagCustom>, 'colors'>) {
  return (
    <PrideFlagCustom
      colors={[['#fff433', 1], ['#ffffff', 1], ['#9c59d1', 1], ['#000000', 1]]}
      {...props} // safe now, can't overwrite colors
    />
  );
}