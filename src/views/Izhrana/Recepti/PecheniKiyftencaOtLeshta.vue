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
            "https://ucd18a34abe2a0677bdb41ecb8de.previews.dropboxusercontent.com/p/thumb/ABDNALEsF5XMzl17Gep1n1Xz5w3kIM8Ueb4qfTDm3ytkMcJBdekCW_DhQvVNBuWD9klvZRrytJIuqKyJfC5EMZ6XzBNLwb1PcoGJgEJGVsjB3OAB_Wf30fMVPKN5dV5BlTjjAmrhVF1IE9DljbhGXtPwnqVNLF1v3i8Hi39RDlWPkm8XygBH3QkgZFjdloqXUbkgkpmWTqFvHzfNj0gHQO8pQju0Sxd7skRFyvlY3wwq81q3eu9yKqE6OuuAFqk83SDNc_Dyfo9ZnEslpSE-hSIimWIWA2ET-bTBpHMu1KMzp5LymU2iv1edItdqFkpkTQw7ovi96kGhdmraoL5u26kZHktx3O4BRJH8h_P8p7FpJg/p.jpeg?fv_content=true&size_mode=5",
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
            "https://uc6c52bdc51a257ca7eb6fd7253d.previews.dropboxusercontent.com/p/thumb/ABDz50i12R6ZUuiTOy3riS7rrQhJqyrVUMFdtm1NGIxwxYPaNL_OYh77zoLwYguxWG68XYhr0waOej7REZ5rAF69FXb4v4_By04edfZvcT-gyg__zQIN0OhCDXPBW_S4fVDX8fCPncJuylAuNflbV8tD5TroVR_mv1sBQ6IgVndr-joqt0zcGkZrst9l-r7lu2OcEoYyugIZrF0sF_AAESHnQ03sqGCJZ4iiEQpJRZQhOTTmV7hFCEfEtdhtZcwUXovAKXSge9kJ7vq-U2MV7w5j6xVBFQI68-R2GS2D9lh4l3s_alXbl4PheUu4Jwdo86LcPsDdca8W949Vm-qXssJ7EnCNt90kT8RP3FmhTx-KDQ/p.jpeg?fv_content=true&size_mode=5",
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
            "https://uc8d077a3ce8732a9a56e89fb1d6.previews.dropboxusercontent.com/p/thumb/ABCt8Q-TF7pfNTCBhnorw_krdZvO8XHdTmhqjhCTUrQYSmlwPf77Ffev7fCEDX-apxdHndlylls8pmXt-HlrfqI4_wXvC_Y7BPufppjoxqQ-Q2EYcZBg7_YjgwMy5s8BuV2RAFng4kuky4x6Qh9d1ozs7FagGYTn8DMUoF3l7UioxhtU_pdyc1AvYXrpjgk8O8vYnlgIEdl6WY3eFup3ibpBQI6PFXMgjnwMtbZHIPS-3a2tbAlmAlfxBkKqjyJW5AFb6g_8AZrVXCbB3Db7HjRvoHcQ2Z0Gu0iAvNNcxbGMfLLy_7lnzhdEm6gyFf1hVJm3YsdqGK4Wyr8rc4mXtc5bCcjz7xYjGn9PaLkliwTZBw/p.jpeg?fv_content=true&size_mode=5",
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
            "https://uc142fd521208de31e1b50fff5be.previews.dropboxusercontent.com/p/thumb/ABCdqqGyJ-uZ1yYdJFjAJR8xaetWrwbvGVrgjpoJ82dODqc7YsRLlcq7NHMd5fLBDK7Xg2Ur2orb3mBfmtqkjYiaaoaK8sP4VBUAUchwUgrcjnLn7m-GZJoGvbReH3syClzJhr5C0W5zhZHTFuIAi-FXTYTp35BmB2gD5Jb5OL_Vugi8NaaFRhmRn40X08gNx9J_VFHd50VMcGlVSbArcEE50K0WtsF0xYFcAoy8DnbbuL2D-kWPDKBpUFDPvfcqOsaHGww7SnpHqqdzEHKfYEdXh5JLjwUDX0XPY6Zxi0rZ5YC040nBT9GBR5c_R3MEwIksyUhTxujQ0LVqXqoZ8_raDJcdzb7P5rWe-9mo4ogFuQ/p.jpeg?fv_content=true&size_mode=5",
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