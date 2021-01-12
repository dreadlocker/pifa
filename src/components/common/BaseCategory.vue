<template>
  <div>
    <div class="links-holder">
      <div v-for="item in data" :key="item.text">
        <router-link class="link" :to="item.path" tag="button">
          <span class="text">{{ item.text }}</span>
          <p class="emoji" v-html="item.image"></p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  path: "BaseCategory",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
.links-holder
  height: fit-content
  display: grid
  grid-template-columns: 1fr 1fr
  row-gap: 3vh
  column-gap: 3vh
  text-align: center
  margin: 2vh auto 0 !important
  .link
    all: initial
    color: #3a3a3a
    margin: 0 10px
    font-size: 2vw
    cursor: pointer
    transition: all 0.3s
    &:hover
      color: #4064d7
    .text
      display: table-cell
      text-align: center
  .emoji
    font-size: 4vw
    text-align: center
    margin: 0

@media only screen and (max-width: 1366px)
  .link
    font-size: 3vw !important
  .emoji
    font-size: 3vw !important
@media only screen and (min-width: 1000px) and (max-width: 1100px) and (orientation: portrait)
  .link
    font-size: 5vw !important
  .emoji
    font-size: 5vw !important
@media only screen and (min-width: 568px) and (max-width: 1023px)
  .link
    font-size: 4vw !important
  .emoji
    font-size: 4vw !important
@media only screen and (min-width: 320px) and (max-width: 567px)
  .link
    font-size: 6vw !important
  .emoji
    font-size: 6vw !important
</style>

