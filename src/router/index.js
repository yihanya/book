/*
 * @name: 易寒鸦
 * @Description:
 * @Date: 2021-03-04 18:40:50
 * @LastEditTime: 2021-06-02 09:45:04
 * @FilePath: \vuebook\src\router\index.js
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/main',
    },
    {
        path: '/login',
        name: 'login',
        meta: { title: '愉阅快读 - 登录' },
        component: () => import('../views/login.vue'),
    },
    {
        path: '/registered',
        name: 'registered',
        meta: { title: '愉阅快读 - 注册' },
        component: () => import('../views/registered.vue'),
    },
    {
        path: '/main',
        name: 'main',
        meta: { title: '愉阅快读 - 主页' },
        beforeEnter: (to, from, next) => {
            if (JSON.parse(window.sessionStorage.getItem('user')) == null) {
                return next('/login');
            } else {
                next();
            }
        },
        component: () => import('../components/Main.vue'),
        redirect: '/main/ykyd',
        children: [
            {
                path: 'ykyd',
                name: 'ykyd',
                component: () => import('../components/Main_BookMall.vue'),
                beforeEnter: (to, from, next) => {
                    next();
                },
            },
            {
                path: 'mybook',
                name: 'mybook',
                meta: { title: '愉阅快读 - 我的书架' },
                component: () => import('../components/Main_BookList.vue'),
            },
            {
                // path: '',
                path: 'detailed',
                name: 'BookDetailed',
                meta: { title: '愉阅快读 - 书籍详情' },
                component: () => import('../components/Book_Details.vue'),
            },
            {
                path: 'ReadingBook',
                name: 'Reading',
                meta: { title: '愉阅快读 - 看书' },
                component: () => import('../components/Chapter_Reading.vue'),
            },
            {
                path: 'Author',
                name: 'Author',
                meta: { title: '愉阅快读 - 作者面板' },
                component: () => import('../components/Book_Author_zone/writing_books.vue'),
            },
            {
                path: 'AuthorBook',
                name: 'AuthorBook',
                meta: { title: '愉阅快读 - 作者面板 - 书籍' },
                component: () => import('../components/Book_Author_zone/writing_cate.vue'),
            },
            {
                path: 'content',
                name: 'content',
                meta: { title: '愉阅快读 - 作者面板 - 章节编辑' },
                component: () => import('../components/Book_Author_zone/writing_content.vue'),
            },
            //测试
            {
                path: '/tp',
                name: 'cs1',
                meta: { title: '愉阅快读 - cs' },
                component: () => import('../components/Book_details/cs.vue'),
            },
            {
                path: 'personal',
                name: 'personal',
                meta: { title: '愉阅快读 - 个人主页' },
                component: () => import('../components/Book_details/Personalhomepage.vue'),
            },
            {
                path: 'edipersonal',
                name: 'edipersonal',
                meta: { title: '愉阅快读 - 个人主页' },
                component: () => import('../components/Book_details/Useredit.vue'),
            },
            {
                path: 'search',
                name: 'search',
                meta: { title: '愉阅快读 - 搜索' },
                component: () => import('../components/Main_Booksearch.vue'),
            },
        ],
    },

    //后台路由
    {
        path: '/backstage',
        name: 'backstage',
        meta: { title: '愉阅快读 - 后台管理' },
        component: () => import('../components/Backstage/Navigation.vue'),
        beforeEnter: (to, from, next) => {
            if (JSON.parse(window.sessionStorage.getItem('user')).access == null) {
                return next('/login');
            } else if (JSON.parse(window.sessionStorage.getItem('user')).access == 0) {
                this.$notify.error({
                    title: '错误',
                    message: '请登录管理员账号',
                });
                return next('/login');
            } else {
                next();
            }
        },
        redirect: '/backstage/user',
        children: [
            {
                path: 'user',
                name: 'user',
                component: () => import('../components/Backstage/Navigations/User.vue'),
            },
            {
                path: 'book',
                name: 'book',
                component: () => import('../components/Backstage/Navigations/Book.vue'),
            },
            {
                path: 'comment',
                name: 'comment',
                component: () => import('../components/Backstage/Navigations/comment.vue'),
            },
            {
                path: 'shbook',
                name: 'shbook',
                component: () => import('../components/Backstage/toexamine/Book.vue'),
            },
            {
                path: 'shChapter',
                name: 'shChapter',
                component: () => import('../components/Backstage/toexamine/Chapter.vue'),
            },
            {
                path: 'Chapter',
                name: 'Chapter',
                component: () => import('../components/Backstage/Navigations/Chapter.vue'),
            },
        ],
    },
];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
});

export default router;
