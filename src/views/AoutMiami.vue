<template>
      <img class="img-fluid aout" src="../assets/4j.jpg" alt="">
      <img class="img-fluid aout2" src="../assets/4j2.jpg" alt="">
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Home',

}
</script>


<style lang="scss" scoped>

.aout{
  position:relative;
  top:195px;
  width:80%;
  max-width:80%;
  margin-bottom: -30%;
}
  .aout2{
  position:relative;
  top:505px;
  width:80%;
  left:2.1%;
  max-width:80%;
  margin-bottom: -30%;
  }
@media only screen and (max-width:767px) {
  .aout2{
  position:relative;
  top:305px;
  width:80%;
  left:2.1%;
  max-width:80%;
  margin-bottom: -30%;
}
}
</style>
