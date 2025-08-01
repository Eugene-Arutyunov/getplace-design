module.exports = function (conf) {
  conf.addPassthroughCopy('./src/styles/header.css')
  conf.addPassthroughCopy('./src/styles/footer.css')
  conf.addPassthroughCopy('./src/styles/delivery-reports.css')
  conf.addPassthroughCopy('./src/ids/colors.css')
  conf.addPassthroughCopy('./src/ids/normalize.css')
  conf.addPassthroughCopy('./src/ids/settings.css')
  conf.addPassthroughCopy('./src/ids/layout.css')
  conf.addPassthroughCopy('./src/ids/ids.css')
  conf.addPassthroughCopy('./src/ids/gallery.css')
  conf.addPassthroughCopy('./src/ids/navbar.css')
  conf.addPassthroughCopy('./src/script.css')
  conf.addPassthroughCopy('./src/index.js')
  conf.addPassthroughCopy('./src/assets');
  conf.addPassthroughCopy('./src/fonts');

  return {
    dir: {
      input: './src',
      includes: './includes'
    },
    htmlTemplateEngine: 'njk'
  }
}
