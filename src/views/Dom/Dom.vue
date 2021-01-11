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
          text: "Строителство",
          image: "&#127969;",
          path: "/dom/stroitelstvo",
        },
        {
          text: "Електричество ",
          image: "&#9889;",
          path: "/dom/elektrichestvo",
        },
        {
          text: "Водоснабдяване",
          image: "💧",
          path: "/dom/vodosnabdqvane",
        },
        {
          text: "Отопление",
          image: "🔥",
          path: "/dom/otoplenie",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
</style>

