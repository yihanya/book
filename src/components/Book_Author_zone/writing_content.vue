<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-17 21:15:13
 * @LastEditTime: 2021-06-02 17:30:56
 * @FilePath: \vuebook\src\components\Book_Author_zone\writing_content.vue
-->
<template>
    <div>
        <div class="con-box">
            <h2 class="con-bt">章节编辑</h2>
            <div class="con-head">
                <div class="zj">
                    <el-input placeholder="请输入章节名" v-model="input">
                        <template slot="prepend">章 节 名 称</template>
                    </el-input>
                </div>
            </div>
            <div class="text-box">
                <textarea
                    @focus="
                        focusfns => {
                            plbtns = true;
                        }
                    "
                    v-html="texts"
                    v-model="texts"
                    class="text-pl"
                ></textarea>
            </div>
            <div class="con-bnt">
                <input @click="addchtext()" type="button" value="提 交 章 节" class="btni" />
                <input @click="drawer = true" type="button" value="删 除 章 节" class="btni" />
            </div>
        </div>
    </div>
</template>

<script>
import { AddChapterAPI, UpdateChapterAPI, GetChapterAPI } from '../../request/api';
export default {
    components: {},
    data() {
        return {
            input: '',
            restaurants: ['123', '123'],
            texts: '',
        };
    },
    created: function() {
        if (this.$route.query.Id != -1) {
            GetChapterAPI({
                id: this.$route.query.Id,
            }).then(response => {
                this.input = response.data.name;
                this.texts = response.data.content;
            });
        }
    },
    methods: {
        addchtext() {
            if (this.$route.query.Id == -1) {
                AddChapterAPI({
                    bookId: this.$route.query.bookId,
                    name: this.input,
                    content: this.texts,
                }).then(response => {
                    this.$notify({
                        title: '成功',
                        message: '提交成功,请等待审核',
                        type: 'success',
                    });
                    this.$router.push('/main/Author');
                });
            } else {
                UpdateChapterAPI({
                    id: this.$route.query.Id,
                    name: this.input,
                    content: this.texts,
                    review: 1,
                }).then(response => {
                    this.$notify({
                        title: '成功',
                        message: '编辑成功,可以退出',
                        type: 'success',
                    });
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.con-bnt {
    display: flex;
    justify-content: space-between;
}
.con-box {
    margin: 30px 348px;
    width: 840px;
    box-sizing: border-box;
    padding: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: rgb(255, 255, 255);
}
.con-head {
    display: flex;
    justify-content: space-between;
}
.zj {
    width: 100%;
}

.inline-input {
    width: 49%;
}
.text-pl {
    margin-top: 20px;
    resize: none;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    height: 600px;
    background-color: #ffffff;
    padding: 5px 10px;
}
.btni {
    text-align: center;
    width: 300px;
    height: 50px;
    margin: 0 0px;
    margin-top: 10px;
    background-color: #3e3d43;
    color: white;
    transition: all 0.5s;
    // border-radius: 5px;
    font-size: 25px;
    border: 0px;
    margin-bottom: 10px;
}
.btni:hover {
    background-color: #ac3030;
    color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 95, 95);
    font-weight: bold;
    border: none;
}
.btni:focus {
    outline: none;
}
.con-bt {
    margin: 20px;
    text-align: center;
}
.con-bnt {
    text-align: center;
}
</style>
