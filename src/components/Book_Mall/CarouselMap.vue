<!--
 * @name: 易寒鸦
 * @Description: 
 * @Date: 2021-04-20 10:28:13
 * @LastEditTime: 2021-06-04 01:20:58
 * @FilePath: \vuebook\src\components\Book_Mall\CarouselMap.vue
-->
<template>
    <div class="cmap">
        <div class="carouselMap">
            <el-carousel height="321px" :interval="6000">
                <el-carousel-item v-for="(img, index) in imgList" :key="index">
                    <div class="img_box">
                        <el-image :src="img.url" @click="toimg(img.id)" class="img_zm"></el-image>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- <div class="zlis">
            <h6 class="tm">每日推荐</h6>
            <el-divider class="divder"></el-divider>

            <ul class="uit">
                <li class="lit">
                    <div class="btl">
                        [玄幻]
                        <a>斗破苍穹</a>
                    </div>
                </li>
                <li class="lit">
                    <div class="btl">
                        [玄幻]
                        <a>斗破苍穹</a>
                    </div>
                </li>
                <li class="lit">
                    <div class="btl">
                        [玄幻]
                        <a>大奉打更人</a>
                    </div>
                </li>
                <li class="lit">
                    <div class="btl">
                        [玄幻]
                        <a>流星蝴蝶剑</a>
                    </div>
                </li>
            </ul>
        </div> -->
    </div>
</template>

<script>
export default {
    props: ['imgList'],
    data() {
        return {};
    },
    computed: {},
    methods: {
        toimg(id) {
            this.$router.push({
                name: 'BookDetailed',
                query: {
                    bookId: id,
                },
            });
        },
    },
};
</script>

<style scoped lang="scss">
.cmap {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-content: space-between;
}
.carouselMap {
    background-color: black;
    width: 92%;
    // margin: 0.5%;
    margin-right: 4%;
    margin-top: 1%;
    margin-bottom: 1%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.img_box {
    // display: flex;
    // align-items: center;
    // justify-content: center;
    .img_zm {
        max-width: 100%;
        max-height: 100%;
        height: 100%;
        width: 100%;
    }
}
.zlis {
    width: 15.5%;
    height: 15%;
    display: flex;
    flex-direction: column;
    margin-top: 0.5%;
    margin-right: 4%;
    margin-left: 0.5%;
    // justify-content: space-between;
    align-items: center;
    background-color: #f7f6f2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    // height: 120px;
}
.btni {
    width: 110%;
    height: 15.35%;
    margin-left: 0px;
    margin-top: 5%;
    background-color: #f7f6f2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    color: rgb(2, 2, 2);
    transition: all 0.5s;
    border-radius: 5px;
    font-size: 18px;
    border: 0px;
}
.btni:hover {
    background-color: #ac3030;
    color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 95, 95);
    font-weight: bold;
    border: none;
}
.btni:focus {
    outline: none;
}
.iconfont {
    margin-right: 8px;
}
.uit {
    padding: 0;
    margin: 0;
}
.lit {
    width: 100%;
    margin: 0px;
    font-size: 12px;
}
.btl {
    float: left;
    font-size: 16px;
}
.zuoz {
    margin-right: 2px;
    font-size: 8px;
}
.tm {
    margin: 0;
    padding-top: 6px;
    font-size: 21px;
}
.divder {
    margin: 3px;
}
</style>
