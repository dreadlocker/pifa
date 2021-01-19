<template>
  <div class="">
    <p class="info">връзка с нас</p>
    <div class="first-anchor">
      <strong
        ><a :href="emailHref" target="_black">{{ email }}</a></strong
      >
    </div>
    <hr />
    <p class="info">посетете ни тук</p>
    <div class="icons-holder">
      <div v-for="item in social" :key="item.href">
        <a :href="item.href" target="_black">
          <SvgHolder :name="item.name" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SvgHolder from "@/components/common/SvgHolder.vue";

export default {
  name: "ZaNas",
  components: {
    SvgHolder,
  },
  computed: {
    emailHref() {
      return `mailto: ${this.email}`;
    },
  },
  data() {
    return {
      email: "mashterkaweb@gmail.com",
      social: [
        {
          name: "facebook",
          href: "https://www.facebook.com/mashterkaweb",
          alt: "facebook",
        },
        {
          name: "instagram",
          href: "https://www.instagram.com/mashterkaweb",
          alt: "instagram",
        },
        {
          name: "youtube",
          href: "https://www.youtube.com/channel/UCNTUBEQ-FW-r1a2XQogWu9w",
          alt: "youtube",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/_globalVars.sass"

.content
  flex-direction: column
.info
  font-size: 4vw
  margin-top: 0
.first-anchor
  font-size: 3vw
hr
  width: 100%
  margin: 20px 0
a
  all: inherit
  cursor: pointer
  margin-right: 15px
  transition: $default-transition
  &:hover
    transform: scale(1.1)
.icons-holder
  display: flex
  .image
    width: 100px
    height: 100px

@media only screen and (min-width: 1000px) and (max-width: 1100px) and (orientation: portrait)
  .info
    font-size: 5vw !important
  .first-anchor
    font-size: 5vw !important
  .image
    width: 100px !important
    height: 100px !important
@media only screen and (min-width: 568px) and (max-width: 1023px)
  .info
    font-size: 4vw !important
  .first-anchor
    font-size: 4vw !important
  .image
    width: 70px !important
    height: 70px !important
@media only screen and (min-width: 320px) and (max-width: 567px)
  .info
    font-size: 6vw !important
  .first-anchor
    font-size: 6vw !important
  .image
    width: 60px !important
    height: 60px !important
</style>
