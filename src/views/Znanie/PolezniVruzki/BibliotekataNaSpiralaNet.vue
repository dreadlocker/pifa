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
          text: articlesHolder.znanie.polezniVruzki[2].text,
        },
        {
          tag: "p",
          text:
            'Библиотека на <a target="_blank" href="https://mega.nz/folder/3QBgWKgC#P8ix8_p3wu6SSbVSb0w6NQ">спирала.нет</a>',
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