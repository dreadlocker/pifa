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
          src:
            "https://uc652f074780b77178e9b1c9c506.previews.dropboxusercontent.com/p/thumb/ABCBbIZe08w8KjJo5x5CJNe4Vku-SJjXQwN23iGVoorOiCmtPy6yVGf_M9UlkJQbMlMDjvngdyzyzHqybVUt1oDQtpf29sjeva_-6GOASVK7xUrLL-G4KxR2tuuXVeyHFMN-0Fb1OtVuo3hoF4MbsTrvxO2MckLqkdVRcFMylSXhz3nH1SI_mUKhNoyhEt3BSO7xgC1mdAkYhg4x3MR9R1biZH2BYXQ4OUOeA-otU5tWCTsMY3DtlVvOQxMBzv4-5ZzNmilHQJTvtpkQRgxcMnFWJMsyHQDNIgWGUwm_LSOG_iD-bv-gJq3ZjSyIaLUb2qPXvyIpj9zs2rjQh-nOkW6XkMcsyaEnbKJQfMG2zGp_dMF0bA6yyxAP9nyg9HRUsz9YclgyBI8io2NRZCi7jYrx/p.png?size=800x600&size_mode=3",
          alt: "korica na kniga",
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