$(function (){
    var dateArea;
    //判断当前设备屏幕宽度
    var deviceWidth = $(document).width();
    if(deviceWidth > 1000){
        $("body").addClass("nav-md");
    }else{
        $("body").addClass("nav-sm");
    }
    //当前文档的高度
    $("#aside").css("height",$(document).height());
    $(window).resize(function (){
        $("#aside").css("height",$(document).height());
    });
    //时间选择
    $('#dateInput').daterangepicker({
        //最大时间
        maxDate: moment().subtract(1,'days'),
        startDate: moment().subtract(30,'days'),
        endDate: moment().subtract(1,'days'),
        locale: {
            format : 'YYYY/MM/DD'
        },
        ranges : {
            "最近3日": [moment().subtract(3,'days'),moment()],
            '最近7日': [moment().subtract(7,'days'), moment()],
            '最近30日': [moment().subtract(30,'days'), moment()]
        },
    }, function(start, end, label) {
        //格式化日期显示框
        $('#dateInput').val(start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD'));
        dateArea = $('#dateInput').val();
        console.log(dateArea)
    });
    //获取时间段
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
		title:{
			text:"捷安特会员数量变化趋势图",
			left:"center"
		},
		//提示框 鼠标移入图表上面的提示信息框
		tooltip: {
			trigger: "axis",
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
            left: "center",
            top: "30px"
		},
	
		grid: {
			left: "0", //4%
			right: "0", //4%
			top: "80",
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
	var vipCountData = {
		legend: {
			data: ["累计用户"]
		},
        xAxis:{
			data:[]
		},
		series: [{
			name: "累计用户",
			type: "line",
			smooth: true,
			data: []
		}]
	};
	var resultData;//存储总数据
	//请求数据
	function getAjaxData(){
		$.ajax({
			url:"http://192.168.9.10:8080/giantService/userData/userChange",
			data:{"userId":"656409","dataArea":"20170604,20170804"},
			type:"get",
			async:false,
			success:function (data){
				resultData = data;
				console.log(resultData);
				if(resultData.result == 1){
                    showData(resultData);
				}else{
					alert("数据返回失败!result=0");
				}
			},
			error:function (error){
                alert("获取数据失败!请检查接口是否有问题");
			}
		});
	}

    getAjaxData();
	//展示数据
	function showData(data){
		//显示时间段标题
		$("#startDate").text(data.data[0].date);
		$("#endDate").text(data.data[data.data.length-1].date);
		//处理图表数据
        setData(vipCountData,data);
	}
	//拆分数据
	function setData(emptyData,httpData){
		for(var i = 0; i < httpData.data.length;i++){
			emptyData.xAxis.data.push(httpData.data[i].date);
            emptyData.series[0].data.push(httpData.data[i].hisCount);
		}
        showCharts();//展示数据
		addFilter();
	}
	function addFilter(){
		var filter = [];
		for(var i = 0; i < resultData.filterArea.length;i++){
			var temp = $("<option value='"+resultData.filterArea[i]+"'>"+resultData.filterArea[i]+"</option>");
            filter.push(temp);
		}
		$(".filter-select .areaSelect").append(filter);
	}
	function showCharts(){
        var newData = $.extend(true,optionData,vipCountData);
        myEcharts.setOption(newData);
        setTimeout(function (){
            myEcharts.resize();
        },200);
	}
    $(window).resize(function (){
        myEcharts.resize();
    })
})