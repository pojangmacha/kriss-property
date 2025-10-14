<template>
  <section
    id="mengapakriss"
    class="relative mt-32 py-24 px-8 text-white bg-gradient-to-br from-[#1f1e1c] via-[#2a2a2a] to-[#3a3a3a]
           overflow-hidden rounded-3xl shadow-2xl"
  >
    <!-- Decorative background glow -->
    <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,230,0,0.2),transparent_70%)]"></div>

    <div class="relative z-10 max-w-4xl mx-auto text-center">
      <SectionHeader title="Mengapa Memilih Krissanto Property?" />

      <div
        class="mt-12 text-lg md:text-xl leading-relaxed text-gray-300 space-y-6 font-light"
        data-aos="fade-up"
      >
        <p>
          Karena <span class="text-secondary font-semibold">membeli rumah bukan sekadar transaksi</span>, tapi langkah penting dalam membangun masa depan.
        </p>
        <p>
          <span class="text-secondary font-semibold">Krissanto Property</span> ingin menjadi teman yang membantu, bukan sekadar agen yang menjual.
        </p>
        <p>
          Kami hadir untuk memastikan setiap pelanggan merasa <span class="text-secondary font-semibold">tenang, paham, dan yakin</span> dalam proses pembelian rumah.
        </p>
      </div>
    </div>

    <!-- Floating decorative shapes -->
    <div
      class="absolute top-10 left-10 w-20 h-20 rounded-full bg-secondary opacity-20 blur-2xl animate-pulse"
    ></div>
    <div
      class="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-secondary opacity-20 blur-3xl animate-bounce"
    ></div>
  </section>
</template>

<script setup>
import SectionHeader from "@/components/UI/SectionHeader.vue";
</script>
