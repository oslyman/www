const { DateTime } = require("luxon");
const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");
const markdownItPlugin = require("markdown-it");
const markdownItFootnotePlugin = require("markdown-it-footnote");
const navigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(inclusiveLangPlugin);
  eleventyConfig.addPlugin(navigationPlugin);

  eleventyConfig.setLibrary("md", markdownItPlugin().use(markdownItFootnotePlugin))

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addFilter("head", (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addCollection("tagList", require("./_11ty/getTagList"));
};
