<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-20 14:50:05
 * @LastEditTime: 2021-06-03 08:47:00
 * @FilePath: \vuebook\src\components\Backstage\Navigations\Book.vue
-->
<template>
    <div class="book-box">
        <div class="head">
            <h2 class="bt">书籍管理</h2>
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
                <el-table-column prop="status" label="状态"></el-table-column>
                <el-table-column prop="bookLike" label="点赞"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="tobook(scope.$index)">跳转</el-button>
                        <!-- <el-button size="mini" type="info" @click="handleDelete()">消息</el-button>
                        <el-button size="mini" type="warning" @click="handleDelete()">封禁</el-button> -->
                        <el-button size="mini" type="danger" @click="delbook(scope.$index)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import { GetBook2API, DelBookAPI } from '../../../request/api';
export default {
    name: 'refresh',
    inject: ['reload'],
    data() {
        return {
            input: '',
            bookData: [
                {
                    book_id: '0',
                    book_name: '寻仙问道',
                    book_author: '易寒鸦',
                    book_categories: '仙侠',
                    book_status: '连载',
                    book_like: '2004',
                },
                {
                    book_id: '1',
                    book_name: '幽影',
                    book_author: '易寒鸦',
                    book_categories: '奇幻',
                    book_status: '连载',
                    book_like: '2024',
                },
            ],
        };
    },
    created: function() {
        GetBook2API({
            review: '1',
        }).then(res => {
            this.bookData = res.data;
        });
    },
    methods: {
        delbook(i) {
            DelBookAPI({
                bookId: this.bookData[i].bookId,
            }).then(res => {
                this.$notify({
                    title: '书籍管理',
                    message: '删除成功',
                    type: 'success',
                });
            });
            this.reload();
        },
        tobook(i) {
            this.$router.push({
                name: 'BookDetailed',
                query: {
                    bookId: this.bookData[i].bookId,
                },
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
.book-box {
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
