$(function(){
	
//	右侧栏li大于0的隐藏
	$("#cate .cate_middle .right ul li:gt(0)").hide();
	var lLi = $("#cate .cate_middle .left ul li");
	var rLi = $("#cate .cate_middle .right ul li");
	
//	定义一个函数
	function view(){
		var body_h = window.screen.availHeight;
		$('#cate').css('height',body_h + 'px');
//		获取返回的高度
		var back_h = $("#bg .back").height();
//		算出top值
		var top = (body_h - back_h)/2;
		$("#bg .back").css('top',top);
		
//		点击出现
		$("#bg .back").click(function(){
			var left = $("#cate").width();
			$("#cate").animate({
				left:-left
			},500,function(){
				$("#bg").hide();
			})
			
		})
	}
	view();
	$(window).resize(function(){
		view();
	})
//	点击改变右侧栏目内容（选项卡）
	lLi.click(function(){
		$(this).addClass('active')
				.siblings().removeClass('active');
		rLi.eq($(this).index()).show()
			.siblings().hide();
	})
	
//	点击出现
	$(".top .fixd .logo").click(function(){
		$("#bg").show();
		$("#cate").animate({
			left:0
		},500)
	})
	
	
	
	
	
})
