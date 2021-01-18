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