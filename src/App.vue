<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-03-04 18:42:33
 * @LastEditTime: 2021-06-03 16:13:06
 * @FilePath: \vuebook\src\App.vue
-->
<template>
    <div id="app">
        <router-view v-if="isRouterAlive"></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            isRouterAlive: true,
        };
    },

    methods: {
        reload() {
            this.isRouterAlive = false;
            this.$nextTick(function() {
                this.isRouterAlive = true;
            });
        },
    },
    provide() {
        return {
            reload: this.reload,
        };
    },
};
</script>
<style lang="scss">
#app {
    overflow-x: auto;
    overflow-y: auto;
    // pointer-events: none;
    outline: medium;
    background-color: #f7f7f7;
}
</style>
