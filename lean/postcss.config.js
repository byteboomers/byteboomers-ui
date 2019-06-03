const path = require("path");

const plugins = [
  require("postcss-import"),
  require("tailwindcss")(path.resolve(__dirname + "/tailwind.config.js")),
  require("postcss-preset-env")({
    stage: 0,
    autoprefixer: {
      cascade: false,
      grid: true
    }
  }),
  require("cssnano")({
    preset: "default",
    discardComments: { removeAll: true },
    zIndex: false
  })
];

module.exports = {
  plugins
};
