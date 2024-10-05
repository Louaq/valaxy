import { defineSiteConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline'
export default defineSiteConfig({
  url: 'https://sprightly-crepe-33cf05.netlify.app/',
  lang: 'zh-CN',
  title: 'BLOG',
  subtitle: '',
  author: {
	name: 'Louaq',
    short_name: 'Louaq',
  },
  frontmatter: {
    time_warning: true,
  },
  
  mediumZoom: { enable: true },
  description: '这是一个很棒的博客',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/Louaq',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '微博',
      link: 'https://weibo.com/u/5769723850',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '豆瓣',
      link: 'https://www.douban.com/people/253156361/?_i=8031515UpjpDDW',
      icon: 'i-ri-douban-line',
      color: '#007722',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=1525018658',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/an-ye-jing-ling-64-3',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/397523112',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
  ],

  search: {
    enable: true,
  },

})
