import { resolve } from 'path'

export default {
  target: 'node',
  mode: 'production',
  entry: resolve('src/main.js'),
  output: {
    path: resolve('dist'),
    filename: 'index.cjs',
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  externals: {
    grammy: 'commonjs grammy',
    dotenv: 'commonjs dotenv',
  },
}
