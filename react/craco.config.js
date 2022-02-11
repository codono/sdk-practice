module.exports = {
  babel: {
    plugins: [
      [
        'babel-plugin-fbt',
        {
          fbtEnumManifest: require('./src/fbt_build/.enum_manifest.json'),
          extraOptions: {__self: true},
        },
      ],
      'babel-plugin-fbt-runtime',
    ],
  },
};
