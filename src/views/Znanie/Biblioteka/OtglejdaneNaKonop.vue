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
  name: "OtglejdaneNaKonop",
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
          text: articlesHolder.znanie.biblioteka[1].text,
        },
        {
          tag: "p",
          text:
            '<a target="_blank" href="http://dni.li/wp-content/Cannabis_growing_Bg_050.pdf">Scientia est licentia et potentia</a>&nbsp;линк дни.ли<br />Познанието е свобода и сила или отглеждане на коноп<br />Биология, генетика, химия, агрономия',
        },
        {
          tag: "p",
          text:
            "автор: Глиги и сътрудници<br /> издадена: 2004г.<br /> страници: 116",
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