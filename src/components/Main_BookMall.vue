<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-04-03 13:01:44
 * @LastEditTime: 2021-06-04 01:20:11
 * @FilePath: \vuebook\src\components\Main_BookMall.vue
-->
<template>
    <div class="main_BookMall">
        <CarouselMap :imgList="imgList"></CarouselMap>
        <BookList></BookList>
        <br />
    </div>
</template>

<script>
import Head from '../components/My_Book_List/Head.vue';
import NodeBook from './Book_Mall/NodeBook.vue';
import FootBox from './Book_Mall/FootBox.vue';
import CarouselMap from './Book_Mall/CarouselMap.vue';
import BookList from './Book_Mall/BooksList';
export default {
    components: {
        NodeBook,
        CarouselMap,
        Head,
        FootBox,
        BookList,
    },
    data() {
        return {
            imgList: [
                {
                    url: require('../assets/img/imglist/1.jpeg'),
                    id: '45',
                },
                {
                    url: require('../assets/img/imglist/2.jpeg'),
                    id: '47',
                },
                {
                    url: require('../assets/img/imglist/3.jpeg'),
                    id: '48',
                },
                {
                    url: require('../assets/img/imglist/4.jpeg'),
                    id: '49',
                },
            ],
        };
    },
};
</script>

<style lang="scss"></style>
