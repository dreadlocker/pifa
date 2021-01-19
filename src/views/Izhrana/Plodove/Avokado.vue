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
            "https://uca09fdcc4e2c56d9db81f9f436f.previews.dropboxusercontent.com/p/thumb/ABCOka7CYBw0Zb7AVsiozBTMrl04QchgBDkstdnVUM6GgElDbeHesV6WhOzcVy0bO2aLgw3qkARHXMAShzdoTPVcCPLJMgZcVJ7U6ngbcbAQ9A4uuQeHDkIPeBYzaBYVrYsYiyYuqcdXmki2CBAz987bvDzC2RD95I3p-zEm0bXlcOrZC-mAkmajmezXyIdVh4lCNd9CSFglrwXKI38vjjX5iztfGFLNvIdXwx1klWfUvQFYquFY20FH0rWgpv-3pvhzUs_9qdZnhX9nWowBYr614S-2y1M9iU37FUDv7F6aoAMGxjiqaLibQ1wQ67wKsSFWaqKYOFKPBTk1uJuwe3XA5f_E96AlwGsfYwJ-yprNQw/p.jpeg?fv_content=true&size_mode=5",
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
        {
          tag: "img",
          src:
            "https://ucedbce5765e76979117a318ff7f.previews.dropboxusercontent.com/p/thumb/ABDYmtnbXRA5p1fgBhf3RyXr2ibOT0DpWpl9Qrfi5ceZNkf0kogZBlXpYzOY3WjGuDQTkHSvuzhpDCK8z5Y-qeopKCEdCF1srXHesF9RFIsB9QipjW8d00EpsieGBmAGL5x_s1KBNPBbljF8CSJCbp3dcZ753fAc1n0mkwSjDXii2Su4DgqiQsjWUtndkSV3CLfsYKR91kOhUhFBo0dXebFV7e6pYsCIjvf7Zp-JN99RFyuPxqnLkdJ3h1RfUpnTKGjBw1UgaUmtxAE8bUqP8HV8ETtkadyNn3pe3QjNYRn4-js92fZcUiubhhNXZtshe2ficRc82YKINAFsBgjtCdjO7NQignVhX0vP-LLeANG21A/p.jpeg?fv_content=true&size_mode=5",
          alt: "avokado 1",
        },
        {
          tag: "p",
          text: "",
        },
        {
          tag: "img",
          src:
            "https://uc21e6b3f129fe5ae605e22b8116.previews.dropboxusercontent.com/p/thumb/ABDEFxfB3yGj0O8dgvyXl2sdffsDe5Ok93Ip5Rsh8bNdPmVDPW8RKpEVWpSGDKFJI4lAM7TnKYyxkaFRSW451du1eSVzs0M3aNP5ixqsFlIT11HBQemDO_bFqJ43_HNpta5sDjvDrR_Lj2bobhKJ9WKceFvFuEGdDezCNH-AeH87tQib5eKIuT7UfMGNTTAYrEeL4QW2ZbU_GigpQBSbuV9X_jNaJOFArgFNEcuGtrsRdQn_HQ6O-CrJ101nKcXMz6w8nzl9JcOIOM9RtH-OswyBjpxBx_4Kt5AymzKIuayA8Mx3oPew6jVjFqY7MSeUWwmoHyAiXRayWEohx7avruWOiZ7bt9kWXrCtxtEdX7su1w/p.jpeg?fv_content=true&size_mode=5",
          alt: "avokado 2",
        },
        {
          tag: "p",
          text: "",
        },
        {
          tag: "img",
          src:
            "https://ucb70bb7c7a854c43eb85b6f7764.previews.dropboxusercontent.com/p/thumb/ABDmdihxjT2WcJAaWW3fbuo94CZirai0ofw6G1BfqnEo33ab9BFWvEfr_AgtlUub7bsgA6tkFlAj4Bml9RXq0r5f-JjUoR3BgHvcjD4nUYi9ksHF5MR2FW1DF8IsVDv9LCc_K20tAKDFAb-rwOg_-DuI8EL8xu4pha0vLWEuI2sSGgbZkuiae9n2KUXcypoG2ly3bV1dcFaaZEFC6T59EkAqOLajx8iCuTXOEWIPtGSGx_xyKNXcM8opYCYtznj473MMKcIDuE-UDSRtr2iycLyVXpDIGZdhMfg_M0T-9GFPwizktl2hr0etZPyg48lfWwPuaQJf9qGz9XvCW9PM5vE0XVGol3aXmP5glFf9n3HFpQ/p.jpeg?fv_content=true&size_mode=5",
          alt: "avokado 3",
        },
        {
          tag: "p",
          text: "",
        },
        {
          tag: "img",
          src:
            "https://uc92d3952f5ba16fb96b7ec7eb9d.previews.dropboxusercontent.com/p/thumb/ABDRiEgEPEXJ46GAYlpA-7CG2zt6_gIf4-l7mNfwUoo1GJBLFJXtdEy22wJvbWND5aZDV5vOziTDCtRQ-Uc-Wk1_LV9C5kEXU_E56CuKKPJjgf8yL8WREb1nKjU0xL2h0Q8UAZiV5sWqvKp2u00mImm3QDyiS-7XDNnNGg-MHReGk4_8jXFpM3W4nasRp3XbaQTUPtGcYO5SRT5BiTP1qY59lo_DXfN_lwiSckakgcuEKSBugBQuQlUDPJ-lzDJSVYOf3u8hPozAWmWy2F77JFWwNlCFPAri5TSE_fn6nUHaNCYTsDj11Z_h772auPgX7z19dMTXKFqfhyJWqk1dBMiwJgP3aF4YU51mQfJLW17dPQ/p.jpeg?fv_content=true&size_mode=5",
          alt: "avokado 4",
        },
        {
          tag: "p",
          text: "",
        },
        {
          tag: "img",
          src:
            "https://ucfab935090a0a338d628e534f72.previews.dropboxusercontent.com/p/thumb/ABAS0XKSbBwtH_oWAWDtcHUyYlp71NrTsQLU3qMjS_gWfFHOKhXodd43EfSVEel7IzixFbR-1CHLEoo2AftTKJ9WWeZcusAWmK-f5Cd7CKIujo77hLBS-r1w_hE8ROckAheoIpFpYymP--mrHgmXyyw2Sz3w-N_7vJe_tOKKPN0KFHwuxvx1bhWQke4ZCWygL7XpiKrhnB9Ig2awOASnN6HN-E5xSaaAZvzapEsr_zhTzHC8aXstkyzItGb5sKBjZZe7PzYB3nQ0CCYQa9kNziVo4nIMGrqA6Y6cFmbMRWYVxlvqObDk7QDT10dTYW7h7ldyw-Zg5PqZpMzvmZbykMYalrj0xL8VhOL9R83x8uDnHQ/p.jpeg?fv_content=true&size_mode=5",
          alt: "avokado 5",
        },
        {
          tag: "p",
          text: "",
        },
        {
          tag: "img",
          src:
            "https://ucaf6c502134e81f2d8295383859.previews.dropboxusercontent.com/p/thumb/ABDuA8BjenaeylvXih0ieZ9OoSZQQvuq9jh9HOZZHTIWDeHvm_sFpeJ6XztQlXI_VGWh2-bgmGX3djYI7vkFznFqfzw8eUbH6O-RmEZRaMr_22F_JuYWVmJlienDMB4K-5McagzCGrRy6wjWeGUsP2MVqIxmvLejeESK26U8NUWRPxuubr4p-JW46B1Lnuot_cbbkPtlBbYiy6UiWf20Z5WEMogapfZKs5ZcA-lYFWK42RXVpAGRK5jq18ch2qvd0xGic3E3M-gvWPLKzN1wmErpm_5NqFpbfzSk-evqB10wCWZfZRLeyt3J7szv6ORThTNyUku7MEw9kYPTkMQHhmGtV4WWwSaLaUqp98LeodFGIg/p.jpeg?fv_content=true&size_mode=5",
          alt: "avokado 6",
        },
        {
          tag: "p",
          text: "",
        },
        {
          tag: "img",
          src:
            "https://uc833753dfe78a2b5cb303e8d9e1.previews.dropboxusercontent.com/p/thumb/ABCSzGqoJ9whj_UNcIWG3kdVWXfYhq3iDepT-4GAbcNlhxP3RPqfZWQ12qjRN8BLVC5p2xckTxAERS_a-zDJZTazTLtJ-y7lf1-CyfqTvxNUpCWUzYdIIxT9pEcSZ6NqMNwlkw9vHcy-1Mw1wdbQjiBv1xQX6xJz5cV5IEGO1E1oN_2S00TzGg0Xl3MUpSiD2RlLp4yguOZwyc8v-e741TqfNB9QcBh4wxZcGU3Ocn8JdRViyOYL-zSebPC8yCEztnhoLzmnVvKdYrCp9zV54KMmFGr6AJxVzQFVsQayi95AeEdg1zf3yO2EeeKy_Ayq54hYd3Um76QmN7cO6PgfiZDOSAmMzf4O3ZQKIhffXzBdcQ/p.jpeg?fv_content=true&size_mode=5",
          alt: "avokado 7",
        },
        {
          tag: "p",
          text: "",
        },
        {
          tag: "img",
          src:
            "https://ucf84c863a8903ba9baf6e8d0e2d.previews.dropboxusercontent.com/p/thumb/ABBVrR7M_jhcADpODG3GuCEeT5_sYnwVLZqfoNRjE-iPhHIz5uHcZo_VZJBl0y7gcTFaFtOURRRl_kUENHWN_xazOY-TbHeEkZ8he_AhIVHPz8gJKwdko0OzpMR6luIcxxeVEYjJRaRLzFmlSyLs8jcy7DwN3LJtFk2OYEiJ_agV_UMJ-wIpwx2CgElxdkPjLxZ4Uiwy1pIjrV4Pny5vbni37YN8-oyiV1I6CUjUyhrmqN5OgmHBU6W9MJZy_Ay-GFGnyFWkZfq1oxBdP6Mxp7I3i4V50rpcFtDrgnJIZIAU6CIwHKxEt3b8-3sIFSZpiagkl3XY_vxpLp-7_Yf2Nhjc_XwrR5BE2jZeZtG1UptoLw/p.jpeg?fv_content=true&size_mode=5",
          alt: "avokado 8",
        },
        {
          tag: "p",
          text:
            "<strong >За да подготвите авокадото си за посяване, следвайте следните стъпки:</strong",
        },
        {
          tag: "ol",
          text: [
            "<strong> Измийте семката от авокадо с хладка вода</strong>, остатъците от плода могат да изгният и в последствие да повредят младото авокадово дръвче. Препоръчително е да засеете ядката скоро след като сте я взели от авокадовия плод.",
            "<strong>Премахнете/обелете кафявата повърхност върху семката</strong> тъй като тя може да попречи на корените и листата на младото авокадово дръвче да израснат.",
            "<strong>Забийте 3 клечки (за зъби) в средата на ядката</strong> така, че по острият връх на семката да сочи нагоре.",
            "Сложете семката с върха нагоре в купа, чаша или празна кофичка от кисело мляко.",
            "Напълнете кофичката с вода до там, където са забити 3те клечки за зъби.<strong > Възможен е и варианта да посеете ядката направо в съд с почва</strong >, но ние препоръчваме да държите семката в съд с вода, докато пусне корени и листа и тогава или постепенно да попълвате пръст в същия съд, или да пресадите младото авокадово дръвче в нов съд.",
            "<strong>Доливайте вода когато се изпари</strong> така, че долния край на семката винаги да е потопен във вода.",
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
            "Не забравяйте, че авокадото а тропическо растение и&nbsp;<strong >температури под 10 градуса по Целзий могат да са пагубни</strong >.&nbsp;<strong>Подсигурено топло и светло място</strong>&nbsp;за вашето авокадо през зимата и не забравяйте да го поливате често – поне веднъж седмично, но в малки количества.",
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
