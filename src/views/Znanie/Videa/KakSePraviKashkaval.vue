<template>
  <BaseZnanieVideo
    :title="title"
    :iframeTitle="iframeTitle"
    :iframeSrc="iframeSrc"
    :subTitle="subTitle"
  />
</template>

<script>
import BaseZnanieVideo from "@/components/common/BaseZnanieVideo";

export default {
  name: "KakSePraviKashkaval",
  components: {
    BaseZnanieVideo,
  },
  data() {
    return {
      title: "Как се прави кашкавал",
      iframeTitle: "КАК СЕ ПРАВИ КАШКАВАЛ НА ОТКРИТО",
      iframeSrc: "https://www.youtube.com/embed/mDCaXQi3bwM?feature=oembed",
      subTitle: "Любезно предоставено от Кольо Бошнаков",
    };
  },
};
</script>

<style lang="sass" scoped>
</style>