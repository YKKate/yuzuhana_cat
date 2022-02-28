<template>
  <section :id="id">
    <div class="image">
      <img
        :src="imgUrl"
        :alt="textContent">
      <a
        class="controls"
        :href="link"
        target="_blank">
        <span class="icon-ig icon-instagram"></span>
      </a>
    </div>
    <div class="ig-content">
      <p v-html="renderHTML(textContent)"></p>
    </div>
    <p class="date-time">{{ dateTime }}</p>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    imgUrl: String,
    dateTime: String,
    textContent: String,
    link: String,
    isVideo: Boolean,
    videoUrl: String
  },
  methods: {
    renderHTML (content) {
      return content.join('<br/>')
    }
  }
}
</script>

<style lang="scss" scoped>
$borderRadius: 5px;
$padding: 10px;
section {
  position: relative;
  display: block;
  padding: $padding;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 5px 10px darken($color-quaternary, 10%);
}
.image {
  position: relative;
  border-radius: $borderRadius;
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: calc(100% - 2px);
    width: calc(100% - 2px);
    border: 1px solid darken($color-quaternary, 30%);
    border-radius: $borderRadius;
    z-index: 1;
  }
  img {
    position: relative;
    display: block;
    max-width: 100%;
    transition: transform .5s;
    border-radius: $borderRadius;
  }
  .controls {
    position: absolute;
    display: block;
    height: 40px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: rgba($color-darken, .6);
    transition: opacity .5s;
  }
  .icon-ig {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    color: #fff;
    font-size: 1.5rem;
    transform: translate(-50%, -50%);
  }
}
.ig-content {
  padding: 10px;
  padding-bottom: 0;
  font-size: 0.85rem;
  p {
    text-align: left;
    margin: 0;
    word-break: break-all;
  }
}
.date-time {
  text-align: right;
  font-size: .8rem;
  color: darken($color-secondary, 20%);
  margin: 0;
  margin-top: 5px;
}
@media only screen and (min-width: 768px){
  $dateTimeHeight: 20px;
  $imageHeight: 320px;
  section {
    top: 0;
    transition: transform .4s ,top .4s;
    .ig-content {
      position: absolute;
      display: flex;
      align-items: flex-end;
      left: $padding;
      top: $padding;
      width: calc(100% - 2 * $padding);
      height: $imageHeight;
      padding-bottom: 10px;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: rgba($color-darken, .6);
      color: #fff;
      box-sizing: border-box;
      pointer-events: none;
      border-radius: $borderRadius;
      opacity: 0;
      transition: opacity .4s;
      p {
        max-height: 100%;
        overflow-y: auto;
      }
    }
    .image {
      height: $imageHeight;
      display: flex;
      align-items: center;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 0;
        height: 100%;
        width: auto;
        max-width: none;
        transform: translate(-50%, -50%);
      }
      .controls {
        height: 100%;
        width: 100%;
        background-color: transparent;
        z-index: 2;
        .icon-ig {
          display: none;
        }
      }
    }
    &:hover {
      top: -5px;
      transform: scale(1.05);
      z-index: 2;
      img {
        transform: translate(-50%, -50%) scale(1.1);
      }
      .ig-content {
        opacity: 1;
      }
    }
  }
  .date-time {
    height: $dateTimeHeight;
    line-height: $dateTimeHeight;
  }
}
</style>
