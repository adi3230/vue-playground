import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

const SET_CHARACTERS = 'SET_CHARACTERS';

const state = {
	characters: null
}

const getters = {
	getCharacters(state) {
		return state.characters;
	}
}

const mutations = {
	SET_CHARACTERS(state, characters) {
		state.characters = characters.results;
	}
}

const actions = {
	fetchCharacters({ commit }) {
		Axios.get('https://rickandmortyapi.com/api/character/')
				.then(characters => {
					commit(SET_CHARACTERS, characters.data);
				});
	}

}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store
