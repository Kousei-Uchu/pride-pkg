import React from 'react';

export interface PrideFlagCustomProps {
  colours: [string, number][]; // color + repeats
  rounded?: boolean;
  width?: number;
  height?: number;
}

export declare const PrideFlagCustom: React.FC<PrideFlagCustomProps>;
export declare const NonBinaryFlag: React.FC<PrideFlagCustomProps>;
export declare const BisexualFlag: React.FC<PrideFlagCustomProps>;
export declare const AsexualFlag: React.FC<PrideFlagCustomProps>;
export declare const PansexualFlag: React.FC<PrideFlagCustomProps>;
export declare const PolysexualFlag: React.FC<PrideFlagCustomProps>;
export declare const AgenderFlag: React.FC<PrideFlagCustomProps>;
export declare const PrideFlag: React.FC<PrideFlagCustomProps>;
export declare const TransgenderFlag: React.FC<PrideFlagCustomProps>;
export declare const GenderqueerFlag: React.FC<PrideFlagCustomProps>;
export declare const OmnisexualFlag: React.FC<PrideFlagCustomProps>;