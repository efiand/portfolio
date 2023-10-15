import Vue from 'vue';
import Vuex from 'vuex';
import getDataFromApi from '@/services/api.js';

Vue.use(Vuex);

export default new Vuex.Store({
	actions: {
		async getData({ commit }) {
			const storedData = window.sessionStorage.getItem('data');
			if (storedData) {
				return commit('setData', JSON.parse(storedData));
			}

			try {
				const data = await getDataFromApi();

				if (data.error) {
					return commit('setError', data.error);
				}

				commit('setData', data);
			} catch (error) {
				commit('setError', error);
			}
		}
	},
	mutations: {
		setData(state, data) {
			state.appData = data;
			window.sessionStorage.setItem('data', JSON.stringify(data));
		},
		setError(state, error) {
			state.error = error;
		}
	},
	state: {
		appData: null,
		error: null
	}
});
