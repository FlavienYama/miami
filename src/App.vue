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

  <body>
    <div v-if='$route.name == "home"'>
      <img class="img-fluid une" src="../src/assets/1.jpg" alt="Une Programmation">
    </div>
  </body>

  <footer>
    <div v-if='$route.name == "home"' class="foot">
      <img class="img-fluid insta" src="../src/assets/insta.png" @click="goInsta()" alt="Lien instagram Au Miami">
      <img class="img-fluid reseau" src="../src/assets/reseau.png" alt="Réseau Au Miami">
      <img class="img-fluid facebook" src="../src/assets/fb.png" @click="goFacebook()" alt="Lien facebook Au Miami">
    </div>
  </footer>

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

:root{
  background-color: #154285;
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
  top:185px;
  width:80%;
  max-width:80%;
  margin-bottom: -30%;
}

.foot{
  position:absolute;
  top:75%;

  .insta{ 
    position: absolute;
    top:88%;
    left:35%;
    width:15%;
  }
  .facebook{
    position: absolute;
    top:90%;
    left:55%;
    width:15%;
  }
  .reseau{
    position:relative;
    top:115px;
    width:80%;
  }
}

@media only screen and (min-width: 500px) {
.div_nav{
    position: absolute;
    display:flex;
    justify-content: space-evenly;
    width:80%;
    left:10%;
    top:90%;
  a {
      font-weight: bold;
      font-family: "Golden";
      font-size: 52px;
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
    right:19%;
    width:60%;
    margin-bottom: -30%;
  }

  .foot{
  position:absolute;
  top:105%;

  .insta{ 
    position: absolute;
    top:18%;
    left:40%;
    width:15%;
  }
  .facebook{
    position: absolute;
    top:20%;
    left:60%;
    width:15%;
  }
  .reseau{
    position:relative;
    top:115px;
    left:8%;
    width:70%;
  }
}
}

@media only screen and (min-width: 769px) {
.div_nav{
    position: absolute;
    display:flex;
    justify-content: space-evenly;
    width:80%;
    left:10%;
    top:90%;
  a {
      font-weight: bold;
      font-family: "Golden";
      font-size: 52px;
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
    right:19%;
    width:60%;
    margin-bottom: -30%;
  }

  .foot{
  position:absolute;
  top:135%;
  right:23%;

  .insta{ 
    position: absolute;
    top:18%;
    left:40%;
    width:15%;
  }
  .facebook{
    position: absolute;
    top:20%;
    left:60%;
    width:15%;
  }
  .reseau{
    position:relative;
    top:115px;
    left:8%;
    width:70%;
  }
}
}

@media only screen and (min-width: 1060px) {
.div_nav{
    position: absolute;
    display:flex;
    justify-content: space-evenly;
    width:80%;
    left:10%;
    top:90%;
  a {
      font-weight: bold;
      font-family: "Golden";
      font-size: 52px;
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
    right:19%;
    width:60%;
    margin-bottom: -30%;
  }

  .foot{
  position:absolute;
  top:140%;
  right:23%;

  .insta{ 
    position: absolute;
    top:18%;
    left:40%;
    width:15%;
  }
  .facebook{
    position: absolute;
    top:20%;
    left:60%;
    width:15%;
  }
  .reseau{
    position:relative;
    top:115px;
    left:8%;
    width:70%;
  }
}
}
@media only screen and (min-width: 1440px) {
.div_nav{
    position: absolute;
    display:flex;
    justify-content: space-evenly;
    width:80%;
    left:10%;
    top:90%;
  a {
      font-weight: bold;
      font-family: "Golden";
      font-size: 52px;
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
    right:19%;
    width:60%;
    margin-bottom: -30%;
  }

.foot{
  position:absolute;
  top:180%;
  right:30%;

    .insta{ 
      position: absolute;
      top:18%;
      left:40%;
      width:15%;
    }
    .facebook{
      position: absolute;
      top:20%;
      left:60%;
      width:15%;
    }
    .reseau{
      position:relative;
      top:115px;
      left:8%;
      width:70%;
    }
  }
}

@media only screen and (min-width: 2560px) {
.div_nav{
    position: absolute;
    display:flex;
    justify-content: space-evenly;
    width:80%;
    left:10%;
    top:90%;
  a {
      font-weight: bold;
      font-family: "Golden";
      font-size: 52px;
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
    right:19%;
    width:60%;
    margin-bottom: -30%;
  }

  .foot{
  position:absolute;
  top:280%;
  right:38%;

  .insta{ 
    position: absolute;
    top:18%;
    left:40%;
    width:15%;
  }
  .facebook{
    position: absolute;
    top:20%;
    left:60%;
    width:15%;
  }
  .reseau{
    position:relative;
    top:115px;
    left:8%;
    width:70%;
  }
}
}
</style>
