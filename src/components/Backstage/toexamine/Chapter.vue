<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-20 14:50:05
 * @LastEditTime: 2021-06-02 19:37:16
 * @FilePath: \vuebook\src\components\Backstage\toexamine\Chapter.vue
-->
<template>
    <div class="shchapter-box">
        <div class="head">
            <h2 class="bt">章节审核</h2>
            <!-- <div class="ssk">
                <input class="iss" v-model="input" placeholder="搜索" />
                <button class="ian iconfont icon-sousuo"></button>
            </div> -->
        </div>
        <div class="main">
            <el-table class="usertab" :data="ChapterData" height="640">
                <el-table-column prop="id" label="ID"></el-table-column>
                <el-table-column prop="bookId" label="书id"></el-table-column>
                <el-table-column prop="name" label="章节名称"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="redto(scope.$index)">跳转</el-button>
                        <el-button size="mini" type="success" @click="yesto(scope.$index)">通过</el-button>
                        <el-button size="mini" type="danger" @click="delto(scope.$index)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import { GetAllChapter2API, UpdateChapterAPI, DelChapterAPI } from '../../../request/api';
export default {
    data() {
        return {
            input: '',
            ChapterData: [],
        };
    },
    created: function() {
        GetAllChapter2API({
            review: '0',
        }).then(res => {
            this.ChapterData = res.data;
        });
    },
    methods: {
        redto(i) {
            this.$router.push({
                name: 'Reading',
                query: {
                    chapterId: this.ChapterData[i].id,
                    bookId: this.ChapterData[i].bookId,
                },
            });
        },
        yesto(i) {
            UpdateChapterAPI({
                id: this.ChapterData[i].id,
                name: this.ChapterData[i].name,
                content: this.ChapterData[i].content,
                review: '1',
            }).then(response => {
                this.$notify({
                    title: '章节审核',
                    message: '章节已通过',
                    type: 'success',
                });
                GetAllChapter2API({
                    review: '0',
                }).then(res => {
                    this.ChapterData = res.data;
                });
            });
        },
        delto(i) {
            DelChapterAPI({
                id: this.ChapterData[i].id,
            }).then(res => {
                this.$notify({
                    title: '章节审核',
                    message: '章节已删除',
                    type: 'success',
                });
                GetAllChapter2API({
                    review: '0',
                }).then(res => {
                    this.ChapterData = res.data;
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
.shchapter-box {
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
