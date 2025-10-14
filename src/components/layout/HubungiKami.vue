<template>
  <section id="hubungikami" class="mt-16 mb-20">
  <SectionHeader title="Hubungi Kami" />

  <div class="mt-10 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-6 px-4 sm:px-6 rounded-3xl shadow-lg w-full max-w-md sm:max-w-3xl mx-auto">
    <h3 class="text-2xl font-semibold mb-6 !text-gray-900 dark:!text-white">
      Kami siap membantu Anda
    </h3>

    <div class="space-y-6 !text-gray-900 dark:!text-gray-300">
      <!-- WhatsApp -->
      <a href="https://wa.me/6282299245023" target="_blank"
        class="flex items-center justify-center space-x-3 hover:text-green-500 transition-all duration-300 hover:scale-105">
        <Icon icon="fa-brands:whatsapp" class="text-3xl text-green-500" />
        <span class="text-lg font-medium">+62 822 9924 5023</span>
      </a>

      <!-- Email -->
      <a href="mailto:krissantogroup@gmail.com" class="flex items-center justify-center space-x-3 hover:text-blue-500 transition-all duration-300 hover:scale-105">
        <Icon icon="fa-solid:envelope" class="text-3xl text-blue-500" />
        <span class="text-lg font-medium">krissantogroup@gmail.com</span>
      </a>

      <!-- Instagram -->
      <a href="https://www.instagram.com/krissantoproperty" target="_blank"
        class="flex items-center justify-center space-x-3 hover:text-pink-500 transition-all duration-300 hover:scale-105">
        <Icon icon="fa-brands:instagram" class="text-3xl text-pink-500" />
        <span class="text-lg font-medium">@krissantoproperty</span>
      </a>

      <!-- Website -->
      <a href="https://krissantogroup.com" target="_blank"
        class="flex items-center justify-center space-x-3 hover:text-indigo-500 transition-all duration-300 hover:scale-105">
        <Icon icon="fa-solid:globe" class="text-3xl text-indigo-500" />
        <span class="text-lg font-medium">www.krissantogroup.com</span>
      </a>
    </div>
  </div>
</section>
</template>

<script setup>
import SectionHeader from '@/components/UI/SectionHeader.vue';
import { Icon } from '@iconify/vue';
</script>

<style scoped>
section {
  scroll-margin-top: 120px;
}
</style>
