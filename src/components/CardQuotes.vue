<template>
  <div class="box">
    <i class="fas fa-quote-left fa2"></i>
    <div class="text">
      <i class="fas fa-quote-right fa1"></i>
      <div>
        <h3>Quote the day</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$small: 640px;
.box {
  background-color: transparent;
  border-radius: 3px;
  color: #fff;
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
    border-top: 20px solid #fff;
    border-left: 20px solid #fff;
    box-sizing: border-box;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 20px solid #fff;
    border-right: 20px solid #fff;
    box-sizing: border-box;
  }
  .fas {
    font-size: 25px;
    height: 50px;
    width: 50px;
    @media screen and (max-width: $small) {
      //do Smth
      font-size: 20px;
      width: 30px;
      height: 30px;
    }
    line-height: 50px !important;
    background-color: #fff;
    color: #2c3a47;
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
    background-color: #2c3a47;
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
