<template>
  <div>
    <h1 class="base-article-h1">{{ title }}</h1>
    <iframe
      :title="iframeTitle"
      :src="iframeSrc"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
      class="iframe"
    ></iframe>
    <h3 v-if="subTitle">{{ subTitle }}</h3>
  </div>
</template>

<script>
export default {
  path: "BaseZnanieVideo",
  props: {
    title: {
      type: String,
      required: true,
    },
    iframeTitle: {
      type: String,
      required: true,
    },
    iframeSrc: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
    },
  },
};
</script>

<style lang="sass" scoped>
.content
  flex-direction: column
.iframe
  width: 100%
  height: auto

@media only screen and (max-width: 1366px)
  .iframe
    height: 240px !important
@media only screen and (min-width: 1000px) and (max-width: 1100px) and (orientation: portrait)
  .iframe
    height: 390px !important
@media only screen and (min-width: 568px) and (max-width: 1023px)
  .iframe
    height: 290px !important
</style>

