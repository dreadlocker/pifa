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
  name: "DokymentalniteFilmiNaKolibkaKom",
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
          text: '<a target="_blank" href="http://kolibka.com/">Колибка</a>',
        },
        {
          tag: "p",
          text:
            "Най – големият български сайт за документални и научно – популярни филми – над 11 хиляди.",
        },
        {
          tag: "p",
          text:
            "Темите, които съдържа страницата:<br /> – вселената, технологии, енергия, конфликти, природа, морски свят, палеонтология, животни, екология, катастрофи, по света, цивилизации, човек, общество, личности, изкуство, духовни учения, загадки, бг творчество.",
        },
        {
          tag: "p",
          text:
            "Ще намерите както филми дублирани на български език, преведени със субтитри, така и такива, които чакат да бъдат преведени.",
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