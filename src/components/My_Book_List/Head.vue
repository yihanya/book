<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-03-04 19:09:23
 * @LastEditTime: 2021-06-04 09:13:18
 * @FilePath: \vuebook\src\components\My_Book_List\Head.vue
-->
<template>
    <div class="heads">
        <div class="heads_box">
            <el-menu
                :default-active="this.$route.name"
                class="el-menu-demo"
                mode="horizontal"
                background-color="#3E3D43"
                text-color="#a9a9a9"
                router
                active-text-color="#ffffff"
            >
                <div class="main-box-g">
                    <div class="logo-box"><img class="logo" src="../../assets/img/logo.png" alt="愉阅快读" /></div>
                    <div class="head-main-box">
                        <el-menu-item index="ykyd" @click="setclass('所有')">全部书籍</el-menu-item>
                        <el-submenu index="">
                            <el-menu-item @click="setclass('所有')" class="bq">全部</el-menu-item>
                            <el-menu-item @click="setclass('历史')" class="bq">历史</el-menu-item>
                            <el-menu-item @click="setclass('仙侠')" class="bq">仙侠</el-menu-item>
                            <el-menu-item @click="setclass('玄幻')" class="bq">玄幻</el-menu-item>
                            <el-menu-item @click="setclass('奇幻')" class="bq">奇幻</el-menu-item>
                            <el-menu-item @click="setclass('科幻')" class="bq">科幻</el-menu-item>
                            <el-menu-item @click="setclass('都市')" class="bq">都市</el-menu-item>
                            <el-menu-item @click="setclass('游戏')" class="bq">游戏</el-menu-item>
                            <el-menu-item @click="setclass('现实')" class="bq">现实</el-menu-item>
                            <el-menu-item @click="setclass('战争')" class="bq">战争</el-menu-item>
                            <el-menu-item @click="setclass('悬疑')" class="bq">悬疑</el-menu-item>
                            <el-menu-item @click="setclass('言情')" class="bq">言情</el-menu-item>
                            <el-menu-item @click="setclass('体育')" class="bq">体育</el-menu-item>
                        </el-submenu>
                        <el-menu-item class="fl" index="Author">作者专区</el-menu-item>
                        <el-menu-item index="mybook">我的书架</el-menu-item>
                        <el-menu-item index="">
                            <input class="iss" v-model="input" placeholder=" 书名|作者" />
                            <button class="ian iconfont icon-sousuo" @click="tobooks()"></button>
                        </el-menu-item>
                    </div>
                    <!-- <div class="btns-lr"> -->
                    <div class="btns-r" v-if="user == null">
                        <router-link to="/registered"><a class="btns">注册</a></router-link>
                        <router-link to="/login"><a class="btns">登录</a></router-link>
                    </div>
                    <el-popover v-else trigger="hover" class="imga" style="text-align: center;" placement="top" width="150" v-model="visible">
                        <div class="a-box" v-if="user.access == 1">
                            <a class="a-tc" @click="toht()">进入后台</a>
                        </div>
                        <div class="a-box">
                            <a class="a-tc" @click="touser()">个人信息</a>
                        </div>
                        <div class="a-box">
                            <a class="a-tc" @click="dellogin()">退出账号</a>
                        </div>
                        <el-avatar
                            v-if="user.head.length > 0"
                            class="imgb"
                            slot="reference"
                            shape="circle"
                            :size="40"
                            :src="headurl + user.head"
                        ></el-avatar>
                    </el-popover>
                </div>
            </el-menu>
        </div>
    </div>
</template>
<script>
export default {
    name: 'refresh',
    inject: ['reload'],
    data() {
        return {
            headImg: require('../../assets/logo.png'),
            SearchBox: '',
            user: JSON.parse(sessionStorage.getItem('user')),
            input: '',
            visible: false,
        };
    },
    methods: {
        tobooks() {
            this.$router.push({
                name: 'search',
                query: {
                    name: this.input,
                },
            });
            this.reload();
        },
        toht() {
            this.$router.push('/backstage');
        },
        touser() {
            this.$router.push('/main/personal');
        },
        dellogin() {
            sessionStorage.setItem('user', null);
            this.$router.go(0);
        },
        setclass(data) {
            sessionStorage.setItem('mainclass', data);
            this.reload();
        },
    },
};
</script>
<style>
.a-box {
    text-align: center;
}
.imga {
    margin-right: 25%;
}
.el-header {
    padding: 0 0px;
    box-sizing: border-box;
    flex-shrink: 0;
}
.main-box-g {
    display: grid;
    grid-template-columns: 112px 1fr 180px;
    outline: none;
}
.zd {
    outline: none;
}

.head-main-box {
    display: flex;
    outline: none;
    margin: 0 auto;
}
.a-tc {
    font-size: 21px;
    text-align: center;
    width: 30%;
}
.iss {
    height: 34px !important;
    width: 90%;
    margin: 0;
    margin-left: 0px;
    outline: medium;
    border: 2px solid #ac3030;
    margin-bottom: 4px;
    padding-left: 8px;
}
.ian {
    height: 40px !important;
    width: 72px;
    background-color: #ac3030;
    outline: medium;
    border-style: none;
    margin-bottom: 4px;
}
.ian:hover {
    height: 40px !important;
    width: 72px;
    background-color: #b82323;
    margin-bottom: 4px;
    outline: medium;
    border-style: none;
}
.btns-lr {
    font-size: 0.5rem;
}
</style>
<style scoped lang="scss">
.icon-sousuo:before {
    color: rgb(255, 255, 255);
}
.heads {
    margin: 0px;
    padding: 0px;
}
.imgb {
    // margin-left: 10px;
    margin-top: 9px;
    margin-left: 70px;
}
.nameb {
    margin-left: 10px;
    color: #000;
    width: 10px;
    height: 20px;
}
.btns {
    float: right;
    margin: 15px 10px;
    // margin-left: 10px;
    font-size: 21px;
    color: rgb(255, 255, 255);
}

.btns:hover {
    color: rgb(201, 68, 68);
}
.heads_box {
    background-color: #3e3d43;
    height: 80%;
    box-shadow: 0 0 10px rgb(0, 0, 0);
    max-width: 100%;
}
/deep/ .el-menu-demo {
    // background-color: rgba(0, 0, 0, 0);
    margin: 0px 0px;
    max-width: 100%;
    margin-left: 0px;
}
.el-menu.el-menu--horizontal {
    border-bottom: solid 0px #e6e6e6 !important;
}
.el-menu-item {
    font-size: 1rem;
    margin: 0 0px;
}

.el-menu-item:focus {
    background-color: rgba(255, 255, 255, 0) !important;
    color: rgb(255, 255, 255) !important;
}
.el-menu-item:hover {
    outline: 0 !important;
    background: #3e3d43 !important;
    color: #ac3030 !important;
}
.logo {
    float: right;
    width: 50px;
    height: 50px;
    margin-top: 5px;
    margin-left: 5px;
    pointer-events: none;
}

/deep/ .el-input__inner {
    border: 1px solid #ffffff !important;
}
.el-main .el-menu–horizontal /deep/ .el-submenu .el-submenu__title {
    height: 50px;
    line-height: 50px;
    width: 20px;
}
.btns-r {
    float: left;
}
</style>
