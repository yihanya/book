<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-04-19 18:38:32
 * @LastEditTime: 2021-06-04 09:05:39
 * @FilePath: \vuebook\src\components\Book_Mall\NodeBook.vue
-->
// book_url: require("../../assets/img/a1.png"), // book_name: "斗破苍穹", // // book_author: "天蚕土豆", // book_text: // //
"这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！", // // book_fabulous: "1.2w", // book_comment: "0.6w", // book_class:"玄幻"
<template>
    <div class="NodeBook">
        <div class="book_img_box">
            <img @click="getbooks(book.bookid)" class="book_img" style="" :src="headurl + book.img" />
        </div>
        <div class="book_text_box">
            <div class="node_head">
                <!-- <a class="author" href="">
                    <i class="iconfont icon-denglu"></i>
                    {{ book.author }}
                </a>
                | -->
                <a @click="getbooks(book.bookid)">{{ book.bookName }}</a>
            </div>
            <div class="node_main">{{ book.detail }}</div>
            <div class="node_foot">
                <a class="clei" href="">{{ book.categories }}</a>
                <div class="node_foot_right">
                    <i class="iconfont icon-dianzan"></i>
                    {{ book.bookLike }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { GetChaptersAPI } from '../../request/api';
export default {
    props: ['book'],
    data() {
        return {};
    },
    methods: {
        getbooks() {
            this.$router.push({
                name: 'BookDetailed',
                query: {
                    bookId: this.book.bookId,
                },
            });
        },
    },
};
</script>
<style scoped lang="scss">
.NodeBook {
    display: flex;
    flex-direction: row;
    width: 440px;
    height: 120px;
    margin: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(255, 0, 0, 0.04);
    background-color: #ffffff;
}
.node_head {
    font-size: 19px;
    color: rgb(0, 0, 0);
    width: 100%;
}
.node_main {
    width: 100%;
    height: 56%;
    margin: 5px 0px;
    font-size: 4px;
    color: rgba(0, 0, 0, 0.6);
}
.node_foot {
    width: 100%;
    margin: 0px;
    font-size: 12px;
    color: rgb(168, 168, 168);
}
.author {
    font-size: 8px;
}
.book_img_box {
    max-width: 20%;
    max-height: 100%;
    margin-right: 5px;
    overflow: hidden;
}
.book_img {
    width: 100% !important;
    height: 100% !important;
}
.book_img:hover {
    width: 102% !important;
    height: 102% !important;
}
.clei {
    margin-right: 100px;
    float: left;
}
.node_foot_right {
    float: right;
    padding-right: 5px;
}
.book_text_box {
    width: 100%;
}
</style>
