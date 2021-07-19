<template>
  <div class="box">
    <v-icon class="fas fa2">mdi-format-quote-close</v-icon>
    <div class="text">
      <v-icon class="fas fa1">mdi-format-quote-open</v-icon>
      <div>
        <h3>{{ data.title }}</h3>
        <p>
          {{ data.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss" scoped>
$small: 640px;
.box {
  background-color: transparent;
  border-radius: 3px;
  color: #eeebe3;
  //   transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  @media screen and (max-width: $small) {
    //do Smth
    width: 300px;
    height: 200px;
  }
  transform-style: preserve-3d;
  perspective: 2000px;
  transition: 0.4s;
  text-align: center;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background: transparent;
    border-top: 20px solid #eeebe3;
    border-left: 20px solid #eeebe3;
      @media screen and (max-width: $small) {
    //do Smth
    border-top: 20px solid #c3f3fb;
    border-left: 20px solid #c3f3fb;
  }
    box-sizing: border-box;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 20px solid #eeebe3;
    border-right: 20px solid #eeebe3;
    @media screen and (max-width: $small) {
    //do Smth
    border-bottom: 20px solid #c3f3fb;
    border-right: 20px solid #c3f3fb;
  }
    box-sizing: border-box;
  }
  .fas {
    font-size: 25px;
    height: 50px;
    width: 50px;
    line-height: 50px !important;
    background-color: #eeebe3;
    @media screen and (max-width: $small) {
      //do Smth
      font-size: 20px;
      width: 30px;
      height: 30px;
      background-color: #c3f3fb;
    }
    color: #1e1e1e;
  }
  .fa2 {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
  .text {
    position: absolute;
    top: 30px;
    left: -30px;
    width: calc(100% + 60px);
    height: calc(100% - 60px);
    background-color: #1e1e1e;
    border-radius: 3px;
    transition: 0.4s;
    .fa1 {
      position: absolute;
      top: 0;
      left: 0;
    }
    div {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      text-align: center;
      width: 100%;
      padding: 30px 60px;
      line-height: 1.5;
      box-sizing: border-box;
      h3 {
        font-size: 30px;
        margin-bottom: 5px;
        @media screen and (max-width: $small) {
          //do Smth
          font-size: 25px;
          // width: 30px;
          // height: 30px;
        }
      }
      p {
        font-size: 15px;
        @media screen and (max-width: $small) {
          //do Smth
          font-size: 10px;
          // width: 30px;
          // height: 30px;
        }
      }
    }
  }
  &:hover {
    .text {
      transform: rotateY(20deg) skewY(-3deg);
    }
    transform: rotateY(-20deg) skewY(3deg);
  }
}
</style>
