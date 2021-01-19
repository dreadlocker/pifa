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
  name: "DyhovnoRazvitie",
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
          text: articlesHolder.znanie.polezniVruzki[1].text,
        },
        {
          tag: "p",
          text:
            '<a target="_blank" href="http://www.duhovno-razvitie.com/">Духовно развитие</a>',
        },
        {
          tag: "p",
          text:
            "Една уникална уеб страница за смисъла на живота, духовни практики, живот след смъртта и още много други теми от подобно естество. Също така може да посетите библиотеката на сайта, която предлага не само книги, но също така и видеа.",
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