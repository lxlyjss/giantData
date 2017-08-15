$(function (){
	//初始化折线图
	var myEcharts = echarts.init(document.getElementById("myEcharts"));
    var optionData = {
        color: ["#62caec", "#ff5752", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
        title:{
            text:"产品销量数据图",
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
            //设置位置
            left:"center",
            top:"30px",
            data: []
        },
        grid: {
            left: "0", //4%
            right: "0", //4%
            top: "100",
            bottom: "0",
            containLabel: true
        },
        xAxis: {
            axisLine: {
                lineStyle: {
                    color: "#666",
                    width: 1
                }
            },
            //boundaryGap: false,
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
	var vipCountData = {
		legend: {
            data:["GCK","GCT","GCC"]
        },
        xAxis:{
            data:["捷安特自行车","莫曼顿自行车","liv自行车","捷安特电动车","莫曼顿电动车"]
		},
		series: [
		    {
                name: 'GCK',
                type: 'bar',
                //stack: '总量',
                data: [320, 302, 301,658,389]
            },
            {
                name: 'GCT',
                type: 'bar',
                //stack: '总量',
                data: [120, 132, 101,158,289]
            },
            {
                name: 'GCC',
                type: 'bar',
                //stack: '总量',
                data: [220, 682, 191,658,189]
            }
        ]

	};
	var resultData = {
        "result":"1",
        "data":[{
            "name":"捷安特",
            "code":"1",
            "type":"bike",
            "saleList":[
                {"name":"GCC","code":"1","salesCount":"572"},
                {"name":"GCT","code":"2","salesCount":"512"},
                {"name":"GCK","code":"3","salesCount":"522"}
            ]
        },
        {
            "brand":"莫曼顿",
            "code":"2",
            "type":"bike",
            "saleList":[
                {"name":"GCC","code":"1","salesCount":"522"},
                {"name":"GCT","code":"2","salesCount":"522"},
                {"name":"GCK","code":"3","salesCount":"522"}
            ]
        },
        {
            "brand":"liv",
            "type":"bike",
            "saleList":[
                {"area":"GCC","salesCount":"522"},
                {"area":"GCK","salesCount":"522"},
                {"area":"GCT","salesCount":"522"}
            ]
        },
        {
            "brand":"捷安特电动车",
            "type":"ele",
            "saleList":[
                {"area":"GCC","salesCount":"522"},
                {"area":"GCK","salesCount":"522"},
                {"area":"GCT","salesCount":"522"}
            ]
        },
        {
            "brand":"莫曼顿电动车",
            "type":"ele",
            "saleList":[
                {"area":"GCC","salesCount":"522"},
                {"area":"GCK","salesCount":"522"},
                {"area":"GCT","salesCount":"522"}
            ]
        }]

    };
	//请求数据
	function getAjaxData(){
		// $.ajax({
		//
		// })
		var localData = resultData;
        showData(localData);
	}
    getAjaxData();
	//展示数据
	function showData(data){
		//会员总数
		$("#allCount").text(data.nowVipCount);
		//昨日新增
		$("#yesAdd").text(data.yesterdayAdd);
		//显示时间段标题
		$("#startDate").text(data.data[0].date);
		$("#endDate").text(data.data[data.data.length-1].date);
		//处理图表数据
        //setData(vipCountData,data);
	}
	//拆分数据
	function setData(emptyData,httpData){
		for(var i = 0; i < httpData.data.length;i++){
			emptyData.xAxis.data.push(httpData.data[i].date);
            emptyData.series[0].data.push(httpData.data[i].hisCount);
		}
        showCharts();
	}
	function showCharts(){
        var newData = $.extend(true,optionData,vipCountData);
        myEcharts.setOption(newData);
        setTimeout(function (){
            myEcharts.resize();
        },200);
	}
    showCharts();
    $(window).resize(function (){
        myEcharts.resize();
    });

    //点击某一个品牌或者车系进入详情图表
    myEcharts.on("click", eConsole);
    function eConsole(param){
        //获取点击的第几个柱状图
        var index = param.dataIndex;
        console.log(param);
    }
    function showInfoCharts(){

    }
})