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
  name: "SuvetaZaLiybitelqGradinar",
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
          text: articlesHolder.znanie.biblioteka[3].text,
        },
        {
          tag: "p",
          text:
            '<a href="https://mega.nz/#!g9lyWYgQ!B2OUAULzuYiESdISewv2TrWteXAXvGvYugY31JA-Rg8">666 съвета за любителя градинар</a>&nbsp;линк от мега-ъплоуд<br />второ издание<br />автори: Минка Алипиева, Веселина Василиева<br />издадена: 1979г.<br />страници: 298',
        },
        {
          tag: "p",
          text: "Предговор:",
        },
        {
          tag: "p",
          text:
            "Любителят-градинар освен плодовете на упорития си труд получава голяма радост от своята малка зеленчукова градина. Настоящата книга му предлага съвети, които биха му помогнали да опознае по-добре изискванията на зеленчуковите растения към външните условия, начините на отглеждането им през различните сезони на годината, голямото им сортово разнообразие, борбата с болестите и неприятелите по тях и пр. В нея са разгледани редица начини на отглеждане на зеленчуковите растения, практикувани още от някогашните прочути със своето майсторство и трудолюбие български градинари, но са посочени и много нови начини, създадени през годините на социалистическото развитие на българското зеленчукопроизводство. Постарахме се да ги свържем така, че да дадем на любителя-градинар само онова, което може да го ползува в неговата практическа дейност.<br /> Ние ще бъдем доволни, ако сме могли действително да помогнем на любителя-градинар и ще сме благодарни за всички направени бележки по предлаганите съвети.<br /> Изказваме благодарност на проф. Г. Генков, който ни помогна да напишем „Съветите“ по-добре.",
        },
        {
          tag: "p",
          text: "<em>Авторите</em>",
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