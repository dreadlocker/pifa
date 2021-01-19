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
  name: "DomashenShokoladBezZahar",
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
            "https://uc0420321ddc954af9cd64613bb0.previews.dropboxusercontent.com/p/thumb/ABBulrbYBEvwScIqQEfwXwh3zfOPifX39JZxmFVI_XrIe-oZ__2372KijVyrYY9SvdKp8jkd4h3VCXRyfsGhKFlYt-bxijkPi1nIoCZArYvdek4rZemwiPl37Gf4wg7gpCPIJRUeHoj45T1tudq5Rq3eUFVIeoygXWgHq9L0yVEv7x_t0tQf_ejTJ0yNxOeuZ0LerJLVScGLC1jeDqd3o5QVPzpPa3ly9Jv358Q7QbvfEYnyl3HpTnipn1v-6RI9FrMthSAx72nack3Uo0b77631uFE9NOj5BjdTG333SrfN97ja6e4efxNfbRgfO5FUzlcZ59iHFXpGxw3jCfJd51jZTBAIdJpg1QWoAdw1El8y5Q/p.jpeg?fv_content=true&size_mode=5",
          alt: "shokolad",
        },
        {
          tag: "h1",
          text: articlesHolder.izhrana.recepti[3].text,
        },
        {
          tag: "p",
          text:
            "Хей, хей, хей : ) Здравейте отново прекрасни същества! Днешното предложение е съвсем просто и след като опитате, можете да спрете да купувате всички шоколади от магазините! Нека първо разгледаме състава на “млечния шоколад” – няма да споменаваме марки, просто ще обобщим какво съдържат повечето.<br /> В най – добрия случай имат до 10% какао – което се равнява на 10 грама, а всичко останало е повече от “прекрасно” –&nbsp;соев лецитин, палмово масло… но вие сами може да проверите на опаковката на шоколада и да прецените.<br /> А рецептата, която ще ви представя няма да включва нищо от това, което е написано на опаковката, която четете, с изключение на какаото.",
        },
        {
          tag: "p",
          text: "<strong>Съставки:</strong>",
        },
        {
          tag: "ul",
          text: [
            "<strong>500гр. фурми</strong>",
            "<strong>100гр. бадеми</strong>",
            "<strong>50гр. какао</strong>",
            "<strong>сок от 1 лимон</strong>",
            "<strong>сок от 1 портокал</strong>",
          ],
        },
        {
          tag: "p",
          text:
            "Накисваме <strong>фурмите в гореща вода</strong> за <strong>10 мин.</strong> Може да <strong>смелите бадемите</strong> на по <strong>едри парчета</strong>, може да ги използвате и <strong>цели</strong> – както предпочитате. <strong>Белите фурмите</strong> и изваждате костилките, <strong>добавяте целите/смлените бадеми</strong>, сега <strong>какаото</strong> и <strong>сокът</strong> от изстисканите <strong>цитрусови плодове</strong>. Разбърквате всичко до постигане на хомогенна смес. <strong>Слагате във фризер</strong>, за да се стегне сместа, за <strong>1 час</strong>.",
        },
        {
          tag: "p",
          text: "<strong>Това е!Наздраве!</strong>",
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