<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-22 19:05:38
 * @LastEditTime: 2021-05-27 13:52:05
 * @FilePath: \vuebook\src\components\Main.vue
-->
<template>
    <div>
        <Head></Head>
        <div class="main-box"><router-view></router-view></div>
        <FootBox></FootBox>
    </div>
</template>

<script>
import Head from '../components/My_Book_List/Head.vue';
import FootBox from './Book_Mall/FootBox.vue';
export default {
    components: {
        Head,
        FootBox,
    },
    data() {
        return {};
    },
    created() {},
    methods: {},
};
</script>

<style lang="scss" scoped>
.main-box {
    min-height: 100vh;
}
</style>
