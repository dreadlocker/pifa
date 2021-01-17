<template>
  <BaseArticlesList :articles="articles" />
</template>

<script>
import { articlesHolder } from "@/assets/articlesHolder.js";
import BaseArticlesList from "@/components/common/BaseArticlesList";

export default {
  name: "PolezniVruzki",
  components: {
    BaseArticlesList,
  },
  data() {
    const articles = articlesHolder.znanie.polezniVruzki;
    return { articles };
  },
};
</script>

<style lang="sass" scoped>
</style>