const dependencies = require("../package.json").dependencies;

module.exports = {
  name: "host",
  filename: "remoteEntry.js",
  remotes: {
    app1: "app1@http://localhost:3001/remoteEntry.js",
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
