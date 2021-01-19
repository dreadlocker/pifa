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
  name: "PecheniKiyftencaOtLeshta",
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
            "https://lh3.googleusercontent.com/lZBV__p6VSFvlvV1ABMh3LtI543dAL4KLbXX5RHVk27tAtHlK_PGU-ww3r6_cBwLeCBArzXYH4SG3Q9a7Pg=w2536-h1876",
          alt: "kiyfteta",
        },
        {
          tag: "h1",
          text: articlesHolder.izhrana.recepti[1].text,
        },
        {
          tag: "p",
          text:
            "Здравейте : ) Коледа наближава!<br /> Хората започнаха да подготвят украсите, да слагат лампичките и елхите, и да чакат със затаен дъх. Но преди да дойде този свят празник имаме <strong>коледен пост</strong>. Той започва от <strong>15-ти</strong> ноември до <strong>25-ти</strong> декември. А днешната рецепта е точно такава – <strong>постна</strong>! Също, не е традиционна и може да си я правите, когато си поискате. Бях ви споменала, че не съм професионален готвач, а експериментирам и ,ако нещо се получи сполучливо, споделям.Заглавието на статията ви е довело тук и вече знаете.<br /> “<strong>Печени кюфтета от леща</strong>” – Точно така!<br /> Искам да подчертая <strong>ПЕЧЕНИ</strong>, а не пържени. Нали се опитваме да живеем по – здравословно. Но за “печените” вместо “пържени” храни ще ви разкажа следващия път!",
        },
        {
          tag: "h3",
          text: "<strong>Съставки:</strong>",
        },
        {
          tag: "ul",
          text: [
            "<strong>500гр. леща </strong>(един пакет)",
            "<strong>голяма глава лук</strong>",
            "<strong>4 скилидки чесън</strong>",
            "<strong>5 с.л. олио или зехтин</strong>",
            "<strong>2,5 с.л. сол</strong>",
            "<strong>2 с.л. кимион</strong>",
            "<strong>2 с.л. червен пипер </strong>(може една пушен и една не-пушен)",
            "<strong>до 12 с.л. брашно </strong>(бяло или царевично)",
            "<strong>до 150мл. от водата, в която я вряла лещата</strong>",
          ],
        },
        {
          tag: "p",
          text:
            "<strong>Сваряваме</strong> лещата, след което си <strong>отделяме 150мл.</strong> от течността настрани.",
        },
        {
          tag: "img",
          src:
            "https://lh5.googleusercontent.com/Wv9GAxvhIRbdlC7LXaPyR8tbKpLZmljiFniSUilXAjMAzuJHKMLNYHG8NPIuE-JoLRBNP4LHFRsPai5KMok=w2536-h1876",
          alt: "smes",
        },
        {
          tag: "p",
          text:
            "<strong>Нарязваме</strong> главата <strong>лук</strong> по на дребно, след което нарязваме и скилидките <strong>чесън</strong> – на две, на три. Слагаме лещата и луковите в една купа. <strong>Добавяме солта, кимиона, червения пипер, олиото.</strong>",
        },
        {
          tag: "p",
          text:
            "Ще се отклоня леко и ще ви кажа, защо не слагам <strong>черен пипер</strong>. Колкото и вкус да придава на храната, която ядем, толкова е и <strong>НЕПРИЯТЕЛ</strong> на нашите черва. Черният пипер е един от факторите образуващи полипи и ракови образования в чревния тракт. За това избягвам да го използвам в храната, която готвя.",
        },
        {
          tag: "p",
          text: "Но да се върнем към рецептата, за вкусните постни кюфтенца.",
        },
        {
          tag: "img",
          src:
            "https://lh4.googleusercontent.com/Ci9DJUI1DoVpQ45nUOPt_oiqh0oOtQ4RgZNBGwAT_SE2ed3butl-r1LoBeh7wcrs8lL2wzyFmxVvPxV8VVI=w2536-h1876",
          alt: "blendirane",
        },
        {
          tag: "p",
          text:
            "Почти всичко вече е в купата. С помощта на <strong>пасатор</strong>, смиламе/<strong>пасираме</strong> сместа. Не целим да стане на каша. Нека има някое друго парче лук. Ако сметнете, че ви е суха сместа <strong>добавете водата</strong>, която отделихме в началото.",
        },
        {
          tag: "p",
          text:
            "От всяка <strong>вода</strong>, в която е <strong>варена бобена култура</strong>, се отделя известно количество <strong>белтъчини</strong>, което можем да използваме в последствие. В нашия случай, я използваме за <strong>спойка</strong> – като заместител на яйцето.Смесете добре и опитайте на вкус. Ако ви липсва нещо добавете. За мен тази консистенция е идеална. Ако и за вас е такава, <strong>добавете брашното</strong>. Крайният микс трябва да изглежда така:",
        },
        {
          tag: "img",
          src:
            "https://lh4.googleusercontent.com/h2tOqxckq96-q5T1BYhkklMkOqvlAiX0NjYEkncsVIaUZjJHcnGM4akxfaU7GazXdkiEXvt9p81oFME3wJo=w2536-h1876",
          alt: "syrovi kiyfteta",
        },
        {
          tag: "p",
          text:
            "Вземете, плоска тавичка, постелете <strong>хартия за печене</strong>. Включете фурната да нагрява отдолу и отгоре, и завъртете вентила на <strong>най – високия градус</strong>. Докато тя загрява, може да сложите лепкавите кюфтенца. Аз използвам лъжица за сладолед, за оформяне на топчето. Взимам от сместа и след това притискам топчето със супена лъжица, за да стане по – плоско.",
        },
        {
          tag: "p",
          text:
            "Всяка фурна е различна, градусите им не отговарят много, за това не мога  ви кажа колко време би отнело да се изпекат. Проверявайте периодично,  моментът, когато от долна страна кюфтетата са приели strong>кафеникава до златиста коричка</strong>. След, което ги strong>обърнете</strong>, за да се изпекат и от другата страна.",
        },
        {
          tag: "p",
          text:
            'От тази смес излизат около <strong>40 – 45 кюфтенца</strong>. И вървят чудесно с <strong><a target="_blank" href="https://www.mashterka.com/posten-sos/">кисел, постен сос</a>.</strong> Утре ще ви споделя и за него.',
        },
        {
          tag: "p",
          text: "<strong>Да ви е сладко!</strong>",
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