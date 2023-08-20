<script>
import HeaderButtons from './components/HeaderButtons.vue';
import NavBarUpperBtn from './components/NavBarUpperBtn.vue';
import SectionText from './components/SectionText.vue';
import FooterText from './components/FooterText.vue';
import NavBarUpperBtnDT from './components/NavBarUpperBtnDT.vue';

import logo from '@/assets/images/logo.svg?url';
import IconHamburger from '@/assets/images/icon-hamburger.svg?component';
import IconClose from '@/assets/images/icon-close.svg?component';
import BgMobile from '@/assets/images/bg-pattern-intro-mobile.svg?component';
import editorImgMB from '@/assets/images/illustration-editor-mobile.svg?url';
import editorImgDTL from '@/assets/images/illustration-editor-desktop.svg?url';
import phonesImg from '@/assets/images/illustration-phones.svg?url';
import laptopImgMB from '@/assets/images/illustration-laptop-mobile.svg?url';
import laptopImgDTL from '@/assets/images/illustration-laptop-desktop.svg?url';
import BgPatternCircles from '@/assets/images/bg-pattern-circles.svg?component';

export default {
  data() {
    return {
      logo,
      isBarOpen: false,
      editorImgMB,
      editorImgDTL,
      phonesImg,
      laptopImgMB,
      laptopImgDTL,
      data: {
        one: [
          {
            header: 'Introducing an extensible editor',
            main: 'Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.'
          },
          {
            header: 'Robust content management',
            main: 'Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.'
          }
        ],
        two: [
          {
            header: 'State of the Art Infrastructure',
            main: 'With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.'
          }
        ]
        ,
        three: [
          {
            header: 'Free, open, simple',
            main: 'Blogr is a free and open source application backed by a large community of helpful developers. It supports  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.'
          },
          {
            header: 'Powerful tooling',
            main: 'Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.'
          }
        ]
      },
      bgDesktop: 'bg-[url(@/assets/images/bg-pattern-intro-desktop.png)]',
    }
  },
  components: {
    HeaderButtons,
    NavBarUpperBtn,
    SectionText,
    FooterText,
    NavBarUpperBtnDT,

    IconHamburger,
    IconClose,
    BgMobile,
    // BgDesktop,
    BgPatternCircles,
  }
}
</script>
<template>
  <body class=" relative flex flex-col items-center font-overpass">
    <header class=" relative w-full max-w-[425px] TB:max-w-[768px] DTL:max-w-[1920px]">
      <!-- Mobile Nav -->
      <div v-show="isBarOpen"
        class=" TB:hidden absolute flex flex-col gap-6 right-6 top-[125px] w-[85%] pt-6 pb-8 bg-neo-white rounded-[5px] drop-shadow-navMB select-none z-20">
        <NavBarUpperBtn btn-text="Product" :data-index="0" />
        <NavBarUpperBtn btn-text="Company" :data-index="1" />
        <NavBarUpperBtn btn-text="Connect" :data-index="2" />
        <div class=" flex flex-col items-center gap-6">
          <div class=" w-[85%] h-[1px] bg-neo-nav-line"></div>
          <button
            class=" text-neo-very-dark-blue hover:text-neo-very-light-red text-[18px] leading-[28px] font-semibold rounded-[28px]">
            Login
          </button>
          <button
            class=" w-[137px] h-[48px] bg-gradient-to-br from-neo-very-light-red-two to-neo-light-red-two hover:bg-none hover:bg-neo-very-light-red text-neo-white text-[16px] leading-[18px] font-bold rounded-[28px]">
            Sign Up
          </button>
        </div>
      </div>
      <div
        class=" relative w-full h-full flex flex-col gap-[108px] pt-14 TB:pt-10 DTL:pt-[63px] pb-[156px] bg-gradient-to-br from-neo-very-light-red-two to-neo-light-red-two  text-neo-white rounded-es-[100px] overflow-hidden">
        <BgMobile class=" absolute -left-[345px] -top-[260px] DTL:hidden" />
        <div :class="` absolute -top-[1350px] -left-[450px] hidden DTL:block w-[3175px] h-[3175px] ${bgDesktop}`">
        </div>
        <nav
          class=" relative flex justify-between items-center px-6 DTL:px-[165px] TB:text-[16px] TB:leading-[18px] TB:font-ubuntu TB:font-bold">
          <div class=" flex TB:gap-6 DTL:gap-16 DTXL:gap-20">
            <img class=" h-8 select-none" :src="logo" alt="logo" draggable="false">
            <div class=" hidden TB:flex TB:gap-4 DTL:gap-8 DTXL:gap-10 select-none">
              <NavBarUpperBtnDT :data-index="0" />
              <NavBarUpperBtnDT :data-index="1" />
              <NavBarUpperBtnDT :data-index="2" />
            </div>
          </div>
          <div class=" hidden TB:flex TB:gap-6 DTL:gap-8 DTXL:gap-12 TB:items-center select-none">
            <button class=" text-neo-white text-opacity-75 hover:text-opacity-100">
              Login
            </button>
            <button
              class=" w-[128px] h-[48px] bg-neo-white hover:bg-neo-very-light-red text-neo-light-red hover:text-neo-white rounded-[28px]">
              Sign Up
            </button>
          </div>
          <div @click="isBarOpen = !isBarOpen" class=" TB:hidden cursor-pointer select-none">
            <IconHamburger v-show="!isBarOpen" />
            <IconClose v-show="isBarOpen" />
          </div>
        </nav>
        <div class=" flex flex-col items-center gap-12 px-6 z-10">
          <div class=" flex flex-col gap-4 DTL:gap-6 text-center">
            <h1 class=" text-[37px] DTL:text-[64px] leading-[43px] DTL:leading-[76px] tracking-[-1.08px] font-semibold">
              A modern publishing platform
            </h1>
            <p class=" text-[18px] DTL:text-[20px] leading-[21px] DTL:leading-[24px]">
              Grow your audience and build your online brand
            </p>
          </div>
          <div class=" flex gap-4 DTXL:gap-8 text-[16px] leading-[18px] font-bold select-none">
            <HeaderButtons btn-text="Start for Free" :is-main-btn="true" />
            <HeaderButtons btn-text="Learn More" />
          </div>
        </div>
      </div>
    </header>
    <main
      class=" max-w-[425px] TB:max-w-[768px] DTL:max-w-[1920px] py-[100px] TB:py-[80px] DTL:pt-[150px] DTL:overflow-hidden">
      <!-- One -->
      <section
        class=" flex flex-col gap-[38px] TB:gap-[64px] DTL:gap-[93px] DTXL:gap-[8rem] mb-[273px] TB:mb-[160px] DTL:mb-[-120px] px-6 DTL:px-0 DTXL:px-[4rem] text-neo-very-dark-blue">
        <h2
          class=" text-center text-[28px] TB:text-[32px] DTL:text-[40px] leading-[33px] DTL:leading-[47px] tracking-[-.84px] font-semibold">
          Designed for the future
        </h2>
        <div class=" flex flex-col TB:flex-row DTL:flex-row-reverse TB:items-center DTL:items-start gap-[46px] TB:gap-0">
          <img class=" TB:relative TB:-left-12 DTL:hidden TB:h-[320px]" :src="editorImgMB" alt="editorImgMB"
            draggable="false">
          <img class=" relative -right-[276px] -top-[230px] hidden DTL:block TB:h-[882px]" :src="editorImgDTL"
            alt="editorImgDTL" draggable="false">
          <div
            class=" flex flex-col gap-10 DTL:gap-20 DTXL:gap-28 TB:-ml-16 DTL:ml-[165px] DTL:-mr-[195px] pl-[9px] DTL:pl-0">
            <SectionText :header="data.one[0].header" :main="data.one[0].main" />
            <SectionText :header="data.one[1].header" :main="data.one[1].main" />
          </div>
        </div>
      </section>
      <!-- Two -->
      <section class=" relative w-full h-[625px] TB:h-[400px] mb-[79px] DTL:mb-[120px]">
        <img
          class=" absolute -top-[180px] TB:-top-[120px] DTL:-top-[60px] TB:-left-4 DTL:left-[135px] TB:h-[95%] DTL:h-[140%] z-10"
          :src="phonesImg" alt="phonesImg" draggable="false">
        <div
          class=" relative w-full h-full bg-gradient-to-br from-neo-very-dark-gray-blue to-neo-very-dark-desaturated-blue rounded-se-[100px] rounded-es-[100px] overflow-hidden">
          <BgPatternCircles
            class=" absolute -left-[315px] TB:-left-[300px] DTL:-left-[215px] -top-[460px] DTL:-top-[520px] scale-[.6] DTL:scale-[1]" />
          <SectionText
            class=" relative mt-[221px] TB:mt-[64px] DTL:mt-[112px] DTXL:mt-[8rem] px-6 TB:pl-[340px] DTL:pl-[720px] DTXL:pl-[48rem] DTL:pr-[165px] z-10"
            :header="data.two[0].header" :main="data.two[0].main" :is-special="true" />
        </div>
      </section>
      <!-- Three -->
      <section class=" flex flex-col TB:flex-row TB:items-center gap-[46px] TB:gap-0 px-6 DTL:px-0">
        <img class=" TB:relative TB:-left-20 DTL:hidden TB:h-[315px]" :src="laptopImgMB" alt="laptopImgMB"
          draggable="false">
        <img class=" TB:relative -left-[276px] hidden DTL:block " :src="laptopImgDTL" alt="laptopImgDTL"
          draggable="false">
        <div
          class=" flex flex-col gap-10 TB:-ml-24 DTL:-ml-[250px] DTXL:ml-[-12rem] pl-[9px] DTL:pl-0 DTL:pr-[165px] DTXL:pr-[12.5rem]">
          <SectionText :header="data.three[0].header" :main="data.three[0].main" />
          <SectionText :header="data.three[1].header" :main="data.three[1].main" />
        </div>
      </section>
    </main>
    <footer
      class=" flex flex-col DTL:flex-row DTL:justify-between items-center DTL:items-start gap-[72px] TB:gap-[56px] DTL:gap-[184px] w-full max-w-[425px] TB:max-w-[768px] DTL:max-w-[1920px] DTL:px-[165px] DTXL:px-[16rem] DTL:pr-[320px] DTXL:pr-[21rem] py-[75px] bg-neo-very-dark-black-blue text-neo-white font-ubuntu rounded-se-[100px]">
      <img class=" h-10 select-none" :src="logo" alt="logo" draggable="false">
      <div class=" flex flex-col TB:flex-row gap-10 TB:gap-24 DTL:gap-48 DTXL:gap-56">
        <FooterText :data-index="0" />
        <FooterText :data-index="1" />
        <FooterText :data-index="2" />
      </div>
    </footer>
  </body>
</template>