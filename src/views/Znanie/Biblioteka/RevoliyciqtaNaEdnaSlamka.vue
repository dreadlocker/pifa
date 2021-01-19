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
  name: "RevoliyciqtaNaEdnaSlamka",
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
          text: articlesHolder.znanie.biblioteka[4].text,
        },
        {
          tag: "p",
          text:
            '<a href="http://gradinka.zaedno.net/sites/gradinka.zaedno.net/files/Revoluciata_na_edna_slamka.pdf">Революцията на една сламка</a>&nbsp;– линк от – градинка.заедно.нет<a href="http://gradinka.zaedno.net/sites/gradinka.zaedno.net/files/Revoluciata_na_edna_slamka.pdf"> </a>Въвеждане в натуралното земеделиеавтор: Масанобу Фукуокаиздадена: 1975г.',
        },
        {
          tag: "p",
          text: "Съдържание",
        },
        {
          tag: "p",
          text: "Увод",
        },
        {
          tag: "p",
          text: "Глава I",
        },
        {
          tag: "ol",
          text: [
            "Погледнете тези житни полета",
            "Съвсем нищо",
            "Завръщане на село",
            "Път към метода “нищо не правене”",
            "Завръщане към източника",
            "Защо натуралното земеделие не е получило широко разпространение",
            "Човечеството не познава Природата",
          ],
        },
        {
          tag: "p",
          text: "Глава II",
        },
        {
          tag: "ol",
          text: [
            "Четири принципа на натуралното земеделие",
            "Културните растения сред плевелите",
            "Земеделие и слама",
            "Отглеждане на ориза в сухо поле",
            "Плодните дървета",
            "Почвата в плодната градина",
            "Отглеждане на зеленчуци като диви растения",
            "Можем ли да се откажем от химикалите?",
            "Ограниченията на научния метод",
          ],
        },
        {
          tag: "p",
          text: "Глава III",
        },
        {
          tag: "ol",
          text: [
            "От гледна точка на фермера",
            "Прости средства за решаване на сложните проблеми",
            "Плодовете на тежките времена",
            "Търговия с натуралните продукти",
            "Комерсиалното земеделие ще претърпи поражение",
            "В чия полза са изследванията?",
            "Какво е човешката храна?",
            "Милосърдният край на ечемика",
            "Просто следвай природата и всичко ще бъде добре",
            "Различни школи за натуралното земеделие",
          ],
        },
        {
          tag: "p",
          text: "Глава IV",
        },
        {
          tag: "ol",
          text: [
            "Заблудите относно храната",
            "Мандала на натуралната храна",
            "Култура на хранене",
            "Живот за единия хляб",
            "Общи принципи на храненето",
            "Храна и земеделие",
          ],
        },
        {
          tag: "p",
          text: "Глава V",
        },
        {
          tag: "ol",
          text: [
            "Глупостта се нарежда под находчивостта",
            "Кой е глупак?",
            "“Аз бях роден, за да ходя на детска градина”",
            "Плаващите облаци и илюзията на науката",
            "Теория на относителността",
            "Село без война и мир",
            "Революцията на една сламка",
          ],
        },
        {
          tag: "p",
          text:
            '<a target="_blank" href="http://www.appropedia.org/images/d/d3/Onestraw.pdf">английско издание</a>',
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