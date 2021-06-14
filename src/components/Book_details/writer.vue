<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-07 16:41:59
 * @LastEditTime: 2021-06-04 08:51:45
 * @FilePath: \vuebook\src\components\Book_details\writer.vue
-->
<template>
    <div class="writer-box">
        <div class="writer-in">
            <div class="avatar_box">
                <el-avatar v-if="author.head.length > 0" shape="circle" :size="100" :src="headurl + author.head"></el-avatar>
            </div>
            <div class="writer-name">{{ author.userName }}</div>
        </div>
        <el-divider></el-divider>
        <div class="writer-sentence">{{ author.signature }}</div>
    </div>
</template>

<script>
import { GetBookAPI, GetUserAPI } from '../../request/api';
export default {
    data() {
        return {
            author: '',
            headimg: {},
            authorId: -1,
        };
    },
    created: function() {
        //书籍详情
        GetBookAPI({
            bookId: this.$route.query.bookId,
        }).then(response => {
            this.authorId = response.data.userId;
            //获取作者
            GetUserAPI({
                userId: this.authorId,
            }).then(response => {
                console.log(this.authorId);
                this.author = response.data;
            });
        });
    },
};
</script>

<style scoped lang="scss">
.el-divider--horizontal {
    margin: 0;
}
.writer-box {
    display: flex;
    flex-direction: column;
    height: 242px;
    width: 340px;
    background-color: #ffffff;
}
.writer-name {
    text-align: center;
    margin-bottom: 10px;
}
.writer-text {
    width: 170px;
    height: 160px;
    margin-left: 25px;
}

.writer-LV {
    margin-top: 11px;
    font-size: 18px;
}
.writer-books {
    margin-top: 11px;
    font-size: 18px;
}
.writer-txts {
    margin-top: 11px;
    font-size: 18px;
}
.writer-date {
    margin-top: 11px;
    font-size: 18px;
}
.writer-sentence {
    height: 68px;
    text-align: center;
    font-size: 14px;
    margin-top: 15px;
}
.writer-img {
    text-align: center;
    width: 50%;
}
.avatar_box {
    width: 100%;
    text-align: center;
    margin-top: 10px;
}
.el-divider--vertical {
    height: 160px;
}
.el-divider {
    background-color: #000000;
}
</style>
