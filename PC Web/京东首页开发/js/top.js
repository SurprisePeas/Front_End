$(function(){
	//添加广告栏的点击事件,广告隐藏————————————————————————————————————
	$("#topguanggao .topshow .off").click(function(){
		$("#topguanggao").fadeOut('300');
	})
//————————————————————————————————————————————————————————————————



//	添加购物车的移入事件,出现信息————————————————————————————————————————
	$("#center #shopping .shop-pad").mouseenter(function(){
		$("#center #shopping .shop-pad").css('background','white');
		$("#center #shopping #shop_box").css('display','block');
	})
	$("#center #shopping #shop_box").mouseenter(function(){
		$("#center #shopping .shop-pad").css('background','white');
		$("#center #shopping #shop_box").css('display','block');
	})
	$("#center #shopping .shop-pad").mouseleave(function(){
		$("#center #shopping .shop-pad").css('background','#F9F9F9');
		$("#center #shopping #shop_box").css('display','none');
	})	
	$("#center #shopping #shop_box").mouseleave(function(){
		$("#center #shopping .shop-pad").css('background','#F9F9F9');
		$("#center #shopping #shop_box").css('display','none');
	})
//————————————————————————————————————————————————————————————————————————————————
	
	
	
//	菜单隐藏,移入移出事件————————————————————————————————————————
	$("#center #nav #shunav li.show1").mouseenter(function(){
		$("#center #nav #hidenva .layer1").show();
	})
	$("#center #nav #shunav li.show1").mouseleave(function(){
		$("#center #nav #hidenva .layer1").hide();
	})
	
	$("#center #nav #shunav li.show2").hover(function(){
		$("#hidenva .shows2").toggle();
	})
	$("#center #nav #shunav li.show3").hover(function(){
		$("#hidenva .shows3").toggle();
	})
	$("#center #nav #shunav li.show4").hover(function(){
		$("#hidenva .shows4").toggle();
	})
	$("#center #nav #shunav li.show5").hover(function(){
		$("#hidenva .shows5").toggle();
	})
	$("#center #nav #shunav li.show6").hover(function(){
		$("#hidenva .shows6").toggle();
	})
	$("#center #nav #shunav li.show7").hover(function(){
		$("#hidenva .shows7").toggle();
	})
	$("#center #nav #shunav li.show8").hover(function(){
		$("#hidenva .shows8").toggle();
	})
	$("#center #nav #shunav li.show9").hover(function(){
		$("#hidenva .shows9").toggle();
	})
	$("#center #nav #shunav li.show10").hover(function(){
		$("#hidenva .shows10").toggle();
	})
	$("#center #nav #shunav li.show11").hover(function(){
		$("#hidenva .shows11").toggle();
	})
	$("#center #nav #shunav li.show12").hover(function(){
		$("#hidenva .shows12").toggle();
	})
	$("#center #nav #shunav li.show13").hover(function(){
		$("#hidenva .shows13").toggle();
	})
	$("#center #nav #shunav li.show14").hover(function(){
		$("#hidenva .shows14").toggle();
	})
	$("#center #nav #shunav li.show15").hover(function(){
		$("#hidenva .shows16").toggle();
	})
//菜单隐藏——————————————————————————————————————————————
	
	
	
	
//轮播图————————————————————————————————————————————————————————————————————————
//	设置总管变量
	var c = 0;
	
//	函数run 后面定时器用
	function run(){
		c++;
//		判断
		c = c==7?0:c;
//		让c号元素图片,圆点 更改图片,样式
		$("#lunbo img").eq(c).fadeIn(800).siblings('img').fadeOut(800);
		$("#lunbo ul li").eq(c).css({'background':'red'},800).siblings('li').css({'background':'#3e3e3e'},800);
	}
//	定时器
	var time = setInterval(run,3500);
	
//	为li加移入事件
	$("#lunbo ul li").hover(function(){
//		清除定时器
		clearInterval(time);
//		获得当前li序号
		var jqthis = $(this);
//		让c号显示,其他兄弟元素隐藏
		t = setTimeout(function(){
//			获得鼠标移入li的序号
			c = jqthis.index();
//			图片,圆点, 更改图片,样式
			$("#lunbo img").eq(c).fadeIn(700).siblings('img').fadeOut(700);
			$("#lunbo ul li").eq(c).css({'background':'red'}).siblings('li').css({'background':'#3E3E3E'});
		},500)

	},function(){
//		恢复定时器
		time = setInterval(run,3500);
//		清理定时器
		clearTimeout(t);
	})
	
	
//	为轮播图添加移入事件,显示左右箭头
	$("#lunbo").hover(function(){
		$("#lunbo .anniu").fadeIn(300);
	},function(){
		$("#lunbo .anniu").fadeOut(300);
	})
	
//	为右箭头添加单击事件,移动图片
	$("#lunbo .anniu .abiaoqianR").click(function(){
		clearInterval(time);
		c++;
//			判断到端调到0;
			c = c==6?0:c;
//			移动图片,小圆点
			$("#lunbo img").eq(c).fadeIn(300).siblings('img').fadeOut(300);
			$("#lunbo ul li").eq(c).css('background','red').siblings('li').css('background','#3e3e3e');
//			恢复定时器
			time = setInterval(run,3500);
	})
	
//	为左箭头添加单击事件,移动图片
	$("#lunbo .anniu .abiaoqianL").click(function(){
		clearInterval(time);
		c--;
//			判断到端调到0;
			c = c==-1?5:c;
//			移动图片,小圆点
			$("#lunbo img").eq(c).fadeIn(300).siblings('img').fadeOut(300);
			$("#lunbo ul li").eq(c).css('background','red').siblings('li').css('background','#3e3e3e');
//			恢复定时器	
			time = setInterval(run,3500);
	})
//轮播图————————————————————————————————————————————————————————————————————————


})