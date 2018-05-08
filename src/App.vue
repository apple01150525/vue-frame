<template>
  <div id="app">
  	<nav-bar></nav-bar>
    <div class = "content">
        <side-bar></side-bar>
        <div class = "main-box" :class = "{'fold' : fold}">
            <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/common/portalBar";
import sideBar from "@/components/common/sideBar";
import {mapGetters} from "vuex";
export default {
    name: 'App',
    components: {navBar,sideBar},
    computed: {
        ...mapGetters({
            fold: "common/fold"
        })
    }
};
</script>

<style lang = "scss" scoped>
    #app{
        height: 100%;
        .content{
            background: #f1f2f7;
            height: calc(100% - 60px);
            overflow: hidden;
            .main-box{
                float: left;
                width: calc(100% - 220px);
                transition: all .5s ease;
                height: 100%;
                overflow-x: hidden;
                overflow-y: auto;
                box-sizing: border-box;
            }
            .main-box.fold{
                width: calc(100% - 50px);
                transition: all .5s ease;
            }
        }
    }
</style>
