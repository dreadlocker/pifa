<template>
  <div>
    <template v-for="(item, index) in data">
      <h1
        v-if="item.tag === 'h1'"
        v-html="item.text"
        :key="item.text"
        class="base-article-h1"
      />
      <h3
        v-else-if="item.tag === 'h3'"
        v-html="item.text"
        :key="item.text"
        class="base-article-h3"
      />
      <p
        v-else-if="item.tag === 'p'"
        v-html="item.text"
        :key="index"
        class="base-article-p"
      />
      <ul v-else-if="item.tag === 'ul'" :key="index" class="base-article-ul">
        <li v-for="(text, index) in item.text" v-html="text" :key="index" />
      </ul>
      <ol v-else-if="item.tag === 'ol'" :key="index" class="base-article-ul">
        <li v-for="(text, index) in item.text" v-html="text" :key="index" />
      </ol>
      <div
        v-else-if="item.tag === 'img'"
        :key="item.src"
        class="base-article-img-holder"
      >
        <img :src="item.src" :alt="item.alt" class="base-article-img" />
      </div>
      <!-- <div
        v-else-if="item.tag === 'googleDrivePhotos'"
        :key="item.src"
        class="base-article-img-holder"
      >
        <iframe :src="item.src" :key="index"></iframe>
      </div> -->
      <iframe
        v-else-if="item.tag === 'video'"
        :title="iframeTitle"
        :src="iframeSrc"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
        :key="index"
        class="iframe"
      ></iframe>
    </template>
  </div>
</template>

<script>
export default {
  name: "BaseArticle",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
</style>