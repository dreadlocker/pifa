<template>
  <BaseArticlesList :data="data" />
</template>

<script>
import BaseArticlesList from "@/components/common/BaseArticlesList";

export default {
  name: "PolezniVruzki",
  components: {
    BaseArticlesList,
  },
  data() {
    return {
      data: [
        {
          text: "Документалните филми на колибка.ком",
          path: "/znanie/polezni-vruzki/dokymentalnite-filmi-na-kolibka-kom",
        },
        {
          text: "Духовно развитие",
          path: "/znanie/polezni-vruzki/dyhovno-razvitie",
        },
        {
          text: "Библиотеката на спирала.нет",
          path: "/znanie/polezni-vruzki/bibliotekata-na-spirala-net",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
</style>