<template>
  <section
    id="product"
    class="relative w-11/12 px-4 sm:px-8 lg:px-16 mx-auto mt-24 mb-24 text-white overflow-hidden"
  >
    <SectionHeader title="Product Gallery" />

    <div
      v-for="(category, index) in categories"
      :key="index"
      class="mt-16"
      ref="galleryRefs"
    >
      <!-- Nama Kategori -->
      <h2 class="text-2xl font-bold text-secondary mb-6 border-b border-secondary/30 pb-2 inline-block">
        {{ category.name }}
      </h2>

      <!-- Grid Foto -->
      <div
        class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        :data-gallery-id="index"
      >
        <a
          v-for="(image, i) in category.images"
          :key="i"
          :href="image.src"
          :data-pswp-width="image.width"
          :data-pswp-height="image.height"
          :data-caption="image.caption"
          class="group relative block overflow-hidden rounded-2xl shadow-lg hover:scale-[1.03] transition duration-300 bg-gray-900/20"
        >
          <img
            :src="image.src"
            :alt="image.caption"
            class="object-cover w-full h-[250px] sm:h-[300px] md:h-[350px] brightness-95 group-hover:brightness-100 transition-all duration-300"
          />

          <!-- Caption overlay -->
          <div
            v-if="image.caption"
            class="absolute bottom-0 left-0 right-0 bg-black/50 p-3 text-center backdrop-blur-sm"
          >
            <p class="text-sm text-gray-200">{{ image.caption }}</p>
          </div>
        </a>
      </div>
    </div>

    <!-- Root untuk PhotoSwipe -->
    <div class="pswp hidden" tabindex="-1" role="dialog" aria-hidden="true"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SectionHeader from "@/components/UI/SectionHeader.vue";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

// Data kategori + foto
const categories = ref([
  {
    name: "Mulqi Mansion Premiere (1 Lantai)",
    images: [
      {
        src: "/gallery/lantai1.jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lantai1(2).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lantai1(3).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lantai1(4).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lantai1(5).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lantai1(6).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lantai1(7).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lantai1(8).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
    ],
  },
  {
    name: "Mulqi Mansion Premiere (2 Lantai)",
    images: [
      {
        src: "/gallery/lantai2.jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lanati2(1).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lanati2(2).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lanati2(3).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lanati2(4).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lanati2(5).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lanati2(6).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lanati2(7).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lanati2(8).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lanati2(9).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lanati2(10).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lanati2(11).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lanati2(12).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lanati2(13).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lanati2(14).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
      {
        src: "/gallery/lanati2(15).jpeg",
        width: 1200,
        height: 800,
        caption: "",
      },
    ],
  },
  {
    // name: "Samawa Digital",
    // images: [
    //   {
    //     src: "/gallery/samawa1.jpg",
    //     width: 1200,
    //     height: 800,
    //     caption: "Contoh undangan digital interaktif",
    //   },
    //   {
    //     src: "/gallery/samawa2.jpg",
    //     width: 1200,
    //     height: 800,
    //     caption: "Tampilan desain undangan modern",
    //   },
    // ],
  },
]);

// Refs untuk setiap kategori gallery
const galleryRefs = ref([]);

// Inisialisasi PhotoSwipe
onMounted(() => {
  galleryRefs.value = document.querySelectorAll("[data-gallery-id]");

  galleryRefs.value.forEach((galleryEl) => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: galleryEl,
      children: "a",
      pswpModule: () => import("photoswipe"),
      bgOpacity: 0.85,
      showHideAnimationType: "fade",
    });
    lightbox.init();
  });
});
</script>
