<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-07 16:41:59
 * @LastEditTime: 2021-06-02 09:07:46
 * @FilePath: \vuebook\src\components\Book_details\Idex.vue
-->
<template>
    <div class="i-box">
        <div class="il">
            <img class="book_img" :src="headurl + book.img" />
        </div>
        <div class="ir">
            <div class="book-name">{{ book.bookName }}</div>
            <div class="book-nums">
                分类:
                <font class="nr">{{ book.categories }}</font>
                点赞:
                <font class="nr">{{ book.bookLike }}</font>
                状态:
                <font class="nr">{{ book.status }}</font>
            </div>
            <div class="book-introduce" v-html="book.detail"></div>
            <div class="book-btn">
                <input @click="palyreadbook()" type="button" value="开 始 阅 读" class="btn_logoin" />
                <input @click="addbookbtn = true" type="button" value="加 入 书 架" class="btn_logoin" />
                <input @click="addgood()" type="button" value="点 赞" class="btn_logoin" />
                <!-- <el-button type="danger" icon="iconfont icon-dianzan" class="dz"></el-button> -->
            </div>
        </div>
        <el-dialog title="加入书架" :visible.sync="addbookbtn" width="16%" center>
            <span>
                <el-select v-model="bookshelfId" placeholder="请选择">
                    <el-option
                        v-for="item in bookshelflist"
                        :key="item.bookshelfId"
                        :label="item.bookshelfName"
                        :value="item.bookshelfId"
                    ></el-option>
                </el-select>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delbookshelfbtn = false">取 消</el-button>
                <el-button type="primary" @click="Addbookshelf()">确 定</el-button>
            </span>
        </el-dialog>
        <!-- <el-divider class="divder"></el-divider> -->
    </div>
</template>

<script>
import { GetBookAPI, GetChaptersAPI, AddBookBookShelfAPI, GetUserBookShelfAPI, ModifyBookAPI } from '../../request/api';
export default {
    data() {
        return {
            addbookbtn: false,
            book: {},
            chapterlist: '',
            bookshelflist: [],
            bookshelfId: '',
        };
    },
    methods: {
        log: function() {
            alert(window.innerWidth);
        },
        Addbookshelf() {
            AddBookBookShelfAPI({
                bookId: this.$route.query.bookId,
                bookshelfId: this.bookshelfId,
            }).then(res => {
                this.$notify({
                    title: '添加到书架',
                    message: '添加成功成功',
                    type: 'success',
                });
            });
            this.addbookbtn = false;
        },
        palyreadbook() {
            GetChaptersAPI({
                bookId: this.$route.query.bookId,
            }).then(response => {
                this.$router.push({
                    name: 'Reading',
                    query: {
                        chapterId: response.data[0].id,
                        bookId: this.$route.query.bookId,
                    },
                });
            });
        },
        addgood() {
            this.book.bookLike = parseInt(this.book.bookLike) + 1;

            const bookFormData = new FormData();
            Object.keys(this.book).map(key => {
                bookFormData.append(key, this.book[key]);
            });

            ModifyBookAPI(bookFormData).then(response => {
                // alert('点赞成功');
            });
            this.dialogVisibleg = false;
        },
    },
    created: function() {
        //书籍详情
        GetBookAPI({
            bookId: this.$route.query.bookId,
        }).then(response => {
            this.book = response.data;
        });

        GetUserBookShelfAPI({
            userId: JSON.parse(sessionStorage.getItem('user')).userId,
        }).then(res => {
            this.bookshelflist = res.data;
        });
    },
};
</script>

<style scoped lang="scss">
body::-webkit-scrollbar {
    display: none;
}
.i-box {
    display: flex;
    flex-direction: row;
    width: 780px;
    height: 242px;
    background-color: #ffffff;
}
.book_img {
    width: 160px;
    height: 220px;
    margin-left: 10px;
    margin-top: 10px;
}
.il {
    width: 180px;
}
.ir {
    width: 400px;
}
.book-name {
    margin-left: 20px;
    font-size: 23px;
    color: rgb(0, 0, 0);
    font-weight: bold;
    margin-top: 5px;
}
.book-nums {
    width: 110%;
    padding-top: 8px;
    margin-left: 20px;
    font-size: 16px;
    color: rgb(80, 80, 80);
    // overflow-y: scroll;
    // overflow-x: hidden;
}
.book-introduce {
    margin-left: 20px;
    margin-top: 8px;
    font-size: 18px;
    height: 115px;
    width: 576px;
    overflow-y: auto;
    overflow-x: hidden;
}
.nr {
    color: #000;
    font-size: 17px;
    font-weight: bold;
}
.book-btn {
    margin-left: 10px;
    margin-top: 6px;
    width: 690px;
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
.dz {
    width: 60px;
    height: 40px;
    margin-left: 10px;
    margin-top: 0px;
}
.el-button--danger {
    background-color: #3e3d43;
    border-color: #ffffff;
    color: white;
    transition: all 0.8s;
    border-radius: 0px;
}
.el-button--danger:hover {
    background-color: #ac3030;
    color: rgb(255, 255, 255);
    border-radius: 14px;
    // border: 1px solid rgb(95, 95, 95);
    // font-weight: bold;
    // border: none;
}
</style>
