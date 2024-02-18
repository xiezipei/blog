// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '谢子沛的网络日志',
  tagline: 'Build personal technical knowledge system.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.xiezipei.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xiezipei', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // TODO: Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: `XZP's BLOG`,
        logo: {
          alt: 'logo',
          src: 'img/logo.jpg',
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'left' }, // blog入口
          {
            type: 'docSidebar',
            sidebarId: 'vueSidebar',
            position: 'left',
            label: 'Vue', // vue入口
          },
          {
            type: 'docSidebar',
            sidebarId: 'reactSidebar',
            position: 'left',
            label: 'React', // react入口
          },
          {
            type: 'docSidebar',
            sidebarId: 'weeklySidebar',
            position: 'left',
            label: 'Weekly', // weekly入口
          },
          {
            type: 'docSidebar',
            sidebarId: 'appSidebar',
            position: 'left',
            label: 'App', // app入口
          },
          {
            type: 'docSidebar',
            sidebarId: 'backendSidebar',
            position: 'left',
            label: 'Backend', // backend入口
          },
          {
            type: 'docSidebar',
            sidebarId: 'designSidebar',
            position: 'left',
            label: 'Design', // design入口
          },
          {
            type: 'docSidebar',
            sidebarId: 'devopsSidebar',
            position: 'left',
            label: 'DevOps', // devops入口
          },
          {
            type: 'docSidebar',
            sidebarId: 'frontendSidebar',
            position: 'left',
            label: 'Frontend', // frontend入口
          },
          {
            type: 'docSidebar',
            sidebarId: 'leetcodeSidebar',
            position: 'left',
            label: 'LeetCode', // leetcode入口
          },
          {
            type: 'docSidebar',
            sidebarId: 'productsSidebar',
            position: 'right',
            label: 'Products', // products入口
          },
          {
            type: 'docSidebar',
            sidebarId: 'aboutSidebar',
            position: 'right',
            label: 'About', // about入口
          },
          {
            href: 'https://github.com/xiezipei', // github入口（跳转外部链接）
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // 页面底部信息
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/zipeixie',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/xiezipei',
              },
              {
                label: '稀土掘金',
                href: 'https://juejin.cn/user/1926000099732126',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: '酷壳',
                href: 'https://coolshell.cn/',
              },
              {
                label: '阮一峰的网络日志',
                href: 'https://www.ruanyifeng.com/blog/',
              },
              {
                label: 'Hacker News',
                href: 'https://news.ycombinator.com/',
              },
            ],
          },
          {
            title: 'Shortcut',
            items: [
              {
                label: '前端潮流周刊',
                to: '/docs/weekly/2024-02-04-weekly-001',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Products',
                to: '/docs/products',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zipei Xie, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
