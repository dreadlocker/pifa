<template>
  <div>
    <h1>{{ title }}</h1>
    <iframe
      :title="iframeTitle"
      :src="iframeSrc"
      width="1200"
      height="675"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen=""
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
</style>

