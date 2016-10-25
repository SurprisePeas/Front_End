$(function(){
	var c=0;
	timer = setInterval(function(){
//		随机
		num = Math.floor(Math.random()*8)
//		将随机数添加到显示的记号图片上
		$(".dishu").eq(num).show();
//		定时-多少秒后隐藏
		setTimeout(function(){
		$(".dishu").eq(num).hide();
		},2000)
	},2100)
//	加事件
	$(".dishu").on('touchstart',function(){
//		隐藏num号
		$(this).hide();
		c++;
//		数量
		$(".shu").html(c);
//		判断C是否到顶值
		if (c==5) {
//			存储在本地
			localStorage.setItem('shijian',t);
			location.href='end.html';
		}
		})
	
//	计时
	var t = 0;
	setInterval(function(){
		t=t+0.2;
//		保留1位小数
		t=Number(t.toFixed(1));
//		值添加
		$(".time span").html(t);
	},100)
})
