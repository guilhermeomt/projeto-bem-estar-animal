const path = require("path");

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-transform-react-jsx",
    options: {
      runtime: "automatic",
    },
  });
};
