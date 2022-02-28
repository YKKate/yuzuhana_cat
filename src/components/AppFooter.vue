<template>
  <footer>
    <div class="content">
      <p>
        <a href="https://github.com/YKKate/yuzuhana_cat" target="_blank">GitHub</a>
        <span v-if="updateDateTime"> / {{ updateDateTime }}</span>
      </p>
    </div>
  </footer>
</template>

<script setup>
const updateDateTime = process.env.VUE_APP_DEPLOY_DATETIME || new Date().toLocaleString()
</script>

<style lang="scss" scoped>
footer {
  $fontColor: rgba($color-darken, .7);
  padding: 20px 10px;
  color: $fontColor;
  .content {
    max-width: $containerWidth;
    margin-left: auto;
    margin-right: auto;
    text-align: right;
    a {
      position: relative;
      text-decoration: none;
      color: $fontColor;
      font-weight: bold;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        border-bottom: 3px double $fontColor;
        transition: width .3s;
      }
      &:hover {
        &:after {
          width: 100%;
        }
      }
    }
  }
}
</style>
