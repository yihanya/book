<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-04-03 13:01:44
 * @LastEditTime: 2021-06-01 21:35:00
 * @FilePath: \vuebook\src\components\Main_Booksearch.vue
-->
<template>
    <div class="main_BookMall">
        <BookList></BookList>
        <br />
    </div>
</template>

<script>
import Head from '../components/My_Book_List/Head.vue';
import NodeBook from './Book_Mall/NodeBook.vue';
import FootBox from './Book_Mall/FootBox.vue';
import BookList from './Book_Mall/BooksList2';
export default {
    components: {
        NodeBook,
        Head,
        FootBox,
        BookList,
    },
    data() {
        return {
            imgList: [
                {
                    url: require('../assets/img/imglist/1.jpeg'),
                },
                {
                    url: require('../assets/img/imglist/2.jpeg'),
                },
                {
                    url: require('../assets/img/imglist/3.jpeg'),
                },
                {
                    url: require('../assets/img/imglist/4.jpeg'),
                },
            ],
        };
    },
};
</script>

<style lang="scss"></style>
