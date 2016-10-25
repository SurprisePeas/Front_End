$(function(){
	
//	‘换一换’ 改变字体 背景图样式
	$("#loves #loves_one .text_love a").hover(function(){
		$(this).addClass('b');
	},function(){
		$(this).removeClass('b');
	});
//	为'换一换'添加单击事件
	var spl=1;
	$("#loves #loves_one .text_love a").click(function(){
		if (spl==1) {
			$(".pics1").hide();
			$(".pics2").show();
			spl=2;
		}else{
			$(".pics1").show();
			$(".pics2").hide();
			spl=1;
		}
	})
	
//	天天低价
//	移入移出改变left值
	$("#big_special .special .mc div.big_pic .a_big").hover(function(){
		$(this).stop().animate({'left':'25px'},300);
	},function(){
		$(this).stop().animate({'left':'35px'},300)
	})
	
	$("#big_special .special .mc img").hover(function(){
		$(this).stop().animate({'left':'-10px'},300)
	},function(){
		$(this).stop().animate({'left':'0px'},300)
	})



//	热门晒单
//	设置定时器
	setInterval(function(){
//		让最后一个LI高度运动到0
		$("#big_special .hot .mc ul.big li").last().animate({'height':'0'},500,function(){
//			将最后一个LI追加到ul头部
			$("#big_special .hot .mc ul.big").prepend($("#big_special .hot .mc ul li").last());
//			将刚才追加进来li高度变回100;
			$("#big_special .hot .mc ul li").first().height(100);
		})
	},3000)


//	楼层按钮

//	提取楼层到顶部的距离
	var f1 = $("#f1").offset().top;
	var f2 = $("#f2").offset().top;
	var f3 = $("#f3").offset().top;
	var f4 = $("#f4").offset().top;
	var f5 = $("#f5").offset().top;
	var f6 = $("#f6").offset().top;
	var f7 = $("#f7").offset().top;
	var f8 = $("#f8").offset().top;
	var f9 = $("#f9").offset().top;
	var f10 = $("#jd10floor").offset().top;
	var g_floor = $("#floors").offset().top;
	
//	单击事件,对应楼层高度
	$("#floors .1F").click(function(){
		$('html,body').stop().animate({scrollTop:f1},500)
	})
	$("#floors .2F").click(function(){
		$('html,body').stop().animate({scrollTop:f2},500)
	})	
	$("#floors .3F").click(function(){
		$('html,body').stop().animate({scrollTop:f3},500)
	})	
	$("#floors .4F").click(function(){
		$('html,body').stop().animate({scrollTop:f4},500)
	})	
	$("#floors .5F").click(function(){
		$('html,body').stop().animate({scrollTop:f5},500)
	})
	$("#floors .6F").click(function(){
		$('html,body').stop().animate({scrollTop:f6},500)
	})
	$("#floors .7F").click(function(){
		$('html,body').stop().animate({scrollTop:f7},500)
	})
	$("#floors .8F").click(function(){
		$('html,body').stop().animate({scrollTop:f8},500)
	})
	$("#floors .9F").click(function(){
		$('html,body').stop().animate({scrollTop:f9},500)
	})
	$("#floors .10F").click(function(){
		$('html,body').stop().animate({scrollTop:f10},500)
	})
	
	$(window).scroll(function(){
		left_top = $(window).scrollTop();
//		document.title = left_top;
		if (left_top<f1) {
			$("#floors").hide();
		}
		if(left_top>=f1-350){
			$("#floors").show();
		}
		if(left_top>=f1-350 && left_top<=f2){
			le=0;
		}
		if(left_top>=f2-350 && left_top<=f3){
			le=1;
		}
		if(left_top>=f3-350 && left_top<=f4){
			le=2;
		}
		if(left_top>=f4-350 && left_top<=f5){
			le=3;
		}		
		if(left_top>=f5-350 && left_top<=f6){
			le=4;
		}
		if(left_top>=f6-350 && left_top<=f7){
			le=5;
		}
		if(left_top>=f7-350 && left_top<=f8){
			le=6;
		}
		if(left_top>=f8-350 && left_top<=f9){
			le=7;
		}
		if(left_top>=f9-350 && left_top<=f10){
			le=8;
		}
		if(left_top>=f10-200){
			le=9;
		}
//		添加class为yy的属性,删除兄弟liyy的属性
		$('#floors ul li').eq(le).addClass('yy').siblings('li').removeClass('yy');
	})
	
	
//	为返回顶部创建单击事件
	$("#fixed_right .tickling #fanhui").click(function(){
		$('html,body').animate({scrollTop:0},500,'easeOutExpo')
	})
	$("#fixed_right .tickling #fanhui .to-text-1").click(function(){
		$('html,body').animate({scrollTop:0},500,'easeOutExpo')
	})
	
//	移入事件,让块移动
	$(".tickling .ontop-a").hover(function(){
//		变化left值
		$(this).find('b').stop().animate({'left':'-45px'},300);
	},function(){
		$(this).find('b').stop().animate({'left':'20px'},300);
	})
	
	
	
	
	
	
	
	
})