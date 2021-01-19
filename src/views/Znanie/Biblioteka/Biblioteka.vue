<template>
  <div class="biblioteka">
    <div class="base-article-p">
      <em>
        Целта на сайта mashterka.com е да информира и да предостави информация
        за по - устойчив начин на живот. Сайтът mashterka.com и неговите автори
        не поемат отговорност за качените материали в раздел библиотека. Ние
        споделяме само линковете намерени в интернет пространството, качени със
        свободен достъп. Не сме отговорни за качването им и не разполагаме с
        авторските права. Подкрепяме авторите и сме благодарни за техния труд.
        Съветваме ви да закупите всяка книга от писателите или издателството им.
      </em>
    </div>
    <hr />
    <BaseArticlesList :articles="articles" />
  </div>
</template>

<script>
import { articlesHolder } from "@/assets/articlesHolder.js";
import BaseArticlesList from "@/components/common/BaseArticlesList";

export default {
  name: "Biblioteka",
  components: {
    BaseArticlesList,
  },
  data() {
    const articles = articlesHolder.znanie.biblioteka;
    return { articles };
  },
};
</script>

<style lang="sass" scoped>
.biblioteka
  display: flex !important
  flex-direction: column !important
  .base-article-p
    text-align: center
  hr
    width: 100%
</style>