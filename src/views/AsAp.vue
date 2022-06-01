<template>
    <img class="img-fluid comsoon" src="../assets/4juin.jpeg" alt="Prochainement">
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Home',

}
</script>


<style lang="scss" scoped>

.comsoon{
  position:relative;
  top:275px;
  width:80%;
  max-width:80%;
  margin-bottom: -30%;
   border: 3px solid white;
   border-radius: 10px;
}
@media only screen and (max-width:767px) {
  .comsoon{
  position:relative;
  top:215px;
  width:80%;
  max-width:80%;
  margin-bottom: -30%;
   border: 3px solid white;
   border-radius: 10px;
}
}

</style>
