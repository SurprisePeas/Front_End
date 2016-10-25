$(function(){
//	商品分类菜单栏
	$("#headernav .Main_bottom li").hover(function(){
		$(this).find('.Nav-none').show();
		$(this).find('.b').css({'background':'#FFFFFF','color':'black'});
	},function(){
		$(this).find('.Nav-none').hide();
		$(this).find('.b').css({'background':'transparent','color':'#fff'});
	})
//	二级
	$("#headernav .Main_bottom .Nav-none .sub-a").hover(function(){
		$(this).find('.sub-none').toggle();
	})
//	商品分类菜单栏-结束	

	
//	大图 轮播图
//	获取浏览器可视宽度
	var wintop = document.documentElement.clientWidth;
	var c=0;
//	赋值给li图片
	$("#LB-Area .swiper-slid").css('width',wintop+'px');
//	计算总ul的长度值
	$("#LB-Area .LB-see .pic-container").css('width',wintop*4+'px');
//	随窗口更改大小
	$(window).resize(function(){
		wintop = document.documentElement.clientWidth;
		$("#LB-Area .swiper-slid").css('width',wintop+'px');
		$("#LB-Area .LB-see .pic-container").css('width',wintop*4+'px');
	})
	var sta =1;
	function move(){
		if(sta==1){
			sta=2;
			c++;
	//		判断
			if (c==4) {
				c=1;
	//			left值变回0
				$("#LB-Area .LB-see .pic-container").css('left','0');
			}
	//		创建移动宽度的变量
			t = c*wintop;
	//		更改left值，运动
			$("#LB-Area .LB-see .pic-container").stop().animate({
				left:-t
			},1000,'easeInOutSine')
	//		判断文字,与图片同步
			if (c==3) {
				$(".NavTab .Tabs a.tabs").eq(0).addClass('mt').siblings('a').removeClass('mt');
			}else{
				$(".NavTab .Tabs a.tabs").eq(c).addClass('mt').siblings('a').removeClass('mt');
			}
			setTimeout(function(){
				sta=1;
			},1100)
		}
	}
//	移动
	time = setInterval(function(){
		move();
	},3000)
//	箭头方向
//	移入,显示-隐藏箭头
	$("#LB-Area").hover(function(){
		$("#LB-Area .arrow-left").toggle();
		$("#LB-Area .arrow-right").toggle();
	})
	
//	创建点击事件,更改Left值移动图片
	$("#LB-Area .arrow-right").click(function(){
		clearInterval(time);
		move();
	})
	
	
//	创建点击事件,更改left值移动图片
	$("#LB-Area .arrow-left").click(function(){
		c--;
		if (c==-1) {
			c=2;
			$("#LB-Area .LB-see .pic-container").css('left',-wintop*3+'px	')
		}
		//		创建移动宽度的变量
		t = c*wintop;
		
//		更改left值，运动
		$("#LB-Area .LB-see .pic-container").animate({
			left:-t
		},1000,'easeInOutSine')
	})
	
//	大图-轮播图-结束


//	最近活动轮播图
	var l=0;
	//	移动
	time2 = setInterval(function(){
		l++;
//		判断
		if (l==4) {
//			left值变回0
			$("#R-Activity .Act-main .swiper-see .swiper-wrapper").css('left','0')
			l=1;
		}
//		更改left值，运动
		$("#R-Activity .Act-main .swiper-see ul.swiper-wrapper").animate({
			left:l*-1210
		},800,'easeOutQuad')
//		判断方块,与图片同步
		if (l==3) {
			$("#R-Activity .Act-main .pagination .pagination-swith").eq(0).addClass('mtt').siblings('span').removeClass('mtt');
		}else{
			$("#R-Activity .Act-main .pagination .pagination-swith").eq(l).addClass('mtt').siblings('span').removeClass('mtt');
		}
	},2500)
//	最近活动轮播图-结束
})

