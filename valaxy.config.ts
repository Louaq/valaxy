import { defineValaxyConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline'
import type { UserThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '破破的小站',
      cloud: {
        enable: true,
      },
    },
	 // 启用评论
	comment: {
	   enable: true
	},
	// 设置 valaxy-addon-waline 配置项
	addons: [
	   addonWaline({
       serverURL: 'https://your-waline-url',
      }),	
	],
    pages: [
      //{
        //name: '我的小伙伴们',
        //url: '/links/',
        //icon: 'i-ri-genderless-line',
        //color: 'dodgerblue',
      //},
      //{
       // name: '喜欢的女孩子',
        //url: '/girls/',
        //icon: 'i-ri-women-line',
        //color: 'hotpink',
      //},
    ],

    footer: {
      since: 2024,
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
    },
  },

  unocss: { safelist },
})
