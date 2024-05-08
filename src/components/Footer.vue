<script setup>
defineProps({
    msg: {
        type: String,
        required: true
    }
})
</script>

<template>
    <!-- <div class="container-fluid vh-100 bg-success text-white h-75">자주 묻는 질문</div> -->

    <!--  -->

    <div id="component" class="container-fluid py-4" style="background-color: #3D6E1E;">
        <p class="text-center fs-6 m-0 px-5 py-2">
            <a class="text-white">
                자주 묻는 질문
            </a>
            <a class="text-white">
                이용약관
            </a>
            <a class="text-white">
                개인정보 보호 정책
            </a>
            <a class="text-white">
                팀 소개
            </a>
        </p>
        <div class="text-center">
            <p class="text-white fs-6  m-0 px-3 py-2">
                (주) 개비스콘 (대표 : 우수콩)
                <br>
                사업자등록번호 : XXX-XX-XXXXX 사업자정보확인
                <br>
                통신판매업신고 : 제 20XX-서울XX-XXXXX호
                <br>
                주소 : 서울특별시 구로구 디지털로20길 23
                <br>
                E-mail : gaebiskon@kakao.com
                <br>
                고객센터 : 010-1234-5678
                <br>
                평일 09~18시 (점심시간 12~13시), 주말/공휴일 휴무
            </p>
        </div>

    </div>


</template>



<style scoped></style>
