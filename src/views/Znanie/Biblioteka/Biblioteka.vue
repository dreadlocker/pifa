<template>
  <div class="biblioteka">
    <h1 class="base-article-h1">НЕ Е ОТ НАС ТОВА ... :P ... !!!</h1>
    <BaseArticlesList :articles="articles" />
  </div>
</template>

<script>
import { articlesHolder } from "@/assets/articlesHolder.js";
import BaseArticlesList from "@/components/common/BaseArticlesList";

export default {
  name: "Biblioteka",
  components: {
    BaseArticlesList,
  },
  data() {
    const articles = articlesHolder.znanie.biblioteka;
    return { articles };
  },
};
</script>

<style lang="sass" scoped>
.biblioteka
  display: flex !important
  flex-direction: column !important
</style>