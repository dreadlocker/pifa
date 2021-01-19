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
  name: "Avokado",
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
            "https://drive.google.com/file/d/1A1LCmcrcwHW1peeS6dhXkrqpW-ym506G/preview",
          alt: "avokado",
        },
        {
          tag: "img",
          src:
            "https://lh3.googleusercontent.com/lgAQL1rR9SHgJ6PCkQ3BS5CNUByyaIrVNwyoa2rCcYEwvHhS9pWFQ0_P4CUp1ZDhofigCy0GnOpGEI_3rAg=w2536-h1876",
          alt: "avokado",
        },
        {
          tag: "h1",
          text: articlesHolder.izhrana.plodove[0].text,
        },
        {
          tag: "p",
          text:
            "В последните години, авокадото се превърна в световно известен плод, както заради своите хранителни качества (съдържа много повече протеини спрямо другите плодове), така и заради главната роля, която играе в направата на небезизвестното Гуакамоле.",
        },
        {
          tag: "p",
          text:
            "<strong>В тази статия ще научите как да посадите и отгледате авокадо от семка.</strong>",
        },
        {
          tag: "p",
          text:
            "Макар и шансът да берете плодове от своето авокадово дръвче да е малък, то самото растение е красиво и екзотично и си заслужава да бъде част от растенията вкъщи.",
        },
        {
          tag: "p",
          text:
            "<strong>Какво ми е нужно за да отгледам авокадо вкъщи?</strong>",
        },
        {
          tag: "p",
          text:
            "За да посеете и отгледате авокадово дръвче в домашни условия, ще ви трябват следните неща:",
        },
        {
          tag: "ul",
          text: [
            "<strong>Добре узрял плод от авокадо</strong>&nbsp;(препоръчително е да е мек, с малки черни петънца по повърхността му)",
            "<strong>Клечки за зъби (или други дървени шишчета)</strong>",
            "<strong>Съд</strong>, в който ще отгледате авокадото (ние използваме кофички от кисело мляко или големи пластмасови чаши)",
            "<strong>Вода</strong>, много вода",
          ],
        },
        {
          tag: "p",
          text:
            "Ако искате да посеете повече от едно авокадо, то запасете се с повече плодове. Помнете, че има различни видове авокадо, като най-известните сортове са “<strong>Фуерте</strong>” и “<strong>Хас</strong>“.",
        },
        {
          tag: "p",
          text:
            "Разгледайте този албум, за да видите как ние подготвихме нашите авокадови семки за посяване",
        },
        // {
        //   tag: "img",
        //   src:
        //     "https://lh4.googleusercontent.com/Xk-ruVAAQtPoP_6Wi9RgCHNawt3DRAxJQcMUUCA7UUSjKVCsDWayXmEYzjdSc7MhzgKiXqc3YFJItqlx-00=w2536-h1876",
        //   alt: "avokado 1",
        // },
        // {
        //   tag: "img",
        //   src:
        //     "https://lh4.googleusercontent.com/EA8CkpjkX8dkBsTN1GauQKxlkdBli7UoMNapNNDkcW_exPj45YULPSD0WnePLGSVQMJN4HLagXAJ-yiFzuc=w2536-h1876",
        //   alt: "avokado 2",
        // },
        // {
        //   tag: "img",
        //   src:
        //     "https://lh6.googleusercontent.com/kbZVkiJB9r3u-4YHeMZjvDMI5dDoJ4gCjuoPKzFUKEvcRqUeORPw8D1_KJrA_mCVZTr6q0pnNbvaQ0xXLvQ=w2536-h1876",
        //   alt: "avokado 3",
        // },
        // {
        //   tag: "img",
        //   src:
        //     "https://lh5.googleusercontent.com/UW8R9J8VXRB4gX3utuNEXmBFBcmCqBjLEEj9MkXCJ5n_onR8eWFCGHDJB5QuW2cNTJKUww9iWmtBIjwckow=w2536-h1876",
        //   alt: "avokado 4",
        // },
        // {
        //   tag: "img",
        //   src:
        //     "https://lh3.googleusercontent.com/eT5E9ZiePzJGIyIlLVGQfHhxWqaJTaQxuZBTbyonXRhOmsWUbZ2sqV34c_2FTxiIjETmw38bgo__6S4QTOU=w2536-h1876",
        //   alt: "avokado 5",
        // },
        // {
        //   tag: "img",
        //   src:
        //     "https://lh6.googleusercontent.com/tfRooATl16BIBNfc386mZzzsGmYw5EwrH0E3lflDeUrD8eBJiv4uGi2ufyXbnVTfpk4nu-8nt7gUX4kehD4=w2536-h1876",
        //   alt: "avokado 6",
        // },
        // {
        //   tag: "img",
        //   src:
        //     "https://lh3.googleusercontent.com/ThwD216hgelErzkYKo5r4lT6j0qbs_LGweYaQFU0ajmttwutH7cBPnRRAUPZT1bJuGKAy6JtUl3-7c35RZ8=w2536-h1876",
        //   alt: "avokado 7",
        // },
        // {
        //   tag: "img",
        //   src:
        //     "https://lh3.googleusercontent.com/9NoDwPzXMyuyY2-hQAcqSqb9F2Yfvx8VgZDG50T5P-xzhBh9jTWumi4LidYEHz4dNtKwW5WPdBbUcACwMws=w2536-h1876",
        //   alt: "avokado 8",
        // },
        {
          tag: "p",
          text:
            "<strong >За да подготвите авокадото си за посяване, следвайте следните стъпки:</strong",
        },
        {
          tag: "ol",
          text: [
            "<strong> Измийте семката от авокадо с хладка вода</strong>, остатъците от плода могат да изгният и в последствие да повредят младото авокадово дръвче. Препоръчително е да засеете ядката скоро след като сте я взели от авокадовия плод.",
            "<strong>Премахнете/обелете кафявата повърхност върху семката</strong>тъй като тя може да попречи на корените и листата на младото авокадово дръвче да израснат.",
            "<strong>Забийте 3 клечки (за зъби) в средата на ядката</strong>така, че по острият връх на семката да сочи нагоре.",
            "Сложете семката с върха нагоре в купа, чаша или празна кофичка от кисело мляко.",
            "Напълнете кофичката с вода до там, където са забити 3те клечки за зъби.<strong >Възможен е и варианта да посеете ядката направо в съд с почва</strong >, но ние препоръчваме да държите семката в съд с вода, докато пусне корени и листа и тогава или постепенно да попълвате пръст в същия съд, или да пресадите младото авокадово дръвче в нов съд.",
            "<strong>Доливайте вода когато се изпари</strong>така, че долния край на семката винаги да е потопен във вода.",
            "<strong>Дръжте своето авокадо на топло и слънчево място</strong>, особено през зимата.",
          ],
        },
        {
          tag: "p",
          text: "<strong>Допълнителни стъпи към отглеждане на Авокадо</strong>",
        },
        {
          tag: "p",
          text:
            "Не забравяйте, че авокадото а тропическо растение и&nbsp;<strong >температури по 10 градуса по Целзий могат да са пагубни</strong >.&nbsp;<strong>Подсигурено топло и светло място</strong>&nbsp;за вашето авокадо през зимата и не забравяйте да го поливате често – поне веднъж седмично, но в малки количества.",
        },
        {
          tag: "p",
          text:
            "Когато вашето авокадо порасне над 50см. и листата му изглеждат здрави и силни, можете да го подрежете, с цел да се разклони. Тази стъпка определено не е задължителна и не се препоръчва, ако нямате опит в градинарството.",
        },
        {
          tag: "p",
          text: "<strong>И запомнете, авокадото обича много вода!</strong>",
        },
        {
          tag: "p",
          text: "<strong>Любопитни факти за авокадото:</strong>",
        },
        {
          tag: "ul",
          text: [
            "Древните Ацтеки и Маи са ползвали Авокадото още преди 8000 г.",
            "Името на авокадото означава тестиси, поради приликата на плода с човешките тестиси",
            "Авокадото достига височина до 15 метра.",
            "Плодовете на авокадото тежат средно между 150-250 грама, но има сортове, които достигат до 1кг.",
            "В някои места по света, авокадото се нарича алигаторска круша, заради текстурата на кората му.",
          ],
        },
        {
          tag: "aaaaaaaaa",
          text: "bbbbbbbbbbbbbbbbbbb",
        },
        {
          tag: "aaaaaaaaa",
          text: "bbbbbbbbbbbbbbbbbbb",
        },
        {
          tag: "aaaaaaaaa",
          text: "bbbbbbbbbbbbbbbbbbb",
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
