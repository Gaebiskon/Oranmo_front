<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary"
        style="background-color: white !important; border-bottom: solid gray 1px">
        <div class=""
            style="display: flex; width: 100%; justify-content: space-between; align-items: center; margin: 0 25px;">
            <RouterLink to="/" class="d-flex text-decoration-none">
                <img style="margin-right: 10px;" src="/src/assets/oranmo.svg" alt="" width="45px">
                <a class="navbar-brand fs-3 fw-bold " style="color: #FF4D00;" href="#">오랜모</a>
            </RouterLink>
            <div>
                <ul class="navbar-nav">
                    <!-- <li class="nav-item col-1">
                        <img src="/src/assets/account.png" alt="" width="25px">
                        <a class="nav-link active" aria-current="page" href="#">000님</a>
                    </li> -->
                    <!-- <li class="nav-item">
                        <button class="nav-link primary_btn" type="button"> 마이페이지 </button>
                    </li> -->
                    <li @click="goLogin" class="nav-item">
                        <a class="nav-link" href="#">로그인</a>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link primary_btn" type="button"> 회원가입 </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useArticleStore } from '@/stores/articles'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

function goHome() {
    router.push('/')
}

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
.primary_btn {
    background-color: #FF4D00;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 10px;
    min-height: 30px;
    min-width: 100px;
}
</style>


<img src="/src/assets/clementine_orange_18920.png" alt="" width="45px"></img>