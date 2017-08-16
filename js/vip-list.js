$(function (){
    $.fn.getAndShow = function (){
        $(".loading-wrapper").show();
        var data;
        //点击查看详细会员信息
        $.fn.getAndShow.readMore = function (index){
            $(".moreInfo-wrapper").addClass("open-more").fadeIn(500);
            var thisData = data.vipData[index];
            for( var v in thisData ){
                if(thisData[v] instanceof Array){
                    //徽章列表
                    if(v == "badgeList"){
                        if(thisData[v] != null && thisData[v] != ""){
                            $("#badgeCount").text(thisData[v].length);
                            for(var i = 0; i < thisData[v].length;i++){
                                var tempTag = $("<tr><td>"+thisData[v][i].date+"</td><td>"+thisData[v][i].title+"</td></tr>")
                                $("#badgeList .showList").append(tempTag);
                            }
                        }else{
                            $("#badgeList .showList").empty();
                            $("#badgeCount").text(0);
                        }
                    }
                    //俱乐部
                    if(v == "joinClub") {
                        console.log("jin")
                        if (thisData[v] != null && thisData[v] != "") {
                            $("#clubCount").text(thisData[v].length);
                            for (var i = 0; i < thisData[v].length; i++) {
                                var tempTag = $("<tr><td>" + thisData[v][i].time + "</td><td>" + thisData[v][i].club + "</td></tr>");
                                $("#joinClub .showList").append(tempTag);
                            }
                        }else{
                            $("#joinClub .showList").empty();
                            $("#clubCount").text(0);
                        }
                    }
                    //维修次数及时间
                    if(v == "repairTimes") {
                        if (thisData[v] != null && thisData[v] != "") {
                            $("#repairCount").text(thisData[v].length);
                            for (var i = 0; i < thisData[v].length; i++) {
                                var tempTag = $("<tr><td>" + thisData[v][i] + "</td></tr>");
                                $("#repairTimes .showList").append(tempTag);
                            }
                        }else{
                            $("#repairTimes .showList").empty();
                            $("#repairCount").text(0);
                        }
                    }
                    //第三方账户绑定信息
                    if(v == "thirdStation") {
                        if (thisData[v] != null && thisData[v] != "") {
                            $("#bindCount").text(thisData[v].length);
                            for (var i = 0; i < thisData[v].length; i++) {
                                var tempTag = $("<tr><td>" + thisData[v][i] + "</td></tr>");
                                $("#thirdStation .showList").append(tempTag);
                            }
                        }else{
                            $("#thirdStation .showList").empty();
                            $("#bindCount").text(0);
                        }
                    }
                    //标签列表
                    if(v == "tagList") {
                        if (thisData[v] != null && thisData[v] != "") {
                            $("#tagCount").text(thisData[v].length);
                            for (var i = 0; i < thisData[v].length; i++) {
                                var tempTag = $("<tr><td>" + thisData[v][i] + "</td></tr>");
                                $("#tagList .showList").append(tempTag);
                            }
                        }else{
                            $("#tagList .showList").empty();
                            $("#tagCount").text(0);
                        }
                    }
                }else{
                    showAll(v,thisData[v]);
                    function showAll(e,ele) {
                        //设置图片
                        if (v == "userPicture") {
                            if (thisData[v] != null && thisData[v] != "") {
                                $("#userPicture>td").html("<img src='" + thisData[v] + "' width='80'/>");
                            } else {
                                $("#userPicture>td").html("");
                            }
                        }else if(v == "userStatus"){
                            thisData[v] === "0" ? $("#userStatus>td").html("启用") : $("#userStatus>td").html("禁用");
                        }else{
                            $("#"+e+">td").text(ele);
                        }
                    }
                    //

                }
            }
        }
        //点击展开列表
        function showList(){
            $(".showBtn").siblings("table").hide();
            $(".showBtn").click(function (){
                $(this).siblings("table").slideToggle(500).toggleClass("zhankai");
                if($(this).siblings("table").hasClass("zhankai")){
                    $(this).text("收起 - ");
                }else{
                    $(this).text("展开+");
                }
            })
        }
        showList();
        function VipData(){
            //请求数据,会员总数,
            var vipCount;
            //当前页数
            var nowPage;
            //总页数
            var allPage;
            //页面是否初始化
            var isStart = true;
            if(isStart){
                nowPage = 1;
                getAjaxData(nowPage,"");
            }
            //选页
            window.selectPage = function (n){
                $(".loading-wrapper").show();
                cutPage(allPage,n);
                nowPage = n;
                getAjaxData(nowPage,"");
            };
            //根据标签查询
            $(".search-btn .btn").click(function (){
                $(".loading-wrapper").show();
                var filter = $(".filter-select select").val();
                $("#tagTitle").text(filter == ""?"1":filter);
                getAjaxData(nowPage,filter);
            });
            //获取标签列表
            var tagList = [];
            function getTagList(){
                tagList = data.filter.tag;
                var tempArr = [];
                for(var i = 0; i < tagList.length;i++){
                    var temp = $("<option value='"+tagList[i].code+"'>"+tagList[i].labelName+"</option>");
                    tempArr.push(temp);
                }
                $(".filter-select select").append(tempArr);
            }
            //获取后台数据,页面初始化
            function getAjaxData(n,f){
                //添加筛选条件
                $.ajax({
                    url:"http://192.168.9.20:8080/giantService/userData/userList",
                    data:{"userId":721048,"page":n,"pageNum":10},
                    async:true,
                    dataType:"json",
                    timeout:20000,
                    success:function (resultData){
                        $(".loading-wrapper").hide();
                        data = resultData;
                        console.log(resultData);
                        //获取总会员数
                        vipCount = data.vipCount;
                        //获取总页数
                        allPage = Math.ceil(data.vipCount / 10);
                        showData(resultData);
                        cutPage(allPage,nowPage);
                        getTagList();
                    },
                    error:function (data){
                        $(".loading-wrapper").hide();
                        alert("获取数据失败!请检查接口")
                    }
                });
            }
            //展示数据
            function showData(data) {
                var pageData =data.vipData;
                var tableArr = [];
                for(var i = 0;i < pageData.length;i++){
                    var tableList = $("<tr style=\"text-align: center;\">" +
                        "<td>"+pageData[i].userName+"</td>" +
                        "<td>"+pageData[i].nickName+"</td>" +
                        "<td>"+pageData[i].userSex+"</td>" +
                        "<td>"+pageData[i].userTel+"</td>" +
                        "<td>"+pageData[i].userEmail+"</td>" +
                        "<td>"+(pageData[i].userStatus=="0"?"启用":"禁用") +"</td>" +
                        "<td>"+pageData[i].registerDate+"</td>" +
                        "<td>"+pageData[i].userFrom+"</td>" +
                        "<td><a href=\"javascript:;\" onclick=\"$.fn.getAndShow.readMore("+i+")\">详细</a></td>" +
                        "</tr>");
                    tableArr.push(tableList);
                }
                $(".vip-container table tbody").empty().append(tableArr);
            }
            //分页
            function cutPage(p,n){
                //获取当前页数
                if(n <= 4 && n != "" && n >0){
                    $(".page-container .pagination").html("<li><a href=\"javascript:;\" aria-label=\"Previous\" onclick='selectPage("+(n-1)+")'><span aria-hidden=\"true\">上一页</span></a></li><li><a href=\"javascript:;\" onclick='selectPage(1)'>1</a></li><li><a href=\"javascript:;\" onclick='selectPage(2)'>2</a></li><li><a href=\"javascript:;\" onclick='selectPage(3)'>3</a></li><li><a href=\"javascript:;\" onclick='selectPage(4)'>4</a></li><li><a href=\"javascript:;\" onclick='selectPage(5)'>5</a></li><li><a href=\"javascript:;\">...</a></li><li><a href=\"javascript:;\"onclick='selectPage("+p+")'>"+p+"</a></li><li><a href=\"javascript:;\" aria-label=\"Next\" onclick='selectPage("+(n+1)+")'><span aria-hidden=\"true\">下一页</span></a></li>");
                    $(".page-container .pagination li").eq(n).addClass("active");
                }else if(n > 4 && n <= (p-4)){
                    $(".page-container .pagination").html("<li><a href=\"javascript:;\" aria-label=\"Previous\" onclick='selectPage("+(n-1)+")'><span aria-hidden=\"true\">上一页</span></a></li><li><a href=\"javascript:;\" onclick='selectPage(1)'>1</a></li><li><a href=\"javascript:;\">...</a></li><li><a href=\"javascript:;\" onclick='selectPage("+(n-1)+")'>"+(n-1)+"</a></li><li class=\"active\"><a href=\"javascript:;\" onclick='selectPage("+n+")'>"+ n +"</a></li><li><a href=\"javascript:;\" onclick='selectPage("+(n+1)+")'>"+(n+1)+"</a></li><li><a href=\"javascript:;\">...</a></li><li><a href=\"javascript:;\" onclick='selectPage("+p+")'>"+p+"</a></li><li><a href=\"javascript:;\" aria-label=\"Next\" onclick='selectPage("+(n+1)+")'><span aria-hidden=\"true\">下一页</span></a></li>");
                }else if(n > (p-4) && n <= p){
                    $(".page-container .pagination").html(" <li><a href=\"javascript:;\" aria-label=\"Previous\" onclick='selectPage("+(n-1)+")'><span aria-hidden=\"true\">上一页</span></a></li><li><a href=\"javascript:;\" onclick='selectPage(1)'>1</a></li><li><a href=\"javascript:;\">...</a></li><li><a href=\"javascript:;\" onclick='selectPage("+(p-4)+")'>"+ (p-4) +"</a></li><li><a href=\"javascript:;\" onclick='selectPage("+(p-3)+")'>"+ (p-3) +"</a></li><li><a href=\"javascript:;\" onclick='selectPage("+(p-2)+")'>"+ (p - 2) +"</a></li><li><a href=\"javascript:;\" onclick='selectPage("+(p-1)+")'>"+(p-1)+"</a></li><li><a href=\"javascript:;\" onclick='selectPage("+p+")'>"+p+"</a></li><li><a href=\"javascript:;\" aria-label=\"Next\" onclick='selectPage("+(n+1)+")'><span aria-hidden=\"true\">下一页</span></a></li>");
                    $(".page-container .pagination li").eq(7-(p-n)).addClass("active");
                }
            }
        }
        VipData();
    }
});