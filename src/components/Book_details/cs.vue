<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-05-10 08:33:50
 * @LastEditTime: 2021-05-26 16:14:28
 * @FilePath: \vuebook\src\components\Book_details\cs.vue
-->
<template>
    <div class="box">
        <div>{{ this.books[0].zjs[0].name }}</div>
        <div>{{ this.books[0].volumeName }}</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
import ImgCutter from 'vue-img-cutter';
import { guilei } from '../../assets/js/utils/u';
export default {
    components: {
        ImgCutter,
    },
    data() {
        return {
            isimg: false,
            imageUrl: '',
            User: {
                userId: 1,
                userName: 'leis',
                userPass: '123456',
            },
            books: null,
        };
    },

    methods: {
        cutDown(cutDown) {
            this.imageUrl = cutDown.dataURL;
            alert(this.imageUrl);
        },
    },
    beforeCreate: function() {
        GetBoosAPI({
            bookId: '2',
        })
            .then(response => {
                this.books = guilei(response.data);
                console.log(this.books);
            })
            .then()
            .catch(err => console.log(err));
    },
};
</script>

<style scoped lang="scss">
$yb: calc(100% - 200px);
.box {
    width: 100%;
    display: grid;
    grid-template-columns: 200px 1fr 200px;
}
.zb {
    background-color: brown;
}
.yb {
    background-color: rgb(192, 83, 83);
    display: flex;
    justify-content: space-between;
}
</style>
