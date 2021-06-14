<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-03-26 14:30:03
 * @LastEditTime: 2021-06-14 19:25:26
 * @FilePath: \vuebook\src\components\Login.vue
-->
<template>
    <div class="login">
        <!-- <el-row :gutter="0"> -->

        <div class="login_box">
            <!-- 头像框 -->

            <div class="avatar_box">
                <img :src="headurl + user.head" alt="" />
            </div>

            <!-- 登录表单 -->
            <el-form :model="user" :rules="rules" class="login_from" ref="user">
                <h2 style="color:#333339">登 录</h2>
                <!-- 用户名 -->
                <el-form-item prop="userName">
                    <el-input prefix-icon="iconfont icon-denglu" v-model="user.userName" placeholder="请输入账号"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="userPass">
                    <el-input prefix-icon="iconfont icon-mima" placeholder="请输入密码" v-model="user.userPass" show-password></el-input>
                </el-form-item>
                <!-- 按钮 -->
                <el-form-item class="btns">
                    <input @click="loginh('user')" type="button" value="确   认" class="btn_logoin" />
                    <p class="log-bot">
                        <a href="#">找回密码</a>
                        |
                        <router-link to="/registered"><a href="#">注册</a></router-link>
                    </p>
                </el-form-item>
            </el-form>
        </div>
        <!-- </el-row> -->
    </div>
</template>
<script>
import '../assets/css/login.css';
import { LoginAPI } from '../request/api.js';
import qs from 'qs';
export default {
    data() {
        return {
            user: {
                userName: '',
                userPass: '',
                head: '',
                nicknames: '',
            },
            rules: {
                userName: [{ required: true, message: '请输入账号', trigger: 'blur' }],
                userPass: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
        };
    },

    methods: {
        loginh(user) {
            var x = 1;
            this.$refs[user].validate(valid => {
                if (!valid) {
                    this.$message.error('登录失败:数据未通过校验,请检查您的输入');
                    x = 0;
                }
            });
            if (x == 1) {
                //登录
                //1232
                LoginAPI({
                    userName: this.user.userName,
                    userPass: this.user.userPass,
                }).then(response => {
                    if (response.data.msg == '用户名或密码错误') {
                        this.$message.error(response.data.msg);
                    } else {
                        sessionStorage.setItem('user', JSON.stringify(response.data.user));
                        sessionStorage.setItem('mainclass', '所有');
                        this.$notify({
                            title: '成功',
                            message: '登陆成功',
                            type: 'success',
                        });
                        if (response.data.user.access == '1') {
                            this.$router.push('/backstage');
                        } else {
                            this.$router.push('/main');
                        }
                        this.user = JSON.parse(sessionStorage.getItem('user'));
                    }
                });
            }
        },
    },
    created: function() {
        if (JSON.parse(sessionStorage.getItem('user')) != null) this.user = JSON.parse(sessionStorage.getItem('user'));
        else this.user.head = 'head/head2.jpg';
    },
};
</script>

<style lang="scss">
//pc端
@media screen and (min-width: 992px) and (max-width: 1920px) {
    .login {
        background-color: #3e3d43;
        height: 100% !important;
    }
    .login_box {
        width: 25%;
        height: 400px;
        background-color: #f7f7f7;
        border-radius: 3%;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        .avatar_box {
            height: 25%;
            width: 25%;
            border: 1px solid rgb(240, 240, 240);
            border-radius: 50%;
            padding: 1%;
            box-shadow: 0 0 15px #ddd;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgb(255, 255, 255);
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #eee;
            }
        }
    }
    .login_from {
        text-align: center;
        width: 70%;
        margin: 20% auto;
    }
    .btns {
        margin-top: 0px;
    }
    .btn_logoin {
        width: 100%;
        height: 40px;
        margin-left: 0px;
        margin-top: 0px;
        background-color: #3e3d43;
        color: white;
        transition: all 0.5s;
        border-radius: 5px;
        font-size: 18px;
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

    .log-bot {
        float: right;
    }
}

//移动端
@media screen and (max-width: 767px) {
    .login {
        background-color: #3e3d43;
        height: 100% !important;
    }
    .login_box {
        width: 100%;
        height: 100%;
        background-color: #f7f7f7;
        position: absolute;
        top: 75%;
        left: 50%;
        transform: translate(-50%, -50%);
        .avatar_box {
            height: 18%;
            width: 30%;
            border: 1px solid rgb(240, 240, 240);
            border-radius: 50%;
            padding: 1%;
            box-shadow: 0 0 15px #ddd;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgb(255, 255, 255);
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #eee;
            }
        }
    }
    .login_from {
        text-align: center;
        width: 90%;
        margin: 25% auto;
    }
    .btns {
        margin-top: 0px;
    }
    .btn_logoin {
        width: 100%;
        height: 40px;
        margin-left: 0px;
        margin-top: 0px;
        background-color: #3e3d43;
        color: white;
        transition: all 0.5s;
        border-radius: 5px;
        font-size: 21px;
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

    .log-bot {
        float: right;
    }
}
</style>
