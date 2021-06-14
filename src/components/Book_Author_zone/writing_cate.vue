<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-17 19:45:25
 * @LastEditTime: 2021-06-02 17:32:09
 * @FilePath: \vuebook\src\components\Book_Author_zone\writing_cate.vue
-->
<template>
    <div class="writing-cate-box">
        <div class="cate-title">
            <h2 class="book-name">{{ book.bookName }}</h2>
            <div class="cate-btns">
                <input @click="dialogVisibleg = true" type="button" value="更 换 封 面" class="btn" />
                <input @click="addch(-1)" type="button" value="添 加 章 节" class="btn" />
            </div>
        </div>

        <div class="volume-box">
            <ul class="cf">
                <div class="cf-i" v-for="(booksDate, index) in chapter" :key="index">
                    <li class="chapter-i-box">
                        <a class="chapter-i" @click="addch(booksDate.id)">{{ booksDate.name }}</a>
                    </li>
                </div>
            </ul>
        </div>
        <!-- 对话框 -->
        <el-dialog title="更换封面" :visible.sync="dialogVisibleg">
            <div class="img-box"></div>
            <div class="imghead">
                <img class="imgbox" :src="img" />
                <ImgCutter rate="23:30" v-on:cutDown="cutDown"></ImgCutter>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisibleg = false">取 消</el-button>
                <el-button type="primary" @click="Modifythecover()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import ImgCutter from 'vue-img-cutter';
import { GetChaptersAPI, GetBookAPI, ModifyBookAPI } from '../../request/api';
import axios from 'axios';
export default {
    components: {
        ImgCutter,
    },
    data() {
        return {
            img: '',

            dialogVisible: false,
            dialogVisibleg: false,
            chapter: [{}],
            book: {},
        };
    },
    created: function() {
        //所有章节
        GetChaptersAPI({
            bookId: this.$route.query.bookId,
        }).then(response => {
            this.chapter = response.data;
        });
        //获取书籍
        GetBookAPI({
            bookId: this.$route.query.bookId,
        }).then(response => {
            console.log(response.data);
            this.book = response.data;
        });
    },
    methods: {
        addch(id) {
            let x = 0;
            if (id == -1) x = -1;
            else x = id;

            this.$router.push({
                name: 'content',
                query: {
                    bookId: this.$route.query.bookId,
                    Id: x,
                },
            });
        },
        cutDown(date) {
            this.book.file = date.file;
            this.img = date.dataURL;
        },
        Modifythecover() {
            const bookFormData = new FormData();
            Object.keys(this.book).map(key => {
                bookFormData.append(key, this.book[key]);
            });

            ModifyBookAPI(bookFormData).then(response => {
                this.$notify({
                    title: '成功',
                    message: '修改成功',
                    type: 'success',
                });
                this.$router.push('/main/Author');
            });
            this.dialogVisibleg = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.imgbox {
    width: 115px;
    height: 150px;
}
.imghead {
    text-align: center;
}
.writing-cate-box {
    width: 100%;
    height: 100%;
    margin-top: 0px;
    padding-top: 100px;
}
.book-name {
    margin: 0;
}
.cate-title {
    width: 1120px;
    margin: 5px 208px;
    display: flex;
    justify-content: space-between;
}
.el-divider--horizontal {
    margin: 0;
}
.booklist {
    width: 1120px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: rgb(255, 255, 255);
    margin: 0px 208px;
    padding: 0px;
    padding-bottom: 0px;
    display: flex;
}

.ItemBook {
    margin: 5px 10px;
    width: 120px;
}

.btn {
    width: 110px;
    height: 40px;
    margin-left: 10px;
    margin-top: 0px;
    background-color: #3e3d43;
    color: white;
    transition: all 0.8s;
    border-radius: 0px;
    font-size: 18px;
    border: 0px;
}

.btn:hover {
    background-color: #ac3030;
    color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 95, 95);
    font-weight: bold;

    border: none;
}

.btn:focus {
    outline: none;
}

.volume {
    padding-top: 10px;
}
.volume-box {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: rgb(255, 255, 255);
    margin: 0px 208px;
    width: 1120px;
}
.cf {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-around;
    padding: 0;
    margin: 0 auto;
    width: 100%;
}
.chapter-i-box {
    margin-top: 12px;
    width: 280px;
    text-align: center;
}
.bt {
    margin-left: 10px;
    font-size: 21px;
    margin-top: 200px;
    margin-bottom: 0px;
    color: #000;
}
</style>
