<template>
  <div class="container">
    <div class="row">
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import { useArticleStore } from '/src/stores/articles'
import { reactive } from 'vue'


const articleStore = useArticleStore()

const data = reactive({
  title: '',
  content: ''
})

function createArticle() {
  articleStore.createArticle(data)

}
</script>

<style lang="scss" scoped></style>