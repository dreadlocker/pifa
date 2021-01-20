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
          tag: "img",
          src:
            "https://uc2f5de391b565a65e2948868e7d.previews.dropboxusercontent.com/p/thumb/ABCMeOrDBmx3oAzUO35g0IHmoWwVD4GHqS5zZkFmgYXDnxRcG0nboOG3b9ap2VK4LiQsqLwCOK3M6TYy3bskRE-2QgfVjM04ZkOMln-aWarorK0l6tkKqi0mWawDuZ-XV1KaSERWJbs_BjZMYSlCU_qwCkCYpNbaqdO--IDtGJTC8HJmNaIOdEqPM3BaGBIyYA1i8TZCxJHSamvRIVhvPOdAlcWF_ELNX3brwga25RmOEzireML1SzVk6usdZp0sNh3oFXb4p3RRU9_iBYAsh0p9vvBJJ48tmAuGqh-vvglaVxBrPKZer4d8CDwAzkD6gICpKpCXy3R6mlpqY790VhznYs_hNMW3McTVOtYMK-LExRjO0vskWKoIJjYOS0VVYMXoY3drzChMAhityaiedR5-/p.png?size=800x600&size_mode=3",
          alt: "korica na kniga",
        },
        {
          tag: "h1",
          text: articlesHolder.znanie.biblioteka[1].text,
        },
        {
          tag: "p",
          text:
            '<a target="_blank" href="http://dni.li/wp-content/Cannabis_growing_Bg_050.pdf">Scientia est licentia et potentia</a>&nbsp;линк от dni.li<br />Познанието е свобода и сила или отглеждане на коноп<br />Биология, генетика, химия, агрономия',
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