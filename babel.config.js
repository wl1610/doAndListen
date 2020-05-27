module.exports = function(api) {
  api.cache(true);

  const presets = [
    'react-app',
    [
      '@babel/preset-env',
      {
        targets: {
          'browsers': [
            '>0.2% in CN',
            'last 2 versions',
            'not ie<=10',
            'chrome 39'
          ]
        },
        corejs: 3,
        useBuiltIns: 'entry'
      }
    ],
    '@babel/preset-react'
  ];
  const plugins = [
    '@babel/transform-runtime',
    '@babel/proposal-class-properties'
  ];

  return {
    presets,
    plugins
  };
};