<style></style>
<template>
    <div v-cloak>
        <h2>
            demo
        </h2>
        <table border="1" align="center" cellspacing="0">
            <tbody>
                <tr v-for = "item in tableData">
                    <td v-for = "i in item" :style = "{'background-color' : i.styleColor}"> {{i.id}}: {{i.value}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    const data = {
        13: 24,
        24: 36,
        37: 45,
        102: 123,
        178: 234,
        199: 23,
        201: 24,
        205: 36
    };
    const color = ['rgb(255,0,0)',' rgb(0,255,0)',' rgb(0,0,255)',' rgb(255,255,0)','rgb(0,255,255)',' rgb(255,0,255)'];
    // 将对象放入一个数组
    function getObjArr (obj) {
        const arr = [];
        for(const key in obj) {
            const item = {
                id: parseInt(key),
                value: obj[key]
            };
            arr.push(item);
        }
        return arr;
    }
    // 排序
    function compare (pro) {
        return function (obj1, obj2) {
            const val1 = obj1[pro];
            const val2 = obj2[pro];
            if (val1 < val2 ) { // 正序
                return 1;
            } else if (val1 > val2 ) {
                return -1;
            } else {
                return 0;
            }
        };
    }
    // 设置颜色
    function setColor (dataArr) {
        let cnt = -1;
        let lastValue = "";
        for(const key in dataArr) {
            dataArr[key].styleColor = (dataArr[key].value == lastValue ? color[cnt]: color[++cnt]);
            lastValue = dataArr[key].value;
        }
    }
    export default {
        data () {
            return {
                msg: "Hello World！",
                tableData: []
            };
        },
        created () {
            this.initData(data);
        },
        methods: {
            initData (data) {
                // 初始化数据
                let dataArr = getObjArr(data);
                // 根据值比较
                dataArr = dataArr.sort(compare('value'));
                setColor(dataArr);
                // 按照id排序
                dataArr = dataArr.sort(compare('id'));
                let cnt = dataArr.length -1;
                let arr = [];
                for(let i = 0; i < 256; i++) {
                    if(dataArr[cnt].id === i) {
                        // 查找id是否存在，存在放入数组，
                        arr.push(dataArr[cnt]);
                        cnt == 0? "" : cnt--;
                    }else{
                        // 不存在，放入初始值0
                        arr.push({
                            id: parseInt(i),
                            value: 0,
                            sytleColor: 'rgb(0,0,0)'
                        });
                    }
                    if((i+1)%16 == 0) {
                        this.tableData.push(arr);
                        arr = [];
                    }
                }
            }
        }
    };
</script>