<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-04-03 13:01:44
 * @LastEditTime: 2021-05-28 10:40:17
 * @FilePath: \vuebook\src\components\Main_BookList.vue
-->
<template>
    <bookshelf></bookshelf>
</template>

<script>
import heads from '../components/My_Book_List/Head.vue';
import bookshelf from '../components/My_Book_List/Bookshelf.vue';
import FootBox from './Book_Mall/FootBox.vue';
export default {
    components: {
        heads,
        bookshelf,
        FootBox,
    },
};
</script>

<style lang="scss">
.main_BookList {
    // background-color: #f7f7f7 !important;
    height: 100% !important;
}
.el-tabs--border-card > .el-tabs__header {
    // background-color: #ffffff !important;
    border-bottom: 1px solid #474d57 !important;
    margin: 0;
}
</style>
