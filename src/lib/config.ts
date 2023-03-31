// https://nextjs.org/docs/migrating/from-gatsby
// src/config.js

const config = {
  siteTitle: 'Andy Keller - Software Engineer', // <title>
  shortSiteTitle: '<Keller />', // <title> ending for posts and pages
  siteDescription: 'Portfolio for Andy Keller, Sr. Software Engineer.',
  siteUrl: 'https://andy@barrfitz.com',
  pathPrefix: '',
  siteImage: 'preview.jpg',
  siteLanguage: 'en',
  // author
  authorName: 'Andy Keller',
  authorTwitterAccount: '',
  // info
  infoTitle: 'Andy Keller',
  infoTitleNote: 'Software Engineer',
  // manifest.json
  manifestName: 'Andy Keller - Software Engineer',
  manifestShortName: 'Andy Keller', // max 12 characters
  manifestStartUrl: '/',
  //   manifestBackgroundColor: colors.background,
  //   manifestThemeColor: colors.background,
  manifestDisplay: 'standalone',
  // contact
  contactEmail: 'andy@barrfitz.com',
  // social
  authorSocialLinks: [
    { name: 'GitHub', url: 'https://github.com/RcKeller' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/andy-keller-bf' },
    { name: 'Resume', url: 'https://barrfitz.com/resume.pdf' },
  ],
}
export default config
