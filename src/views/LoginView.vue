<template>
  <div class="container">

    <div class="logo">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
      <img src="/src/assets/free-icon-orange-slice-1999991.png" alt="" width="100px">
      <h2 style="color: orange; font-family: 'Jua',sans-serif ;">오랜모</h2>
    </div>
  </div>

  <div class="login-pop">
    <header>
      <h2>Login</h2>
    </header>

    <form action="" method="POST">


      <div class="input-box">
        <input id="username" type="text" name="username" placeholder="아이디">
        <label for="username">아이디</label>
      </div>

      <div class="input-box">
        <input id="password" type="password" name="password" placeholder="비밀번호">
        <label for="password">비밀번호</label>
      </div>
      <div id="forgot">아이디 찾기</div>
      <div id="forgot">비밀번호 찾기</div>
      <input style="background-color: #ff4d00;" class="btn text-white fw-bold container-fluid" @click="goHome" value="로그인">

    </form>
  </div>

</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
function goHome() {
  router.push('/')
}


</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
}

form {
  padding: 10px;
}

.input-box {
  position: relative;
  margin: 10px 0;
}

.input-box>input {
  background: transparent;
  border: none;
  border-bottom: solid 1px #ccc;
  padding: 20px 0px 5px 0px;
  font-size: 14pt;
  width: 100%;
}

input::placeholder {
  color: transparent;
}

input:placeholder-shown+label {
  color: #aaa;
  font-size: 14pt;
  top: 15px;

}

input:focus+label,
label {
  color: #8aa1a1;
  font-size: 10pt;
  pointer-events: none;
  position: absolute;
  left: 0px;
  top: 0px;
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
}

input:focus,
input:not(:placeholder-shown) {
  border-bottom: solid 1px #8aa1a1;
  outline: none;
}

input[type=submit] {
  background-color: #8aa1a1;
  border: none;
  color: white;
  border-radius: 5px;
  width: 100%;
  height: 35px;
  font-size: 14pt;
  margin-top: 100px;
}

#forgot {
  text-align: right;
  font-size: 12pt;
  color: rgb(164, 164, 164);
  margin: 10px 0px;
}

.login-pop {
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.logo {
  display: flex;
  justify-content: center;


}
</style>
