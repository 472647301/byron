module.exports = {
  title: "秃尾巴的猫",
  description: "",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    type: "blog",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "秃尾巴的猫",
    authorAvatar: "/avatar.jpeg",
    record: "湘ICP备2021006437号-1",
    recordLink: "https://beian.miit.gov.cn",
    nav: [
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
      {
        text: "GitHub",
        link: "https://github.com/472647301",
        icon: "reco-github",
      },
    ],
  },
  markdown: {
    lineNumbers: true,
  },
};
