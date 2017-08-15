$(function (){
	//初始化折线图
	var myEcharts = echarts.init(document.getElementById("myEcharts"));
    var optionData = {
        color: ["#62caec", "#ff5752", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
        title:{
            text:"区域销量数据图",
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
            bottom: "40",
            y2:140,
            containLabel: true
        },
        xAxis: {
            axisLine: {
                lineStyle: {
                    color: "#666",
                    width: 1
                }
            },
            axisLabel:{ //斜角显示横轴
                interval: 0,
                rotate: -45
            },
            nameGap:"50",
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
	var finallyData = {
		legend: {
			data: []
		},
        xAxis:{
			data:[]
		},
		series: []
	};
    // var resultData = {
     //    "result":"1",
     //    "list":[{
     //        "code":"HZ",
     //        "name":"杭州销售部",
     //        "list":[
     //            {
     //                "code":"2",
     //                "count":"12",
     //                "name":"Liv",
     //                "type":"1"
     //            },
     //            {
     //                "code":"1",
     //                "count":"3",
     //                "name":"Momentum",
     //                "type":"1"
     //            },
     //            {
     //                "code":"2",
     //                "count":"8",
     //                "name":"Giant",
     //                "type":"2"
     //            },
     //            {
     //                "code":"1",
     //                "count":"25",
     //                "name":"Momentum",
     //                "type":"2"
     //            }
     //        ]
     //    },
     //        {
     //            "code":"SX",
     //            "name":"山西销售部",
     //            "list":[
     //            ]
     //        },
     //        {
     //            "code":"BJ",
     //            "name":"北京销售部",
     //            "list":[
     //                {
     //                    "code":"3",
     //                    "count":"5",
     //                    "name":"Giant",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"2",
     //                    "count":"56",
     //                    "name":"Liv",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"1",
     //                    "count":"36",
     //                    "name":"Momentum",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"2",
     //                    "count":"25",
     //                    "name":"Giant",
     //                    "type":"2"
     //                },
     //                {
     //                    "code":"1",
     //                    "count":"34",
     //                    "name":"Momentum",
     //                    "type":"2"
     //                }
     //            ]
     //        },
     //        {
     //            "code":"SZ",
     //            "name":"深圳销售部",
     //            "list":[
     //                {
     //                    "code":"3",
     //                    "count":"89",
     //                    "name":"Giant",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"2",
     //                    "count":"23",
     //                    "name":"Liv",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"1",
     //                    "count":"3",
     //                    "name":"Momentum",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"2",
     //                    "count":"42",
     //                    "name":"Giant",
     //                    "type":"2"
     //                },
     //                {
     //                    "code":"1",
     //                    "count":"36",
     //                    "name":"Momentum",
     //                    "type":"2"
     //                }
     //            ]
     //        },
     //        {
     //            "code":"SH",
     //            "name":"上海销售部",
     //            "list":[
     //                {
     //                    "code":"3",
     //                    "count":"96",
     //                    "name":"Giant",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"2",
     //                    "count":"18",
     //                    "name":"Liv",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"1",
     //                    "count":"26",
     //                    "name":"Momentum",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"2",
     //                    "count":"36",
     //                    "name":"Giant",
     //                    "type":"2"
     //                },
     //                {
     //                    "code":"1",
     //                    "count":"46",
     //                    "name":"Momentum",
     //                    "type":"2"
     //                }
     //            ]
     //        },
     //        {
     //            "code":"HB",
     //            "name":"湖北销售部",
     //            "list":[
     //                {
     //                    "code":"3",
     //                    "count":"89",
     //                    "name":"Giant",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"2",
     //                    "count":"58",
     //                    "name":"Liv",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"1",
     //                    "count":"72",
     //                    "name":"Momentum",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"2",
     //                    "count":"28",
     //                    "name":"Giant",
     //                    "type":"2"
     //                },
     //                {
     //                    "code":"1",
     //                    "count":"65",
     //                    "name":"Momentum",
     //                    "type":"2"
     //                }
     //            ]
     //        },
     //        {
     //            "code":"XJ",
     //            "name":"新疆销售部",
     //            "list":[
     //                {
     //                    "code":"3",
     //                    "count":"16",
     //                    "name":"Giant",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"2",
     //                    "count":"15",
     //                    "name":"Liv",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"1",
     //                    "count":"13",
     //                    "name":"Momentum",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"2",
     //                    "count":"18",
     //                    "name":"Giant",
     //                    "type":"2"
     //                },
     //                {
     //                    "code":"1",
     //                    "count":"55",
     //                    "name":"Momentum",
     //                    "type":"2"
     //                }
     //            ]
     //        },
     //        {
     //            "code":"FJ",
     //            "name":"福建销售部",
     //            "list":[
     //                {
     //                    "code":"3",
     //                    "count":"63",
     //                    "name":"Giant",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"2",
     //                    "count":"42",
     //                    "name":"Liv",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"1",
     //                    "count":"62",
     //                    "name":"Momentum",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"2",
     //                    "count":"59",
     //                    "name":"Giant",
     //                    "type":"2"
     //                },
     //                {
     //                    "code":"1",
     //                    "count":"37",
     //                    "name":"Momentum",
     //                    "type":"2"
     //                }
     //            ]
     //        },
     //        {
     //            "code":"HN",
     //            "name":"河南销售部",
     //            "list":[
     //                {
     //                    "code":"3",
     //                    "count":"85",
     //                    "name":"Giant",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"2",
     //                    "count":"36",
     //                    "name":"Liv",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"1",
     //                    "count":"45",
     //                    "name":"Momentum",
     //                    "type":"1"
     //                },
     //                {
     //                    "code":"2",
     //                    "count":"99",
     //                    "name":"Giant",
     //                    "type":"2"
     //                },
     //                {
     //                    "code":"1",
     //                    "count":"101",
     //                    "name":"Momentum",
     //                    "type":"2"
     //                }
     //            ]
     //        }
     //    ]
    // };
    var resultData;//存储获取的数据
    // var code = $.fn.setCookie("abc",)
	// var code = $.fn.getCookie("");//从cookie取得
	//请求数据
	function getAjaxData(){
		$.ajax({
            url:"http://192.168.9.18:8080/giantService/report/areaDimension",
            type:"post",
            // data:{"userId":"721047","dimension":"dealer","roleCode":"gck","role":"sbu"},
            data:{"userId":"721047","dimension":"sbu","roleCode":"","role":"admin"},
            dataType:"json",
            async:false,
            success:function (data){
                resultData = data;
                console.log(resultData)
                setResultData(resultData);
            },
            error:function (error){
                alert("error"+error);
            }
		})
	}
    getAjaxData();
	//拆分数据
    function setResultData(data){
        for(var i = 0; i < data.list.length;i++){
            var area = data.list[i].name;//获取经销商或者sbu名字
            finallyData.xAxis.data.push(area);//给X轴写入数据
        }
        //根据x轴数据添加到表中
        var allData= [
            {
                "brand":"莫曼顿自行车",
                "data":[]
            },
            {
                "brand":"liv自行车",
                "data":[]
            },
            {
                "brand":"捷安特自行车",
                "data":[]
            },
            {
                "brand":"莫曼顿电动车",
                "data":[]
            },
            {
                "brand":"捷安特电动车",
                "data":[]
            }
        ];
        //先将所有数据都置为0
        for(var i = 0; i < 5;i++){
            for(var j = 0; j < data.list.length;j++){
                allData[i].data.push(0);
            }
        }
        //有数据的就把数据置为传入的数据
        for(var j = 0; j < data.list.length;j++){//先遍历外层所有区域的数据
            for(var k = 0; k < data.list[j].list.length;k++){//在遍历内层list数据
                //code是1,type是1,获得品牌为莫曼顿自行车;
                if(data.list[j].list[k].code == "1" && data.list[j].list[k].type == "1"){
                    allData[0].data[j] = data.list[j].list[k].count;
                }
                //code是2,type是1,获得品牌为liv自行车;
                if(data.list[j].list[k].code == "2" && data.list[j].list[k].type == "1"){
                    allData[1].data[j] = data.list[j].list[k].count;
                }
                //code是3,type是1,获得品牌为捷安特自行车;
                if(data.list[j].list[k].code == "3" && data.list[j].list[k].type == "1"){
                    allData[2].data[j] = data.list[j].list[k].count;
                }
                //code是1,type是2,获得品牌为莫曼顿电动车;
                if(data.list[j].list[k].code == "1" && data.list[j].list[k].type == "2"){
                    allData[3].data[j] = data.list[j].list[k].count;
                }
                //code是2,type是2,获得品牌为捷安特电动车;
                if(data.list[j].list[k].code == "2" && data.list[j].list[k].type == "2"){
                    allData[4].data[j] = data.list[j].list[k].count;
                }
            }
        }
        for(var i = 0; i < allData.length;i++){
            finallyData.legend.data.push(allData[i].brand);//给类型写入数据
            var brandList = {
                name: allData[i].brand,
                type: 'bar',
                stack: '销量',
                data: []
            };
            for(var j = 0; j < allData[i].data.length;j++){
                brandList.data.push(allData[i].data[j]);
            }
            finallyData.series.push(brandList);//写入销量数据
        }
        console.log(finallyData);
    }
    function showCharts(){
        var newData = $.extend(true,optionData,finallyData);
        myEcharts.setOption(newData);
        setTimeout(function (){
            myEcharts.resize();
        },200);
    }
    showCharts();
    $(window).resize(function (){
        myEcharts.resize();
    });
})