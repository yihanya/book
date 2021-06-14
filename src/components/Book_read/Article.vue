<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-04-19 18:38:32
 * @LastEditTime: 2021-06-03 17:03:33
 * @FilePath: \vuebook\src\components\Book_read\Article.vue
-->

<template>
    <div class="Book-Article-box">
        <div class="Article-box">
            <a name=""></a>
            <br />
            <h2 class="wzbt">{{ book.name }}</h2>
            <div class="txthtml" v-html="book.content"></div>
        </div>
        <el-button @click="toch(book.id)" class="like" type="danger" icon="el-icon-star-off" circle></el-button>
        <div class="btns">
            <input @click="Previous()" type="button" value="上 一 章" class="btni" />
            <input @click="drawer = true" type="button" value="目 录" class="btni" />
            <input @click="Next()" type="button" value="下 一 章" class="btni" />
        </div>
        <el-drawer class="wzml-box" @closed="td" title="目录" size="340px" :visible.sync="drawer" :direction="direction">
            <div class="wzml">
                <ul class="cf">
                    <div class="cf-i" v-for="(booksDate, index) in chapter" :key="index">
                        <li class="chapter-i-box">
                            <a class="chapter-i" @click="readbook(booksDate.id)">{{ booksDate.name }}</a>
                        </li>
                    </div>
                </ul>
                <br />
            </div>
        </el-drawer>
    </div>
</template>

<script>
import { GetChapterAPI, GetChaptersAPI, SetContextApi } from '../../request/api';
import { Previous_chapter, Next_chapter } from '../../assets/js/utils/u.js';
export default {
    // props: ['book'],
    name: 'refresh',
    inject: ['reload'],
    data() {
        return {
            drawer: false,
            direction: 'ltr',
            chapter: [
                {
                    name: '再起荆南',
                    booksDate: [
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第二章 百练玄体道德典',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                    ],
                },
                {
                    name: '一品元身',
                    booksDate: [
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                    ],
                },
                {
                    name: '一品元身',
                    booksDate: [
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                        {
                            chapter_name: '第一章 兵解转世',
                        },
                    ],
                },
            ],
            book: {},
            chapterlen: 0,
        };
    },
    methods: {
        Next() {
            let id = Next_chapter(this.chapter, this.book.id);
            if (id == -1) {
                this.$notify({
                    title: '注意',
                    message: '已没有下一章',
                    type: 'warning',
                });
                return;
            }

            GetChapterAPI({
                id: id,
            }).then(response => {
                let app = document.getElementById('app');
                app.scrollTop = 0;
                this.book = response.data;
            });
        },
        Previous() {
            let id = Previous_chapter(this.chapter, this.book.id);
            if (id == -1) {
                this.$notify({
                    title: '注意',
                    message: '已没有上一章',
                    type: 'warning',
                });
                return;
            }
            GetChapterAPI({
                id: id,
            }).then(response => {
                let app = document.getElementById('app');
                app.scrollTop = 0;
                this.book = response.data;
            });
        },
        td() {
            console.log();
            let app = document.getElementById('app');
            app.scrollTop = 0;
        },
        readbook(id) {
            GetChapterAPI({
                id: id,
            }).then(response => {
                this.book = response.data;
                this.drawer = false;
            });
        },
        toch(id) {
            var is = this.$route.query.bookshelfId;
            if (is) {
                SetContextApi({
                    chapterId: id,
                    bookId: this.$route.query.bookId,
                    bookshelfId: this.$route.query.bookshelfId,
                }).then(res => {
                    console.log(res.data);
                });
            } else {
                this.$notify({
                    title: '错误',
                    message: '错误:不是从书架进入',
                    type: 'error',
                });
            }
        },
    },

    created: function() {
        //所有章节
        GetChapterAPI({
            id: this.$route.query.chapterId,
        }).then(response => {
            this.book = response.data;
        });

        GetChaptersAPI({
            bookId: this.$route.query.bookId,
        }).then(response => {
            this.chapter = response.data;
            this.chapterlen = this.chapter.length;
        });
    },
};
</script>

<style lang="scss">
/*1.显示滚动条：当内容超出容器的时候，可以拖动：*/
.el-drawer__body {
    overflow: auto;
    /* overflow-x: auto; */
}

/*2.隐藏滚动条，太丑了*/
.el-drawer__container ::-webkit-scrollbar {
    display: none;
}
</style>

<style scoped lang="scss">
.like {
    position: fixed;
    bottom: 20px;
    right: 90%;
}
.txthtml {
    outline: none;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    background-color: #ffffff;
    padding: 5px 25px;
    font-size: 21px;
    white-space: pre-line;
}
.bt {
    margin-left: 20px;
}
.Book-Article-box {
    width: 1110px;
    margin: 40px 213px;
    // padding: 30px;
}
.Article-box {
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.wzbt {
    text-align: center;
}

.btns {
    margin-top: 20px;
    text-align: center;
}
.btni {
    width: 310px;
    height: 68px;
    margin: 0 10px;
    margin-top: 0px;
    background-color: #3e3d43;
    color: white;
    transition: all 0.5s;
    // border-radius: 5px;
    font-size: 25px;
    border: 0px;
}
.btni:hover {
    background-color: #ac3030;
    color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 95, 95);
    font-weight: bold;
    border: none;
}
.btni:focus {
    outline: none;
}
</style>
