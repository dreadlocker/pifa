<template>
  <BaseCategory :data="data" />
</template>

<script>
import BaseCategory from "@/components/common/BaseCategory";

export default {
  path: "Izhrana",
  components: {
    BaseCategory,
  },
  data() {
    return {
      data: [
        {
          text: "Зеленчуци",
          image: "&#129365;",
          path: "/izhrana/zelenchyci",
        },
        {
          text: "Пчели",
          image: "&#128029;",
          path: "/izhrana/pcheli",
        },
        {
          text: "Плодове",
          image: "&#127822;",
          path: "/izhrana/plodove",
        },
        {
          text: "Рецепти",
          image: "&#127858;",
          path: "/izhrana/recepti",
        },
        {
          text: "Билки",
          image: "&#127807;",
          path: "/izhrana/bilki",
        },
        {
          text: "Гъби",
          image: "&#127812;",
          path: "/izhrana/gubi",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
</style>

