<template>
    <div class="wrapper">
        <div class="title-text">
            <div class="title login">LOGIN</div>
            <div class="title signup">SIGNUP</div>
        </div>
        <div class="form-container">
            <div class="slide-controls">
                <input type="radio" name="slide" id="login" checked>
                <input type="radio" name="slide" id="signup">
                <label for="login" class="slide login">LOGIN</label>
                <label for="signup" class="slide signup">SIGNUP</label>
                <div class="slider-tab"></div>
            </div>
            <div class="form-inner">
                <form @submit.prevent="login">
                    <div class="field">
                        <input type="text" placeholder="ID" v-model="userId" required>
                    </div>
                    <div class="field">
                        <input type="password" placeholder="Password" v-model="password" required>
                    </div>
                    <div class="pass-link">
                        <a href="#">Forgot password?</a>
                    </div>
                    <div class="field btn">
                        <div class="btn-layer"></div>
                        <input type="submit" value="Login">
                    </div>
                    <div class="signup-link">
                        Not a member? <a @click.prevent="switchToSignup">Signup now</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userId: '',
            password: ''
        };
    },
    methods: {
        login() {
            localStorage.setItem('userId', this.userId);
            this.$router.push('/index');
        },
        switchToSignup() {
            // Signup form switch logic
        }
    }
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Seymour One", sans-serif;
    font-weight: 400;
    font-style: normal;
}


html,
body {
    display: grid;
    height: 100%;
    width: 100%;
    place-items: center;
    background: -webkit-linear-gradient(right, #f7a061, #dc2a2a);
    animation: moveBackground 30s infinite linear;
}

::selection {
    background: #fa4299;
    color: #fff;
}

.header-box {
    margin-top: 20px;
    max-width: 500px;
    width: 60%;
    padding: 12px;
    background: #fff;
    border-bottom: 1px solid lightgrey;
    text-align: center;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 50%;
    /* 왼쪽 위치를 50%로 설정 */
    transform: translateX(-50%);
    /* 가로 축을 기준으로 가운데 정렬 */
    border-radius: 30px;
    font-size: 30px;
}

.wrapper {
    overflow: hidden;
    max-width: 450px;
    background: #fff;
    padding: 30px;
    border-radius: 30px;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
}

.wrapper .title-text {
    display: flex;
    width: 200%;
}

.wrapper .title {
    width: 50%;
    font-size: 35px;
    font-weight: 600;
    text-align: center;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .title.login {
    margin-top: 20px;
    /* 원하는 여백 크기로 설정, 예: 20px */
    text-align: center;
}

.wrapper .slide-controls {
    position: relative;
    display: flex;
    height: 50px;
    width: 100%;
    overflow: hidden;
    margin: 30px 0 10px 0;
    justify-content: space-between;
    border: 1px solid lightgrey;
    border-radius: 5px;
}

.slide-controls .slide {
    height: 100%;
    width: 100%;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    line-height: 48px;
    cursor: pointer;
    z-index: 1;
    transition: all 0.6s ease;
}

.slide-controls label.signup {
    color: #000;
}

.slide-controls .slider-tab {
    position: absolute;
    height: 100%;
    width: 50%;
    left: 0;
    z-index: 0;
    border-radius: 5px;
    background: -webkit-linear-gradient(left, #f7a061, #dc2a2a);
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

input[type="radio"] {
    display: none;
}

#signup:checked~.slider-tab {
    left: 50%;
}

#signup:checked~label.signup {
    color: #fff;
    cursor: default;
    user-select: none;
}

#signup:checked~label.login {
    color: #000;
}

#login:checked~label.signup {
    color: #000;
}

#login:checked~label.login {
    cursor: default;
    user-select: none;
}

.wrapper .form-container {
    width: 100%;
    overflow: hidden;
}

.form-container .form-inner {
    display: flex;
    width: 200%;
}

.form-container .form-inner form {
    width: 50%;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-radius: 30px;
}

.form-inner form .field {
    height: 50px;
    width: 100%;
    margin-top: 20px;
}

.form-inner form .field input {
    height: 100%;
    width: 100%;
    outline: none;
    padding-left: 15px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    border-bottom-width: 2px;
    font-size: 17px;
    transition: all 0.3s ease;
}

.form-inner form .field input:focus {
    border-color: #fc83bb;
    /* box-shadow: inset 0 0 3px #fb6aae; */
}

.form-inner form .field input::placeholder {
    color: #999;
    transition: all 0.3s ease;
}

form .field input:focus::placeholder {
    color: #b3b3b3;
}

.form-inner form .pass-link {
    margin-top: 5px;
}

.form-inner form .signup-link {
    text-align: center;
    margin-top: 30px;
}

.form-inner form .pass-link a,
.form-inner form .signup-link a {
    color: #fa4299;
    text-decoration: none;
}

.form-inner form .pass-link a:hover,
.form-inner form .signup-link a:hover {
    text-decoration: underline;
}

form .btn {
    height: 50px;
    width: 100%;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
}

form .btn .btn-layer {
    height: 100%;
    width: 300%;
    position: absolute;
    left: -100%;
    background: -webkit-linear-gradient(right, #da8d59, #dc2a2a, #fc83bb);
    border-radius: 5px;
    transition: all 0.4s ease;
    ;
}

form .btn:hover .btn-layer {
    left: 0;
}

form .btn input[type="submit"] {
    height: 100%;
    width: 100%;
    z-index: 1;
    position: relative;
    background: none;
    border: none;
    color: #fff;
    padding-left: 0;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
}
</style>