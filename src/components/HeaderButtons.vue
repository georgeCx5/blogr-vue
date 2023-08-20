<script>
export default {
   data() {
      return {

      }
   },
   props: {
      btnText: String,
      isMainBtn: {
         Boolean,
         default: false,
      }
   },
   computed: {
      getHierarchy() {
         return this.isMainBtn ? 'bg-neo-white hover:bg-neo-very-light-red text-neo-light-red hover:text-neo-white hover:border-neo-very-light-red' : 'hover:bg-neo-white text-neo-white hover:text-neo-very-light-red';
      }
   }
}
</script>
<template>
   <button :class="` w-[137px] h-[48px] ${getHierarchy} border-[1px] rounded-[28px]`">
      {{ btnText }}
   </button>
</template>