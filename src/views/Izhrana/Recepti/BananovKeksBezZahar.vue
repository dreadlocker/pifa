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
  name: "BananovKeksBezZahar",
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
            "https://uc22392d20fcb8c24fe3c9fc5691.previews.dropboxusercontent.com/p/thumb/ABCeauQa1Hd1sMdDxjIYXfTKVm3mDnETDnv5t_gWy2ay6Q9kIogMMsZiFvxiP-kURbAj1mSVei6nkdeA3YvEbZ4UeNtNjIKodeSDJqSBETe_uZVv2RLgMWp0d9vv-jubfs_vbHuP0DSqisbRk-7ifFXX8kWvODYYpqNntuve2QH6QyB4J_px3CvfSPqMCkEK77yZdnYp7bkGJNlCPbV7cG7W1Bq4XAqTluFs4q9L3QFiBWoTrB2D96JqmNcnfh815zl1MEDYI7dxA2yGunw0X8bDHYhmCai2KaYhy3BdMD-BN7dwq5yxd0jH2Fwm0fdbPnzjE1hE0zAW-P6sTpb0VTL6ku8FRlyrZT3wGnbNdrSPNQ/p.jpeg?fv_content=true&size_mode=5",
          alt: "keks",
        },
        {
          tag: "h1",
          text: articlesHolder.izhrana.recepti[4].text,
        },
        {
          tag: "p",
          text:
            "Здравейте, казвам се Мария, преди всичко искам да кажа, че съм далеч от професионален готвач. Лично правило – храната да е здравословна! Любовта към готвенето открих преди две години и от тогава насам изпробвам, майсторя, не винаги успешно, но съпругът ми има здрав стомах и честно сърце, за това тук ще публикувам експерименталните рецепти, които са се получили.&nbsp; И за начало – Ще са ви нужни следните <strong>съставки</strong>: /по ред на поява в сценария/",
        },
        {
          tag: "ul",
          text: [
            "<strong>15 фурми</strong>",
            "<strong>3 по – големи банана</strong>/по зрели/",
            "<strong>3 яйца </strong>/има някаква символика в това три, не мислите ли/",
            "<strong>½ чаша/125мл./ олио</strong>",
            "<strong>1 ½ чаша/250мл.+125мл./&nbsp; брашно</strong>",
            "<strong>3 с.л. маково семе</strong>",
            "<strong>1 ч.л. бакпулвер</strong>",
            "<strong>½ ч.л. ванилия</strong>",
            "<strong>3 с.л. какао</strong>",
            "2 лъжици мед/по желание/",
          ],
        },
        {
          tag: "p",
          text:
            "Ами, така като гледам, това са продуктите, от които имаме нужда за експеримента. Да започваме!",
        },
        {
          tag: "p",
          text:
            "Пускате <strong>фурната</strong> да загрее на <strong>170° C</strong> , през това време накисваме <strong>фурмите в гореща вода</strong> за <strong>10 мин.</strong> Докато те се накисват, време е да <strong>намачкаме бананите</strong> докато не се превърнат в каша, <strong>добавяме яйцата</strong> и разбъркваме докато не се превърна в хомогенна смес. Нека добавим още няколко неща към тази смес – <strong>олио, брашно, маково семе, бакпулвер, ванилия</strong> – чудесно. Десет минути изминаха – започваме да <strong>белим фурмите</strong>, за да придобием по – добра текстура. След това ги <strong>режем, късаме</strong>… както намерим за добре и ги изпращаме към останалата смес. Разбъркваме и омесваме хубаво. Разделяме на две, като към първото парче <strong>добавяме какаото</strong> и отново размесваме. Събираме двете парчета. Хайде да печем! Време за <strong>печене около 45мин</strong>.",
        },
        {
          tag: "p",
          text: "<strong>Да ви е сладко, наздраве!&nbsp; &nbsp;</strong>",
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