/*
 * @name: 易寒鸦
 * @Description:
 * @Date: 2021-03-26 14:30:03
 * @LastEditTime: 2021-06-03 15:37:32
 * @FilePath: \vuebook\src\store\index.js
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        Book_ml: true,
        Book_pl: false,
    },

    mutations: {
        saveBook_ml(state, Book_ml) {
            state.Book_ml = Book_ml;
        },
        saveBook_pl(state, Book_pl) {
            state.Book_pl = Book_pl;
        },
    },
});
