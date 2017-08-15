$(function (){
	//初始化折线图
	var myEcharts = echarts.init(document.getElementById("myEcharts"));
    var optionData = {
		color: ["#62caec", "#ff5752", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
		toolbox:{
			show:true,
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
		//图例,设置类型提示的信息栏
		legend: {
			textStyle: {
				fontFamily: "tahoma, Helvetica Neue, Helvetica, Microsoft Yahei, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif"
			},
			data: [],
			//设置位置
	//					x: "200",
	//					y: "15",
	//					orient: 'vertical'上下排列
		},
	
		grid: {
			left: "0", //4%
			right: "0", //4%
			top: "50",
			bottom: "0",
			containLabel: true,
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
			data: ["2017/05/30", "2017/05/31", "2017/06/01", "2017/06/02", "2017/06/03", "2017/06/04", "2017/06/05", "2017/06/06", "2017/06/07", "2017/06/08", "2017/06/09", "2017/06/10", "2017/06/11", "2017/06/12", "2017/06/13", "2017/06/14", "2017/06/15", "2017/06/16", "2017/06/17", "2017/06/18", "2017/06/19", "2017/06/20", "2017/06/21", "2017/06/22", "2017/06/23", "2017/06/24", "2017/06/25", "2017/06/26", "2017/06/27", "2017/06/28", "2017/06/29", "2017/06/30", "2017/07/01", "2017/07/02", "2017/07/03", "2017/07/04", "2017/07/05", "2017/07/06"]
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
	var tmp_chartoption_xinzeng = {
		legend: {
			data: ["新增人数"],
		},
		series: [{
			name: "新增人数",
			type: "bar",
			smooth: true,
			data: [2, 10, 15, 20, 21, 21, 21, 30, 38, 40, 40, 200, 55, 55, 60, 61, 61, 70, 71, 72, 73, 77, 79, 79, 80, 81, 81, 86, 86, 87, 150, 98, 500, 102, 102, 1003, 250, 526]
		}]
	};
	var tmp_chartoption_liushi = {
		legend: {
			data: ["流失人数"],
		},
		series: [{
			name: "流失人数",
			type: "bar",
			smooth: true,
			data: [22, 20, 35, 20, 21, 21, 41, 30, 38, 40, 100, 60, 55, 55, 60, 61, 61, 70, 71, 72, 73, 77, 79, 19, 80, 11, 81, 86, 86, 87, 30, 98, 60, 102, 102, 103, 50, 26]
		}]
	};
	var tmp_chartoption_jingzeng = {
		legend: {
			data: ["净增人数"],
		},
		series: [{
			name: "净增人数",
			type: "line",
			smooth: true,
			data: [12, 50, 85, 40, 31, 41, 21, 30, 38, 40, 40, 200, 55, 155, 60, 61, 61, 70, 71, 72, 273, 77, 79, 279, 80, 81, 181, 86, 86, 87, 150, 98, 200, 102, 102, 303, 250, 226]
		}]
	};
	var tmp_chartoption_leiji = {
		legend: {
			data: ["累计用户"],
		},
		series: [{
			name: "累计用户",
			type: "line",
			smooth: true,
			data: [2005, 2010, 2015, 2020, 2021, 2091, 2160, 2303, 2288, 2408, 2490, 2500, 2555, 2655, 2660, 2761, 2861, 2870, 2971, 2872, 2973, 2977, 3079, 3179, 3280, 3381, 3681, 3786, 3826, 3987, 4150, 4298, 4500, 4612, 4702, 4703, 4725, 4856]
		}]
	};
	var newData = $.extend({},optionData,tmp_chartoption_leiji);
	var newData2 = $.extend({},optionData,tmp_chartoption_liushi);
    var newData3 = $.extend({},optionData,tmp_chartoption_jingzeng);
    myEcharts.setOption(newData);
    myEcharts2.setOption(newData2);
    myEcharts3.setOption(newData3);
    setTimeout(function (){
		myEcharts.resize();
        myEcharts2.resize();
        myEcharts3.resize();
	},200);
	$(window).resize(function (){
		myEcharts.resize();
        myEcharts2.resize();
        myEcharts3.resize();
	})
})