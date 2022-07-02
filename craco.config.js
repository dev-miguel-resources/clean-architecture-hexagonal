module.exports = {
  babel: {
    plugins: [
      'babel-plugin-transform-typescript-metadata', // procesamiento de ts
      ['@babel/plugin-proposal-decorators', { legacy: true }], // soporte para decoradores
      ['@babel/plugin-proposal-class-properties', { loose: true }], // di para clases
    ],
    presets: ['@babel/preset-typescript'], // específicar nuestra config a nuestro lenguaje
  },
}
