// eslint-disable-next-line no-undef
module.exports = {
  babel: {
    plugins: [
      'babel-plugin-transform-typescript-metadata', // saneado
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
    presets: ['@babel/preset-typescript'],
  },
}
