<script>
import { useDataStore } from '@/assets/stores/DataStore';
import { mapStores } from 'pinia';
import ArrowSVG from './ArrowSVG.vue';

export default {
   data() {
      return {
         isHovered: false,
         data: [
            {
               header: 'Product',
               links: [
                  'Overview',
                  'Pricing',
                  'Marketplace',
                  'Features',
                  'Integrations'
               ]
            },
            {
               header: 'Company',
               links: [
                  'About',
                  'Team',
                  'Blog',
                  'Careers'
               ]
            },
            {
               header: 'Connect',
               links: [
                  'Contact',
                  'Newsletter',
                  'LinkedIn'
               ]
            },
         ]
      }
   },
   props: {
      dataIndex: {
         Number,
         default: 0,
      }
   },
   computed: {
      ...mapStores(useDataStore),
      rotateState() {
         return this.dataStore.navBar[this.dataIndex] ? 'rotate-180' : '';
      },
      opacityState() {
         return this.isHovered ? 1 : .75;
      }
   },
   components: {
      ArrowSVG,
   }
}
</script>
<template>
   <div class=" relative flex items-center">
      <button @click="dataStore.setOpened(dataIndex)" @mouseenter="isHovered = true" @mouseleave="isHovered = false"
         class=" flex items-center gap-1 DTL:gap-2 text-neo-white text-opacity-75 hover:text-opacity-100 hover:underline underline-offset-4 ">
         {{ data[dataIndex].header }}
         <ArrowSVG :rotate-val="rotateState" :opacity-val="opacityState" />
      </button>
      <div v-show="dataStore.navBar[dataIndex]"
         class=" absolute top-10 -left-4 DTL:-left-6 flex flex-col w-[124px] DTL:w-[168px] px-4 DTL:px-6 py-2 DTL:py-6 bg-white font-normal rounded-[5px] drop-shadow-nav z-20">
         <button
            class=" text-left text-neo-very-dark-gray-blue text-[15px] leading-[24px] DTL:leading-[33px] hover:font-bold"
            v-for="element in data[dataIndex].links">
            {{ element }}
         </button>
      </div>
   </div>
</template>