<template>
  <BaseArticlesList :articles="articles" />
</template>

<script>
import { articlesHolder } from "@/assets/articlesHolder.js";
import BaseArticlesList from "@/components/common/BaseArticlesList";

export default {
  name: "Zelenchyci",
  components: {
    BaseArticlesList,
  },
  data() {
    const articles = articlesHolder.izhrana.zelenchyci;
    return { articles };
  },
};
</script>

<style lang="sass" scoped>
</style>
