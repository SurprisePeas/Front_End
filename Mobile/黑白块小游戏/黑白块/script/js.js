$(function(){
	// 设置变量，次数
	var grade=0;
	// 为黑色色块添加未来（live）触摸(touchstra)事件
	$('li.black').live('touchstart',function() {
		// 获得点击li父级元素(parent)的当前ul号
		var index = $(this).parent().index();
		// 判断是否到4行
		if(index==3){
			grade++;
			// 判断是否到20行
			if (grade==15){
				// 把当前时间存储到本地(客户端存储数据localStorge)
				localStorage.setItem('shi',time);
				// 跳转到结束页面
				location.href='over.html'
			}
			// 删除当前li所在的UL
			$(this).parent().remove();
			// 创建新的ul,li
			var ulnew ='<ul><li></li><li></li><li></li><li></li></ul>';
			// 将新创建的ul添加到顶部
			$('body').prepend(ulnew); 

			// 随机数
			var random = Math.floor(Math.random()*4);
			// 将随机数添加第一行ul，random随机号添加属性
			$('ul').first().find('li').eq(random).addClass('black');
		}
	});

	// 顶部计时栏
	// 创建变量
	var time=0;
	// 定时器
	setInterval(function(){
		time=time+0.1;
		// 保留小数位
		time=Number(time.toFixed(2));
		// 将事件添加到span标签
		$('.time span').html(time);
	},50)
})