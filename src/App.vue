<template>
  <div id="app">
    <nav-bar :class = "{'nav-bar': !navHidden}"></nav-bar>
    <div class = "content">
        <side-bar></side-bar>
        <div class = "main-box" :class = "{'fold' : fold, 'side-bar': !sideHidden}">
            <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/common/portalBar'
import sideBar from '@/components/common/sideBar'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components: {navBar, sideBar},
  computed: {
    ...mapGetters({
      fold: 'common/fold',
      sideHidden: 'common/sideHidden',
      navHidden: 'common/navHidden'
    })
  }
}
</script>

<style scoped>
    #app{
      height: 100%;
    }
    .content{
      height: 100%;
      background: #f1f2f7;
      overflow: hidden;
    }
    .nav-bar{
      height: calc(100% - 60px);
    }
    .side-bar{
        padding: 15px;
        width: calc(100% - 220px);
    }
    .main-box.fold{
      width: calc(100% - 50px);
      transition: all .5s ease;
    }
    .main-box{
      float: left;
      transition: all .5s ease;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      box-sizing: border-box;
    }
</style>
