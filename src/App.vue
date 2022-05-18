<template>
  <nav>
    <img class='carmiami' src="./assets/car.png" @click="goHome()" alt="Logo">
    <div class="div_nav_2">
      <router-link to="/jeudis">Tous les jeudis</router-link>
      <router-link to="/soon">Prochainement</router-link>
    </div>
    <div class="div_nav_1">
      <router-link to="/juin">Juin</router-link>
      <router-link to="/juillet">Juillet</router-link>
      <router-link to="/aout">Aout</router-link>
    </div>
  </nav>
  <router-view/>

  <body>
    <div v-if='$route.name == "home"'>
      <img class="img-fluid une" src="../src/assets/A5.png" alt="Programmation 2k22">
    </div>
    <div v-if='$route.name == "home"' class="foot">
      <div class="links">
        <img class="img-fluid insta" src="../src/assets/insta.png" @click="goInsta()" alt="Lien instagram Au Miami">
        <img class="img-fluid facebook" src="../src/assets/fb.png" @click="goFacebook()" alt="Lien facebook Au Miami">
      </div>
      <div class="network">
        <img class="img-fluid reseau" src="../src/assets/reseau.png" alt="Réseau Au Miami">
      </div>
    </div>
  </body>

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

body{
  background-color: #154285;
}


#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
   .div_nav_1{
    position: absolute;
    display:flex;
    justify-content: space-evenly;
    width:80%;
    left:10%;
    top:82%;

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
    .div_nav_2{
    position: absolute;
    display:flex;
    justify-content: space-evenly;
    width:100%;
    top:120%;

    a {
      font-weight: bold;
      font-family: "Golden";
      font-size: 22px;
      text-decoration: none;
      color: white;

    &.router-link-exact-active {
      color: #e50b7e;
    }
  }
  }
}

.une{
  position:relative;
  top:195px;
  width:80%;
  max-width:80%;
  margin-bottom: -100px;
  border: 3px solid white;
  border-radius: 10px;
}

.foot{
  position:relative;
  top:350px;
  max-width:75%;
  left:13%;
  display:flex;
  flex-direction: column;

  .links{
    display: flex;
    justify-content: center;

    .insta{
      width:300px;
      margin-left:100px;
      margin-right: -70px;
    }
    .facebook{
      width:300px;
      height:30%;
      padding-top: 0.7%;
      margin-right: 80px;
    }
  }
}

@media only screen and (max-width:767px) {
@font-face {
  font-family: "Golden";
  src: local("Golden"), url("./fonts/Golden Ranger.ttf") format("truetype");
}


body{
  background: #154285;
}


#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  position:relative;
  top:215px;
  width:80%;
  max-width:80%;
  margin-bottom: -100px;
   border: 3px solid white;
   border-radius: 10px;
}

.foot{
  position:relative;
  top:320px;
  max-width:60%;
  display:flex;
  left:19%;
  flex-direction: column;

  .links{
    display: flex;
    justify-content: center;
    align-items: center;

    .insta{
      width:80px;
      margin-left:40px;
      margin-right: 1px;
    }
    .facebook{
      width:80px;
      height:30%;
      padding-top: 0.1%;
      margin-right: 30px;
    }
  }
  .network{
    .reseau{
    width:340px;
    }
  }
}

  
}

</style>
