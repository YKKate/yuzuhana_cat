<template>
  <header>
    柚子 🍐 🌼 花
  </header>
</template>

<style lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $mobileHeaderHeight;
  line-height: $mobileHeaderHeight;
  background-color: $color-primary;
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  box-shadow: 0 0 10px darken($color-darken, 10%);
  z-index: 100;
}
@media only screen and (min-width: 768px){
  header {
    height: $headerHeight;
    line-height: $headerHeight;
  }
}
</style>
