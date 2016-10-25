$(function(){
	//		总管变量
	var c = 0 ;
//		状态变量
	var sta = 1;
	
//		为显示区域加移入事件,让箭头显示
	$("#big_todays #todays #box").mouseenter(function(){
		$("#big_todays #todays .anniu").css('display','block');
	})
	$("#big_todays #todays #box").mouseleave(function(){
		$("#big_todays #todays .anniu").css('display','none');
	})
	
//		为右按钮添加点击事件
	$("#big_todays #todays .anniu .abiaoqianR").click(function(){
		if (sta!=1) {
			return;
		}
		c++;
//			判断c到末调整到0;
		if (c==4) {
//				c到3的时候,让left值到0,移到第一张图片上
			$("#big_todays #todays ul#bigsidel").css('left','0');
//				调到1号图片
			c=1;
		}	
//			计算c相对应的left值
		var left = c*-1000;
//			运动状态,防止过快点击
		sta = 2;
//			改动大div left值 移动
		$("#big_todays #todays ul#bigsidel").animate({'left':left+'px'},500,function(){
			sta =1;
		});
	})
	
//		为左按钮加入单击事件
	$("#big_todays .anniu .abiaoqianL").click(function(){
		if (sta!=1) {
			return;
		}
		c--;
//			判断c到末调整到0;
		if (c==-1) {
//				c到3的时候,让left值到0,移到第一张图片上
			$("#big_todays #todays ul#bigsidel").css('left','-3015px');
//				调到1号图片
			c=2;
		}	
//			计算c相对应的left值
		var left = c*-1000;
//			运动状态,防止过快点击
		sta = 2;
//			改动大div left值 移动
		$("#big_todays #todays ul#bigsidel").animate({'left':left+'px'},500,function(){
				sta =1;
			});
		})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})