<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-03-05 19:01:40
 * @LastEditTime: 2021-06-03 08:49:31
 * @FilePath: \vuebook\src\components\My_Book_List\Bookshelf.vue
-->
<template>
    <div class="bookshelf">
        <div class="bookshelf_box" style="position: relative;">
            <el-tabs v-model="activeName" class="books-box" type="border-card">
                <el-tab-pane v-for="(item, index) in books" :key="index" :label="item.bookshelfName" :name="item.bookshelfId + ''">
                    <div class="booklist" v-for="(book, index) in item.booksData" :key="index">
                        <ItemBook :book="book" :bookshelfId="activeName"></ItemBook>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <el-popover placement="top-start" title="操作" width="100" trigger="hover">
                <div class="a-box">
                    <a class="a-tc" @click="addbookshelfbtn = true">添加书架</a>
                </div>
                <div class="a-box">
                    <a class="a-tc" @click="delbookshelf()">删除书架</a>
                </div>
                <div class="a-box">
                    <a class="a-tc" @click="getdelbook()">删除书籍</a>
                </div>
                <el-button slot="reference" type="text" size="mini" style="position: absolute;right:10px;top:5px;">
                    <i class="el-icon-more" style="font-size: 18px; color:black"></i>
                </el-button>
            </el-popover>

            <el-dialog title="添加书架" :visible.sync="addbookshelfbtn" width="30%" center>
                <span>
                    <el-input prefix-icon="iconfont icon-mima" placeholder="请输入书架名称" v-model="AddBookshelfInput"></el-input>
                </span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="addbookshelfbtn = false">取 消</el-button>
                    <el-button type="primary" @click="addbookshelf()">确 定</el-button>
                </span>
            </el-dialog>

            <el-dialog title="删除书架书籍" :visible.sync="delbookshelfbtn" width="16%" center>
                <span>
                    <el-select v-model="bookId" placeholder="请选择">
                        <el-option v-for="item in delbookname" :key="item.bookId" :label="item.bookName" :value="item.bookId"></el-option>
                    </el-select>
                </span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="delbookshelfbtn = false">取 消</el-button>
                    <el-button type="primary" @click="delbookshelfbook()">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import ItemBook from './ItemBook.vue';
import { GetUserBookShelfAPI, GetBookShelfAPI, AddBookShelfAPI, DelBookShelfBookAPI, DelBookShelfAPI } from '../../request/api';
//删除书架书籍 和 删除书架
export default {
    name: 'refresh',
    inject: ['reload'],
    components: {
        ItemBook,
    },
    data() {
        return {
            activeName: '',
            books: [
                // {
                //     bookshelfName: '书架2',
                //     booksData: [
                //         {
                //             bookId: 3,
                //             bookLike: '159',
                //             bookName: 'Linux',
                //             categories: '教育',
                //             detail: '从进门到进牢',
                //             img: 'book/book.jpg',
                //             review: 1,
                //             status: '连载',
                //             userId: 4,
                //         },
                //         {
                //             bookId: 1,
                //             bookLike: '256',
                //             bookName: '果宝特攻',
                //             categories: '动画',
                //             detail: '呵呵哒',
                //             img: 'book/18.jpg',
                //             review: 0,
                //             status: '完结',
                //             userId: 1,
                //         },
                //     ],
                // },
            ],
            delbookname: [{}],
            addbookshelfbtn: false,
            AddBookshelfInput: '',
            delbookshelfbtn: false,
            bookId: '',
            sx: '',
        };
    },
    methods: {
        addbookshelf() {
            this.addbookshelfbtn = false;
            AddBookShelfAPI({
                bookshelfName: this.AddBookshelfInput,
                userId: JSON.parse(sessionStorage.getItem('user')).userId,
            }).then(res => {
                this.$notify({
                    title: '添加书架',
                    message: '添加成功',
                    type: 'success',
                });
                this.reload();
            });
        },

        delbookshelf() {
            DelBookShelfAPI({
                id: this.activeName,
            }).then(res => {
                this.$notify({
                    title: '成功',
                    message: '删除成功',
                    type: 'success',
                });
                this.reload();
            });
        },

        getdelbook() {
            GetBookShelfAPI({
                bookshelfId: this.activeName,
            }).then(res => {
                this.delbookname = res.data;
                console.log(this.delbookname);
            });
            this.delbookshelfbtn = true;
            // this.reload();
        },

        delbookshelfbook() {
            DelBookShelfBookAPI({
                bookId: this.bookId,
                bookshelfId: this.activeName,
            }).then(res => {
                this.$notify({
                    title: '成功',
                    message: '删除成功',
                    type: 'success',
                });
            });
            this.delbookshelfbtn = false;
            this.reload();
        },
    },
    watch: {
        books: function(newValue) {},
    },
    created: function() {
        GetUserBookShelfAPI({
            userId: JSON.parse(sessionStorage.getItem('user')).userId,
        }).then(response => {
            const data = response.data;
            // console.log(response.data);
            for (let i = 0; i < data.length; i++) {
                GetBookShelfAPI({
                    bookshelfId: data[i].bookshelfId,
                }).then(res => {
                    for (let j = 0; j < res.data.length; j++) {
                        if (!data[i].booksData) data[i].booksData = [];
                        data[i].booksData.push(res.data[j]);
                    }
                });
                this.books = data;
            }
            // this.activeName = this.books[0].bookshelfId + '';
        });
    },
};
</script>
<style scoped lang="scss">
.a-box {
    text-align: center;
    font-size: 18px;
}
.books-box {
    height: 96%;
}
/deep/ .el-tabs__content {
    height: 90%;
    overflow: auto;
}
.bookshelf {
    margin-top: 3.4%;
    background-color: #f7f7f7;
    height: 80vh !important;
    width: 100% !important;
}
.bookshelf_box {
    // box-shadow: 0 0 2px rgb(0, 0, 0);
    width: 80%;
    margin: 4% auto;
    background-color: #f7f7f7;
    height: 100% !important;
}
.booklist {
    float: left;
}
/deep/ .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
    color: #ac3030;
    font-weight: bold;
}
/deep/ .el-tabs--border-card > .el-tabs__header .el-tabs__item:not(.is-disabled):hover {
    color: #ac3030;
    font-weight: bold;
}
.ItemBook {
    padding: 0 20px;
}
</style>
