const loadYaml = require('./utils/loadYaml');
const pkg = require('../package');

const gitHubUrl = pkg.repository;
const twitterUsername = 'warrior_js';

const sponsors = loadYaml('./data/sponsors.yml');

const siteConfig = {
  gitHubUrl,
  twitterUsername,
  sponsors,
  title: 'WarriorJS',
  tagline: 'An exciting game of programming and Artificial Intelligence',
  url: pkg.homepage,
  baseUrl: '/',
  projectName: 'warriorjs',
  organizationName: 'olistic',
  cname: 'warrior.js.org',
  noIndex: false,
  editUrl: `${gitHubUrl}/edit/master/docs/`,
  headerLinks: [
    { doc: 'overview', label: 'Docs' },
    { doc: 'socialize', label: 'Community' },
    { search: true },
    { href: gitHubUrl, label: 'GitHub' },
  ],
  headerIcon: 'img/warriorjs-text.svg',
  footerIcon: 'img/warriorjs-sword.svg',
  favicon: 'img/favicon.png',
  twitterImage: 'img/warriorjs.png',
  ogImage: 'img/warriorjs.png',
  colors: {
    primaryColor: '#2e3440',
    secondaryColor: '#3b4252',
    accentColor: '#8fbcbb',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  disableHeaderTitle: true,
  onPageNav: 'separate',
  gaTrackingId: 'UA-118632697-1',
  algolia: {
    apiKey: 'af0d3f56837aacc96ccd573d9208966c',
    indexName: 'warriorjs',
  },
};

module.exports = siteConfig;
