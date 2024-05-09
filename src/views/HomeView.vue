<template>
  <Navbar></Navbar>
  <div style="margin: 50px; width: 80%; display: flex; flex-direction: column; justify-content: center;">
    <Filter></Filter>
  </div>
  <TestLayout></TestLayout>
  <Footer></Footer>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Filter from '@/components/Filter.vue'
import Footer from '@/components/Footer.vue'
import TestLayout from '@/components/TestLayout.vue'
</script>

<style lang="scss" scoped></style>