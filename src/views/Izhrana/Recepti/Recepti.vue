<template>
  <BaseArticlesList :articles="articles" />
</template>

<script>
import { articlesHolder } from "@/assets/articlesHolder.js";
import BaseArticlesList from "@/components/common/BaseArticlesList";

export default {
  name: "Recepti",
  components: {
    BaseArticlesList,
  },
  data() {
    const articles = articlesHolder.izhrana.recepti;
    return { articles };
  },
};
</script>

<style lang="sass" scoped>
</style>
