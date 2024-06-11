<template>
  <div class="container">
    <div class="total">
      <header class="navigation">
        <div class="first">
          <div class="logo">
          </div>
          <div class="gps">
            <div class="gpslocation">{{ location }}</div> <!-- 위치 표시 -->
            <div>
              <img src="https://img.icons8.com/?size=100&id=3723&format=png&color=000000" alt="gps">
            </div>
          </div>
        </div>
        <div class="second">
          <div class="search">
            <input type="text" placeholder="위치를 입력하세요" v-model="keyword">
            <button class="button" @click="search">검색</button>
          </div>
        </div>
      </header>

      <!-- 즐겨찾기 부분 -->

      <div class="favorites-container">
        <div class="favorite">
          <h3>즐겨찾기 목록</h3>
        </div>
        <ul class="favorites-list">
          <li v-for="(place, index) in favoritePlaces" :key="index" class="favorite-item">
            <div class="favorite-info">
              <strong>{{ place.place_name }}</strong>
              <p>{{ place.address_name }}</p>
              <p>{{ place.phone }}</p>
            </div>
            <button @click="removeFromFavorites(index)" class="remove-button">삭제</button>
          </li>
        </ul>
      </div>
      <!-- 풋터 영역 -->
      <footer>
        <nav class="bottom">
          <div class="bookmark" @click="togglePopup">
            <a href="#">
              <img src="https://img.icons8.com/ios/50/000000/bookmark-ribbon--v1.png" alt="즐겨찾기" style="width: 35px; height: 35px;">
            </a>
          </div>
          <div class="home">
            <RouterLink to="/main">
              <img src="https://img.icons8.com/ios/50/000000/home-page.png" alt="홈">
            </RouterLink>
          </div>
          <div class="logout">
            <RouterLink to="/">
              <img src="https://img.icons8.com/ios/50/000000/logout-rounded-left.png" alt="로그아웃">
            </RouterLink>
          </div>
        </nav>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import store from '../store';

const favoritePlaces = computed(() => store.state.favoritePlaces);

const removeFromFavorites = (index) => {
  store.removeFromFavorites(index);
};

</script>

<style scoped>
.favorite {
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
}

.favorites-container {
  height: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
}

.favorites-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.favorite-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #fff;
  border: 1px solid #000000;
  border-radius: 5px;
  width: 100%;
}

.favorite-info {
  flex: 1;
}

.favorite-info strong {
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
  color: #333;
}

.favorite-info p {
  margin: 0;
  color: #666;
}

.remove-button {
  padding: 5px 10px;
  background-color: #eb7062;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.remove-button:hover {
  background-color: #ff1900;
}
</style>
