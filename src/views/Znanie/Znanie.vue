<template>
  <BaseCategory :data="data" />
</template>

<script>
import BaseCategory from "@/components/common/BaseCategory";

export default {
  path: "Znanie",
  components: {
    BaseCategory,
  },
  data() {
    return {
      data: [
        {
          text: "Домашно обучение",
          image: "&#127891;",
          path: "/znanie/domashno-oby4enie",
        },
        {
          text: "Видеа",
          image: "&#9199;",
          path: "/znanie/videa",
        },
        {
          text: "Физическо и психическо здраве",
          image: "&#127939;",
          path: "/znanie/fizichesko-i-psihichesko-zdrave",
        },
        {
          text: "Библиотека",
          image: "&#128214;",
          path: "/znanie/biblioteka",
        },
        {
          text: "Духовен свят",
          image: "💗",
          path: "/znanie/dyhoven-svqt",
        },
        {
          text: "Полезни връзки",
          image: "&#9939;",
          path: "/znanie/polezni-vruzki",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
</style>

