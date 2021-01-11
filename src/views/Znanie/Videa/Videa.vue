<template>
  <BaseArticlesList :data="data" />
</template>

<script>
import BaseArticlesList from "@/components/common/BaseArticlesList";

export default {
  name: "Videa",
  components: {
    BaseArticlesList,
  },
  data() {
    return {
      data: [
        {
          text: "Как се прави кашкавал",
          path: "/znanie/videa/kak-se-pravi-kashkaval",
        },
        {
          text: "Строене на колиба от кирпич, с огнище и комин",
          path: "/znanie/videa/stroene-na-koliba-ot-kirpich",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
</style>