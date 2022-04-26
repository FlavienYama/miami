<template>
  <nav>
    <img class='carmiami' src="./assets/car.png" @click="goHome()" alt="Logo">
    <div class="div_nav">
      <router-link to="/juin">Juin</router-link>
      <router-link to="/juillet">Juillet</router-link>
      <router-link to="/aout">Aout</router-link>
    </div>
  </nav>
  <router-view/>
  <div v-if='$route.name == "home"'>
    <img class="img-fluid une" src="../src/assets/1.jpg" alt="">
    <img class="img-fluid insta" src="../src/assets/insta.png" @click="goInsta()" alt="">
    <img class="img-fluid reseau" src="../src/assets/facebook.png" alt="">
    <img class="img-fluid facebook" src="../src/assets/reseau.png" @click="goFacebook()" alt="">
  </div>
</template>

<script>
export default {
  name: 'App',



  methods: {
    goHome(){
      this.$router.push('/');
    },
    goInsta(){
      window.location.href="https://instagram.com/au_miami?igshid=YmMyMTA2M2Y=";
    },
    goFacebook(){
      window.location.href="https://www.facebook.com/profile.php?id=100063541659991";
    },
  }  
}
</script>

<style lang="scss">
@font-face {
  font-family: "Golden";
  src: local("Golden"), url("./fonts/Golden Ranger.ttf") format("truetype");
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #154285;
}
:root{
  background-color: #154285;
}

nav {
  padding: 20px;
  width:100%;
  max-width: 100%;
  position: absolute;
  display:flex;
  justify-content: space-evenly;

  .carmiami{
    width:15rem;
  }

  .div_nav{
    position: absolute;
    display:flex;
    justify-content: space-evenly;
    width:80%;
    left:10%;
    top:90%;
  }

    a {
      font-weight: bold;
      font-family: "Golden";
      font-size: 32px;
      text-decoration: none;
      color: white;

    &.router-link-exact-active {
      color: #e50b7e;
    }
  }

}
.une{
  position:absolute;
  top:30%;
  right:4.5%;
  width:90%;
}
.facebook{
  position:relative;
  top:770px;
  left:-15%;
  width:15%;
}

.insta{
  position:absolute;
  top:767px;
  right:50%;
  width:15%;
}

.reseau{
  position:relative;
  top:820px;
  left:6%;
  width:50%;
}
</style>
