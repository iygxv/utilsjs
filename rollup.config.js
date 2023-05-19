export default {
  input: './index.js',
  output: [
    {
      name: 'utils',
      file: './dist/index.cjs.js',
      format: 'cjs'
    },
    {
      name: 'utils',
      file: './dist/index.es.js',
      format: 'es'
    },
    {
      name: 'utils',
      file: './dist/index.global.js',
      format: 'iife'
    }
  ]
};
