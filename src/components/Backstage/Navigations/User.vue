<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-20 14:50:05
 * @LastEditTime: 2021-06-02 19:22:44
 * @FilePath: \vuebook\src\components\Backstage\Navigations\User.vue
-->
<template>
    <div class="user-box">
        <div class="head">
            <h2 class="bt">用户管理</h2>
            <!-- <div class="ssk">
                <input class="iss" v-model="input" placeholder=" 书名|作者" />
                <button class="ian iconfont icon-sousuo"></button>
            </div> -->
        </div>
        <div class="main">
            <el-table class="usertab" :data="userDate" height="640">
                <el-table-column prop="userId" label="ID"></el-table-column>
                <el-table-column prop="userName" label="用户名"></el-table-column>
                <el-table-column prop="nicknames" label="昵称"></el-table-column>
                <el-table-column prop="access" label="权限"></el-table-column>
                <el-table-column prop="time" label="注册时间"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="PermissionModification(scope.$index)">权限修改</el-button>
                        <!-- <el-button size="mini" type="info" @click="handleDelete()">消息</el-button>
                        <el-button size="mini" type="warning" @click="handleDelete()">封禁</el-button> -->
                        <el-button size="mini" type="danger" @click="deluser(scope.$index)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import { GetAllUsersAPI, DelUserAPI, UpdateUserAPI } from '../../../request/api';
export default {
    data() {
        return {
            input: '',
            userDate: [{}],
        };
    },
    created: function() {
        //获取所有用户信息
        GetAllUsersAPI({}).then(response => {
            const data = response.data;
            for (let i = 0; i < data.length; i++) {
                if (data[i].access == 0) {
                    data[i].access = '用户';
                } else if (data[i].access == 1) {
                    data[i].access = '管理员';
                }
            }
            this.userDate = data;
        });
    },
    methods: {
        deluser(i) {
            DelUserAPI({
                userId: this.userDate[i].userId,
            }).then(res => {
                this.$notify({
                    title: '用户管理',
                    message: '删除成功',
                    type: 'success',
                });
                GetAllUsersAPI({}).then(response => {
                    const data = response.data;
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].access == 0) {
                            data[i].access = '用户';
                        } else if (data[i].access == 1) {
                            data[i].access = '管理员';
                        }
                    }
                    this.userDate = data;
                });
            });
        },
        PermissionModification(i) {
            let x = -1;
            if (this.userDate[i].access == '用户') {
                this.userDate[i].access = '管理员';
                x = 1;
            } else if (this.userDate[i].access == '管理员') {
                this.userDate[i].access = '用户';
                x = 0;
            }
            UpdateUserAPI({
                // user: this.userDate[i],
                userId: this.userDate[i].userId,
                userPass: this.userDate[i].userPass,
                nicknames: this.userDate[i].nicknames,
                access: x,
                time: this.userDate[i].time,
                gender: this.userDate[i].gender,
                signature: this.userDate[i].signature,
            }).then(res => {});
            this.$notify({
                title: '用户管理',
                message: '权限已改变',
                type: 'success',
            });
        },
    },
};
</script>

<style lang="scss" scoped>
// $hm: 0.05 * 1920px;
.ssk {
    display: flex;
    margin-right: 1vh;
}
.bt {
    margin: 0;
    margin-left: 1vh;
}
.icon-sousuo:before {
    color: rgb(255, 255, 255);
}
.head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
.user-box {
    margin: 5vh auto;
    width: 100%;
    height: 100%;
}
.iss {
    height: 34px !important;
    width: 260px;
    margin: 0;
    outline: medium;
    border: 2px solid #ac3030;
    padding-left: 8px;
}
.ian {
    height: 40px !important;
    width: 72px;
    background-color: #ac3030;
    outline: medium;
    border-style: none;
}
.ian:hover {
    height: 40px !important;
    width: 72px;
    background-color: #b82323;
    outline: medium;
    border-style: none;
}
.main {
    height: 100%;
}
.usertab {
    height: 100%;
}
</style>
