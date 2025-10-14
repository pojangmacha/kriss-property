<template>
  <section id="tentangkami" class="relative text-white mt-32 px-6 lg:px-20">
    <!-- Tetap pakai SectionHeader -->
    <SectionHeader title="Tentang Kami" />

   <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mt-20">
  <!-- Teks -->
  <div
    class="space-y-6 sm:space-y-10 text-gray-800 dark:text-gray-300 leading-relaxed bg-white/10 dark:bg-dark/10 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg border border-white/10 hover:shadow-xl transition duration-500"
    data-aos="fade-right"
  >
    <p class="text-base sm:text-lg font-semibold text-secondary dark:text-secondary">Krissanto Property</p>
    <p class="text-base sm:text-lg">
      Kami memahami bahwa membeli rumah adalah salah satu keputusan terbesar dalam hidup - karena itu, kami hadir untuk mendampingi Anda di setiap langkahnya.
    </p>
    <p class="text-base sm:text-lg border-l-4 border-secondary pl-4 italic">
      “Kami berkomitmen memberikan pengalaman pembelian rumah yang nyaman, transparan, dan berorientasi pada kebutuhan Anda.”
    </p>

    <!-- Visi -->
    <div class="pt-4 border-t border-white/10">
      <h3 class="text-lg sm:text-2xl font-semibold text-secondary mb-3 flex items-center gap-2">
        <i class="fa-solid fa-bullseye"></i> Visi
      </h3>
      <ul class="space-y-2 sm:space-y-3 text-base sm:text-lg">
        <li class="flex items-start gap-3">
          <span class="text-secondary text-lg mt-1">•</span>
          Menjadi mitra terpercaya bagi setiap keluarga Indonesia dalam mewujudkan impian memiliki rumah sendiri.
        </li>
      </ul>
    </div>

    <!-- Misi -->
    <div class="pt-4 border-t border-white/10">
      <h3 class="text-lg sm:text-2xl font-semibold text-secondary mb-3 flex items-center gap-2">
        <i class="fa-solid fa-list-check"></i> Misi
      </h3>
      <ul class="space-y-2 sm:space-y-3 text-base sm:text-lg">
        <li class="flex items-start gap-3">
          <span class="text-secondary text-lg mt-1">•</span>
          Membantu calon pembeli menemukan rumah yang sesuai dengan kebutuhan, lokasi, dan anggaran.
        </li>
        <li class="flex items-start gap-3">
          <span class="text-secondary text-lg mt-1">•</span>
          Memberikan panduan yang jujur, jelas, dan mudah dipahami sepanjang proses pembelian.
        </li>
        <li class="flex items-start gap-3">
          <span class="text-secondary text-lg mt-1">•</span>
          Membangun kepercayaan melalui pelayanan profesional dan komunikasi yang terbuka.
        </li>
        <li class="flex items-start gap-3">
          <span class="text-secondary text-lg mt-1">•</span>
          Berinovasi dalam layanan dengan memanfaatkan teknologi digital untuk pencarian dan promosi rumah.
        </li>
      </ul>
    </div>
  </div>

  <!-- Gambar -->
  <div class="flex justify-center" data-aos="fade-left">
    <img
      src="@/assets/images/home.png"
      alt="Krissanto Property"
      class="w-full max-w-full sm:max-w-[600px] lg:max-w-[800px] rounded-3xl shadow-2xl object-cover floating-image"
    />
  </div>
</div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/UI/SectionHeader.vue';
</script>

<style scoped>
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

.floating-image {
  animation: float 5s ease-in-out infinite;
}
</style>
