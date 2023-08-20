<script>
export default {
   data() {
      return {

      }
   },
   props: {
      header: {
         String,
         default: 'Title',
      },
      main: {
         String,
         default: 'Lorem ipsum',
      },
      isSpecial: {
         Boolean,
         default: false,
      }
   },
   computed: {
      headerState() {
         return this.isSpecial ?
            'text-neo-white text-[40px] leading-[47px] tracking-[-1.2px]' :
            'text-[28px] leading-[32px]';
      },
      mainState() {
         return this.isSpecial ? 'text-neo-white' : 'text-neo-very-grayish-blue';
      }
   }
}
</script>
<template>
   <div class=" flex flex-col gap-4 DTL:gap-6 text-center TB:text-left">
      <h3 :class="` ${headerState} DTL:leading-[28px] font-semibold`">
         {{ header }}
      </h3>
      <p :class="` ${mainState} text-[16px] leading-[28px] tracking-[.5px]`">
         {{ main }}
      </p>
   </div>
</template>