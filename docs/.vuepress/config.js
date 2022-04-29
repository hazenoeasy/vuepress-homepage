module.exports = {
  title: "Yuhao Zhang (Matt)",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }],
  ["meta",{name:"google-site-verification", content:"XFPe0cTFa_UCUzfcNsFG4182e5tvhmSRP1nNLP2hfl0" }]
  ],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Projects", link: "/projects/" },
      { text: "GitHub", link: "https://github.com/hazenoeasy" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Guide')
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}

