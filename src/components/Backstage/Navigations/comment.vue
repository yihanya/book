<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-20 14:50:05
 * @LastEditTime: 2021-06-02 19:35:54
 * @FilePath: \vuebook\src\components\Backstage\Navigations\comment.vue
-->
<template>
    <div class="com-box">
        <div class="head">
            <h2 class="bt">评论管理</h2>
            <!-- <div class="ssk">
                <input class="iss" v-model="input" placeholder=" 书名|作者" />
                <button class="ian iconfont icon-sousuo"></button>
            </div> -->
        </div>
        <div class="main">
            <el-table class="usertab" :data="commentDate" height="640">
                <el-table-column prop="id" label="ID"></el-table-column>
                <el-table-column prop="content" label="评论内容"></el-table-column>
                <el-table-column prop="time" label="评论时间"></el-table-column>
                <el-table-column prop="bookId" label="书籍Id"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit()">查看内容</el-button>
                        <el-button size="mini" type="danger" @click="delcom(scope.$index)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import { GetAllCommentAPI, DelCommentAPI } from '../../../request/api';
export default {
    name: 'refresh',
    inject: ['reload'],
    data() {
        return {
            input: '',
            commentDate: [],
        };
    },
    created: function() {
        GetAllCommentAPI({
            bookId: -1,
        }).then(res => {
            this.commentDate = res.data;
        });
    },
    methods: {
        delcom(i) {
            DelCommentAPI({
                id: this.commentDate[i].id,
            }).then(res => {
                this.$notify({
                    title: '评论管理',
                    message: '删除成功',
                    type: 'success',
                });
            });
            this.reload();
        },
    },
};
</script>

<style lang="scss" scoped>
// $hm: 0.05 * 1920px;
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
.com-box {
    margin: 5vh auto;
    width: 100%;
    height: 100%;
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
.main {
    height: 100%;
}
.usertab {
    height: 100%;
}
</style>
