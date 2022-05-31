const path = require("path");
const crypto = require("crypto");
const { BetaAnalyticsDataClient } = require("@google-analytics/data");
const { google } = require("googleapis");

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-transform-react-jsx",
    options: {
      runtime: "automatic",
    },
  });
};
