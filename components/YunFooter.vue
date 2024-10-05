<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'
import CustomFooter from './CustomFooter.vue'
useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>

<template>
  <CustomFooter>
    <a id="copyright" href="#" title="6666"></a>
  </CustomFooter>

</template>