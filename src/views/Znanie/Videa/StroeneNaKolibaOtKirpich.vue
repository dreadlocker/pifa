<template>
  <BaseZnanieVideo
    :title="title"
    :iframeTitle="iframeTitle"
    :iframeSrc="iframeSrc"
  />
</template>

<script>
import BaseZnanieVideo from "@/components/common/BaseZnanieVideo";
import { articlesHolder } from "@/assets/articlesHolder.js";

export default {
  nam: "StroeneNaKolibaOtKirpich",
  components: {
    BaseZnanieVideo,
  },
  data() {
    return {
      title: articlesHolder.znanie.videa[1].text,
      iframeTitle: "Primitive Technology: Wattle and Daub Hut",
      iframeSrc: "https://www.youtube.com/embed/nCKkHqlx9dE?feature=oembed",
    };
  },
};
</script>

<style lang="sass" scoped>
</style>