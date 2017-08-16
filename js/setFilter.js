//根据用户角色控制显示筛选条件,会员页面
function setFilterVip(id) {
    var roleCode, area;
    // $ajax({
    //     url:"",
    //     dataType:"json",
    //     data:{"userId":id},
    //     async:false,
    //     timeout:"20000",
    //     success:function (data){
            var data = {
                "result": "1",
                "role_code": "storeManager",
                areaData: [
                    "JG", "KT", "EI", "DF", "OI", "YU", "IE", "WE", "OMG", "SNG", "EDG", "SKT", "LGD", "IG",
                    "SB", "TMD", "CNM", "LJ", "GDZ", "SC", "NND", "NDY", "QWE", "RTY", "HUI", "HUB", "LS", "MD",
                    "YY", "HY", "LZ", "DY", "ZQ", "KL", "PG", "XJ", "BL", "YZ", "XG", "JZ", "BC", "JB"
                ]
            };
            roleCode = data.role_code;
            area = data.areaData;
            setResult(roleCode, area);
    //     },
    //     error:function (){
    //
    //     }
    // });
    function setResult(role,area){
        switch (role){
            case "all":{//总公司角色
                //会员来源页面,总公司角色下区域的筛选条件为所有经销商.
                if($("body").hasClass("vip-from") && area != null && area != ""){
                    var tempArr = [];
                    for(var i = 0; i < area.length;i++){
                        var temp = $("<option value='"+area[i]+"'>"+area[i]+"</option>");
                        tempArr.push(temp);
                    }
                    $(".search-content .filter-select .areaSelect").append(tempArr);
                    console.log("all");
                }
                //会员数据趋势页面,总公司角色下区域筛选条件为所有经销商,
                if($("body").hasClass("vip-change") && area != null && area != ""){
                    var tempArr = [];
                    for(var i = 0; i < area.length;i++){
                        var temp = $("<option value='"+area[i]+"'>"+area[i]+"</option>");
                        tempArr.push(temp);
                    }
                    $(".search-content .filter-select .areaSelect").append(tempArr);
                    console.log("all")
                }
                break;
            }
            case "sbu":{//SBU角色
                //会员来源页面,sub角色下区域的筛选条件为该sbu下所有经销商.
                if($("body").hasClass("vip-from") && area != null && area != ""){
                    var tempArr = [];
                    for(var i = 0; i < area.length;i++){
                        var temp = $("<option value='"+area[i]+"'>"+area[i]+"</option>");
                        tempArr.push(temp);
                    }
                    $(".search-content .filter-select .areaSelect").append(tempArr);
                    console.log("sbu")
                }
                //会员数据趋势页面,sub角色下区域的筛选条件为该sbu下所有经销商.
                if($("body").hasClass("vip-change") && area != null && area != ""){
                    var tempArr = [];
                    for(var i = 0; i < area.length;i++){
                        var temp = $("<option value='"+area[i]+"'>"+area[i]+"</option>");
                        tempArr.push(temp);
                    }
                    $(".search-content .filter-select .areaSelect").append(tempArr);
                    console.log("sbu")
                }
                break;
            }
            case "dealer":{//经销商角色
                //会员来源页面,经销商角色下区域的筛选条件为该经销商下所有门店.
                if($("body").hasClass("vip-from") && area != null && area != ""){
                    var tempArr = [];
                    for(var i = 0; i < area.length;i++){
                        var temp = $("<option value='"+area[i]+"'>"+area[i]+"</option>");
                        tempArr.push(temp);
                    }
                    $(".search-content .filter-select .areaSelect").append(tempArr);
                }
                //会员数据变化页面,经销商角色下区域的筛选条件为该经销商下所有门店.
                if($("body").hasClass("vip-change") && area != null && area != ""){
                    var tempArr = [];
                    for(var i = 0; i < area.length;i++){
                        var temp = $("<option value='"+area[i]+"'>"+area[i]+"</option>");
                        tempArr.push(temp);
                    }
                    $(".search-content .filter-select .areaSelect").append(tempArr);
                }
                break;
            }
            case "storeManager":{//门店角色
                //会员来源页面,门店角色下区域的筛选条件为不显示筛选条件.
                if($("body").hasClass("vip-from") && area != null && area != ""){
                    $(".search-content .filter-select").hide();
                    $("#search-btn").hide();
                }
                //会员数据变化页面,门店角色下区域的筛选条件为不显示筛选条件.
                if($("body").hasClass("vip-change") && area != null && area != ""){
                    $(".search-content .filter-select .areaSelect").parent().parent().hide();
                    //$("#search-btn").hide();
                }
                break;
            }
        }
    }

}
//产品数据页面控制筛选条件
function setFilterProducts(){
    var roleCode,area;
    // $ajax({
    //     url:"",
    //     dataType:"json",
    //     data:{"userId":id},
    //     async:false,
    //     timeout:"20000",
    //     success:function (data) {
            var data = {
                "result": "1",
                "role_code": "all",
                areaData: [
                    {
                        "sbuName": "GCK",
                        "sbuList": [
                            "JG", "KT", "EI", "DF", "OI", "YU", "IE", "WE", "OMG", "SNG", "EDG", "SKT", "LGD", "IG"
                        ]
                    },
                    {
                        "sbuName": "GCC",
                        "sbuList": [
                            "SB", "TMD", "CNM", "LJ", "GDZ", "SC", "NND", "NDY", "QWE", "RTY", "HUI", "HUB", "LS", "MD"
                        ]
                    },
                    {
                        "sbuName": "GCT",
                        "sbuList": [
                            "YY", "HY", "LZ", "DY", "ZQ", "KL", "PG", "XJ", "BL", "YZ", "XG", "JZ", "BC", "JB"
                        ]
                    }
                ]
            };
            roleCode = data.role_code;
            area = data.areaData;
            setResult(roleCode,area);
    //     },
    //     error:function (){
    //
    //     }
    // });
    function setResult(role,area){
        switch (role){
            case "admin":{//总公司角色
                //产品销售数据页面,总公司角色下区域的筛选条件为所有经销商.
                if($("body").hasClass("products-data2") && area != null && area != ""){
                    //隐藏门店选项
                    $(".storeSelect").parent().parent().hide();
                    //添加分类
                    var tempArr = [];
                    for(var i = 0; i < area.length;i++){
                        var temp = $("<option value='"+area[i].sbuName+"'>"+area[i].sbuName+"</option>");
                        tempArr.push(temp);
                    }
                    $(".search-content .filter-select .sbuSelect").append(tempArr);
                    $(".search-content .filter-select .sbuSelect").on("change",function (){
                        var selectLen = area.length;
                        for(var i = 0;i < selectLen;i++){
                            try{
                                if($(this).val() == area[i].sbuName && area[i] != null){
                                    var sbuArr = [];
                                    for(var j = 0; j < area[i].sbuList.length;j++){
                                        var tempTag = $("<option value='"+area[i].sbuList[j]+"'>"+area[i].sbuList[j]+"</option>");
                                        sbuArr.push(tempTag);
                                    }
                                    $(".search-content .filter-select .dealerSelect").children().first().siblings().remove();
                                    $(".search-content .filter-select .dealerSelect").append(sbuArr);
                                }else if($(this).val() == "all" && area[i] != null){
                                    $(".search-content .filter-select .dealerSelect").children().first().siblings().remove();
                                }else{

                                }
                            }catch (e){
                                console.log(e.name)
                            }
                        }
                    });
                }
                break;
            }
            case "sbu":{//SBU角色
                //产品销量数据页面,sub角色下区域的筛选条件为该sbu下所有经销商.
                if($("body").hasClass("products-data2") && area != null && area != ""){
                    //隐藏sbu选项
                    $(".sbuSelect").parent().parent().hide();
                    //添加分类
                    var tempArr = [];
                    for(var i = 0; i < area.length;i++){
                        var temp = $("<option value='"+area[i].sbuName+"'>"+area[i].sbuName+"</option>");
                        tempArr.push(temp);
                    }
                    //给经销商选择添加分类
                    $(".search-content .filter-select .dealerSelect").append(tempArr);
                    //经销商选择改变会造成门店的选择改变
                    $(".search-content .filter-select .dealerSelect").on("change",function (){
                        var selectLen = area.length;
                        for(var i = 0;i < selectLen;i++){
                            try{
                                if($(this).val() == area[i].sbuName && area[i] != null){
                                    console.log(88)
                                    var sbuArr = [];
                                    for(var j = 0; j < area[i].sbuList.length;j++){
                                        var tempTag = $("<option value='"+area[i].sbuList[j]+"'>"+area[i].sbuList[j]+"</option>");
                                        sbuArr.push(tempTag);
                                    }
                                    $(".search-content .filter-select .storeSelect").children().first().siblings().remove();
                                    $(".search-content .filter-select .storeSelect").append(sbuArr);
                                }else if($(this).val() == "all" && area[i] != null){
                                    $(".search-content .filter-select .storeSelect").children().first().siblings().remove();
                                }else{

                                }
                            }catch (e){
                                console.log(e.name)
                            }
                        }
                    });
                }
                break;
            }
            case "dealer":{//经销商角色
                //产品销量数据页面,经销商角色下区域的筛选条件为该经销商下所有门店.
                if($("body").hasClass("products-data2") && area != null && area != ""){
                    //隐藏sbu和经销商选项
                    $(".sbuSelect").parent().parent().hide();
                    $(".dealerSelect").parent().parent().hide();
                    //添加分类
                    var tempArr = [];
                    for(var i = 0; i < area.length;i++){
                        var temp = $("<option value='"+area[i].sbuName+"'>"+area[i].sbuName+"</option>");
                        tempArr.push(temp);
                    }
                    //给经销商选择添加分类
                    $(".search-content .filter-select .storeSelect").append(tempArr);
                }
                break;
            }
            case "storeManager":{//门店角色
                //产品销量数据页面,门店角色下区域的筛选条件为不显示筛选条件.
                if($("body").hasClass("products-data2") && area != null && area != ""){
                    $(".search-content .filter-select").hide();
                    $("#search-btn").hide();
                }
                break;
            }
        }
    }
}
//区域销售数据页面
function setAreaFilter(){
    var role,brand;

}