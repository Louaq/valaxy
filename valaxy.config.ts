import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from 'valaxy-addon-waline'
// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts
  devtools: false,
  theme: 'yun',
  markdown: {
    // default material-theme-palenight
    // theme: 'material-theme-palenight',
    theme: {
      // light: 'material-theme-lighter',
      light: 'github-light',
      // dark: 'material-theme-darker',
      dark: 'github-dark',
    },

    blocks: {
      tip: {
        icon: 'i-carbon-thumbs-up',
        text: 'ヒント',
        langs: {
          'zh-CN': '提示',
        },
      },
      warning: {
        icon: 'i-carbon-warning-alt',
        text: '注意',
      },
      danger: {
        icon: 'i-carbon-warning',
        text: '警告',
      },
      info: {
        text: 'información',
      },
    },

    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        },
      },
    ],
  },
  siteConfig: {
    // 启用评论
    comment: {
      enable: true
    },
    	
  },
  addons: [
    addonWaline({
      // Waline 配置项，参考 https://waline.js.org/reference/client/props.html
      serverURL: 'https://waline-comments-inky.vercel.app/',
    }),
  ],

  themeConfig: {
    banner: {
      enable: true,
      title: '破破的小站',
      cloud: {
        enable: true,
      },
    },
	pages: [
    {
      name: '友情链接',
      url: '/links/',
      icon: 'i-ri-link',
      color: 'dodgerblue',
    },
    {
      name: 'girls列表',
      url: '/girls/',
      icon: 'i-ri-women-line',
      color: 'hotpink',
    },
	{
      name: '画廊',
      url: '/albums/',
      icon: 'i-ri-album-line',
      color: 'hotpink',
    },
  ],
    footer: {
      since: 2024,
	  
     
    },
	
  },

  
  unocss: { safelist },
})
