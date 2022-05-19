<template>
    <img class="img-fluid juillet" src="../assets/3j.jpg" alt="Juillet Partie 1">
    <img class="img-fluid juillet2" src="../assets/3j2.jpg" alt="Juillet Partie 2">
</template>

<script>

export default {
  // eslint-disable-next-line
  name: 'Home',
}
</script>


<style lang="scss" scoped>
@font-face {
  font-family: "Futura";
  src: local("Futura"), url("../fonts/unicode.futurab.ttf") format("truetype");
}

.div_nav_juillet {
  padding: 173px;
  width:100%;
  max-width: 100%;
  position: absolute;
  display:flex;
  justify-content: space-around;

    a {
      font-weight: bold;
      font-family: 'Futura';
      font-size: 16px;
      text-decoration: none;
      color: white;

    &.router-link-exact-active {
      color: #e50b7e;
    }
  }
}
.juillet{
  position:relative;
  top:195px;
  width:80%;
  max-width:80%;
  margin-bottom: -30%;
}
  .juillet2{
  position:relative;
  top:505px;
  width:80%;
  left:3.1%;
  max-width:80%;
  margin-bottom: -30%;
}
@media only screen and (max-width:767px) {
  .juillet2{
  position:relative;
  top:305px;
  width:80%;
  left:3.1%;
  max-width:80%;
  margin-bottom: -30%;
}
}
</style>
