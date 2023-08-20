<script>
export default {
   data() {
      return {
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
            }
         ]
      }
   },
   props: {
      dataIndex: {
         Number,
         default: 0,
      }
   }
}
</script>
<template>
   <div class=" flex flex-col items-center DTL:items-start gap-[21px] text-[18px] leading-[33px]">
      <h5 class=" font-medium">
         {{ data[dataIndex].header }}
      </h5>
      <div class=" flex flex-col">
         <button class=" DTL:text-left text-neo-white text-opacity-75 hover:text-opacity-100 select-none"
            v-for="link in data[dataIndex].links">
            {{ link }}
         </button>
      </div>
   </div>
</template>