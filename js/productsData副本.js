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
    var resultData;//存储获取的数据
    var index = 1;//记录当前所在哪一层;
    var isSetFilter = false;//是否已设置筛选条件
    var isDeijia = false;//是否显示叠加柱状图;
    var filter = {
        dimension:"sbu",
        roleCode:"",
        sbuCode:"",
        role:"admin",
        beginDate:setDateArea("begin"),
        endDate:setDateArea("end"),
        bikeType:"",
        brandCode:"",
        bikelineId:""
    };
    // var filter = {
    //     dimension:"dealer",
    //     roleCode:"gck",
    //     sbuCode:"",
    //     role:"sbu",
    //     beginDate:setDateArea("begin"),
    //     endDate:setDateArea("end"),
    //     bikeType:"",
    //     brandCode:"",
    //     bikelineId:""
    // };
    var filterData = null;
	//请求数据
	function getAjaxData(isDiejia){
		$.ajax({
            url:"http://192.168.9.21:8080/giantService/report/areaDimension",
            type:"post",
            data:filter,
            dataType:"json",
            async:false,
            success:function (data){
                $(".loading-wrapper").hide();
                resultData = data;
                filterData = data.brandList;
                console.log(resultData);
                console.log(filter);
                setResultData(resultData,isDiejia);
                if(isSetFilter == false){
                    setFilterData();//设置筛选条件
                }
            },
            error:function (error){
                alert("请求数据失败!请重新刷新网页");
            }
		})
	}
	//初始化页面时获取的是sbu的数据
    function initFun(){
        getAjaxData(filter.dimension);
    }
	//拆分数据
    function setResultData(data,isDiejia){
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
                data: []
            };
            if(isDiejia != "sbu"){
                brandList.stack = "销量";
            }
            for(var j = 0; j < allData[i].data.length;j++){
                brandList.data.push(allData[i].data[j]);
            }
            finallyData.series.push(brandList);//写入销量数据
        }
        showCharts();
    }
    //展示数据
    function showCharts(){
        var newData = $.extend(true,optionData,finallyData);
        myEcharts.setOption(newData);
        console.log(newData);
        setTimeout(function (){
            myEcharts.resize();
        },200);
    }
    //获取时间参数默认为一个月
    function setDateArea(e){
        if(e == "end"){
            return endDate = moment().subtract(1,'days').format("YYYY-MM-DD");
        }else if(e == "begin"){
            return startDate = moment().subtract(90,'days').format("YYYY-MM-DD");
        }
    }
    setDateArea();
    //设置筛选条件
    function setFilterData(){
        var tempList = [];
        for(var i = 0; i < filterData.length;i++){
            var temp = $("<option value='"+filterData[i].type+filterData[i].code+"'>"+filterData[i].name+"</option>");
            tempList.push(temp);
        }
        $("#brandList").children().first().siblings().remove();
        $("#brandList").append(tempList);
        setFilterBikeline();
        isSetFilter = true;
    }
    //选择车系筛选条件
    function setFilterBikeline(){
        $("#brandList").on("change",function (){
            var brand = $("#brandList").val();
            var first = brand.slice(0,1);
            var last = brand.slice(1,2);
            setSelectList(first,last);
            function setSelectList(first,last){
                if(first != "" && last != ""){
                    for(var i = 0; i < filterData.length;i++){
                        if(last == filterData[i].code && first == filterData[i].type){
                            var tempList = [];
                            for(var j = 0; j < filterData[i].list.length;j++){
                                var temp = $("<option value='"+filterData[i].list[j].code+"'>"+filterData[i].list[j].name+"</option>");
                                tempList.push(temp);
                            }
                            $("#bikelineId").children().first().siblings().remove();
                            $("#bikelineId").append(tempList);
                        }
                    }
                }else{
                    $("#bikelineId").children().first().siblings().remove();
                }
            }
        });
    }
    $(window).resize(function (){
        myEcharts.resize();
    });
    //点击某一个sbu展示这个sbu下面所有经销商的品牌数据
    myEcharts.on("click",showSbuData);
    function showSbuData(data){
        index++;
        if(index == 1){
            $(".loading-wrapper").show();
        }
        getSbuData(data.name);
    }
    //选择sbu或者经销商维度数据
    $("#sbuWeidu").click(function (){
        filter.dimension = "sbu";
        setDefaultData();
        getAjaxData(filter.dimension);
    });
    $("#dealerWeidu").click(function (){
        filter.dimension = "dealer";
        setDefaultData();
        getAjaxData(filter.dimension);
    });
    //选择品牌查询函数
    $("#search-btn").click(function (){
        $(".loading-wrapper").show();
        filter.bikeType = $("#brandList").val().slice(0,1);
        filter.brandCode = $("#brandList").val().slice(1,2);
        filter.bikelineId = $("#bikelineId").val();
        setDefaultData();//初始化数据
        getAjaxData(filter.dimension);//获取数据
    });
    //选择时间查询函数
    $(".date-select .btn").click(function (){
        $(".loading-wrapper").show();
        filter.beginDate = getDate("begin");
        filter.endDate = getDate("end");
        setDefaultData();//初始化数据
        getAjaxData();//获取数据
    });
    //获取输入框中的日期
    function getDate(e){
        var str = $("#dateInput").val().replace(" - ",",");
        var date = str.replace(/\//g,"-");
        if(e == "begin"){
            return date.slice(0,date.indexOf(","));
        }else if(e == "end"){
            return date.slice(date.indexOf(",")+1);
        }else{
            return false;
        }
    }
    //将所有的数据恢复初始化
    function setDefaultData(){
        finallyData = {
            legend: {
                data: []
            },
            xAxis:{
                data:[]
            },
            series: []
        };
        optionData = {
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
        resultData = {};
    }
    //获取经某个sbu下所有经销商列表
    function getSbuData(roleCode){
        //点击某个sbu获取的是他下面所有经销商的数据;
        if(index == 2){
            //初始化数据
            setDefaultData();
            filter.sbuCode = roleCode.toLowerCase();
            filter.dimension = "dealer";
            console.log(filter);
            getAjaxData();
            index++;
        }
    }
    initFun();
});