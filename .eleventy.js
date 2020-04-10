const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");
const navigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(inclusiveLangPlugin);
  eleventyConfig.addPlugin(navigationPlugin);

  eleventyConfig.addPassthroughCopy("css");
};
