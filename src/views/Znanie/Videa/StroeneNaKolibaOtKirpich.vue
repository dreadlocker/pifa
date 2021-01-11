<template>
  <BaseZnanieVideo
    :title="title"
    :iframeTitle="iframeTitle"
    :iframeSrc="iframeSrc"
  />
</template>

<script>
import BaseZnanieVideo from "@/components/common/BaseZnanieVideo";

export default {
  nam: "StroeneNaKolibaOtKirpich",
  components: {
    BaseZnanieVideo,
  },
  data() {
    return {
      title: "Строене на колиба от кирпич, с огнище и комин",
      iframeTitle: "Primitive Technology: Wattle and Daub Hut",
      iframeSrc: "https://www.youtube.com/embed/nCKkHqlx9dE?feature=oembed",
    };
  },
};
</script>

<style lang="sass" scoped>
</style>