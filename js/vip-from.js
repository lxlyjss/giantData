$(function (){
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
	var resultData = {
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
                    {"fromType":"捷安特嘉年华","fromCount":"1522"},
					{"fromType":"捷安特赛事网站","fromCount":"1822"},
                    {"fromType":"旅行社网站","fromCount":"1522"},
                    {"fromType":"微信","fromCount":"1522"}
                ]
            },
            {
                "date":"20170510",
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
                "date":"20170511",
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
                "date":"20170512",
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
					{"fromType":"捷安特赛事网站","fromCount":"1822"},
                    {"fromType":"旅行社网站","fromCount":"1522"},
                    {"fromType":"微信","fromCount":"1522"}
                ]
            },
            {
                "date":"20170602",
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
                "date":"20170603",
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
                "date":"20170604",
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
                "date":"20170605",
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
            }
		]
    };
	//初始化柱状图容器
    var myEcharts = echarts.init(document.getElementById("myEcharts"));
    //初始化饼状图容器
    var pieCharts = echarts.init(document.getElementById("myPieCharts"));
	//获取数据
	function getData(){
	    //获取时间段参数
        var dateArea = $("#dateInput").val().split(" - ");
        var date = dateArea.map(function (a){
           return a.replace(/\//g,"");
        });
		//页面初始化
		// $.ajax({
		// 	url:"",
		// 	data:{date},
		// 	dataType:"json",
		// 	success:function (resultData){
				var myData = resultData;
				//给vipFromData赋值
        		setVipFromData(myData,vipFromData);
                setPieData(vipPieData,0)
		// 	},
		// 	error:function (){
		// 		alert("获取数据失败!请重新刷新页面");
		// 	}
		// })
	}
    getData();
    //给vipFromData赋值
    function setVipFromData(data,newData){
		//给legend赋值
		for(var i = 0; i < data.data[0].hisData.length;i++){
            newData.legend.data.push(data.data[0].hisData[i].fromType);
        }
		//给xAxis的data赋值
		for(var i = 0; i < data.data.length;i++){
			newData.xAxis.data.push(data.data[i].date);
		}
		//给series赋值
		for(var i = 0; i < data.data[0].hisData.length;i++){
			var tempObj = {
				name: data.data[0].hisData[i].fromType,
				type: "bar",
				stack: "总量",
				data:[]
			};
            for(var j = 0;j < data.data.length;j++){
                tempObj.data.push(data.data[j].hisData[i].fromCount);
			}
            newData.series.push(tempObj);
		}
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
        console.log(pieData)
        setTimeout(function (){
            pieCharts.resize();
        },200);
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

    //初始化折线图
    showVipData();
    //初始化饼图
    showPieCharts();
});