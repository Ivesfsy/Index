const WEBSITE_SORTS: WebsiteSort[] = [
  { id: 1, title: "个人web应用" },
  { id: 2, title: "个人客户端应用" },
  { id: 3, title: "个人小程序" },
  { id: 4, title: "个人Github项目" },
  { id: 5, title: "个人媒体平台" },
  { id: 6, title: "友情链接" },
  { id: 7, title: "产品文档" },
];

const WEBSITE_ITEMS: WebsiteItem[] = [
  {
    sortId: 1,
    title: "ShirtAI",
    description: "人工智能平台",
    url: "https://www.myshirtai.com/",
    icon: "https://lsshirtai.com/file/upload/2023/12/17/1736222688013193216.png",
    color: "#0171CD",
  },
  {
    sortId: 1,
    title: "AI搜索",
    description: "基于大模型的AI搜索",
    url: "https://sou.blueshirttools.com",
    icon: "https://lsshirtai.com/file/upload/2023/12/17/1736222688013193216.png",
  },
  {
    sortId: 1,
    title: "GPT元宇宙",
    description: "GPT元宇宙1：1还原ChatGPT官网，无需🪜，账号独立，对话数据隔离、保障隐私安全，买多久用多久！",
    url: "https://www.myshirtai.com/",
    icon: "https://www.mygptmeta.com/wp-content/uploads/2024/04/cropped-GPT-Meta%E6%8A%A0%E5%9B%BE-72x72.png",
    color: "#0171CD",
  },
  {
    sortId: 1,
    title: "GPT Prompt",
    description: "GPT提示词库",
    url: "https://prompt.blueshirtai.com/",
    icon: "https://shop.blueshirtai.com/assets/cache/images/202401261711529757259.png",
  },
  {
    sortId: 1,
    title: "MJ辅助提示词",
    description: "MJ辅助创作工具",
    url: "https://draw.blueshirtmap.com/",
    icon: "https://shop.blueshirtai.com/assets/cache/images/202401261723487242956.jpg",
  },
  {
    sortId: 1,
    title: "Blueshirt Technology",
    description: "蓝衫官网",
    url: "https://www.bluelsqkj.com/",
    icon: "https://www.bluelsqkj.com/wp-content/uploads/2022/11/微信图片_20211125124808.png",
  },
  {
    sortId: 1,
    title: "蓝衫导航",
    description: "导航网站",
    url: "https://www.bluelskj.com/",
    icon: "https://www.bluelsqkj.com/wp-content/uploads/2022/11/微信图片_20211125124808.png",
  },
  {
    sortId: 1,
    title: "蓝衫云",
    description: "云服务项目",
    url: "http://www.blueshirtyun.com/",
    icon: "https://www.bluelsqkj.com/wp-content/uploads/2022/11/微信图片_20211125124808.png",
  },
  {
    sortId: 1,
    title: "凤灵阁AI商店",
    description: "售卖各种AI产品",
    url: "https://shop.blueshirtai.com/",
    icon: "https://shop.blueshirtai.com/favicon.ico",
  },
  {
    sortId: 1,
    title: "GPTMeta API",
    description: "支持gpt-4-all、gpt-4-多模态、gpt-4-gizmo-*等;我们提供高质量、易用性强的API服务；满足业务需求;当前汇率：1:1",
    url: "https://api.mygptmeta.com/",
    icon: "https://lsshirtai.com/file/upload/2023/12/17/1736222688013193216.png",
  },
  {
    sortId: 1,
    title: "网盘系统",
    description: "cloudreve网盘系统",
    url: "https://blueshirtai.com/",
    icon: "https://img0.baidu.com/it/u=282127479,1728047395&fm=253&fmt=auto&app=138&f=PNG?w=256&h=256",
  },
  {
    sortId: 1,
    title: "渗透工具箱",
    description: "各类小工具",
    url: "https://tool.blueshirttools.com/",
    icon: "https://www.bluelsqkj.com/wp-content/uploads/2022/11/微信图片_20211125124808.png",
  },
  {
    sortId: 1,
    title: "渗透搜索",
    description: "渗透搜索",
    url: "https://www.bluelsqkj.com/permeation",
    icon: "",
  },
  {
    sortId: 1,
    title: "PDF工具箱",
    description: "PDF工具箱",
    url: "https://pdf.blueshirtmap.com/",
    icon: "",
  },
  {
    sortId: 1,
    title: "思维导图",
    description: "思维导图工具",
    url: "https://www.bluelsqkj.com/mindmap",
    icon: "",
  },
  {
    sortId: 1,
    title: "待办事项",
    description: "待办事项",
    url: "https://todo.blueshirttools.com/",
    icon: "",
  },
  {
    sortId: 1,
    title: "绘图白板",
    description: "绘图白板",
    url: "https://draw.blueshirttools.com/",
    icon: "",
  },
  {
    sortId: 2,
    title: "ShirtAI Android",
    description: "人工智能平台",
    url: "https://www.blueshirtai.com/f/deCD/ShirtAI.apk",
    icon: "https://lsshirtai.com/file/upload/2023/12/17/1736222688013193216.png",
  },
  {
    sortId: 2,
    title: "ShirtAI IOS",
    description: "人工智能平台",
    url: "https://apps.apple.com/us/app/shirtai/id6474819973",
    icon: "https://lsshirtai.com/file/upload/2023/12/17/1736222688013193216.png",
  },
  {
    sortId: 2,
    title: "ShirtAI Windows",
    description: "人工智能平台",
    url: "https://www.blueshirtai.com/f/x6tD/%E6%B8%97%E9%80%8F%E6%99%BA%E8%83%BD%20-%20ShirtAI%20windows-.zip",
    icon: "https://lsshirtai.com/file/upload/2023/12/17/1736222688013193216.png",
  },
  {
    sortId: 2,
    title: "ShirtAI Macos",
    description: "人工智能平台",
    url: "https://www.blueshirtai.com/f/3kIo/ShirtAI-Macos.zip",
    icon: "https://lsshirtai.com/file/upload/2023/12/17/1736222688013193216.png",
  },
  {
    sortId: 2,
    title: "GPT元宇宙 APP",
    description: "人工智能平台",
    url: "https://www.blueios.com",
    icon: "https://www.mygptmeta.com/wp-content/uploads/2024/04/cropped-GPT-Meta%E6%8A%A0%E5%9B%BE-72x72.png",
  },
  {
    sortId: 4,
    title: "one-api",
    description: "one-api项目",
    url: "https://github.com/Ivesfsy/one-api",
    icon: "https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png",
  },
  {
    sortId: 4,
    title: "ShirtAI",
    description: "网站描述",
    url: "https://github.com/Ivesfsy/shirtai",
    icon: "https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png",
  },
  {
    sortId: 4,
    title: "Index",
    description: "IvesFeng的Index主页",
    url: "https://github.com/Ivesfsy/Index",
    icon: "https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png",
  },
  {
    sortId: 5,
    title: "Twitter",
    description: "IvesFeng的Twitter",
    url: "https://twitter.com/FengIves",
    icon: "https://shop.blueshirtai.com/assets/cache/images/202401261815375646879.jpg",
  },
  {
    sortId: 5,
    title: "Blog",
    description: "IvesFeng的Blog",
    url: "https://ivesfeng.com/",
    icon: "https://www.ivesfeng.com/favicon.jpg",
  },
  {
    sortId: 7,
    title: "ShirtAI产品文档",
    description: "人工智能平台",
    url: "https://docs.blueshirttools.com/",
    icon: "https://lsshirtai.com/file/upload/2023/12/17/1736222688013193216.png",
  },
  {
    sortId: 7,
    title: "GPT元宇宙产品文档",
    description: "GPT元宇宙1：1还原ChatGPT官网，无需🪜，账号独立，对话数据隔离、保障隐私安全，买多久用多久！",
    url: "https://doc.blueshirtai.com/",
    icon: "https://www.mygptmeta.com/wp-content/uploads/2024/04/cropped-GPT-Meta%E6%8A%A0%E5%9B%BE-72x72.png",
  },
   {
    sortId: 7,
    title: "蓝衫lobe-chat产品文档",
    description: "人工智能平台",
    url: "https://docs.blueshirtai.com/",
    icon: "https://www.bluelsqkj.com/wp-content/uploads/2022/11/微信图片_20211125124808.png",
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
    "Hello, lovely soul!",
    "嗨，别来无恙",
    "脚步悄然，来临这片风景",
    "欢迎来到这片奇妙的土地",
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
