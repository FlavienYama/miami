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
  <HelloWorld v-if='$route.name == "home"'></HelloWorld>
  <footer><FooterMiami/></footer>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FooterMiami from './components/FooterMiami.vue'
export default {
  name: 'App',

  components: {
    HelloWorld : HelloWorld, FooterMiami
  },

  methods: {
    goHome(){
      this.$router.push('/');
      
    }
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
footer{
  position: fixed;
}
</style>
