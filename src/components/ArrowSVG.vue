<script>
export default {
   data() {
      return {

      }
   },
   props: {
      rotateVal: String,
      opacityVal: Number
   }
}
</script>
<template>
   <svg :class="rotateVal" xmlns="http://www.w3.org/2000/svg" width="10" height="7">
      <path fill="none" stroke="#FFF" stroke-width="2" :opacity="opacityVal" d="M1 1l4 4 4-4" />
   </svg>
</template>