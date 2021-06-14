<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-10 08:33:50
 * @LastEditTime: 2021-06-02 13:19:33
 * @FilePath: \vuebook\src\components\Book_details\cate.vue
-->
<template>
    <div class="volume-box">
        <input @click="toml()" type="button" value="目 录" class="btn_ml" />
        <div class="volume" v-show="this.$store.state.Book_ml">
            <ul class="cf">
                <div class="cf-i" v-for="(booksDate, index) in chapter" :key="index">
                    <li class="chapter-i-box">
                        <a class="chapter-i" @click="readbook(booksDate.id)">{{ booksDate.name }}</a>
                    </li>
                </div>
            </ul>
            <br />
        </div>
    </div>
</template>

<script>
import { GetChaptersAPI } from '../../request/api';
export default {
    data() {
        return {
            activeNames: ['1'],
            chapter: '',
        };
    },
    methods: {
        readbook(id) {
            this.$router.push({
                name: 'Reading',
                query: {
                    chapterId: id,
                    bookId: this.$route.query.bookId,
                },
            });
        },
        toml() {
            this.$store.commit('saveBook_pl', !this.$store.state.Book_pl);
            this.$store.commit('saveBook_ml', !this.$store.state.Book_ml);
        },
    },
    created: function() {
        //所有章节
        GetChaptersAPI({
            bookId: this.$route.query.bookId,
            review: 1,
        }).then(response => {
            this.chapter = response.data;
        });
    },
};
</script>
<style scoped lang="scss">
.volume-box {
    margin: 10px 208px;
    width: 1120px;
    // display: flex;
    // flex-direction: column;
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.volume {
    margin-bottom: 10px;
}
.cf {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-around;
    padding-left: 20px;
    margin: 5px 0px;
    width: 100%;
}
.chapter-i-box {
    margin-top: 12px;
    width: 340px;
}
.bt {
    padding-left: 20px;
    margin-top: 15px;
    margin-bottom: 0px;
}
.el-divider--horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin: 0;
    margin-top: 4px;
}
.el-collapse-item__header {
    text-align: center;
}

.btn_ml {
    width: 1120px;
    height: 40px;
    margin-top: 0px;
    background-color: #ffffff;
    border: 5px solid #5a5a5a;
    color: rgb(0, 0, 0);
    transition: all 0.8s;
    border-radius: 0px;
    font-size: 18px;
    border: 0px;
}

.btn_ml:hover {
    background-color: #ac3030;
    color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 95, 95);
    font-weight: bold;
    border-radius: 14px;
    border: none;
}

.btn_ml:focus {
    outline: none;
}

.comment-box {
    width: 1120px;
}
.comment-i {
    margin-top: 20px;
    width: 100%;
    min-height: 140px;
    display: flex;
    flex-direction: row;
    margin-left: 0px;
}
.comment-i-head {
    margin-left: 20px;
}
.commenti-name {
    font-size: 12px;
}
.comment-i-text {
    margin-left: 25px;
    width: 88%;
}
.comment-txt {
    min-height: 100px;
    width: 100%;
    font-size: 16px;
    border: 1px solid #ac3030;
    border-radius: 4px;
    padding: 3px 8px;
}
.comment-i-time {
    margin-top: 4px;
    font-size: 8px;
    color: #bebebe;
}

.text-pl {
    margin: 20px 290px;
    // margin-top: 4px;
    resize: none;
    outline: none;
    width: 540px;
    height: 120px;
}
</style>
