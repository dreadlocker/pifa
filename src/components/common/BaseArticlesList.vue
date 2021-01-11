<template>
  <div class="article-holder">
    <router-link
      v-for="item in data"
      :key="item.text"
      class="link"
      :to="item.path"
      tag="button"
    >
      {{ item.text }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BaseArticlesList",
  props: {
    data: {
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
    margin: 0 10px
    font-size: 2vw
    cursor: pointer
    margin: 10px 0
    transition: all 0.3ss
    &:hover
      color: #4064d7
</style>