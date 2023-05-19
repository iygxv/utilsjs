export default {
  input: './index.js',
  output: [
    {
      file: './dist/index.cjs.js',
      format: 'cjs'
    },
    {
      file: './dist/index.es.js',
      format: 'es'
    },
    {
      file: './dist/index.global.js',
      format: 'iife'
    }
  ]
};
