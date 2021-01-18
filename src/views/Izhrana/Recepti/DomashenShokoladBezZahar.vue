<template>
  <div>
    <BaseArticle :data="this.data" />
    <FBcomments :href="this.href" />
  </div>
</template>

<script>
import BaseArticle from "@/components/common/BaseArticle.vue";
import FBcomments from "@/components/common/FBcomments.vue";

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
          tag: "h1",
          text: "Домашен шоколад без захар",
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
          tag: "img",
          src:
            "http://www.mashterka.com/wp-content/uploads/2018/10/IMG_0012-225x300.jpg",
          alt: "spoon with chocolate",
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