import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
   state: () => ({
      navBarMB: [false, false, false],
      navBar: [false, false, false],
      actualValueMB: null,
      actualValue: null,
   }),
   getters: {
      // prueba getters
      getValue(state) {
         return state.actualValueMB;
      }
   },
   actions: {
      setOpenedMB(index) {
         if (index == this.actualValueMB) {
            this.navBarMB[index] = !this.navBarMB[index];
            return;
         }
         this.navBarMB.fill(false);
         this.navBarMB[index] = true;
         this.actualValueMB = index;
      },
      setOpened(index) {
         if (index == this.actualValue) {
            this.navBar[index] = !this.navBar[index];
            return;
         }
         this.navBar.fill(false);
         this.navBar[index] = true;
         this.actualValue = index;
      }
   }
})