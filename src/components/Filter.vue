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
        {{ selectedOption.grade.value || '시작연도' }}
      </button>
      <ul class="dropdown-menu">
        <li v-for="(item, index) in gradeOptions" :key="index">
          <a class="dropdown-item" href="#" @click="selectOption('grade', item)">{{ item }}</a>
        </li>
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
        {{ selectedOption.startYear.value || '시작연도' }}
      </button>
      <ul class="dropdown-menu">
        <li v-for="(item, index) in yearOptions.startYear" :key="index">
          <a class="dropdown-item" href="#" @click="selectOption('startYear', item)">{{ item }}</a>
        </li>
      </ul>
    </div>


    <p style="font-size: 25px; margin: 0px 20px;">~</p>

    <!-- 종료 연도 -->
    <div class="dropdown">
      <button style="border-color: #bbbbc2;" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
        aria-expanded="false">
        {{ selectedOption.endYear.value || '종료연도' }}
      </button>
      <ul class="dropdown-menu">
        <li v-for="(item, index) in yearOptions.endYear" :key="index">
          <a class="dropdown-item" href="#" @click="selectOption('endYear', item)">{{ item }}</a>
        </li>
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
      <input class="form-check-input" type="checkbox" id="all_month" value="all_month"
        v-model="monthchecked.allMonthChecked">
      <label class="form-check-label" for="all_month">전체</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="month3" value="month3" v-model="monthchecked.month3Checked">
      <label class="form-check-label" for="month3">3월</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="month4" value="month4" v-model="monthchecked.month4Checked">
      <label class="form-check-label" for="month4">4월</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="month6" value="month6" v-model="monthchecked.month6Checked">
      <label class="form-check-label" for="month6">6월</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="month7" value="month7" v-model="monthchecked.month7Checked">
      <label class="form-check-label" for="month7">7월</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="month9" value="month9" v-model="monthchecked.month9Checked">
      <label class="form-check-label" for="month9">9월</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="month10" value="month10"
        v-model="monthchecked.month10Checked">
      <label class="form-check-label" for="month10">10월</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="month11" value="month11"
        v-model="monthchecked.month11Checked">
      <label class="form-check-label" for="month11">11월</label>
    </div>
  </div>

  <!-- 과목 선택  -->
  <div class="d-flex mb-4">
    <div class="text-white text-center align-content-center py-1 me-4" style="background-color: green; width: 50px;">과목
    </div>

    <!-- 전체 -->
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="all_subject" value="all_subject">
      <label class="form-check-label" for="all_subject">전체</label>
    </div>
    <div class="d-flex">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="korean_checkbox" value="korean_checkbox"
          v-model="koreanChecked">
        <div class="dropdown form-check-label" for="">
          <button :class="{ active: dropdownOpen.korean }" style="border-color: #bbbbc2;" class="btn dropdown-toggle"
            type="button" data-bs-toggle="dropdown" aria-expanded="false" :disabled="!koreanChecked">
            {{ selectedOption.korean.value || '사회탐구' }}
          </button>
          <ul v-show="dropdownOpen.korean" class="dropdown-menu">
            <li v-for="(item, index) in koreanOptions" :key="index">
              <a class="dropdown-item" href="#" @click="selectOption('korean', item)">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <!-- 수학 체크 박스 -->
    <div class="d-flex">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="math_checkbox" value="math_checkbox" v-model="mathChecked">
        <div class="dropdown form-check-label" for="">
          <button :class="{ active: dropdownOpen.math }" style="border-color: #bbbbc2;" class="btn dropdown-toggle"
            type="button" data-bs-toggle="dropdown" aria-expanded="false" :disabled="!mathChecked">
            {{ selectedOption.math.value || '사회탐구' }}
          </button>
          <ul v-show="dropdownOpen.math" class="dropdown-menu">
            <li v-for="(item, index) in mathOptions" :key="index">
              <a class="dropdown-item" href="#" @click="selectOption('math', item)">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
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
        <input class="form-check-input" type="checkbox" id="society_checkbox" value="society_checkbox"
          v-model="socialChecked">
        <!-- @change="toggleDropdown('science')"> -->
        <div class="dropdown form-check-label" for="">
          <button :class="{ active: dropdownOpen.social }" style="border-color: #bbbbc2;" class="btn dropdown-toggle"
            type="button" data-bs-toggle="dropdown" aria-expanded="false" :disabled="!socialChecked">
            {{ selectedOption.social.value || '사회탐구' }}
          </button>
          <ul v-show="dropdownOpen.social" class="dropdown-menu">
            <li v-for="(item, index) in socialOptions" :key="index">
              <a class="dropdown-item" href="#" @click="selectOption('social', item)">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <!-- 과학 탐구 체크 박스 -->
    <div class="d-flex">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="science_checkbox" value="science_checkbox"
          v-model="scienceChecked">
        <!-- @change="toggleDropdown('science')"> -->
        <div class="dropdown form-check-label" for="">
          <button :class="{ active: dropdownOpen.science }" style="border-color: #bbbbc2;" class="btn dropdown-toggle"
            type="button" data-bs-toggle="dropdown" aria-expanded="false" :disabled="!scienceChecked">
            {{ selectedOption.science.value || '과학탐구' }}
          </button>
          <ul v-show="dropdownOpen.science" class="dropdown-menu">
            <li v-for="(item, index) in scienceOptions" :key="index">
              <a class="dropdown-item" href="#" @click="selectOption('science', item)">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- 시험지 만들기 버튼  -->
  <div class="d-flex justify-content-center ">
    <button class="nav-link primary_btn fw-bold" type="button"> 시험지 만들기 </button>
  </div>
</template>


<script setup>
import { ref } from 'vue';

const monthchecked = {
  allMonthChecked: ref(false),
  month3Checked: ref(false),
  month4Checked: ref(false),
  month6Checked: ref(false),
  month7Checked: ref(false),
  month9Checked: ref(false),
  month10Checked: ref(false),
  month11Checked: ref(false)
};

const koreanChecked = ref(false);
const mathChecked = ref(false);
const socialChecked = ref(false);
const scienceChecked = ref(false);

const dropdownOpen = {
  korean: ref(false),
  math: ref(false),
  science: ref(false),
  social: ref(false)
};

const selectedOption = {
  grade: ref('학년'),
  startYear: ref('시작연도'),
  endYear: ref('종료연도'),
  korean: ref('국어'),
  math: ref('수학'),
  science: ref('과학탐구'),
  social: ref('사회탐구')
};

const gradeOptions = [
  '1학년', '2학년', '3학년'
];

const yearOptions = {
  startYear: [2022, 2023, 2024],
  endYear: [2022, 2023, 2024]
}
  ;

const koreanOptions = [
  '화법과 작문', '언어와 매체'
];

const mathOptions = [
  '확률과 통계', '미적분', '기하'
];

const scienceOptions = [
  '물리학Ⅰ', '화학Ⅰ', '생명과학Ⅰ', '지구과학Ⅰ',
  '물리학Ⅱ', '화학Ⅱ', '생명과학Ⅱ', '지구과학Ⅱ'
];

const socialOptions = [
  '생활과 윤리', '윤리와 사상', '한국지리', '세계지리', '동아시아사',
  '세계사', '경제', '정치와 법', '사회·문화'
];

const toggleDropdown = (type) => {
  dropdownOpen[type].value = !dropdownOpen[type].value;
};

const selectOption = (type, option) => {
  selectedOption[type].value = option;
  dropdownOpen[type].value = false; // 선택한 드롭다운 닫기
};
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
  border-radius: 15px;
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

/* .dropdown-menu 클래스의 스타일을 수정하여 드롭다운 메뉴가 기본적으로 보이지 않도록 설정 */
.dropdown-menu {
  display: none;
}

/* 드롭다운이 열린 경우에만 드롭다운 메뉴가 보이도록 함 */
.dropdown.open .dropdown-menu {
  display: block;
}
</style>
