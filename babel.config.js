module.exports = {
  presets: [
    '@babel/preset-env'
  ],
  plugins: [
    'inline-json-import'
  ],
  env: {
    test: {
      presets: ['@babel/preset-env']
    }
  }
};
