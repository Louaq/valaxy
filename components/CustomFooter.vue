<template>
  <footer>
    <div>
      <slot></slot>
    </div>
    <!-- 其他 Footer 内容 -->
    <div class="copyright flex justify-center items-center gap-2" p="1"><span> © 2020 -  2024</span><!--v-if--><span>Krau</span></div>
    <div class="powered" m="2"><span>由 <a href="https://github.com/YunYouJun/valaxy" target="_blank" rel="noopener">Valaxy</a> v0.19.12 驱动</span> | <span>主题 - <a href="https://github.com/YunYouJun/valaxy/tree/main/packages/valaxy-theme-yun" title="valaxy-theme-yun" target="_blank">Yun</a> v0.19.12</span></div>
  </footer>
</template>

<script lang="ts" setup>

</script>
import { useScriptTag } from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
<style>
.yun-footer {
  letter-spacing: 0.05rem;
  line-height: 1.8;
}

.yun-footer-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 300px;
  z-index: 999;
  pointer-events: none;
  background: linear-gradient(to right,rgb(var(--gradient-from) / 0.2) 0,rgb(var(--gradient-to) / .2) 100%);
  mask-image: linear-gradient(#fff0,#000 70%);
  animation: fade-in 2s;
}
</style>
