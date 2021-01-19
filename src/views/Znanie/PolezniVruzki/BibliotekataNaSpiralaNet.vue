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
          tag: "img",
          // src:
          //   "https://ucc61c50614a8f73cc81fc5ec67b.previews.dropboxusercontent.com/p/thumb/ABCrrUWBf-JLeLfTO1rPAug9I5bEGmrA4YklOAUi72TcsLUWjqweb5xK1hVEJt55o84L6-9qhPEGQ0tPcoH5J1nkoebeUNgdlgU9Q7kIzKoVUCIY78Bdcz1N32_fPy0VV1hvvF1RUivtOsxOjaEaIGFahCB98etePI0L9vsoEuidSGlrSr0AioouQVZX_Y3A6xzZmdSAv3D_zpvwbd-JTuMrIRitSUe6w3QKOoPm7g7oIdSaKx_IupLDGsXAvMPLMQjjGi5mIVtHErV6DO062MoNJuluY5fSZWyl2JCcm29RUySexYaHrlyTTV-OGOQVKkdAsUqzMlFMeiGGcPNASOqXc6SmcmIpv6dskHdQoLpJvWCSUlZohPHRU4RLmqZYXVI-CvwF7frWfoTflwyXcZ0Fb53NpKKcm2vGkZur0VMGoEgim8vDjWhrku37F_iuO7MyvaxwKJec2ZP-fC6pnze7/p.jpeg?size=800x600&size_mode=3",
          alt: "avokado",
        },
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