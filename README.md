# Pride Package !WIP!

Pride Package is a work in progress package themed around the LGBTQIA+ Community and it's symbols. I'm currently in the process of adding a heap of pride flags.

## Dependencies
This is a TS React based package, as that's what I'm most confident in. Feel free to make pull requests to port it to other formats.
Dependency list is available on NPM [here](https://www.npmjs.com/package/pride-pkg?activeTab=dependencies).

## Installation
To install with NPM, run `npm install pride-pkg@latest`. Or with Yarn by running `yarn add pride-pkg`. Other package managers, I'm not sure. I only really use NPM.

## Usage
In all files using this package's elements, you must add `'use client';` at the very first line (or make it run on the client another way). As far as I know, it works a-ok without running on the client, but it does show a pesky error.
For a preset flag, the usage is `<NonBinaryFlag width={150} height={100} className="pride-flag" />`. For a custom flag, `<PrideFlagCustom width={150} height={100} colors={[['#e40303', 1], ['#ff8c00', 1], ['#ffed00', 1], ['#008026', 1], ['#24408e', 1], ['#732982', 1]]}`. All flags support <img> props. The format for the Custom Flag is `colors=[['hex', heightRatio], ['hex', heightRatio], ...]`.


## Feature List (So far)
- Preset Flags
    - Agender `<AgenderFlag />`
    - Asexual `<AsexualFlag />`
    - Bisexual `<BisexualFlag />`
    - Genderqueer `<GenderqueerFlag />`
    - Non Binary `<NonBinaryFlag />`
    - Omnisexual `<OmnisexualFlag />`
    - Pansexual `<PansexualFlag />`
    - Polysexual `<PolysexualFlag />`
    - Rainbow Pride `<PrideFlag />`
    - Transgender `<TransgenderFlag />`
- Custom Flag `<PrideFlagCustom />`
- More coming, still in very early stages.
 

## Can you add this flag? Can you remove this flag?
This is an open source project. Add and remove whatever flags you desire in pull requests, and I'll review changes to publish whenever I have time.
