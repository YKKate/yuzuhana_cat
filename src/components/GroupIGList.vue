<template>
  <div class="group-ig-list">
    <singleIg
      class="single-ig"
      v-for="igData in IGList"
      :key="igData.id"
      :id="igData.id"
      :imgUrl="igData.isVideo ? igData.thumbnail_url : igData.media_url"
      :dateTime="igData.dateTime"
      :textContent="igData.textContent"
      :link="igData.permalink"
      :isVideo="igData.isVideo"
      :videoUrl="igData.isVideo ? igData.media_url : null" />
  </div>
</template>

<script>
import { getIGData } from '@/firebase/firestore'
import singleIg from '@/components/SingleIg'
export default {
  components: {
    singleIg
  },
  data () {
    return {
      IGList: []
    }
  },
  async created () {
    const IGList = await this.getIGData()
    this.IGList.push(...IGList)
  },
  methods: {
    async getIGData () {
      const igData = await getIGData()
      return igData.map(ig => this.renderIGData(ig))
    },
    renderIGData (igData) {
      const isVideo = igData.media_type === 'VIDEO'
      const textContent = igData.caption.split(/\r?\n/)
      const theIGDate = new Date(igData.timestamp)
      const localDateTime = theIGDate.toLocaleString()
      return {
        ...igData,
        isVideo,
        textContent,
        dateTime: localDateTime
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.group-ig-list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  .single-ig {
    flex: none;
    width: 100%;
    + .single-ig {
      margin-top: 30px;
    }
  }
}
@media only screen and (min-width: 768px){
  .group-ig-list {
    max-width: $containerWidth;
    margin-left: auto;
    margin-right: auto;
    $padding: 15px;
    .single-ig {
      width: calc((100% - 2 * $padding) / 3);
      + .single-ig {
        margin-top: 0;
      }
      &:nth-of-type(n + 4) {
        margin-top: $padding;
      }
      &:not(:nth-of-type(3n + 1)) {
        margin-left: $padding;
      }
    }
  }
}
</style>
