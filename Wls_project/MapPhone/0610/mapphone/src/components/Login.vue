<template>
    <div class="telephone-directory">
      <div class="header-box">
        Telephone Directory
      </div>
      <div class="wrapper">
        <div class="title-text">
          <div class="title" :class="{ 'login': activeForm === 'login', 'signup': activeForm === 'signup' }" @click="activateLoginOrSignup">
            {{ activeForm.toUpperCase() }}
          </div>
        </div>
        <div class="form-container">
          <div class="slide-controls">
            <input type="radio" name="slide" id="login" v-model="activeForm" value="login">
            <input type="radio" name="slide" id="signup" v-model="activeForm" value="signup">
            <label for="login" class="slide login">LOGIN</label>
            <label for="signup" class="slide signup">SIGNUP</label>
            <div class="slider-tab"></div>
          </div>
          <div class="form-inner">
            <form action="#" class="login" v-if="activeForm === 'login'" @submit.prevent="handleLogin">
              <div class="field">
                <input type="text" v-model="loginData.username" placeholder="ID" required>
              </div>
              <div class="field">
                <input type="password" v-model="loginData.password" placeholder="Password" required>
              </div>
              <div class="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              <div class="field btn">
                <div class="btn-layer"></div>
                <input type="submit" value="Login">
              </div>
            </form>
            <form action="#" class="signup" v-else @submit.prevent="handleSignup">
              <div class="field">
                <input type="text" placeholder="ID" v-model="signupData.username" required>
              </div>
              <div class="field">
                <input type="password" placeholder="Password" v-model="signupData.password" required>
              </div>
              <div class="field">
                <input type="password" placeholder="Confirm Password" v-model="signupData.Confirm_password" required>
              </div>
              <div class="field btn">
                <div class="btn-layer"></div>
                <input type="submit" value="Sign Up">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import users from "../assets/users.json"; // JSON 파일 불러오기
  import "../css/login.css";
  
  export default {
    data() {
      return {
        activeForm: 'login',
        loginData: {
          username: '',
          password: ''
        },
        signupData: {
          username: '',
          password: '',
          Confirm_password: ''
        }
      };
    },
    methods: {
      activateLogin() {
        this.activeForm = 'login';
      },
      activateSignup() {
        this.activeForm = 'signup';
      },
  
      // 로그인 처리
      handleLogin() {
        const user = users.find(
          user =>
            user.username === this.loginData.username &&
            user.password === this.loginData.password
        );
  
        if (user) {
          // 로그인 성공 시 메인 페이지로 이동
          this.$router.push('/main');
        } else {
          alert('Invalid username or password');
        }
      },
      handleSignup() {
        // 회원가입 처리 로직 추가
      },
      
      signupNow() {
        this.activateSignup(); // 회원가입 폼 활성화
      }
    }
  };
  </script>
  
  
  <style scoped>
  /* 스타일 코드 */
  </style>
  