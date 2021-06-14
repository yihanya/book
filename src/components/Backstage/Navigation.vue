<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-19 15:08:42
 * @LastEditTime: 2021-06-02 17:20:50
 * @FilePath: \vuebook\src\components\Backstage\Navigation.vue
-->
<template>
    <div class="ht">
        <el-radio-group v-model="isCollapse">
            <div class="sf-box">
                <input @click="zk()" type="button" :value="zt" class="btn" />
                <el-popover trigger="hover" style="text-align: center;" class="imgb" placement="top" width="150" v-model="visible">
                    <div class="a-box">
                        <a class="a-tc" @click="touser()">个人信息</a>
                    </div>
                    <div class="a-box">
                        <a class="a-tc" @click="tomain()">跳转首页</a>
                    </div>
                    <div class="a-box">
                        <a class="a-tc" @click="dellogin()">退出账号</a>
                    </div>
                    <el-avatar slot="reference" shape="circle" :size="36" :src="headurl + user.head"></el-avatar>
                </el-popover>
            </div>
        </el-radio-group>
        <div class="ht-main">
            <div :class="ztclass">
                <el-menu
                    :default-active="this.$route.name"
                    class="el-menu-vertical-demo"
                    :collapse-transition="false"
                    @open="handleOpen"
                    @close="handleClose"
                    :collapse="isCollapse"
                    router
                >
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-s-home"></i>
                            <span slot="title">基本管理</span>
                        </template>
                        <el-menu-item index="user">用户管理</el-menu-item>
                        <el-menu-item index="book">书籍管理</el-menu-item>
                        <!-- <el-menu-item index="1-3">章节管理</el-menu-item> -->
                        <el-menu-item index="comment">评论管理</el-menu-item>
                        <el-menu-item index="Chapter">章节管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-error"></i>
                            <span slot="title">内容审核</span>
                        </template>
                        <el-menu-item index="shbook">书籍审核</el-menu-item>
                        <el-menu-item index="shChapter">章节审核</el-menu-item>
                    </el-submenu>
                    <!-- <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-s-tools"></i>
                            <span slot="title">其他管理</span>
                        </template>
                        <el-menu-item index="3-1">流量统计</el-menu-item>
                        <el-menu-item index="3-2">网站日志</el-menu-item>
                        <el-menu-item index="3-2">封面设置</el-menu-item>
                    </el-submenu> -->
                </el-menu>
            </div>
            <div :class="main_box"><router-view></router-view></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: true,
            zt: '→',

            ztclass: 'menu-box-sh',
            main_box: 'main-box2',
            visible: false,
            user: JSON.parse(sessionStorage.getItem('user')),
        };
    },
    created() {},
    methods: {
        touser() {
            this.$router.push('/main/personal');
        },
        tomain() {
            this.$router.push('/main');
        },
        dellogin() {
            sessionStorage.setItem('user', null);
            this.$router.go(0);
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        zk() {
            this.isCollapse = !this.isCollapse;
            if (this.zt == '→') {
                this.ztclass = 'menu-box-zk';
                this.main_box = 'main-box1';
                this.zt = '←';
            } else {
                this.ztclass = 'menu-box-sh';
                this.main_box = 'main-box2';
                this.zt = '→';
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.a-box {
    text-align: center;
}
.a-tc {
    font-size: 21px;
    text-align: center;
    width: 30%;
}
/deep/ .el-popover {
    min-width: 60px !important;
}
.imgb {
    margin-right: 5%;
}
.ht {
    height: 100% !important;
    width: 100%;
}
.main-box1 {
    background-color: #ffffff;
    width: calc(100% - 200px);
    max-height: 100%;
    overflow: hidden;
}
.main-box2 {
    background-color: #ffffff;
    width: calc(100% - 64px);
    max-height: 100%;
    overflow: hidden;
}
.ht-main {
    height: 100% !important;
    display: flex;
}
.el-radio-group {
    width: 100%;
}
.btn {
    width: 40px;
    height: 40px;
    // margin-left: 10px;
    margin-top: 0px;
    background-color: #3e3d43;
    color: rgb(255, 255, 255);
    transition: all 0.8s;
    border-radius: 0px;
    font-size: 16px;
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
.sf-box {
    width: 100%;
    background-color: #3e3d43;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.menu-box-sh {
    background-color: #3e3d43;
    height: 100%;
    width: 64px;
}
.menu-box-zk {
    background-color: #3e3d43;
    height: 100%;
    width: 200px;
}
/deep/ .el-menu {
    background-color: #3e3d43 !important;
    border-right: solid 0px #e6e6e6;
}
.el-menu-item {
    color: rgb(255, 255, 255) !important;
    background-color: #3e3d43 !important;
}
/deep/ .el-submenu__title {
    color: rgb(255, 255, 255) !important;
}
.el-menu-item:hover {
    outline: 0 !important;
    background-color: #3e3d43 !important;
    color: #ffffff !important;
    font-size: 21px;
    font-weight: bolder;
}
.el-menu-item:focus {
    background-color: #3e3d43 !important;
    color: #ffffff !important;
    font-size: 21px;
    font-weight: bolder;
}
/deep/ .el-submenu__title:hover {
    outline: 0 !important;
    background-color: #3e3d43 !important;
    color: #ffffff !important;
    font-size: 21px;
    font-weight: bolder;
}
.el-menu-item.is-active {
    // element更改导航栏被选中项的背景颜色
    background-color: #3e3d43 !important;
    color: #ac3030 !important;
    font-size: 21px;
    font-weight: bolder;
}
</style>
