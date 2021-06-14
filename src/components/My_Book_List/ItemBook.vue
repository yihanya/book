<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-03-08 08:25:41
 * @LastEditTime: 2021-06-09 22:32:05
 * @FilePath: \vuebook\src\components\My_Book_List\ItemBook.vue
-->
<template>
    <div class="ItemBook" style="overflow:hidden">
        <img class="book-img" @click="goto()" :src="headurl + book.img" />
        <div class="book-name" v-if="book">
            {{ book.bookName }}
        </div>
        <br />
    </div>
</template>
<script>
import { ToContextApi, GetChaptersAPI } from '../../request/api';
export default {
    props: ['book', 'bookshelfId'],
    data() {
        return {};
    },
    methods: {
        goto() {
            if (this.$route.name == 'Author') {
                this.$router.push({
                    name: 'AuthorBook',
                    query: {
                        bookId: this.book.bookId,
                    },
                });
            }
            if (this.$route.name == 'mybook') {
                ToContextApi({
                    bookshelfId: this.bookshelfId,
                    bookId: this.book.bookId,
                }).then(res => {
                    if (res.data == 0) {
                        GetChaptersAPI({
                            bookId: this.book.bookId,
                        }).then(response => {
                            this.$router.push({
                                name: 'Reading',
                                query: {
                                    chapterId: response.data[0].id,
                                    bookId: this.book.bookId,
                                    bookshelfId: this.bookshelfId,
                                },
                            });
                        });
                    } else {
                        console.log(res.data.id);
                        GetChaptersAPI({
                            bookId: this.book.bookId,
                        }).then(response => {
                            this.$router.push({
                                name: 'Reading',
                                query: {
                                    chapterId: res.data.id,
                                    bookId: this.book.bookId,
                                    bookshelfId: this.bookshelfId,
                                },
                            });
                        });
                    }
                });
            }
        },
    },
    watch: {
        book: function(newValue) {
            // book = newValue;
            console.log(newValue);
        },
    },
    created: function() {
        console.log(this.book);
    },
};
</script>
<style scoped lang="scss">
.book-name {
    width: 90px;
    text-align: center;
    font-size: 16px;
}
.book-img {
    width: 90px;
    height: 120px;
}
</style>
