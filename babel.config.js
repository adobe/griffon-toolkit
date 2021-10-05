module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript'
  ],
  plugins: [
    'inline-json-import'
  ],
  env: {
    test: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-typescript'
      ]
    }
  }
};
