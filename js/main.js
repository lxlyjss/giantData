$(function (){
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
	})
});
