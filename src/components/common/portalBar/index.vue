<style lang='scss' scoped>
    .mg-header{
        width: 100%;
        height: 60px;
        background: #fff;

    }
    .mg-logo{
        width: 220px;
        height: 100%;
        background: #283744;
        color: #fff;
        text-align: center;
        line-height: 60px;
        font-size: 18px;
        float: left;
    }
    .mg-info{
        text-align: right;
        ul>li{
            display: inline-block;
            line-height: 60px;
            i{
                font-size: 20px;
            }
        }
    }
    .mg-header:after{
        content: "";
        clear: both;
        display: block;
    }
</style>
<template>
    <div class = "mg-header" v-if = "!navHidden">
        <div class="mg-logo">lalalal</div>
        <div class="mg-info">
            <ul>
                <li>
                    <i class="icon iconfont icon-mail_fill"></i>
                </li>
                <li>
                    <i class="icon iconfont icon-createtask_fill"></i>
                </li>
                <li>
                    <i class="icon iconfont icon-mine_fill"></i>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      msg: 'hello world'
    }
  },
  computed: {
    ...mapGetters({
      navHidden: 'common/navHidden'
    })
  },
  methods: {}
}
</script>
