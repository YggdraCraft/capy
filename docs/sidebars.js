// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  // But you can create a sidebar manually
  docsSidebar: [
    'Intro',
    'QuickStart',
    {
      type: 'category',
      label: 'Guides',
      items: [
        "Guides/Basic",
      ],
    },
    {
      type: 'category',
      label: 'Widgets',
        link: {
            type: 'doc',
            id: 'Widgets/WhatIs',
        },
      items: [
        {
            type: 'category',
            label: 'Capy',
            link: {
                type: 'doc',
                id: 'Widgets/Capy/Capy',
            },
            items: [
                'Widgets/Capy/new'
            ],
        },
        "Widgets/Widget",
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'Examples/Initialisation',
      ],
    },
  ],
};

export default sidebars;
