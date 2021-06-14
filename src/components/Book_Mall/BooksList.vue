<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-03-05 19:01:40
 * @LastEditTime: 2021-06-04 09:14:22
 * @FilePath: \vuebook\src\components\Book_Mall\BooksList.vue
-->
<template>
    <div class="book_list">
        <div class="boxs">
            <div class="book_list_box">
                <div v-for="(book, index) in books" :key="index" class="booklist">
                    <NodeBook :book="book"></NodeBook>
                </div>
            </div>
        </div>
        <div class="block">
            <el-pagination v-if="bookslen" @current-change="toye" layout="prev, pager, next" :total="bookslen" :page-size="9"></el-pagination>
        </div>
    </div>
</template>
<script>
import Head from '../My_Book_List/Head';
import NodeBook from './NodeBook.vue';
import FootBox from './FootBox.vue';
import CarouselMap from './CarouselMap.vue';
import { GetBooksAPI, GetBook2API } from '../../request/api';
export default {
    components: {
        NodeBook,
        CarouselMap,
        Head,
        FootBox,
    },
    data() {
        return {
            bookslen: 1,
            books: [],
        };
    },
    created: function() {
        // console.log(sessionStorage.getItem('mainclass'));
        GetBooksAPI({
            ye: '1',
            categories: sessionStorage.getItem('mainclass'),
        }).then(response => {
            this.books = response.data;
        });

        GetBook2API({
            review: '1',
        }).then(res => {
            this.bookslen = res.data.length;
        });
    },
    methods: {
        toye(val) {
            GetBooksAPI({
                ye: val,
                categories: sessionStorage.getItem('mainclass'),
            }).then(response => {
                this.books = response.data;
            });
        },
    },
};
</script>
<style scoped lang="scss">
.book_list_box {
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
    height: 432px;
}
.booklist {
    max-height: 145px;
}
.btns_box {
    display: flex;
    background-color: #3e3d43;
    margin-left: 4%;
    margin-right: 4%;
}
.btns {
    width: 100%;
    margin-left: 4%;
}

.bq {
    margin-right: 1%;
    font-size: 1rem;
    color: #d8d8d8;
}
.bq:hover {
    color: #ac3030;
}
.boxs {
    margin-left: 4%;
    width: 92%;
    height: 70%;
    background-color: #f7f6f2;
}
.block {
    // width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1%;
}
</style>
