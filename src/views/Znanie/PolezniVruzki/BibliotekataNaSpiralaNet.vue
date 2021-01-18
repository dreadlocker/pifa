<template>
  <div>
    <BaseArticle :data="this.data" />
    <FBcomments :href="this.href" />
  </div>
</template>

<script>
import BaseArticle from "@/components/common/BaseArticle.vue";
import FBcomments from "@/components/common/FBcomments.vue";
import { articlesHolder } from "@/assets/articlesHolder.js";

export default {
  name: "BibliotekataNaSpiralaNet",
  components: {
    BaseArticle,
    FBcomments,
  },
  data() {
    return {
      href: "",
      data: [
        {
          tag: "h1",
          text: articlesHolder.izhrana.zelenchyci[0].text,
        },
        {
          tag: "p",
          text:
            'Библиотека на <a target="_blank" href="http://www.spiralata.net/biblioteka/">спирала.нет</a>',
        },
        {
          tag: "p",
          text:
            "“За живота, вселената и всичко останало…” – снимка и текст – спирала.нет",
        },
      ],
    };
  },
  mounted() {
    this.href = window.location.href;
  },
};
</script>

<style lang="sass" scoped>
.content
  flex-direction: column !important
</style>