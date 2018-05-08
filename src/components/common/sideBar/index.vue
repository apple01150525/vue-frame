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
    }
    .mg-aside.fold{
            width: 50px;
        }
</style>
<template>
    <div class = "mg-aside" :class = "{'fold': fold}">
        <div class="switch-btn" @click = "unfoldOrFold">
            <i class="icon iconfont" :class = "[fold ? 'icon-zhanxiancaidan-' : 'icon-suohuicaidan-']"></i>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    export default {
        data () {
            return {};
        },
        computed:{
            ...mapGetters({
                fold:'common/fold'
            })
        },
        methods: {
            unfoldOrFold () {
                const flag = this.fold ? false : true;
                this.$store.commit("common/updateFold",flag);
            }
        }
    };
</script>