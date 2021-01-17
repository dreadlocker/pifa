<template>
  <BaseArticlesList :articles="articles" />
</template>

<script>
import { articlesHolder } from "@/assets/articlesHolder.js";
import BaseArticlesList from "@/components/common/BaseArticlesList";

export default {
  name: "Plodove",
  components: {
    BaseArticlesList,
  },
  data() {
    const articles = articlesHolder.izhrana.plodove;
    return { articles };
  },
};
</script>

<style lang="sass" scoped>
</style>
