import React from 'react';

export interface PrideFlagCustomProps {
  colours: [string, number][]; // color + repeats
  rounded?: boolean;
  width?: number;
  height?: number;
}

export declare const PrideFlagCustom: React.FC<PrideFlagCustomProps>;
export declare const NonBinaryFlag: React.FC<PrideFlagCustomProps>;