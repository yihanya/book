<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-15 19:59:40
 * @LastEditTime: 2021-06-03 14:41:14
 * @FilePath: \vuebook\src\components\Book_Author_zone\writing_books.vue
-->
<template>
    <div class="writing-books-box">
        <div class="writing-title">
            <h2 class="title-name">{{ this.userName }}</h2>
            <div class="title-btns">
                <input @click="dialogVisible = true" type="button" value="添 加 书 籍" class="btn" />
                <input @click="dialogVisiblex = true" type="button" value="删 除 书 籍" class="btn" />
            </div>
        </div>
        <div class="booklist">
            <div v-for="(book, index) in booksDate" :key="index">
                <div class="book-box">
                    <ItemBook :book="book"></ItemBook>
                </div>
            </div>
        </div>
        <!-- 添加书籍对话框 -->
        <el-dialog title="添加书籍" :visible.sync="dialogVisible">
            <div class="addbook-box">
                <div class="box-head">
                    <el-input placeholder="请输入书名" v-model="inputname">
                        <template slot="prepend">书名</template>
                    </el-input>

                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </div>
                <div class="box-text">
                    <!-- 书籍简介: -->
                    <textarea v-html="texts" v-model="texts" class="text-ss"></textarea>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addbook()">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 删除书籍对话框 -->
        <el-dialog title="删除书籍" :visible.sync="dialogVisiblex">
            <div class="subbook-box">
                <el-table
                    ref="multipleTable"
                    highlight-current-row
                    :data="booksDate"
                    tooltip-effect="dark"
                    height="300px"
                    style="width: 100%"
                    @selection-change="handleSelectionChange"
                >
                    <el-table-column prop="bookName" label="书名"></el-table-column>
                    <el-table-column prop="categories" label="分类"></el-table-column>
                    <el-table-column prop="status" label="状态"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" type="danger" @click="delbook(scope.$index)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisiblex = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisiblex = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import ItemBook from '../My_Book_List/ItemBook.vue';
import { GetUserBookAPI, AddBookAPI, DelBookAPI } from '../../request/api';
export default {
    name: 'refresh',
    inject: ['reload'],
    components: {
        ItemBook,
    },
    data() {
        return {
            userName: '',
            value: '',
            inputname: '',
            select: '',
            dialogVisible: false,
            dialogVisiblex: false,
            tableData: '',
            booksDate: [
                {
                    bookname: '斗罗大陆',
                    bookurl: require('../../assets/img/a1.png'),
                },
                {
                    bookname: '斗破苍穹',
                    bookurl: require('../../assets/img/a1.png'),
                },
                {
                    bookname: '斗罗大陆',
                    bookurl: require('../../assets/img/a1.png'),
                },
                {
                    bookname: '斗破苍穹',
                    bookurl: require('../../assets/img/a1.png'),
                },
                {
                    bookname: '斗罗大陆',
                    bookurl: require('../../assets/img/a1.png'),
                },
            ],
            options: [
                {
                    value: '玄幻',
                },
                {
                    value: '历史',
                },
                {
                    value: '仙侠',
                },
                {
                    value: '奇幻',
                },
                {
                    value: '科幻',
                },
                {
                    value: '都市',
                },
                {
                    value: '游戏',
                },
                {
                    value: '现实',
                },
                {
                    value: '战争',
                },
                {
                    value: '言情',
                },
                {
                    value: '悬疑',
                },
                {
                    value: '体育',
                },
            ],
            texts: '',
            multipleSelection: '',
        };
    },
    created: function() {
        (this.userName = JSON.parse(sessionStorage.getItem('user')).userName),
            //所有章节
            GetUserBookAPI({
                userId: JSON.parse(sessionStorage.getItem('user')).userId,
            }).then(response => {
                this.booksDate = response.data;
            });
    },
    methods: {
        addbook() {
            this.dialogVisible = false;
            //添加书籍
            AddBookAPI({
                bookName: this.inputname,
                detail: this.texts,
                author: this.userName,
                categories: this.value,
                userId: JSON.parse(sessionStorage.getItem('user')).userId,
            }).then(response => {
                this.reload();
                this.$notify({
                    title: '成功',
                    message: '新建成功,请等待后台管理员审核',
                    type: 'success',
                });
            });
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },

        delbook(i) {
            DelBookAPI({
                bookId: this.booksDate[i].bookId,
            }).then(res => {
                this.$notify({
                    title: '作者专区',
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
// 设置滚动条的宽度
/deep/ .el-table__body-wrapper::-webkit-scrollbar {
    width: 10px;
}
// 设置滚动条的背景色和圆角
/deep/ .el-table__body-wrapper::-webkit-scrollbar-thumb  {
    background-color: rgb(187, 222, 255);
    border-radius: 8px;
}
.del {
    float: right;
}
.text-ss {
    resize: none;
    outline: none;
    width: 99%;
    height: 20vh;
    background-color: rgba(255, 255, 255, 0.65);
    margin-top: 20px;
}
.box-head {
    display: flex;
}
.writing-books-box {
    width: 100%;
    height: 100%;
    margin-top: 0px;
    padding-top: 100px;
}
.title-name {
    margin: 0;
}
.subbook-box {
    display: flex;
}
.writing-title {
    width: 1120px;
    margin: 5px 208px;
    display: flex;
    justify-content: space-between;
}
.booklist {
    width: 1120px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: rgb(255, 255, 255);
    margin: 0px 208px;
    width: 1120px;
    padding-bottom: 0px;
    display: flex;
    height: 70vh;
}

.ItemBook {
    margin: 10px;
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
</style>
