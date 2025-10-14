<template>
<header class="fixed top-0 left-0 w-full z-50 border-t-gray-300 text-gray-800 dark:bg-red-900 dark:text-white shadow-md" style="background-color: #F5DEB3;">
  <div class="flex justify-between items-center p-4 lg:px-12 relative z-20">
    <div class="text-3xl font-bold dark:text-primary">
        <img 
          src="@/assets/images/kris.png" 
          alt="Kris PropertY Logo" 
          class="w-12 h-12 object-contain inline-block"
        />
      </div>

      <div class="md:hidden z-30">
        <button class="focus:outline-none" @click="isMenuOpen = !isMenuOpen">
          <span
            v-if="isMenuOpen"
            class="text-4xl text-primary dark:text-primary"
          >
            <Icon icon="material-symbols:close" />
          </span>
          <span
            v-else
            class="text-4xl text-primary dark:text-primary"
          >
            <Icon icon="material-symbols:menu" />
          </span>
        </button>
      </div>

      <nav
          :class="[
            'fixed inset-0 z-20 flex flex-col items-center justify-center bg-primary transition-transform duration-300 ease-in-out overflow-hidden',
            'md:relative md:bg-transparent md:flex md:flex-row md:justify-end md:static',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0',
          ]"
        >
        <!-- Close button mobile -->
          <button
            v-if="isMenuOpen"
            @click="toggleMenu"
            class="absolute top-6 right-6 z-30 text-white text-3xl md:hidden"
          >
            ✕
          </button>
        <ul
          class="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0 transition-opacity duration-300"
          :class="{ 'opacity-100': isMenuOpen, 'opacity-0 md:opacity-100': !isMenuOpen }"
        >
          <li v-for="item in Menu" :key="item.name">
            <a
            :href="item.href"
            class="font-bold transition ease-linear 
                  text-white hover:text-secondary     <!-- Warna teks mobile -->
                  md:text-primary md:hover:text-secondary 
                  lg:text-xl !dark:text-primary"
            @click="scrollToSection(item.href)"
          >
            {{ item.name }}
          </a>
          </li>
        </ul>
       <button @click="toggleDarkMode" class="text-white ml-20 z-10 hidden md:block">
        <!-- Show moon icon if dark mode is off, otherwise show sun icon -->
        <Icon v-if="! isDarkMode" icon="line-md:moon-filled" class="text-5x1 ☐ text-primary" />
        <Icon v-else icon="line-md:sunny-outline" class="text-5x1 ☐ text-primary
        " />
      </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

// Pastikan Anda mengimpor Iconify di sini jika tidak di-import secara global
// import { Icon } from '@iconify/vue'; 

const isMenuOpen = ref(false);
const Menu = ref([
  { name: 'Tentang Kami', href: '#tentangkami' },
  { name: 'Layanan Kami', href: '#layanankami' },
  { name: 'Keunggulan', href: '#keunggulan' },
  { name: 'Mengapa Kriss', href: '#mengapakriss' },
  { name: 'Product', href: '#product' },
  { name: 'Hubungi Kami', href: '#hubungikami' },
]);

const scrollToSection = (href) => {
  // Tutup menu setelah klik (hanya relevan di mobile)
  isMenuOpen.value = false;
  
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const isDarkMode = ref(localStorage.getItem('theme') === 'dark');

const toggleDarkMode = () => {
  const html = document.documentElement;

  if (isDarkMode.value) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }

  // Update dark mode state
  isDarkMode.value = !isDarkMode.value;
};

</script>

<style scoped>
/* Opsional: Jika Anda ingin menambahkan styling tambahan di luar Tailwind */
</style>