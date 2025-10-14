<template>
  <section id="layanankami" class="mt-32 text-white">
    <SectionHeader title="Layanan Kami" />

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
    icon: "https://img.icons8.com/?size=100&id=gd9JPjrExFqF&format=png&color=000000",
    name: "Pencarian Rumah Impian",
    description:
      "Kami membantu Anda menemukan rumah sesuai kriteria - baik dari sisi lokasi, harga, hingga kenyamanan lingkungan.",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/?size=100&id=eW08yEkLPv2l&format=png&color=000000",
    name: "Konsultasi Pembelian Rumah",
    description:
      "Belum tahu harus mulai dari mana? Tim kami siap memberikan panduan dari tahap pencarian, survei, hingga proses administrasi pembelian.",
  },
  {
    id: 3,
    icon: "https://img.icons8.com/?size=100&id=117333&format=png&color=000000",
    name: "Pendampingan Negosiasi & Proses Legal",
    description:
      "Kami membantu memastikan setiap proses negosiasi dan dokumen pembelian berjalan lancar, aman, dan sesuai ketentuan.",
  },
]);
</script>
