// kudos to https://github.com/madrilene/eleventy-excellent
// CSS and JavaScript as first-class citizens in Eleventy: https://pepelsbey.dev/articles/eleventy-css-js/
const { basename } = require('path');
const postcss = require('postcss');
const postcssImport = require('postcss-import');
const cssnano = require('cssnano');

module.exports = (eleventyConfig) => {
  eleventyConfig.addTemplateFormats('css');

  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile: async (content, path) => {
      if (!path.endsWith('.css') || basename(path).startsWith('_')) {
        return;
      }

      return async () => {
        let output = await postcss([postcssImport, cssnano]).process(content, {
          from: path,
        });

        return output.css;
      };
    },
  });
};
