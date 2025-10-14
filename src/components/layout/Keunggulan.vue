<template>
  <section id="keunggulan" class="mt-32 text-white">
    <SectionHeader title="Keunggulan Krissanto Property" />

    <div
      class="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-16"
    >
      <article
        v-for="element in services"
        :key="element.id"
        class="relative flex flex-col items-center text-center bg-primary dark:bg-[#ffffff15]
               rounded-3xl border border-secondary shadow-lg p-8 transition-transform 
               hover:scale-105 duration-300 ease-out"
        data-aos="fade-up"
        :data-aos-delay="element.id * 100"
      >
        <!-- Icon -->
        <div
          class="flex items-center justify-center w-[100px] h-[100px] bg-white/10
                 rounded-full border-2 border-secondary shadow-md mb-6"
        >
          <img :src="element.icon" alt="icon" class="w-[60px] h-[60px]" />
        </div>

        <!-- Content -->
        <h3 class="text-secondary font-semibold text-xl mb-3">
          {{ element.name }}
        </h3>
        <p class="text-gray-300 text-sm leading-relaxed px-3">
          {{ element.description }}
        </p>
      </article>
    </div>
  </section>
</template>


<script setup>
import SectionHeader from "@/components/UI/SectionHeader.vue";
import { ref } from "vue";

const services = ref([
  {
    id: 1,
    icon: "https://img.icons8.com/?size=100&id=2NernoCyhNT0&format=png&color=000000",
    name: "Pendampingan Penuh dari Awal hingga Akhir",
    description:
      "Kami tidak hanya menunjukkan rumah - kami mendampingi Anda hingga kunci rumah berada di tangan Anda.",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/?size=100&id=Lfdo9or61zvT&format=png&color=000000",
    name: "Transparan & Jujur",
    description:
      "Setiap informasi harga, lokasi, dan legalitas kami sampaikan dengan terbuka tanpa biaya tersembunyi.",
  },
  {
    id: 3,
    icon: "https://img.icons8.com/?size=100&id=o6ImeBquWm62&format=png&color=000000",
    name: "Pelayanan Ramah & Personal",
    description:
      "Kami percaya setiap pelanggan punya kebutuhan unik, dan kami selalu siap mendengarkan.",
  },
]);
</script>
