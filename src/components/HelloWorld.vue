<template>
    <img class="img-fluid une" src="../assets/1.jpg" alt="">
    <img class="img-fluid insta" src="../assets/insta.png" @click="goInsta()" alt="">
    <img class="img-fluid reseau" src="../assets/facebook.png" alt="">
    <img class="img-fluid facebook" src="../assets/reseau.png" @click="goFacebook()" alt="">
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Home',

  methods: {
    goInsta(){
      window.location.href="https://instagram.com/au_miami?igshid=YmMyMTA2M2Y=";
    },
    goFacebook(){
      window.location.href="https://www.facebook.com/profile.php?id=100063541659991";
    },
  }
}
</script>


<style lang="scss" scoped>

.une{
  position:absolute;
  top:25%;
  right:4.5%;
  width:90%;
}

.facebook{
  position:absolute;
  top:87%;
  right:33%;
  width:15%;
}

.insta{
  position:absolute;
  top:86.72%;
  right:50%;
  width:15%;
}

.reseau{
  position:absolute;
  top:93%;
  right:25%;
  width:50%;
}

</style>

