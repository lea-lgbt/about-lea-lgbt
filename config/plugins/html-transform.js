const htmlmin = require('html-minifier-terser');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = (eleventyConfig) => {
  eleventyConfig.addTransform('html-minify', (content, path) => {
    if (path && path.endsWith('.html') && isProduction) {
      return htmlmin.minify(content, {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        includeAutoGeneratedTags: false,
        removeComments: true,
      });
    }

    return content;
  });
};
