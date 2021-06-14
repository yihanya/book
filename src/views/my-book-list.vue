<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-03-04 19:12:36
 * @LastEditTime: 2021-04-22 08:48:13
 * @FilePath: \vuebook\src\views\main.vue
-->
<template>
    <main_-book-list></main_-book-list>
</template>
<script>
import main_BookList from '../components/Main_BookList.vue';
export default {
    components: {
        main_BookList,
    },
    data() {
        return {};
    },
    methods: {
        //  commit(){
        //     this.$store.commit("setUserInfo",this.info)
        //     this.userInfo=this.$store.getters.getUserInfo;
        //  }
    },
};
</script>
<style scoped lang="scss"></style>
