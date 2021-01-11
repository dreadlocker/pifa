<template>
  <BaseArticlesList :data="data" />
</template>

<script>
import BaseArticlesList from "@/components/common/BaseArticlesList";

export default {
  name: "Zelenchyci",
  components: {
    BaseArticlesList,
  },
  data() {
    return {
      data: [
        {
          text: "Доматът, моя приятел",
          path: "/izhrana/zelenchyci/domatut-moq-priqtel",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
</style>
