<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-10 08:33:50
 * @LastEditTime: 2021-06-02 19:29:05
 * @FilePath: \vuebook\src\components\Book_details\comment.vue
-->
<template>
    <div class="volume-box">
        <input @click="toml()" type="button" value="评 论" class="btn_ml" />
        <div class="pl-box" v-show="this.$store.state.Book_pl">
            <div class="txt-box">
                <textarea v-html="texts" v-model="texts" class="text-ss"></textarea>
                <div class="btns">
                    <input @click="addcom()" type="button" value="提 交" class="btn_logoin" />
                    <input @click="log()" type="button" value="取 消" class="btn_logoin" />
                </div>
            </div>

            <div class="text-main" v-for="(comment, index) in commentDate" :key="index">
                <div class="comment-i-box">
                    <div class="comment-head">
                        <el-avatar class="imgb" shape="circle" :size="60" :src="headurl + comment.head"></el-avatar>
                        <div class="comment-username">{{ comment.userName }}</div>
                    </div>
                    <div class="comment-text">
                        <div class="comment">{{ comment.content }}</div>
                        <div class="time">{{ comment.time }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { AddComAPI, GetAllCommentAPI, GetUserAPI } from '../../request/api';
export default {
    name: 'refresh',
    inject: ['reload'],
    data() {
        return {
            texts: '',
            commentDate: [],
        };
    },
    created: function() {
        GetAllCommentAPI({
            bookId: this.$route.query.bookId,
        }).then(res => {
            const data = res.data;
            for (let i = 0; i < data.length; i++) {
                data[i].userName = null;
                data[i].head = null;
            }
            for (let i = 0; i < data.length; i++) {
                GetUserAPI({
                    userId: data[i].userId,
                }).then(response => {
                    data[i].userName = response.data.userName;
                    data[i].head = response.data.head;
                });
            }

            this.commentDate = data;
        });
    },
    methods: {
        toml() {
            this.$store.commit('saveBook_pl', !this.$store.state.Book_pl);
            this.$store.commit('saveBook_ml', !this.$store.state.Book_ml);
        },

        addcom() {
            AddComAPI({
                bookId: this.$route.query.bookId,
                userId: JSON.parse(sessionStorage.getItem('user')).userId,
                content: this.texts,
            }).then(res => {
                this.$notify({
                    title: '评论',
                    message: '发表成功',
                    type: 'success',
                });
                this.reload();
            });
        },
    },
};
</script>
<style scoped lang="scss">
.time {
    color: rgb(175, 175, 175);
    font-size: 16px;
}
.comment-i-box {
    display: flex;
    min-height: 22vh;
}
.comment-username {
    font-size: 16px;
}
.comment-head {
    text-align: center;
}
.comment-text {
    width: 100%;
    margin-left: 2%;
}
.comment {
    min-height: 20vh;
    width: 98%;
    font-size: 16px;
    border: 1px solid #ac3030;
    border-radius: 4px;
    padding: 5px 10px;
    box-sizing: border-box;
    font-size: 21px;
}
.pl-box {
    width: 100%;
}
.txt-box {
    text-align: center;
    width: 100%;
    margin-top: 20px;
}
.btns {
    width: 74.9%;
    display: flex;
    flex-direction: row-reverse;
}
.text-ss {
    // margin-top: 4px;
    padding: 8px;
    resize: none;
    outline: none;
    width: 50%;
    height: 18vh;
    background-color: rgb(255, 255, 255);
    box-sizing: border-box;
}
.volume-box {
    margin: 10px 208px;
    width: 1120px;
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.volume {
    margin-bottom: 10px;
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
.text-main {
    margin-top: 60px;
    margin-left: 2%;
}
.btn_logoin {
    width: 120px;
    height: 35px;
    margin-left: 10px;
    margin-top: 0px;
    background-color: #3e3d43;
    color: white;
    transition: all 0.8s;
    border-radius: 0px;
    font-size: 16px;
    border: 0px;
}

.btn_logoin:hover {
    background-color: #ac3030;
    color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 95, 95);
    font-weight: bold;
    border-radius: 14px;
    border: none;
}

.btn_logoin:focus {
    outline: none;
}
</style>
