const pluginHtmlTransform = require('./config/plugins/html-transform');
const pluginPostCSS = require('./config/plugins/postcss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (config) {
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  config.addPlugin(pluginSyntaxHighlight);
  config.addPlugin(pluginPostCSS);
  config.addPlugin(pluginHtmlTransform);

  // Return your Object options:
  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
