import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';

const packageJson = require('./package.json');

const external = [
  'react',
  'prop-types',
  'styled-components',
];

const globals = {
  react: 'React',
  'styled-components': 'styled',
  'prop-types': 'propTypes'
}

export default {
  external: external,
  input: 'src/library.js',

  output: [
    {
      file: packageJson.main,
      sourcemap: true,
      format: 'cjs',
    },
    {
      file: packageJson.module,
      sourcemap: true,
      format: 'esm',
    },
    {
      name: 'thc-ui-library',
      file: packageJson.umd,
      sourcemap: true,
      format: 'umd',
    },
  ],
  plugins: [
    // externals(),
    url({
      include: ['**/*.ttf'],
      limit: Infinity,
    }),
    svgr(),
    image(),
    resolve({
      extensions: ['.js', '.ttf', '.jsx'],
    }),
    commonjs(),
    babel({
      presets: ['@babel/preset-react'],
      plugins: ["@babel/plugin-proposal-optional-chaining"]
    }),
  ],
};
