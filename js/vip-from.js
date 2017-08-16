$(function (){
    $.fn.getAndShow = function (userId){
        var optionData = {
            color: ["#62caec", "#ff5752", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
            title:{
                text:"捷安特会员来源",
                left:"center"
            },
            toolbox:{
                show:true,
                right:"0",
                y:"0",
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            //提示框 鼠标移入图表上面的提示信息框
            tooltip: {
                trigger: "axis",
                //formatter: "{a}: {c}<br>{a1}: {c1}",
                backgroundColor: "rgba(44,44,44,.9)",
                extraCssText: "box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);padding: 10px;border-radius: 0;",
                textStyle: {
                    //文字大小
                    fontSize: 12,
                    extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);border-radius: 0;"
                },
                x:"right",
                y:"15"
            },
            //图例,设置fromType提示的信息栏
            legend: {
                textStyle: {
                    fontFamily: "tahoma, Helvetica Neue, Helvetica, Microsoft Yahei, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif"
                },
                data: [],
                //设置位置
                left: "center",
                top: "30px"
                // orient: 'vertical'
            },
            grid: {
                left: "0", //4%
                right: "0", //4%
                top: "100",
                bottom: "0",
                containLabel: true
            },
            xAxis: {
                //type: "category",
                //axisLabel: { rotate: -90 },
                axisLine: {
                    lineStyle: {
                        color: "#666",
                        width: 1
                    }
                },
                boundaryGap: false,
                data: []
            },
            yAxis: {
                //type: "value",
                axisLine: {
                    lineStyle: {
                        color: "#666",
                        width: 1
                    }
                }
            },
            //可以控制鼠标缩放
            dataZoom: [{
                type: "inside"
            }],

            series: []
        };
        var vipFromData = {
            legend: {
                data:[]
            },
            xAxis:{
                //日期
                data:[]
            },
            series: [

            ]
        };
        var optionPie = {
            title : {
                text:"某用户",
                x:'center',
                y:"80px"
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                show:true,
                orient: 'horizontal',
                left: 'left',
                data: []
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        var vipPieData = {
            title : {
                text:"某用户",
                x:'center'
            },
            legend: {
                data: []
            },
            series : [
                {
                    data:[]
                }
            ]
        };
        var localData = {
            "result":"1",
            "filterArea":["区域1","区域2","区域3"],
            "data":[{
                    "date":"20170506",
                    "hisData":[
                        {"fromType":"app","fromCount":"1522"},
                        {"fromType":"官网","fromCount":"1522"},
                        {"fromType":"QRcode","fromCount":"1522"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1522"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170507",
                    "hisData":[
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1522"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                    ]
                },
                {
                    "date":"20170508",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1522"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170509",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1522"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170510",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"QRcode","fromCount":"1522"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170511",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1522"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                    ]
                },
                {
                    "date":"20170512",
                    "hisData":[
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1522"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170513",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1522"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170514",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1532"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170515",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1532"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170516",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1522"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170517",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1522"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170518",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1532"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170519",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1532"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170520",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1522"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170521",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1522"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170522",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1532"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170523",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1532"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170524",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1322"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170525",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1522"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170526",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1532"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170527",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1322"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170528",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"5322"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170529",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1522"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170530",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1322"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170531",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1532"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170601",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1522"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特嘉年华","fromCount":"1522"},
                    ]
                },
                {
                    "date":"20170602",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"5322"},
                        {"fromType":"捷安特俱乐部","fromCount":"1522"},
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170603",
                    "hisData":[
                        {"fromType":"app","fromCount":"1528"},
                        {"fromType":"官网","fromCount":"1572"},
                        {"fromType":"QRcode","fromCount":"1532"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170604",
                    "hisData":[
                        {"fromType":"捷安特赛事网站","fromCount":"1822"},
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                },
                {
                    "date":"20170605",
                    "hisData":[
                        {"fromType":"旅行社网站","fromCount":"1522"},
                        {"fromType":"微信","fromCount":"1522"}
                    ]
                }
            ]
        };
        var myData;//存储数据
        var userId = userId;//存储用户id
        //初始化柱状图容器
        var myEcharts = echarts.init(document.getElementById("myEcharts"));
        //初始化饼状图容器
        var pieCharts = echarts.init(document.getElementById("myPieCharts"));
        //获取时间段参数
        var startDate = moment().subtract(30,'days').format("YYYYMMDD");
        var endDate = moment().subtract(1,'days').format("YYYYMMDD");
        var dateArea = startDate+","+endDate;
        //获取数据
        function getAjaxData(userId,date){
            //页面初始化
            // $.ajax({
            // 	url:"http://192.168.9.20:8080/giantService/userData/userFrom",
            // 	data:{"userId":userId,"dataArea":date},
            // 	dataType:"json",
            // 	success:function (resultData){
                    myData = localData;//存储数据
                    //给vipFromData赋值
                    if(myData.result == 1 && myData.data != null){
                        setDefaultData(myData,vipFromData);
                        setVipFromData(myData,vipFromData);
                        setPieData(vipPieData,0)
                    }else{
                        alert("获取数据失败!result=0或者data为空")
                    }
            // 	},
            // 	error:function (){
            // 		alert("获取数据失败!请检查接口是否有问题");
            // 	}
            // });
        }
        getAjaxData(userId,dateArea);
        //时间选择
        $(".date-select .btn").click(function (){
            var str = $("#dateInput").val().replace(" - ",",");
            var date = str.replace(/\//g,"");
            defaultData();//清空数据
            getAjaxData(userId,date)
        });
        //初始化数据
        function defaultData(){
            optionData.legend.data = [];
            optionData.xAxis.data = [];
            optionData.series = {};
            vipFromData.xAxis.data = [];
            vipFromData.series = {};
            vipFromData.legend.data = [];

            optionPie.legend.data = [];
            optionPie.series[0].data = [];
            vipPieData.legend.data = [];
            vipPieData.series[0].data = [];
        }
        //初始化数据都为0;
        function setDefaultData(data){
            var dateList = data.data.length;//获取有多少条数据,故多少天
            var typeList = data.data[0].hisData.length;//获取有多少条类型,
            var type = [];
            for(var i = 0; i < dateList;i++){
                vipFromData.xAxis.data.push(data.data[i].date);
            }
            for(var i = 0; i < typeList;i++){
                vipFromData.legend.data.push(data.data[0].hisData[i].fromType);
                type.push(data.data[0].hisData[i].fromType);
            }
            for(var i = 0; i < typeList;i++){
                var tempObj = {
                    name: type[i],
                    type: "bar",
                    stack: "总量",
                    data:[]
                };
                for(var j = 0; j < dateList;j++){
                    tempObj.data[j] = 0;
                    vipFromData.series[i] = tempObj;
                }
            }
        }
        //给vipFromData 的series赋值
        function setVipFromData(data,newData){
            for(var i = 0; i < data.data.length;i++){//31
                for(var j = 0; j < data.data[i].hisData.length;j++){//8
                    for(var k = 0; k < newData.legend.data.length;k++){
                        if(data.data[i].hisData[j].fromType == newData.legend.data[k]){
                            newData.series[k].data[i] = data.data[i].hisData[j].fromCount;
                        }
                    }
                }
            }
            showVipData();
            //遍历数据:首先遍历所有data下所有data数据,代表每一天数据量,里面在嵌套一个循环,遍历hisData数据,因为有的类型没有传,所有必须先给所有数据初始值0,第三个循环是为了重复if判断用的循环,其k值是所有类型的长度值,newData.series[k].data[i]之所以写k而不写j是为了准确定位到那个类型没有数据,如果写j就会造成数据错位.
        }
        //给vipPieData赋值
        function setPieData(data,index){
            //给title赋值
            data.title.text = vipFromData.xAxis.data[index];
            //data是vipPieData,数据从vipFromData中取
            data.legend.data = vipFromData.legend.data;
            data.series[0].data = [];
            for(var i = 0; i < vipFromData.series.length;i++){
                var tempObj = {
                    value:vipFromData.series[i].data[index],
                    name:vipFromData.legend.data[i]
                };
                data.series[0].data.push(tempObj);
            }
            showPieCharts();
        }
        //展示柱状图
        function showVipData(){
            var newData = $.extend(true,optionData,vipFromData);
            myEcharts.setOption(newData);
            setTimeout(function (){
                myEcharts.resize();
            },200);
        }
        //展示饼状图
        function showPieCharts(){
            var pieData = $.extend(true,optionPie,vipPieData);
            pieCharts.setOption(pieData);
            setTimeout(function (){
                pieCharts.resize();
            },200);
            console.log(pieData);
        }
        //改变窗口大小
        $(window).resize(function (){
            myEcharts.resize();
            pieCharts.resize();
        });
        //柱状图的点击事件
        myEcharts.on("click", eConsole);
        function eConsole(param){
            //获取点击的第几个柱状图
            var index = param.dataIndex;
            setPieData(vipPieData,index);
            showPieCharts();
        }
    }
});