<template>
    <img class="img-fluid LMB" src="../assets/LMB.jpg" alt="Jeudis LMBD">
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Home',

}
</script>


<style lang="scss" scoped>

.LMB{
  position:relative;
  top:275px;
  width:60%;
  max-width:60%;
  margin-bottom: -30%;
     border: 3px solid white;
   border-radius: 10px;
}

@media only screen and (max-width:767px) {
  .LMB{
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
