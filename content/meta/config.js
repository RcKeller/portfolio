const colors = require('../../src/styles/colors')

module.exports = {
  siteTitle: 'Ryan Keller - Software Engineer', // <title>
  shortSiteTitle: '<Keller />', // <title> ending for posts and pages
  siteDescription: 'Portfolio for Ryan Keller, Software Engineer.',
  siteUrl: 'https://rykeller.com',
  pathPrefix: '',
  siteImage: 'preview.jpg',
  siteLanguage: 'en',
  // author
  authorName: 'Keller, Ryan',
  authorTwitterAccount: '',
  // info
  infoTitle: 'Keller, Ryan',
  infoTitleNote: 'Software Engineer',
  // manifest.json
  manifestName: 'Ryan Keller - Software Engineer',
  manifestShortName: 'Ryan Keller', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: 'standalone',
  // contact
  contactEmail: 'john@doe.com',
  // social
  authorSocialLinks: [
    { name: 'GitHub', url: 'https://github.com/RcKeller' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ryanckeller' },
    { name: 'Resume', url: 'https://rykeller.com/resume.pdf' }
  ]
}
