<script>
import { useDataStore } from '@/assets/stores/DataStore';
import { mapStores } from 'pinia';

import ArrowOrange from '@/assets/images/icon-arrow-dark.svg?component';

export default {
   data() {
      return {
         // isOpened: false,
         data: [
            [
               'Overview',
               'Pricing',
               'Marketplace',
               'Features',
               'Integrations'
            ],
            [
               'About',
               'Team',
               'Blog',
               'Careers'
            ],
            [
               'Contact',
               'Newsletter',
               'LinkedIn'
            ]
         ],
      }
   },
   props: {
      btnText: String,
      dataIndex: {
         Number,
         default: 0,
      }
   },
   components: {
      ArrowOrange,
   },
   computed: {
      ...mapStores(useDataStore),
      arrowState() {
         let opacity;
         let rotate;
         if (this.dataStore.navBarMB[this.dataIndex]) {
            rotate = 'rotate-180';
            opacity = 'text-opacity-75';
         }
         return { rotate, opacity }
      }
   }
}
</script>
<template>
   <div
      :class="` flex flex-col gap-6 items-center  text-neo-very-dark-blue ${arrowState.opacity} text-[18px] leading-[28px] font-semibold`">
      <button @click="dataStore.setOpenedMB(dataIndex)" class=" flex items-center gap-2 hover:text-neo-very-light-red">
         {{ btnText }}
         <ArrowOrange :class="`${arrowState.rotate} mt-[-2px]`" />
      </button>
      <div v-show="dataStore.navBarMB[dataIndex]"
         :class="` flex flex-col items-center gap-3 w-[85%] pt-4 pb-6 bg-neo-very-dark-gray-blue bg-opacity-[.08] rounded-[5px]`">
         <button v-for="element in data[dataIndex]" class=" text-[16px] hover:text-neo-very-light-red">
            {{ element }}
         </button>
      </div>
   </div>
</template>