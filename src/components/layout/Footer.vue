<template>
  <footer
    class="z-10 border-t border-t-gray-300 text-gray-800 
          dark:bg-red-900 dark:text-white shadow-md"
    style="background-color: #F5DEB3;"
  >
    <div class="flex flex-col md:flex-row justify-between items-center p-4 lg:px-12">
      <!-- Logo dan Brand -->
      <div class="flex items-center space-x-3 mb-3 md:mb-0">
        <img 
          src="@/assets/images/kris.png" 
          alt="Kris Property Logo" 
          class="w-12 h-12 object-contain inline-block"
        />
        <h2 class="font-semibold text-lg tracking-wide"></h2>
      </div>

      <!-- Hak Cipta dan Social Icons -->
      <div class="flex flex-col items-center md:items-end">
        <p class="text-sm md:text-base text-gray-700 dark:text-primary-200">
          &copy; 2025 Kris Property. All rights reserved.
        </p>

        <!-- Social Icons -->
        <div class="flex justify-center md:justify-end space-x-3 mt-2">
          <a
            href="https://wa.me/6282299245023"
            target="_blank"
            class="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
          >
            <Icon icon="fa-brands:whatsapp" class="text-base" />
          </a>

          <a
            href="mailto:krissantogroup@gmail.com"
            class="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
          >
            <Icon icon="fa-solid:envelope" class="text-base" />
          </a>

          <a
            href="https://www.instagram.com/krissantoproperty"
            target="_blank"
            class="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
          >
            <Icon icon="fa-brands:instagram" class="text-base" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
