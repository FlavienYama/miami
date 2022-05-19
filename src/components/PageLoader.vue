<template>
  <div class="page-loader" v-if="!isloaded">
    <div class="cube"><img src="../assets/gif.gif" alt="Loading Page"></div>
  </div> 
</template>

<script>
  export default {
    data: () => {
      return {
        isloaded: false
      }
    },
    mounted() {
      document.onreadystatechange = () => {
        if (document.readyState == "complete") { 
          this.isloaded = true;
        } 
      }
    },
  }
</script>

<style lang="scss" scoped>
  // -----------------------------------------------------
  .page-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom:0;
    right:0;
    z-index: 999;
  }
//   // -----------------------------------------------------
//   .cube{
//     width: 40px;
//     height: 40px;
//     margin-right: 10px;
//     @for $i from 1 through length($colors) {
//       &:nth-child(#{$i}) {
//         background-color: nth($colors, $i);
//       }
//     }
//     &:first-child {
//       animation: left 1s infinite;
//     }
//     &:last-child {
//       animation: right 1s infinite .5s;
//     }
//   }
//   // -----------------------------------------------------
//   @keyframes left {
//     40% {
//       transform: translateX(-60px);
//     }
//     50% {
//       transform: translateX(0);      
//     }
//   }
//   @keyframes right {
//     40% {
//       transform: translateX(60px);
//     }
//     50% {
//       transform: translateX(0);
//     }
//   }
</style>