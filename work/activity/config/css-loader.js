const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebook/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009',
              browsers: ['last 5 version'],
            },
            stage: 3,
          }),
          require('postcss-px-to-viewport')({   // vw 配置
            unitToConvert: 'px',
            viewportWidth: 375,
            viewportHeight: 667, // not now used; TODO: need for different units and math for different properties
            unitPrecision: 3,
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',  // vmin is more suitable.
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
          }),
        ],
      },
    },
  ];
  if (preProcessor) {
    loaders.push(require.resolve(preProcessor));
  }
  return loaders;
};

module.exports = getStyleLoaders;