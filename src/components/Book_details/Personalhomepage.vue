<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-21 10:24:40
 * @LastEditTime: 2021-06-04 09:59:30
 * @FilePath: \vuebook\src\components\Book_details\Personalhomepage.vue
-->
<template>
    <div class="per-b">
        <div></div>

        <div class="personal-box">
            <div class="title">
                <el-avatar v-if="userxx.head" slot="open" class="imgb" shape="circle" :size="100" :src="headurl + userxx.head"></el-avatar>
                <h4>{{ userxx.nicknames }}</h4>
            </div>
            <div class="main">
                <p>用户名: {{ userxx.userName }}</p>
                <p>电话: {{ userxx.number }}</p>
                <p>性别: {{ userxx.gender }}</p>
                <p>注册时间: {{ userxx.time }}</p>
            </div>
            <el-divider content-position="left">个性说</el-divider>
            <div class="user-txt" v-html="userxx.signature"></div>
            <div class="btns">
                <a @click="tobj()">编辑信息</a>
            </div>
        </div>

        <div></div>
    </div>
</template>

<script>
import ImgCutter from 'vue-img-cutter';
import { GetUserAPI } from '../../request/api';
export default {
    components: {
        ImgCutter,
    },
    data() {
        return {
            userxx: {},
        };
    },
    created: function() {
        GetUserAPI({
            userId: JSON.parse(sessionStorage.getItem('user')).userId,
        }).then(res => {
            this.userxx = res.data;
        });
    },
    methods: {
        tobj() {
            this.$router.push('/main/edipersonal');
        },
    },
};
</script>

<style lang="scss" scoped>
.per-b {
    background: url(../../assets/img/imgb/4.jpg);
    background-size: 100% 100%;
    width: 100%;
    height: 100vh;
    padding-top: 80px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1500px 1fr;
}
p {
    margin: 14px;
}
.btns {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
}
.imgb {
    box-shadow: 0 2px 12px 0 rgba(92, 0, 0, 0.2);
}
.main {
    text-align: center;
}
.user-txt {
    padding: 6% 12%;
    font-size: 16px;
    height: 19%;
}
.personal-box {
    width: 26%;
    height: 480px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 18px;
    padding: 4px 1%;
    box-sizing: border-box;
    margin: 0px auto;
    // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.btns {
    text-align: center;
}
.title {
    text-align: center;
    margin-top: 2px;
}
h4 {
    margin: 0px;
    margin-bottom: 0px;
    color: rgb(24, 23, 23);
}
.btn_logoin {
    width: 50%;
    height: 40px;
    margin-top: 0px;
    background-color: #3e3d43;
    color: rgb(255, 255, 255);
    transition: all 0.5s;
    border-radius: 0px;
    font-size: 27px;
    border: 0px;
}

.btn_logoin:hover {
    background-color: #ac3030;
    color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 95, 95);
    font-weight: bold;
    border: none;
}

.btn_logoin:focus {
    outline: none;
}
.el-divider__text {
    position: absolute;
    background-color: rgba(0, 0, 0, 0);
    padding: 0 20px;
    color: #303133;
}
.el-divider--horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin: 2px 0;
}
</style>
