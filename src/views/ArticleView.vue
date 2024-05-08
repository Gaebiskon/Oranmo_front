<template>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid ">
    <!-- d-flex -->
    <div>
      <img src="/src/assets/clementine_orange_18920.png" alt="" width="45px">
      <a class="navbar-brand" href="#">오랜모</a>
    </div>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <!-- <li class="nav-item col-1">
          <img src="/src/assets/account.png" alt="" width="25px">
          <a class="nav-link active" aria-current="page" href="#">000님</a>
        </li> -->
        <li class="nav-item">
          <a class="nav-link" href="#">마이페이지</a>
        </li>
        <li @click="goLogin" class="nav-item">
          <a class="nav-link" href="#">로그인</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">회원가입</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<script setup>
import { useArticleStore } from '/src/stores/articles'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

function goLogin() {
  router.push('/login')
}

 const articleStore = useArticleStore()


 function fetchArticles() {
   articleStore.fetchArticles()
 }

 onMounted(() => {
   fetchArticles()
 })

</script>

<style lang="scss" scoped>

</style>

<img src="/src/assets/clementine_orange_18920.png" alt="" width="45px">
