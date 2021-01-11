<template>
  <div class="footer">
    <div>Copyright © 2020 mashterka.com</div>
    <router-link class="link" to="/za-nas" tag="button">За нас</router-link>
    <router-link class="link" to="/kayzi" tag="button">Каузи</router-link>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="sass" scoped>
.footer
  padding: 3vw
  font-size: 4vw
  text-align: center
  color: black
  margin-top: auto
  .link
    all: initial
    color: #3a3a3a
    margin: 0 10px
    font-size: 2vw
    cursor: pointer
    transition: all 0.3s
    &:hover
      color: #4064d7
@media only screen and (min-width: 1024px) and (max-width: 1366px)
  .link
    font-size: 3vw !important
@media only screen and (min-width: 568px) and (max-width: 1023px)
  .link
    font-size: 4vw !important
@media only screen and (min-width: 320px) and (max-width: 567px)
  .link
    font-size: 6vw !important
</style>