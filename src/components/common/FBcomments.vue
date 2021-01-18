<template>
  <div>
    <button v-if="showCommentsBtnVisible" @click="showComments">
      Покажи коментари
    </button>
    <div
      ref="FBcoments"
      class="fb-comments"
      :data-href="href"
      data-width=""
      data-numposts="5"
    ></div>
  </div>
</template>

<script>
export default {
  name: "FBcomments",
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showCommentsBtnVisible: true,
    };
  },
  methods: {
    showComments() {
      window.location.reload();
    },
    hideShowCommentsBtn() {
      this.showCommentsBtnVisible = false;
    },
  },
  mounted() {
    this.$refs.FBcoments.addEventListener(
      "DOMNodeInserted",
      this.hideShowCommentsBtn
    );
  },
  beforeDestroy() {
    this.$refs.FBcoments.removeEventListener(
      "DOMNodeInserted",
      this.hideShowCommentsBtn
    );
  },
};
</script>

<style lang="sass" scoped>
</style>