<template>
  <BaseArticlesList :data="data" />
</template>

<script>
import BaseArticlesList from "@/components/common/BaseArticlesList";

export default {
  name: "Recepti",
  components: {
    BaseArticlesList,
  },
  data() {
    return {
      data: [
        {
          text: "Постен бял сос с чесън",
          path: "/izhrana/recepti/posten-bql-sos-s-chesun",
        },
        {
          text: "Печени кюфтенца от леща",
          path: "/izhrana/recepti/pecheni-kiyftenca-ot-leshta",
        },
        {
          text: "Как да си направим комбуча? Пълен наръчник със снимки",
          path: "/izhrana/recepti/kak-da-si-napravim-kombycha",
        },
        {
          text: "Домашен шоколад без захар",
          path: "/izhrana/recepti/domashen-shokolad-bez-zahar",
        },
        {
          text: "Бананов кекс без захар",
          path: "/izhrana/recepti/bananov-keks-bez-zahar",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
</style>

