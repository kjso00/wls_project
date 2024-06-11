import { ref, reactive } from 'vue';

const state = reactive({
    favoritePlaces: []
});

const addToFavorites = (place) => {
    state.favoritePlaces.push(place);
};

const removeFromFavorites = (index) => {
    state.favoritePlaces.splice(index, 1);
};

export default {
    state,
    addToFavorites,
    removeFromFavorites
};
