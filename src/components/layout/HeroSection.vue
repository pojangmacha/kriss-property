<template>
    <main class="relative flex justify-center items-start w-full min-h-[350px] pt-16 md:pt-16 lg:pt-16">
      <swiper
          :spaceBetween="20"
          :centeredSlides="true"
          :autoplay="{ delay: 3500, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          :navigation="true"
          :modules="modules"
          :breakpoints="{
            320: { spaceBetween: 10 },
            640: { spaceBetween: 15 },
            1024: { spaceBetween: 20 },
          }"
          @autoplayTimeLeft="onAutoplayTimeLeft"
          class="mySwiper w-full max-w-[1600px] mx-auto rounded-lg overflow-hidden"
        >
          <!-- Slide 1 -->
          <swiper-slide class="flex justify-center items-center">
            <img 
              src="@/assets/images/kriss1.jpg" 
              alt="Hero picture" 
              class="w-full h-[220px] sm:h-[350px] md:h-[500px] lg:h-[650px] object-cover rounded-lg shadow-xl transition-transform duration-500 hover:scale-105" 
            />
          </swiper-slide>

          <!-- Slide 2 -->
          <swiper-slide class="flex justify-center items-center">
            <img 
              src="@/assets/images/property1.jpg" 
              alt="Hero picture" 
              class="w-full h-[220px] sm:h-[350px] md:h-[500px] lg:h-[650px] object-cover rounded-lg shadow-xl transition-transform duration-500 hover:scale-105" 
            />
          </swiper-slide>

          <!-- Slide 3 -->
          <swiper-slide class="flex justify-center items-center">
            <img 
              src="@/assets/images/property2.jpg" 
              alt="Hero picture" 
              class="w-full h-[220px] sm:h-[350px] md:h-[500px] lg:h-[650px] object-cover rounded-lg shadow-xl transition-transform duration-500 hover:scale-105" 
            />
          </swiper-slide>

          <!-- Slide 4 -->
          <swiper-slide class="flex justify-center items-center">
            <img 
              src="@/assets/images/property3.jpg" 
              alt="Hero picture" 
              class="w-full h-[220px] sm:h-[350px] md:h-[500px] lg:h-[650px] object-cover rounded-lg shadow-xl transition-transform duration-500 hover:scale-105" 
            />
          </swiper-slide>

        <!-- Autoplay progress -->
        <template #container-end>
          <div class="autoplay-progress absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <svg viewBox="0 0 48 48" ref="progressCircle" class="w-12 h-12">
              <circle cx="24" cy="24" r="20" stroke="white" stroke-width="4" fill="transparent" />
            </svg>
            <span ref="progressContent" class="mt-1 text-white font-semibold"></span>
          </div>
        </template>
      </swiper>
    </main>
</template>

<section class="flex justify-center items-center dark:text-white min-h-screen mt-30 lg:mt-0 relative overflow-hidden"></section>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const progressCircle = ref(null);
const progressContent = ref(null);

const onAutoplayTimeLeft = (swiper, time, progress) => {
  if (progressCircle.value) progressCircle.value.style.setProperty('--progress', 1 - progress);
  if (progressContent.value) progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
};

const modules = [Autoplay, Pagination, Navigation];
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 100%;
}

.autoplay-progress circle {
  stroke-dasharray: 125.6; /* 2πr = 2 * 3.14 * 20 */
  stroke-dashoffset: calc(125.6 * var(--progress, 1));
  transition: stroke-dashoffset 0.25s linear;
}
</style>
