<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-03-26 14:30:03
 * @LastEditTime: 2021-05-25 16:36:52
 * @FilePath: \vuebook\src\components\Registered.vue
-->
<template>
    <div class="registered">
        <div class="registered_box">
            <el-form label-width="0%" class="registered_from" :model="reg_from" :rules="rules" ref="reg_from">
                <h2 style="margin-top:0;color:#333339">注 册</h2>
                <!-- 用户名 -->
                <el-form-item prop="userName">
                    <el-input v-model="reg_from.userName" prefix-icon="iconfont icon-denglu" placeholder="请输入账号"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="passWord1">
                    <el-input v-model="reg_from.passWord1" prefix-icon="iconfont icon-mima" placeholder="请输入密码"></el-input>
                </el-form-item>
                <!-- 确认密码 -->
                <el-form-item prop="passWord2">
                    <el-input v-model="reg_from.passWord2" prefix-icon="iconfont icon-mima" placeholder="请确认密码"></el-input>
                </el-form-item>
                <!-- 图形密码 -->
                <el-form-item prop="verificationCode">
                    <el-input v-model="reg_from.verificationCode" placeholder="图形验证码">
                        <Gvc :changeCode.sync="identifyCode" ref="mycode" slot="append">发送验证码</Gvc>
                    </el-input>
                </el-form-item>
                <!-- 按钮 -->
                <el-form-item class="btns">
                    <input @click="Registration_verification('reg_from')" type="button" value="确   认" class="btn_logoin" />
                    <p class="log-bot">
                        <a href="#">找回密码</a>
                        |
                        <router-link to="/"><a href="#">登录</a></router-link>
                    </p>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import Gvc from '../components/utils/Graphic_verification_code.vue';
import { RegisteredAPI } from '../request/api.js';
import qs from 'qs';
export default {
    components: {
        Gvc,
    },
    data() {
        var isPass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.reg_from.passWord1) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        var isCode = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入验证码'));
            } else if (value !== this.identifyCode) {
                callback(new Error('验证码输入错误'));
            } else {
                callback();
            }
        };
        return {
            reg_from: {
                userName: '',
                passWord1: '',
                passWord2: '',
                verificationCode: '',
            },
            identifyCode: '', //当前生成的验证码
            rules: {
                userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                passWord1: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                passWord2: [{ validator: isPass, trigger: 'blur' }],
                verificationCode: [{ validator: isCode, trigger: 'blur' }],
            },
        };
    },

    methods: {
        Registration_verification(reg_from) {
            this.$refs[reg_from].validate(valid => {
                if (!valid) {
                    this.$message.error('注册失败:数据未通过校验,请检查您的输入');
                    this.$refs.mycode.changeCode();
                }
            });
            //注册
            RegisteredAPI({
                userName: this.reg_from.userName,
                pass1: this.reg_from.passWord1,
                pass2: this.reg_from.passWord2,
            }).then(response => {
                if (response.data.msg == '密码不一致' || response.data.msg == '用户名已存在' || response.data.msg == '密码需在6-16位') {
                    this.$message.error(response.data.msg);
                    this.$refs.mycode.changeCode();
                } else {
                    this.$message.success(response.data.msg);
                    this.$router.push('/login');
                }
            });
        },
    },
};
</script>
<style scoped lang="scss">
//pc端
@media screen and (min-width: 992px) and (max-width: 1920px) {
    .registered {
        background-color: #3e3d43;
        height: 100% !important;
    }
    .registered_box {
        width: 25%;
        height: 460px;
        background-color: #f7f7f7;
        border-radius: 3%;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .registered_from {
        text-align: center;
        width: 70%;
        margin: 9% auto;
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
        border: 1px solid #782712;
        // font-weight: bold;
        border: none;
    }
    .btn_logoin:focus {
        outline: none;
    }

    .log-bot {
        float: right;
    }
}
//平板端
@media screen and (min-width: 765px) and (max-width: 1500px) {
    .registered {
        background-color: #3e3d43;
        height: 100% !important;
    }
    .registered_box {
        width: 56%;
        height: 44%;
        background-color: #f7f7f7;
        border-radius: 3%;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .registered_from {
        text-align: center;
        width: 70%;
        margin: 9% auto;
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
        border: 1px solid #782712;
        // font-weight: bold;
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
    .registered {
        background-color: #3e3d43;
        height: 100% !important;
    }
    .registered_box {
        width: 100%;
        height: 100%;
        background-color: #f7f7f7;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .registered_from {
        text-align: center;
        width: 70%;
        margin: 9% auto;
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
        border: 1px solid #782712;
        // font-weight: bold;
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
