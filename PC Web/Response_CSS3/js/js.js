$(function(){
	var c = 0;
	$(".navbar i").click(function(){
		if(c==0){
		    $("nav ul").stop().slideDown("slow");
			c=1;
		}else{
		    $("nav ul").stop().slideUp("slow");
			c=0;
		}
	});
	
	
	/*
	 * 面向对象 封装	圆形导航
	 * 2016年9月19日10:27:17
	 * @param		r:半径		angle:夹角
	 */
	var circular_run = function(r,angle){
		var circular = document.getElementById("circular");
		var imgs = circular.getElementsByTagName('img');
		var sunwukong = document.getElementById("sunwukong");
//		定义半径
		var r = r;
//		定义状态
		var sta = 1;		

//		单击事件调用的函数
		function danji(){
			if (sta==1) {
				sta=2;
	//			获得图片的个数
				len = imgs.length-1;
	//			计算每两张图片对应的夹角
				var d = angle/len;
	//			循环每个图片
				for (var i=0;i<len;i++) {
	//				计算当前这个图片跟圆点间的连线和x轴之间的夹角
					var jiajiao = i*d;
	//				计算当前这个图片的left和top值
					var l = Math.cos(jiajiao*Math.PI/180)*r;
					var t = -Math.sin(jiajiao*Math.PI/180)*r;
	//				让图片改变过去
					imgs[i].style.left = l+'px';
					imgs[i].style.top = t+'px';
					imgs[i].style.transform = 'rotate(720deg)';
					imgs[i].style.transitionDelay = i*0.2+'s';
				}				
			}else{
				sta=1;
				//循环每个图片
				for (var i=0;i<len;i++) {
					//进行赋值 改变 
					imgs[i].style.left = '0px';
					imgs[i].style.top = '0px';
					imgs[i].style.transform = 'rotate(0deg)';
					imgs[i].style.transitionDelay = i*0.2+'s';
				}		
			}

		}
	
//		拖拽
//		给div加鼠标按下事件
		sunwukong.onmousedown = function(e){

//			获得鼠标位置
			var mouse_left = e.clientX;
			var mouse_top = e.clientY;
//			获得div的位置
			var circular_left = circular.offsetLeft;
			var circular_top = circular.offsetTop;
			
//		给文档加鼠标移动事件
			document.onmousemove = function(e){
			//删除掉sunwukong身上的单击事件
			sunwukong.onclick = null;
//			获得鼠标当前的位置
				var mnewleft = e.clientX;
				var mnewtop = e.clientY;
//				计算鼠标移动的距离
				var diff_left = mnewleft - mouse_left;
				var diff_top = mnewtop - mouse_top;
//				改变div的left和top
				var circular_new_left = circular_left+diff_left;
				var circular_new_top = circular_top+diff_top;
//				让div移动过去
				circular.style.left = circular_new_left+'px';
				circular.style.top = circular_new_top+'px';
			}
		}
//		鼠标抬起
		sunwukong.onmouseup = function(){
//			取消document的移动事件
			document.onmousemove = null;
			//		给 加单击事件
			setTimeout(function(){
				sunwukong.onclick = danji;
			},100)
			return;
		}
	}//#function
	
	new circular_run(80,350);
	
	
})
