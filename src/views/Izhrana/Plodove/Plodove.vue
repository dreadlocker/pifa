<template>
  <BaseArticlesList :data="data" />
</template>

<script>
import BaseArticlesList from "@/components/common/BaseArticlesList";

export default {
  name: "Plodove",
  components: {
    BaseArticlesList,
  },
  data() {
    return {
      data: [
        {
          text: "Как Да Отгледаме Авокадо от Семка Вкъщи",
          path: "/izhrana/plodove/avokado",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
</style>
