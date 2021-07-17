<template>
  <div class="card">
    <div class="card-back">tis</div>
    <div class="card-front">
      <v-img
        class="image"
        src="@/assets/documentations/sortapi.png"
        max-height="450"
        contain
      ></v-img>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Colors
$blue: #29b6f6;
$green: #9ccc65;
$purple: #ba68c8;
$yellow: #fdd835;
$orange: #f57c00;
$red: #ef5350;
$cyan: #4dd0e1;
$pink: #e91e63;
$black-dark: #101010;
$black-light: #2c3e50;
$bg1: #e91e63;
$bg2: #9c27b0;
$white: whitesmoke;

$monospace: Consolas, "Lucida Console", monospace;
$small: 640px;

.card {
  height: 30rem;
  @media screen and (max-width: $small) {
    height: 15rem;
  }
  perspective: 150rem;
  &-front,
  &-back {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    border-radius: 5px;
    box-shadow: 0 1.5rem 4rem rgba(black, 0.4);
    transition: 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
    //transform-origin: left center;
    backface-visibility: hidden;
    overflow: hidden;
    &:before,
    &:after {
      position: absolute;
    }
    &:before {
      top: -40px;
      right: -40px;
      content: "";
      width: 80px;
      height: 80px;
      background-color: rgba(white, 0.08);
      transform: rotate(45deg);
      z-index: 1;
    }
    &:after {
      content: "+";
      top: 0;
      right: 10px;
      font-size: 24px;
      transform: rotate(45deg);
      z-index: 2;
    }
  }
  &-front {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, $black-dark, $black-light);
    &:after {
      color: darken($black-light, 6%);
    }
  }
  &-back {
    background: linear-gradient(-45deg, $black-dark, $black-light);
    transform: rotateX(180deg);
    &:after {
      color: darken($black-light, 15%);
    }
  }

  &:hover &-front {
    transform: rotateX(-180deg);
  }
  &:hover &-back {
    transform: rotateX(0deg);
    //z-index: 2 !important;
  }
  // .line-numbers {
  //   @extend code;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  //   //width: 20px;
  //   height: 100%;
  //   margin: 0;
  //   padding: 0 10px;
  //   background-color: rgba(white, 0.03);
  //   font-size: 13px;
  //   //line-height: 2.15;
  //   > div {
  //     padding: 2.5px 0;
  //     opacity: 0.15;
  //   }
  // }
  // code {
  //   color: $white;
  // }
}
</style>
