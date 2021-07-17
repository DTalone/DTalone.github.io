/* eslint-disable prettier/prettier */
<template>
  <v-container class="card-porto-image">
    <v-card color="#1e1e1e" class="card-image">
      <v-img class="image-porto" src="@/assets/images/porto-profile(blue).png">
      </v-img>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$x:20;  /*  number of row */
$y:20;  /*  number of columns */
$s:0.8; /* speed factor */

@for $i from 0 through ($x - 1) {
  @for $j from 0 through ($y - 1) {
    @property --c-#{$i}-#{$j} {
      syntax: "<number>";
      initial-value: 1;
      inherits: false;
    }
  }
}
@function transition($i,$j) {
  //@return (($s*($i+$j))/($x+$y))+s (($s*($i+$j))/($x+$y))+s; /* diagonal */
  //@return (($s*$i)/$x)+s (($s*$j)/$y)+s; /* left to right */
  //@return (($s*$j)/$y)+s (($s*$i)/$x)+s; /* top to bottom */
  //@return  ($s*random())+s (($s*$j)/$y)+s; /* top to bottom random */
  //@return  ($s*random())+s (($s*$i)/$y)+s; /* left to right random */
  //@return  ($s*random())+s (($s*($i+$j))/($x+$y))+s; /* diagonal random */
  @return ($s*random())+s ($s*random())+s; /* full random*/ 
}
@function gradient($c) {
  //@return linear-gradient(rgba(0,0,0,var($c)) 0 0);
  //@return linear-gradient(0deg,white calc(100%*var(#{$c})),transparent 0);
  @return radial-gradient(white calc(100%*var(#{$c})),transparent 0);
  //@return conic-gradient(white calc(100%*var(#{$c})),transparent 0);
}
@mixin image() {
    $all_t: ();
    $all_m: ();
    @for $i from 0 through ($x - 1) {
      @for $j from 0 through ($y - 1) {
         $all_t: append($all_t, --c-#{$i}-#{$j} transition($i,$j), comma);
         $all_m: append($all_m, gradient(--c-#{$i}-#{$j}) calc(#{$i}*100%/(#{$x} - 1)) calc(#{$j}*100%/(#{$y} - 1)), comma);
      }
    }
    transition: $all_t;
     -webkit-mask: $all_m;
     mask: $all_m;
}
.image-porto {
  @include image();
  -webkit-mask-size:calc(100%/#{$x}) calc(100%/#{$y});
  -webkit-mask-repeat:no-repeat;
  mask-size:calc(100%/#{$x}) calc(100%/#{$y});
  mask-repeat:no-repeat;

  &:hover {
      @for $i from 0 through ($x - 1) {
      @for $j from 0 through ($y - 1) {
         --c-#{$i}-#{$j}: 0;
      }
    }
  }
}

.card-image {
  border-radius: 10px;
}
</style>
