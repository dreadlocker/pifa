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
  name: "PostenBqlSosChesun",
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
            "https://uc5202c18aedb6b29e5fe08e8901.previews.dropboxusercontent.com/p/thumb/ABBhopNyCKgkteigH3g2yHH5R1IUrs4flDUWnrBeJO7FoLyGlUl9lf8m-nPexUSL--xJ4A4vPW9FzOaBknld7RDnJasLA918F-r3T7qKGBYuzKaXxSTIeUmijgzFznIPYqi6SG7EiuA4D2N4bU_9kn_1jAqPHZxdJlJf2MLLr_1Ly8lN2NWAfKR2HjRThiNdYveFMVnjI7XjR9r79RfcK2QhIbzW5vtehB0lRvz9lpLDzBOQTdbpHY75R7rzN_x2A7mWKuGs-ItPr5LlFTCvIWTOFzc6kXXA2KZ8Wtsyx1dS_m81Shq5wdog-DWD1lNDIlBN_EX9ukpjD2PLHrCLoa1uQM0mhsBkIN_F1unvKGotUA/p.jpeg?fv_content=true&size_mode=5",
          alt: "sos",
        },
        {
          tag: "h1",
          text: articlesHolder.izhrana.recepti[0].text,
        },
        {
          tag: "p",
          text:
            "Надявам се не чакахте много. От вчера до днес, са близо 20-тина часа. В предната рецепта ви представих кюфтенцата от леща. Днес ще ви представя сос, ПОСТЕН сос, който може да комбинирате с тях. Ето го и него!",
        },
        {
          tag: "h3",
          text: "Съставки:",
        },
        {
          tag: "ul",
          text: [
            "<strong>4 с.л. зехтин или олио</strong>",
            "<strong>4 с.л. бяло брашно</strong>",
            "<strong>4 скилидки чесън</strong>",
            "<strong>400мл. вода</strong>",
            "<strong>сок от два лимона или 50 до 100 мл. ябълков оцет</strong>",
            "<strong>щипка сол</strong>",
          ],
        },
        {
          tag: "p",
          text:
            'Взимате буркан за компот – <strong>800мл</strong>. Слагате четири по – едри скилидки <strong>чесън</strong>. За компания на чесънчето му добавяте сокът от двата <strong>лимона</strong>/<strong>или</strong> ябълковия <strong>оцет</strong> и с блендер смилате. Добавете и водата към смляното сокче. Ще се образува повече бяла пяна, особено когато използвате оцет. Малко наподобява на бити белтъци. След, което на загрят котлон поставете тенджарка. Сложете в нея <strong>зехтина/олиото</strong> и добавете <strong>брашното</strong>, като разбърквате без да спирате. Ред е на солта. След това добавете кисело – чесновото сокче и продължете с бъркането. След <strong>5 мин</strong>. може да спрете котлона и да свалите тенджарката. Изчакайте да се охлади. Ако ви е много <strong>гъсто</strong> добавете допълнително <strong>вода</strong>, разбърквайки го.<br /> Ако не сте прочели за кюфтенцата от леща, може да го направите <strong ><a target="_blank" href="https://www.mashterka.com/kufteta-ot-leshta/">ТУК</a></strong >.<br /> Добър апетит!',
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
