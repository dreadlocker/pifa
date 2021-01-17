<template>
  <div class="article-holder">
    <router-link
      v-for="article in articles"
      :key="article.text"
      class="link base-article-p"
      :to="article.path"
      tag="button"
    >
      {{ article.text }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BaseArticlesList",
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
.content
  flex-direction: column
.article-holder
  display: flex
  flex-direction: column
  align-items: center
  .link
    all: initial
    color: #3a3a3a
    cursor: pointer
    margin: 10px 0
    display: table-cell
    text-align: center
    &:hover
      color: #4064d7
</style>