<template>
  <footer>
    <div>
      <slot></slot>
    </div>
    <!-- 其他 Footer 内容 -->
  </footer>
</template>

<script lang="ts" setup>

</script>

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
