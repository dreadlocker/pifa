<template>
  <div class="biblioteka">
    <h1>НЕ Е ОТ НАС ТОВА ... :P ... !!!</h1>
    <BaseArticlesList :data="data" />
  </div>
</template>

<script>
import BaseArticlesList from "@/components/common/BaseArticlesList";

export default {
  name: "Biblioteka",
  components: {
    BaseArticlesList,
  },
  data() {
    return {
      data: [
        {
          text:
            "Изисквания за устройството и експлоатацията на гъбарници НАРЕДБА № 7",
          path:
            "/znanie/biblioteka/iziskvaniq-za-ystroistvoto-i-eksploataciqta-na-gubarnici",
        },
        {
          text: "Отглеждане на коноп",
          path: "/znanie/biblioteka/otglejdane-na-konop",
        },
        {
          text: "Строителство с естествени материали",
          path: "/znanie/biblioteka/stroitelstvo-s-estestveni-materiali",
        },
        {
          text: "666 съвета за любителя градинар",
          path: "/znanie/biblioteka/666-suveta-za-liybitelq-gradinar",
        },
        {
          text: "Революцията на една сламка",
          path: "/znanie/biblioteka/revoliyciqta-na-edna-slamka",
        },
        {
          text: "Откъс от закон за собствеността",
          path: "/znanie/biblioteka/otkus-ot-zakon-za-sobstvenostta",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.biblioteka
  display: flex !important
  flex-direction: column !important
</style>