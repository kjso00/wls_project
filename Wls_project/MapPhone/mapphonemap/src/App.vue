<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body {
    font-family: 'IBM Plex Sans KR', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.total {
    border: 1px solid;
    background-color: #f0f0f0;
    /* 박스 배경 색상 */
    width: 800px;
    margin: 0 auto;
    /* padding: 20px; */
    /* 내부 여백 */
    border-radius: 10px;
    /* 모서리 둥글게 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    /* 그림자 효과 */
    height: 100vh;
    /* 박스 높이 설정 */
    box-sizing: border-box;
}

header {
    background: -webkit-linear-gradient(right,  #f7a061, #dc2a2a);
    border-radius: 10px 10px 0 0;
    height: 85px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nav-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: relative;
  
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    height: 40px;
    margin-right: 10px;
}

.login {
    display: flex;
    align-items: center;
    
}

.login a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
    background-color: #ffffff;
    color: #ff007f;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    
}

.login a:hover {
    background-color: #ff007f;
    color: #ffffff;
}

.right-section {
    display: flex;
    align-items: center;
    justify-content: flex-end; /* 헤더 오른쪽에 정렬되도록 수정 */
    width: 80%; /* 헤더의 80%의 너비를 차지하도록 설정 */
    
}

.location {
    display: flex;
    align-items: center;
    color: #ffffff;
    margin : 5px 10px 0 0;
}

.location img {
    height: 20px;
    margin-right: 5px;
    margin-left: 5px;
}

.search-container {
    width: 100%;
    margin-top: 5px;
    display: flex;
    justify-content: center;
}

.search-box {
    position: relative;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 80%;
    max-width: 100%;
    padding: 0px 0px;
    height: 70%;
   
}

.search-icon-box {
    position: absolute;
    left: 80px;
    top: 75px;
    border: 1px solid #ccc;
    transform: translateY(-50%);
}

.search-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
   
}

.search-icon img {
    height: 43px;
    width: 50px;
    border: 1px solid;
    background-color: white;
    margin-top: 12px;
    border-radius: 20%;
   
}

.search-box img {
    height: 20px;
    margin-right: 10px;
}

.search-box input[type="text"] {
    
    border: none;
    outline: none;
    width: calc(100% - 50px); /* 아이콘의 크기만큼 너비를 줄입니다. */
    padding: 10px;
    border-radius: 20px;
}
.search-box .clear {
    color: #ff007f;
    text-decoration: none;
    font-size: 20px;
    margin-right: 10px;
}

.search-box .button {
    background-color: #fcfbf9;
    color: black;
    border: none;
    padding: 10px 17px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: bold;
    font-size: 12px;

    display: inline-block;
   
    transition: background-color 0.3s ease;
    height: 60%;
    
}
.search-box .button:hover {
    background-color: #e68900;
}


/* 입력 창과 버튼 스타일 */
.input {
    text-align: right;
    padding: 10px 10px;
}

.input input[type="text"] {
    border-radius: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 70%;
    box-sizing: border-box;
}

.input .button {
    background-color: #1100ffad;
    color: #ffffff;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 20px;
    transition: background-color 0.3s ease;
}

.input .button:hover {
    background-color: #0a00dd;
    border: 1px solid #0a00dd;
}

.input-container {
    text-align: center;
}

.button {
    /* padding: 10px 20px; */
    background-color: #1100ffad;
    color: #ffffff;
    border: none;
    cursor: pointer;
}

.main-container {
    margin-top: 20px;
    margin-bottom: 10px;
    height: 70vh;
    padding: 10px 10px;
}

/* 이미지 사이즈 조정 */
.sub-container div a img {
    width: 50%;
    /* 이미지 너비 */
    height: auto;
    /* 높이 자동 조정 */
    padding: 10px;
}

/* 이미지 간격 조정 */
.first a {
    display: flex;
    justify-content: space-around;
    margin: 15px 0;
    border: 1px solid #f7a061;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    
}

.second a {
    display: flex;
    justify-content: space-around;
    margin: 15px 0;
    border: 1px solid #f7a061;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.third a {
    display: flex;
    justify-content: space-around;
    margin: 15px 0;
    border: 1px solid #f7a061;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.sub-container div {
    display: flex;
    justify-content: space-around;
    /* 이미지들을 가운데 정렬하고 간격을 주기 위해 */
    margin-bottom: auto;
    /* 그리드 아래 여백 */
    /* margin-left: 60px;
    margin-right: 10px; */
}

/* 컨테이너 간 간격 조정 */
.sub-container {
    margin-top: auto;
    /* 컨테이너 위 여백 */
    margin-left: auto;
    margin-right: auto;
}

/* Footer 스타일 */
footer {
    border-radius: 0 0 10px 10px;
    background: -webkit-linear-gradient(right,  #f7a061, #dc2a2a);
    padding: 15px;
    text-align: center;
}

/* Footer 네비게이션바 스타일 */
.footer-nav {
    display: flex;
    justify-content: space-around;
}

.footer-nav a {
    color: #fff;
    text-decoration: none;
    padding: 10px;
}

.sub-container:hover {
    background-color: #e0e0e0;
    transition: background-color 0.3s ease; 

}

.sub-container div a {
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.sub-container div a:hover {
    transform: scale(1.1);
    background-color: #f7bcbc;
    border-radius: 10px;
}




</style>
