const theme = require("../theme");

module.exports = {
  theme: {
    ...theme,
    screens: {} // Remove responsive prefixes
  }
};
