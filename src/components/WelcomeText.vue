<template>
  <div
    class="welcome-text text-center"
    v-resize-text="{ minFontSize: '36px', maxFontSize: '300px' }"
  >
    <h1
      class="
        text text-transparent
        uppercase
        font-sans
        tracking-wider
        font-extrabold
      "
    >
      <span class="text-wrap" style="display: block; width: 100%">Welcome</span>
    </h1>
  </div>
</template>

<script>
import ResizeText from "vue-resize-text";
export default {
  directives: {
    ResizeText,
  },
};
</script>

<style lang="scss" scoped>
.welcome-text {
  left: 0px;
  bottom: 0px;
  top: 0px;
  position: relative;
  &:hover {
    left: 0.1px;
    transform: translateY(0.1px);
    top: 0.1px;
    transition: left 0.2s, top 0.2s 0.2s, transform 0.2s 0.4s;
    transition-timing-function: cubic-bezier(0.5, -300, 0.5, 300);
  }
}
.text {
  // display:inline;
  color: white;
  -webkit-text-fill-color: black; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  // font-size: 10vw;
  color: #fff;
  animation: flicker 1.5s infinite alternate;
  text-shadow:
    /* White glow */ 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,
    /* Green glow */ 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa,
    0 0 151px #0fa;
}
.text-wrap {
  border: 0.2rem solid #fff;
  border-radius: 1rem;
  padding: 0.4em;
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #68c3d4,
    0 0 0.8rem #68c3d4, 0 0 2.8rem #68c3d4, inset 0 0 1.3rem #68c3d4;
}
/* Flickering animation */
@keyframes flicker {
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  100% {
    text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa,
      0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa;
  }

  20%,
  24%,
  55% {
    text-shadow: none;
  }
}

@media screen and (prefers-reduced-motion) {
  .text {
    animation: none;
  }
}
</style>
