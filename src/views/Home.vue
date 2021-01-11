<template>
  <div class="home">
    <div class="info">
      <h1>Мащерка.ком</h1>
      <h2>За един по устойчив живот</h2>
      <p>
        Сайтът Мащерка има за цел да даде примери, чрез които човек може да
        опита да живее извън системата (доколкото това е възможно)
      </p>
      <p>Три основни неща :</p>
      <ul>
        <li>устойчив живот</li>
        <li>самодостатъчен</li>
        <li>самоподдържащ се</li>
      </ul>
    </div>
    <img
      src="https://www.mashterka.com/wp-content/uploads/brizy/1351/assets/images/iW=5000&iH=any/vegetables-2202504-4-1-scaled.jpg"
      alt="mashterka"
      class="img"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="sass" scoped>
.home
  display: flex
  .info
    width: 30%
    h1
      font-size: 4vw
      color: #545454
    h2
      font-size: 2vw
      color: #000000
    p,ul
      font-size: 2.2vw
      color: #000000
  .img
    width: 70%
    height: auto
</style>
