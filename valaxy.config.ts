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
  //设置 valaxy-addon-waline 配置项
  addons: [
      addonWaline({
      // Waline 配置项，参考 https://waline.js.org/reference/client/props.html
      serverURL: 'https://waline-valax-5vysrz9kl-mstf.vercel.app/',
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
	  
     
    },
  },

  unocss: { safelist },
})
