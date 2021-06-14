<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-21 15:14:16
 * @LastEditTime: 2021-06-04 10:00:13
 * @FilePath: \vuebook\src\components\Book_details\Useredit.vue
-->
vh
<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-21 10:24:40
 * @LastEditTime: 2021-05-21 15:10:50
 * @FilePath: \vuebook\src\components\Book_details\Personalhomepage.vue
    
-->
<template>
    <div class="per-c">
        <div class="personal-box">
            <el-form class="login_from">
                <div class="heads">
                    <h2 style="color:#333339">编辑个人信息</h2>
                </div>
                <ImgCutter class="headimg" v-on:cutDown="cutDown">
                    <!-- <button slot="open">切换图片</button> -->
                    <el-avatar slot="open" v-if="user.head" class="imgb" shape="circle" :size="100" :src="headurl + user.head"></el-avatar>
                </ImgCutter>

                <el-form-item>
                    <template>
                        <el-radio v-model="user.gender" label="男">男</el-radio>
                        <el-radio v-model="user.gender" label="女">女</el-radio>
                    </template>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="user.nicknames" class="inps" prefix-icon="iconfont icon-nickname" placeholder="我的昵称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="user.userPass" class="inps" prefix-icon="iconfont icon-mima" placeholder="我的密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="user.number" class="inps" prefix-icon="iconfont icon-mobile-fill" placeholder="电话号码"></el-input>
                </el-form-item>
                <textarea v-html="user.signature" v-model="user.signature" class="text-ss"></textarea>

                <!-- 按钮 -->
                <div class="btns">
                    <input @click="UpdateUser()" type="button" value="提 交" class="btn" />
                    <input @click="toxx()" type="button" value="返 回" class="btn" />
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
import ImgCutter from 'vue-img-cutter';
import { GetUserAPI, UpdateUserAPI, ToImgHeadApi } from '../../request/api';
export default {
    name: 'refresh',
    inject: ['reload'],
    components: {
        ImgCutter,
    },
    data() {
        return {
            imageUrl: '',
            user: {},
        };
    },
    created: function() {
        GetUserAPI({
            userId: JSON.parse(sessionStorage.getItem('user')).userId,
        }).then(res => {
            this.user = res.data;
            console.log(this.user);
        });
    },
    methods: {
        cutDown(data) {
            this.user.file = data.file;
            data.imageUrl;
        },
        toxx() {
            this.$router.push('/main/personal');
        },
        UpdateUser() {
            UpdateUserAPI({
                userId: this.user.userId,
                userPass: this.user.userPass,
                nicknames: this.user.nicknames,
                access: this.user.access,
                time: this.user.time,
                gender: this.user.gender,
                signature: this.user.signature,
                number: this.user.number,
            }).then(res => {});

            const headfile = new FormData();
            Object.keys(this.user).map(key => {
                headfile.append(key, this.user[key]);
            });
            ToImgHeadApi(headfile).then(res => {
                console.log(res.data);
            });

            GetUserAPI({
                userId: JSON.parse(sessionStorage.getItem('user')).userId,
            }).then(res => {
                this.user = res.data;
                sessionStorage.setItem('user', JSON.stringify(response.data));
                this.reload();
            });
            this.$notify({
                title: '用户信息',
                message: '修改成功',
                type: 'success',
            });

            this.reload();
            this.$router.push('/main/personal');
        },
    },
};
</script>

<style lang="scss" scoped>
.headimg {
    text-align: center;
    margin-top: 2px;
}
.tx {
    text-align: center;
}
/deep/ .el-radio__input.is-checked .el-radio__inner {
    border-color: #ac3030;
    background: #ac3030;
}
/deep/ .el-radio__input.is-checked + .el-radio__label {
    color: black;
}
.text-ss {
    // margin-top: 4px;
    resize: none;
    outline: none;
    width: 98.53%;
    height: 10vh;
    background-color: rgba(255, 255, 255, 0.65);
}
.per-c {
    background: url(../../assets/img/imgb/4.jpg);
    // -webkit-filter: brightness(200%); /* Chrome, Safari, Opera */
    // filter: brightness(125%);
    background-size: 100% 100%;
    width: 100%;
    height: 100vh;
    padding-top: 80px;
    box-sizing: border-box;
}
.inps {
    background-color: rgba(255, 255, 255, 0.3);
}
.btns {
    text-align: center;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    margin-top: 2%;
    width: 100%;
}
.imgb {
    box-shadow: 0 2px 12px 0 rgba(92, 0, 0, 0.2);
}
.main {
    text-align: center;
}
.user-txt {
    padding: 4% 10%;
    font-size: 16px;
    height: 23%;
}
.personal-box {
    width: 24%;
    height: 86%;
    // background-color: rgba(255, 255, 255, 0.6);
    border-radius: 18px;
    padding: 4px 1%;
    box-sizing: border-box;
    margin: 0px auto;
    // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.title {
    text-align: center;
    margin-top: 2px;
}
h2 {
    margin: 0;
    margin-bottom: 20px;
    color: rgb(24, 23, 23);
}
.btn {
    width: 46%;
    text-align: center;
    height: 40px;
    background-color: #3e3d43;
    color: rgb(255, 255, 255);
    transition: all 0.5s;
    border-radius: 0px;
    font-size: 21px;
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
.el-divider__text {
    position: absolute;
    background-color: rgba(0, 0, 0, 0);
    padding: 0 20px;
    color: #303133;
}
.btntx {
    width: 30%;
    height: 30px;
    background-color: #3e3d43;
    color: rgb(255, 255, 255);
    transition: all 0.5s;
    border-radius: 0px;
    font-size: 18px;
    border: 0px;
}
.btntx:hover {
    background-color: #ac3030;
    color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 95, 95);
    font-weight: bold;
    border: none;
}

.btntx:focus {
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
/deep/ .el-input__inner {
    background-color: rgba(255, 255, 255, 0.75) !important;
}
.heads {
    display: flex;
}
</style>
