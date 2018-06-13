process.env.NODE_ENV = 'production';

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const webpackConfigProd = require('react-scripts-ts/config/webpack.config.prod');

webpackConfigProd.plugins.push(
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: 'report.html',
  })
);

require('react-scripts-ts/scripts/build');
