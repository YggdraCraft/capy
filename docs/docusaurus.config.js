import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config = {
  title: 'CAPY',
  tagline: 'Compact Application Platform "Yggdrasil"',
  favicon: 'img/favicon.ico',

  url: 'https://yggdracraft.github.io',
  baseUrl: '/capy/',

  // GitHub pages deployment config.
  organizationName: 'YgggraCraft', 
  projectName: 'CAPY',
  deploymentBranch: 'Wiki',
    
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'CAPY',
        //logo: {
        //  alt: 'My Site Logo',
        //  src: 'img/logo.svg',
        //},
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/YggdraCraft/capy',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /*{
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },*/
          /*{
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: '',
              },
              {
                label: 'Discord',
                href: '',
              },
              {
                label: 'X',
                href: '',
              },
            ],
          },*/
          /*{
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: '',
              },
            ],
          },*/
        ],
        copyright: `Copyright © ${new Date().getFullYear()} YggdraCraft, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
