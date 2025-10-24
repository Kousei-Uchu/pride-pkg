// rollup.config.mjs
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  external: ['react', 'react-dom'], // don’t bundle React
  plugins: [
    peerDepsExternal(),
    resolve({
      preferBuiltins: false,
      mainFields: ['module', 'jsnext:main', 'main'],
      extensions: ['.js', '.ts', '.tsx', '.json'],
      dedupe: ['react', 'react-dom', 'tslib'] // <- add tslib here
    }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true, tsconfigOverride: { compilerOptions: { declaration: true, declarationDir: 'dist' } } }),
    json()
  ]
};