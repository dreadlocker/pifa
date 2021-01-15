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
        :key="item.text"
        class="base-article-p"
      />
      <ul v-else-if="item.tag === 'ul'" :key="index" class="base-article-ul">
        <li v-for="(text, index) in item.text" v-html="text" :key="index" />
      </ul>
      <img
        v-else-if="item.tag === 'img'"
        :src="item.src"
        :alt="item.alt"
        :key="item.src"
        class="base-article-img"
      />
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