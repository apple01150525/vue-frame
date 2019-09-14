<style lang = "scss" scoped>
    .mg-aside{
        width: 220px;
        height: 100%;
        background: #39435C;
        transition: all .5s ease;
        position: relative;
        float: left;
        .switch-btn{
            width: 100%;
            background: #2E2E2E;
            color: #fafafa;
            text-align: center;
            cursor: pointer;
            padding: 5px 0;
        }
        .mg-nav{
            li{
                margin-top: 10px;
                line-height: 25px;
                padding-left: 15px;
                i{
                    color: #eee;
                }
                span{
                    color: #eee;
                }
                .next-nav{
                    li{
                        padding-left: 20px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .mg-aside.fold{
        width: 50px;
        .mg-nav{
            li{
                li{
                    padding-left: 0;
                }
            }
        }
    }
</style>
<template>
    <div class = "mg-aside" v-show = "!sideHidden" :class = "{'fold': fold}">
        <div class="switch-btn" @click = "unfoldOrFold">
            <i class="icon iconfont" :class = "[fold ? 'icon-zhanxiancaidan-' : 'icon-suohuicaidan-']"></i>
        </div>
        <ul class = "mg-nav">
            <li v-for = "(item,index) in nav" :key="index">
                <i class="icon iconfont" :class = "item.class"></i>
                <span v-show = "!fold">{{item.name}}</span>
                <ul class = "next-nav">
                    <li v-for = "(i, index) in item.nav"  :key="index" @click = "updateView(i.route)">
                        <i class="icon iconfont" :class = "i.class"></i>
                        <span v-show = "!fold">{{i.name}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
import navConfig from './config'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      nav: navConfig
    }
  },
  computed: {
    ...mapGetters({
      fold: 'common/fold',
      sideHidden: 'common/sideHidden'
    })
  },
  methods: {
    unfoldOrFold () {
      const flag = !this.fold
      this.$store.commit('common/updateFold', flag)
    },
    updateView (routeName) {
      console.log(routeName)
      this.$router.push({ name: routeName })
    }
  }
}
</script>
