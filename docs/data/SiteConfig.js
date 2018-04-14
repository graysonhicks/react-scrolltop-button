module.exports = {
  docsDir: 'docs', // The name of the directory that contains lessons or docs.
  siteTitle: 'react-scrolltop-button', // Site title.
  siteTitleAlt: 'Gatsby Starter Template for Creating Docs', // Alternative site title for SEO.
  siteLogo: '/logos/261d.png', // Logo used for SEO and manifest.
  siteUrl: 'https://graysonhicks.github.io/react-scrolltop-button', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'React component for scrolling to top of the page.', // Website description used for RSS feeds/meta description tag.
  userName: 'User', // Username to display in the author segment.
  userTwitter: 'graysonhicks', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Pisgah Forest, NC', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription: 'Front-end developer @ mediacurrent.com', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/graysonhicks',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/graysonhicks',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:graysonhicks@gmail.com',
      iconClassName: 'fa fa-envelope',
    },
    {
      label: 'Instagram',
      url: 'https://instagram.com/jamesgraysonhicks',
      iconClassName: 'fa fa-instagram',
    },
  ],
  copyright: 'Copyright © 2018. Grayson Hicks', // Copyright string for the footer of the website and RSS feed.
  themeColor: '##0074AB', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
  // TODO: Move this literally anywhere better.
  toCChapters: ['', 'Chapter 1', 'Chapter 2'], // Used to generate the Table Of Contents. Index 0 should be blank.
};
