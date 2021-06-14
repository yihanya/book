<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-17 19:58:17
 * @LastEditTime: 2021-05-26 21:03:32
 * @FilePath: \vuebook\src\components\Book_Details.vue
-->
<template>
    <div>
        <div class="head">
            <idex></idex>
            <writer></writer>
        </div>
        <div class="main">
            <ml></ml>
            <comment></comment>
        </div>
    </div>
</template>

<script>
import idex from '../components/Book_details/Idex.vue';
import writer from '../components/Book_details/writer.vue';
import ml from '../components/Book_details/cate.vue';
import comment from '../components/Book_details/comment.vue';
export default {
    components: {
        idex,
        writer,
        ml,
        comment,
    },
    data() {
        return {};
    },
    created() {},
    methods: {},
};
</script>

<style lang="scss" scoped>
.head {
    display: flex;
    margin: 10px 208px;
    width: 1120px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
