const WEBSITE_SORTS: WebsiteSort[] = [
  { id: 1, title: "个人web应用" },
  { id: 2, title: "个人客户端应用" },
  { id: 3, title: "个人小程序" },
  { id: 4, title: "个人Github项目" },
  { id: 5, title: "个人媒体平台" },
  { id: 6, title: "友情链接" },
];

const WEBSITE_ITEMS: WebsiteItem[] = [
  {
    sortId: 1,
    title: "ShirtAI",
    url: "https://www.myshirtai.com/",
    icon: "https://lsshirtai.com/file/upload/2023/12/17/1736222688013193216.png",
    color: "#0171CD",
  },
  {
    sortId: 1,
    title: "主标题",
    description: "网站描述",
    url: "http://www.your-web-page.com/",
    icon: "",
  },
  {
    sortId: 1,
    title: "主标题",
    description: "网站描述",
    url: "http://www.your-web-page.com/",
    icon: "",
  },
  {
    sortId: 6,
    title: "友情链接",
    description: "IvesFeng 的友情链接",
    url: "",
    icon: "",
  },
];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "IvesFeng-Blog",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://ivesfeng.com",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: "https://www.ivesfeng.com/static/img/1496e5b9e3ae411b606f797b0932a02a.%C3%A5%C2%93%C2%88%C3%A5%C2%A7%C2%86%C3%AF%C2%BC%C2%8C.webp",
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/Ivesfsy",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://fsyives.oss-cn-beijing.aliyuncs.com/draw/mj/origin/0b4eb2216e714326c073805cbed6aeef.png",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * 网站分类列表
   */
  WEBSITE_SORTS,
  /**
   * 网站分类列表
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "IvesFeng Blog Index",
    keywords: "IvesFeng，Blog, Index, Index Page",
    description: "IvesFeng （冯晟洋）：上海蓝衫科技有限公司Blueshirt Technology 的联合创始人，渗透智能 – ShirtAI创始人",
  },
};

export default GLOBAL_CONFIG;
