<template>
<div class="d-flex">
  <div class="text-white text-center py-1" style="background-color: green; width: 50px;">학년 </div>
  <div class="dropdown">
     <button style="border-color: #bbbbc2;" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      학년
    </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">1학년</a></li>
        <li><a class="dropdown-item" href="#">2학년</a></li>
        <li><a class="dropdown-item" href="#">3학년</a></li>
      </ul>
    </div>
  </div>
<br>


<div class="d-flex">
  <div class="text-white text-center py-1" style="background-color: green; width: 50px;">연도</div> 
  <div class="dropdown">
    <button style="border-color: #bbbbc2;" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      시작연도
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">2022</a></li>
      <li><a class="dropdown-item" href="#">2023</a></li>
      <li><a class="dropdown-item" href="#">2024</a></li>
    </ul>
    </div>
  <div style="font-size: 25px; margin: 0 20x;">~</div>
  <div class="dropdown">
  <button style="border-color: #bbbbc2;" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    종료연도
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">2022</a></li>
    <li><a class="dropdown-item" href="#">2023</a></li>
    <li><a class="dropdown-item" href="#">2024</a></li>
  </ul>
  </div>
</div>
<br>

<div class="d-flex">
<div class="text-white text-center py-1" style="background-color: green; width: 50px;">월 </div>  
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="all_month">
  <label class="form-check-label" for="inlineCheckbox1">전체</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="month3">
  <label class="form-check-label" for="inlineCheckbox2">3월</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="month4">
  <label class="form-check-label" for="inlineCheckbox2">4월</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="month5">
  <label class="form-check-label" for="inlineCheckbox2">5월</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="month6">
  <label class="form-check-label" for="inlineCheckbox2">6월</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="month7">
  <label class="form-check-label" for="inlineCheckbox2">7월</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="month8">
  <label class="form-check-label" for="inlineCheckbox2">8월</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="month9">
  <label class="form-check-label" for="inlineCheckbox2">9월</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="month10">
  <label class="form-check-label" for="inlineCheckbox2">10월</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="month11">
  <label class="form-check-label" for="inlineCheckbox2">11월</label>
</div>
</div>



<br>
<div class="d-flex">
  <div class="text-white text-center py-1" style="background-color: green; width: 50px;">학년 </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="all_subject">
        <label class="form-check-label" for="inlineCheckbox2">전체</label>
    </div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="month3">
  <label class="form-check-label" for="inlineCheckbox2"> </label>
</div>
    <div class="dropdown">
        <button style="border-color: #bbbbc2;" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            국어 
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">화법과 작문</a></li>
            <li><a class="dropdown-item" href="#">언어와 매체</a></li>
        </ul>
    </div>

    <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="month3">
  <label class="form-check-label" for="inlineCheckbox2"> </label>
</div>

    <div class="dropdown">
        <button style="border-color: #bbbbc2;" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            수학 
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">확률과 통계</a></li>
            <li><a class="dropdown-item" href="#">미적분</a></li>
            <li><a class="dropdown-item" href="#">기하</a></li>
        </ul>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="subject_eng">
        <label class="form-check-label" for="inlineCheckbox2">영어</label>
    </div>

    <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="subject_history">
  <label class="form-check-label" for="inlineCheckbox2">한국사</label>
</div>

<div class="d-flex">
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="month3">
  <label class="form-check-label" for="inlineCheckbox2"> </label>
</div>
   <div class="dropdown">
  <button style="border-color: #bbbbc2;" class="btn btn-hover:hover dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    사회탐구
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">생활과 윤리</a></li>
    <li><a class="dropdown-item" href="#">윤리와 사상</a></li>
    <li><a class="dropdown-item" href="#">한국지리</a></li>
    <li><a class="dropdown-item" href="#">세계지리</a></li>
    <li><a class="dropdown-item" href="#">동아시아사</a></li>
    <li><a class="dropdown-item" href="#">세계사</a></li>
    <li><a class="dropdown-item" href="#">경제</a></li>
    <li><a class="dropdown-item" href="#">정치와 법</a></li>
    <li><a class="dropdown-item" href="#">사회·문화</a></li>
  </ul>
</div>

<ul>

</ul>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="month3">
  <label class="form-check-label" for="inlineCheckbox2"></label>
</div>

<div class="dropdown">
  <button style="border-color: #bbbbc2;" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    과학탐구
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">물리학Ⅰ</a></li>
    <li><a class="dropdown-item" href="#">화학Ⅰ</a></li>
    <li><a class="dropdown-item" href="#">생명과학Ⅰ</a></li>
    <li><a class="dropdown-item" href="#">지구과학Ⅰ</a></li>
    <li><a class="dropdown-item" href="#">물리학Ⅱ</a></li>
    <li><a class="dropdown-item" href="#">화학Ⅱ</a></li>
    <li><a class="dropdown-item" href="#">생명과학Ⅱ</a></li>
    <li><a class="dropdown-item" href="#">지구과학Ⅱ</a></li>
 
  </ul>
</div>
</div>


</div>

<!-- <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="subject_kor">
  <label class="form-check-label" for="inlineCheckbox2">국어</label>

  
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="subject_math">
  <label class="form-check-label" for="inlineCheckbox2">수학</label>
</div> -->


<!-- <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="subject_history">
  <label class="form-check-label" for="inlineCheckbox2">한국사</label>
</div> -->





<!-- <div class="d-flex">
   <div class="dropdown">
  <button style="border-color: #bbbbc2;" class="btn btn-hover:hover dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    사회탐구
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">생활과 윤리</a></li>
    <li><a class="dropdown-item" href="#">윤리와 사상</a></li>
    <li><a class="dropdown-item" href="#">한국지리</a></li>
    <li><a class="dropdown-item" href="#">세계지리</a></li>
    <li><a class="dropdown-item" href="#">동아시아사</a></li>
    <li><a class="dropdown-item" href="#">세계사</a></li>
    <li><a class="dropdown-item" href="#">경제</a></li>
    <li><a class="dropdown-item" href="#">정치와 법</a></li>
    <li><a class="dropdown-item" href="#">사회·문화</a></li>
  </ul>
</div>

<ul>

</ul>



<div class="dropdown">
  <button style="border-color: #bbbbc2;" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    과학탐구
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">물리학Ⅰ</a></li>
    <li><a class="dropdown-item" href="#">화학Ⅰ</a></li>
    <li><a class="dropdown-item" href="#">생명과학Ⅰ</a></li>
    <li><a class="dropdown-item" href="#">지구과학Ⅰ</a></li>
    <li><a class="dropdown-item" href="#">물리학Ⅱ</a></li>
    <li><a class="dropdown-item" href="#">화학Ⅱ</a></li>
    <li><a class="dropdown-item" href="#">생명과학Ⅱ</a></li>
    <li><a class="dropdown-item" href="#">지구과학Ⅱ</a></li>
 
  </ul>
</div>
</div> -->


</template>


<script setup>

</script>

<style >
  .form-check-input[type="checkbox"]:checked {
        background-color: #FF4D00;
        border-color: #FF4D00;
    }
    .form-check-input,
    .form-check-label {
        font-size: 20px; /* 원하는 크기로 조정하세요 */
    }

</style>

