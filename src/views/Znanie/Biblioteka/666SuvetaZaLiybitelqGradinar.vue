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