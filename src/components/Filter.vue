<template>
  <!-- 학년 선택 -->
  <div class="d-flex mb-4">
    <!-- 학년 범주 -->
    <div class="text-white text-center align-content-center py-1 me-4" style="background-color: green; width: 50px;">학년
    </div>
    <!-- 학년 드롭다운 -->
    <div class="dropdown">
      <button style="border-color: #bbbbc2;" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
        aria-expanded="false">
        학년
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#" data-value="first_grade">1학년</a></li>
        <li><a class="dropdown-item" href="#" data-value="second_grade">2학년</a></li>
        <li><a class="dropdown-item" href="#" data-value="third_grade">3학년</a></li>
      </ul>
    </div>
  </div>


  <!-- 연도 선택 -->
  <div class="d-flex mb-4">
    <div class="text-white text-center align-content-center py-1 me-4" style="background-color: green; width: 50px;">연도
    </div>
    <div class="dropdown">
      <button style="border-color: #bbbbc2;" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
        aria-expanded="false">
        시작연도
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">2022</a></li>
        <li><a class="dropdown-item" href="#">2023</a></li>
        <li><a class="dropdown-item" href="#">2024</a></li>
      </ul>
    </div>
    <div style="font-size: 25px; margin: 0px 20px;">~</div>
    <div class="dropdown">
      <button style="border-color: #bbbbc2;" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
        aria-expanded="false">
        종료연도
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">2022</a></li>
        <li><a class="dropdown-item" href="#">2023</a></li>
        <li><a class="dropdown-item" href="#">2024</a></li>
      </ul>
    </div>
  </div>

  <!-- 월 선택 -->
  <div class="d-flex mb-4">
    <!-- 월 범주 -->
    <div class="text-white text-center align-content-center py-1 me-4" style="background-color: green; width: 50px;">월
    </div>
    <!-- 월 체크박스 -->
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="all_month" value="all_month">
      <label class="form-check-label" for="all_month">전체</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="month3" value="month3">
      <label class="form-check-label" for="month3">3월</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="month4" value="month4">
      <label class="form-check-label" for="month4">4월</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="month6" value="month6">
      <label class="form-check-label" for="month6">6월</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="month7" value="month7">
      <label class="form-check-label" for="month7">7월</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="month9" value="month9">
      <label class="form-check-label" for="month9">9월</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="month10" value="month10">
      <label class="form-check-label" for="month10">10월</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="month11" value="month11">
      <label class="form-check-label" for="month11">11월</label>
    </div>
  </div>

  <!-- 과목 선택  -->
  <div class="d-flex mb-4">
    <div class="text-white text-center align-content-center py-1 me-4" style="background-color: green; width: 50px;">과목
    </div>

    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="all_subject" value="all_subject">
      <label class="form-check-label" for="all_subject">전체</label>
    </div>
    <div class="d-flex">
      <!-- 국어 체크 박스 -->
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="Korean_checkbox" value="Korean_checkbox">
        <!-- <label class="form-check-label" for="Korean_checkbox"> </label> -->
        <!-- 국어 드롭다운 -->
        <label class="dropdown form-check-label" for="Korean_checkbox">
          <button style="border-color: #bbbbc2;" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            국어
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">화법과 작문</a></li>
            <li><a class="dropdown-item" href="#">언어와 매체</a></li>
          </ul>
        </label>
      </div>


    </div class="d-flex"> <!-- 수학 체크 박스 -->
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="math_checkbox" value="math_checkbox">
      <!-- <label class="form-check-label" for="math_checkbox"> </label> -->
      <!-- 수학 드롭다운 -->
      <label class="dropdown form-check-label" for="math_checkbox">
        <button style="border-color: #bbbbc2;" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
          aria-expanded="false">
          수학
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">확률과 통계</a></li>
          <li><a class="dropdown-item" href="#">미적분</a></li>
          <li><a class="dropdown-item" href="#">기하</a></li>
        </ul>
      </label>
    </div>


    <!-- 영어 체크 박스 -->
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="Eng_checkbox" value="Eng_checkbox">
      <label class="form-check-label" for="Eng_checkbox">영어</label>
    </div>

    <!-- 한국사 체크 박스 -->
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="History_checkbox" value="History_checkbox">
      <label class="form-check-label" for="History_checkbox">한국사</label>
    </div>

    <!-- 사회 탐구 체크 박스 -->
    <div class="d-flex">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="society_checkbox" value="society_checkbox">
        <!-- <label class="form-check-label" for="society_checkbox"> </label> -->
        <label class="dropdown form-check-label" for="society_checkbox">
          <button style="border-color: #bbbbc2;" class="btn btn-hover:hover dropdown-toggle" type="button"
            data-bs-toggle="dropdown" aria-expanded="false">
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
        </label>
      </div>
    </div>

    <!-- 과학 탐구 체크 박스 -->
    <div class="d-flex">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="science_checkbox" value="science_checkbox">
        <!-- <label class="form-check-label" for="science_checkbox"></label> -->
        <!-- 과학탐구 드롭다운 -->
        <label class="dropdown form-check-label" for="science_checkbox">
          <button style="border-color: #bbbbc2;" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false" @click="toggleDropdown">
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
        </label>
      </div>
    </div class="d-flex">
  </div>

  <!-- 시험지 만들기 버튼  -->
  <div class="d-flex justify-content-center ">
    <button class="nav-link primary_btn" type="button"> 시험지 만들기 </button>
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

<style>
.form-check-input[type="checkbox"]:checked {
  background-color: #FF4D00;
  border-color: #FF4D00;
}

.form-check-input,
.form-check-label {
  font-size: 20px;
  /* 원하는 크기로 조정하세요 */
}

.primary_btn {
  background-color: #FF4D00;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  min-height: 60px;
  min-width: 180px;
}

.container {
  text-align: center;
}

.dropdown-item:hover,
.dropdown-item.active {
  background-color: #FF4D00;
  color: #fff;
}
</style>