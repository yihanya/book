<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-20 14:50:05
 * @LastEditTime: 2021-06-02 19:36:53
 * @FilePath: \vuebook\src\components\Backstage\toexamine\Book.vue
-->
<template>
    <div class="shbook-box">
        <div class="head">
            <h2 class="bt">书籍审核</h2>
            <!-- <div class="ssk">
                <input class="iss" v-model="input" placeholder="搜索" />
                <button class="ian iconfont icon-sousuo"></button>
            </div> -->
        </div>
        <div class="main">
            <el-table class="usertab" :data="bookData" height="640">
                <el-table-column prop="bookId" label="ID"></el-table-column>
                <el-table-column prop="bookName" label="书名"></el-table-column>
                <el-table-column prop="userId" label="作者Id"></el-table-column>
                <el-table-column prop="categories" label="分类"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="lookbook(scope.$index)">查看</el-button>
                        <el-button size="mini" type="success" @click="yesbook(scope.$index)">通过</el-button>
                        <el-button size="mini" type="danger" @click="delbook(scope.$index)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog title="书籍信息" :visible.sync="dialogVisible">
            <div class="addbook-box">
                <div class="box-head">
                    <el-input placeholder="请输入书名" v-model="book.bookName">
                        <template slot="prepend">书名</template>
                    </el-input>
                    <el-input placeholder="请输入书名" v-model="book.categories">
                        <template slot="prepend">类型</template>
                    </el-input>
                </div>
                <div class="box-text">
                    <!-- 书籍简介: -->
                    <textarea v-html="book.detail" v-model="book.detail" class="text-ss"></textarea>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { GetBook2API, DelBookAPI, ModifyBookAPI } from '../../../request/api';
export default {
    data() {
        return {
            dialogVisible: false,
            input: '',
            bookData: [{}],
            book: {},
        };
    },
    created: function() {
        GetBook2API({
            review: '0',
        }).then(res => {
            this.bookData = res.data;
        });
    },
    methods: {
        lookbook(i) {
            this.book = this.bookData[i];
            console.log(this.bookData[i]);
            this.dialogVisible = true;
        },
        delbook(i) {
            DelBookAPI({
                bookId: this.bookData[i].bookId,
            }).then(res => {
                this.$notify({
                    title: '书籍审核',
                    message: '书籍已删除',
                    type: 'success',
                });
                GetBook2API({
                    review: '0',
                }).then(res => {
                    this.bookData = res.data;
                });
            });
        },
        yesbook(i) {
            const bookFormData = new FormData();
            this.book = this.bookData[i];
            this.book.review = '1';

            Object.keys(this.book).map(key => {
                bookFormData.append(key, this.book[key]);
            });

            ModifyBookAPI(bookFormData).then(response => {
                GetBook2API({
                    review: '0',
                }).then(res => {
                    this.bookData = res.data;
                });
                this.$notify({
                    title: '书籍审核',
                    message: '书籍已通过',
                    type: 'success',
                });
                GetBook2API({
                    review: '0',
                }).then(res => {
                    this.bookData = res.data;
                });
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.ssk {
    display: flex;
    margin-right: 1vh;
}
.bt {
    margin: 0;
    margin-left: 1vh;
}
.icon-sousuo:before {
    color: rgb(255, 255, 255);
}
.head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
.shbook-box {
    margin: 5vh auto;
    width: 100%;
}
.iss {
    height: 34px !important;
    width: 260px;
    margin: 0;
    outline: medium;
    border: 2px solid #ac3030;
    padding-left: 8px;
}
.ian {
    height: 40px !important;
    width: 72px;
    background-color: #ac3030;
    outline: medium;
    border-style: none;
}
.ian:hover {
    height: 40px !important;
    width: 72px;
    background-color: #b82323;
    outline: medium;
    border-style: none;
}
</style>
