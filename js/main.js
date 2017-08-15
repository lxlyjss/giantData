$(function (){
    //登录
	function isSign(){
	    //定义变量
        var name,//用户名
            role,//用户角色
            userId,//用户id
            roleImg;//用户头像
        var roleArea = [];//角色管辖区域
		var token = $.fn.getCookie("access_token");
		var role_code = $.fn.getCookie("role_code");//获取用户角色code
        if(token){
            // $.ajax({
            //     url:"http://192.168.9.18:8080/giantSSO/sso/check.do",
            //     dataType:"json",
            //     data:{"token":token},
            //     async:false,
            //     timeout:"20000",
            //     success:function (data){
                    var data = {
                        "_status":true,
                        "_user":{
                            "username":"大熊猫",
                            "role_code":"sbuCode",
                            "id":"555555",
                            "userImg":"img/ym.jpg"
                        }
                    };
                    if(data._status == true){//判断该用户已登录
						name = data._user.username;//用户名
                        userId = data._user.id;//用户id
                        roleImg = data._user.userImg;//用户头像
                        setRoleInfo(name,roleImg,role_code);//设置用户显示
                        //判断是会员页面还是产品页面
                        if($("body").hasClass("vip-list") || $("body").hasClass("vip-from") || $("body").hasClass("vip-change")){//会员页面
                            //setFilterVip(userId);//设置会员页面下筛选条件
                        }else if($("body").hasClass("products-list") || $("body").hasClass("products-data1") || $("body").hasClass("products-data2")){//产品页面
                            //setFilterProducts(userId);//设置产品页面下的筛选条件
                        }
                    }else{//未登录则跳转捷安特官网
                    	//window.location.href = "http://www.giant.com.cn";
                        window.location.href = "http://192.168.9.18:8080/giantSSO/sso/login.do?token=2553fbec-d7bf-45cd-ae93-533a9f4613db&username=gck&password=123456";
					}
            //     },
            //     error:function (){
				// 	alert("载入失败!请重新刷新网页!");
            //     }
            // });
        }else{
            // setCookie("access_token","fa915d9d-dbdf-45cb-bd0a-bb74d7ba6ba1");
            $.fn.setCookie("access_token","2553fbec-d7bf-45cd-ae93-533a9f4613db");//gck角色
            //未获取到token
            alert("请重新登录结案特官网!");
            //window.location.href = "http://www.giant.com.cn";
        }
        //设置用户显示
        function setRoleInfo(name,img,role){
            if(img){
                //右上角信息显示
                $(".user-manage .user-content img").attr("src",img);
                //左侧信息显示
                $(".user-info .user-img-circle img").attr("src",img);
            }
            $(".user-manage .user-content span").text(name);
            var roleName = "";
            switch (role){
                case "all":{
                    roleName = "总公司";
                    break;
                }
                case "sbu":{
                    roleName = "SBU";
                    break;
                }
                case "dealer":{
                    roleName = "经销商";
                    break;
                }
                case "storeManager":{
                    roleName = "门店"
                    break;
                }
            }
            $(".user-info .user-welcome p:first-of-type").text(roleName);
            $(".user-info .user-welcome p:last-of-type").text(name);
        }
	}
    $.fn.setCookie = function (name,value){
        var path="";
        var cookiePath = "/";
        if(cookiePath!=null){
            path="; path="+cookiePath;
        }
        document.cookie = name + "="+ decodeURI(value)+ path + ";expires=Session";
    }
    $.fn.getCookie = function (name) {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
            return encodeURI(arr[2]);
        }else{
            return null;
        }
    }
    isSign();
    //退出登录
    function loginOut(){
        $("#loginOut").click(function (){
            window.location.href = "http://www.giant.com.cn/front/loginout";
        });
    }
	//一级导航的切换;
	$(".nav-list>a").click(function (){
		if($(this).parent().hasClass("active")){
			$(this).parent().removeClass("active").siblings(".nav-list").removeClass("active")
			$(this).parent().children(".child-slide-menu").slideUp(300);
		}else{
			$(this).parent().addClass("active").siblings(".nav-list").removeClass("active");
			$(this).parent().addClass("active").siblings(".nav-list").children(".child-slide-menu").slideUp(300);
			$(this).parent().children(".child-slide-menu").slideDown(300);
		}
	});
	//点击头像
	$(".user-content").click(function (e){
		e.stopPropagation();
		$(this).parent().toggleClass("open");
	});
	$("body").click(function (e){
		e.stopPropagation();
		$(".user-manage").removeClass("open");
	});
	//点击切换类型
	$(".search-content div button").click(function (){
		$(this).addClass("btn-primary").removeClass("btn-default").siblings().addClass("btn-default").removeClass("btn-primary");
	});
	//点击菜单切换导航栏宽窄
	$(".caidan-btn").click(function (){
		if($("body").hasClass("nav-md")){
			$("body").addClass("nav-sm").removeClass("nav-md");
		}else{
			$("body").addClass("nav-md").removeClass("nav-sm");
		}
	});
	//小屏幕菜单按钮
	$(".close-btn").click(function (){
		$("body").addClass("nav-sm").removeClass("nav-md");
	});
});
