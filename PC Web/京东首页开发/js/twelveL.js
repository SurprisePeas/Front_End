$(function(){
//	一楼
	var obj = new Object();
	obj.node = $("#carousel_1");
	obj.c=0;
	side(obj);
	
//	二楼
	var obj = new Object();
	obj.node = $("#carousel_2");
	obj.c=0;
	side(obj);
	
//	三楼
	var obj = new Object();
	obj.node = $("#carousel_3");
	obj.c=0;
	side(obj);
	
//	四楼
	var obj = new Object();
	obj.node = $("#carousel_4");
	obj.c=0;
	side(obj);
	
//	五楼
	var obj = new Object();
	obj.node = $("#carousel_5");
	obj.c=0;
	side(obj);
	
//	六楼
	var obj = new Object();
	obj.node = $("#carousel_6");
	obj.c=0;
	side(obj);	
	
//	七楼
	var obj = new Object();
	obj.node = $("#carousel_7");
	obj.c=0;
	side(obj);
	
//	八楼
	var obj = new Object();
	obj.node = $("#carousel_8");
	obj.c=0;
	side(obj);	
	
//	九楼
	var obj = new Object();
	obj.node = $("#carousel_9");
	obj.c=0;
	side(obj);	
	
//	十楼	
	var obj = new Object();
	obj.node = $("#carousel_10");
	obj.c=0;
	side(obj);	
	
//	创建函数，轮播图用
	function side(obj){
//		计算这宽, 数量
		var width = $(obj.node).width();
		var length = ($(obj.node).find('.u-name li')).length;
		
//		判断,防止过快点击
		var sta = 1;
//		定时器
		function run(){
			obj.t = setInterval(function(){
				obj.c++;
//				判断c到末尾调整到0
				if (obj.c==5){
//					c到3的时候,让left值到0,移到第一张图片上
					$(obj.node).find('ul.u-name').css('left','0');
//					调到1号图片
					obj.c=1;
				}
//				计算c相对应的left值
				var left = obj.c*-width;
//				改动大div left值移动
				$(obj.node).find('ul.u-name').animate({
					'left':left+'px'
				});
//				判断圆点变色
				if (obj.c==4) {
					$(obj.node).find('ul.n-name li').eq(0).addClass('bian').siblings('li').removeClass('bian');
				}else{
					$(obj.node).find('ul.n-name li').eq(obj.c).addClass('bian').siblings('li').removeClass('bian');
				}
			},2000)
		}
		run();
	
//		鼠标移入移除显示点击按钮
		$(obj.node).mouseover(function(){
			$(obj.node).find('.arrows').css('display','block');
			clearInterval(obj.t);
		})
		$(obj.node).mouseout(function(){
			$(obj.node).find('.arrows').css('display','none');
			run();
		})
	
//		鼠标单击事件 左键
		$(obj.node).find('.arrows_left').click(function(){
			if (sta!=1) {
				return;
			}
			obj.c--;
			var mo = -width*(length-1);
//			判断c到末调整到0;
			if (obj.c==-1) {
//				c到4的时候,让left值到0,移到第一张图片
				$(obj.node).find('ul.u-name').css('left',mo);
//				调到1号图片
				obj.c=3;
			}
			
//			计算c相对应的left值
			var left = obj.c*-width;
//			运动状态变量,防止过快点击
			sta=2;
//			判断圆点到4号返回0号
			if (obj.c==4) {
					$(obj.node).find('ul.n-name li').eq(0).addClass('bian').siblings('li').removeClass('bian');
				}else{
					$(obj.node).find('ul.n-name li').eq(obj.c).addClass('bian').siblings('li').removeClass('bian');
			}
//			改动大div left值移动
			$(obj.node).find('ul.u-name').animate({'left':left+'px'},500,function(){
				sta=1;
			});
		})
		
//		鼠标单击事件 右键
		$(obj.node).find('.arrows_right').click(function(){
			if (sta!=1) {
				return;
			}
			obj.c++;
			var mo = -width*(length-1);
//			判断c到末调整到0;
			if (obj.c==5) {
//				c到4的时候,让left值到0,移到第一张图片
				$(obj.node).find('ul.u-name').css('left',0);
//				调到1号图片
				obj.c=1;
			}
//			计算c相对应的left值
			var left = obj.c*-width;
//			运动状态变量,防止过快点击
			sta=2;
//			判断圆点到4号返回0号
			if (obj.c==4) {
					$(obj.node).find('ul.n-name li').eq(0).addClass('bian').siblings('li').removeClass('bian');
				}else{
					$(obj.node).find('ul.n-name li').eq(obj.c).addClass('bian').siblings('li').removeClass('bian');
			}
//			改动大div left值移动
			$(obj.node).find('ul.u-name').animate({'left':left+'px'},500,function(){
				sta=1;
			});
		})
	}
	
	
	
//	TAB列表切换，
	$("#Frame .jdfloor .mt ul li").mouseover(function(){
//		获得当前移入地li的序号
		var c =$("#Frame .jdfloor .mt ul li").index(this);
//		让c号hide显示,兄弟元素隐藏
		$(".tab_all .hide").eq(c).show()
			.siblings('.tab_all .hide').hide();
	})
//	列表选择
	$("#Frame .jdfloor .mt ul li").hover(function(){
		$(this).addClass('con').siblings('li').removeClass('con');
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//	轮播图——————
//	循环每个img,添加定时器
//	$(".carousel").each(function(){
////		获得当前循环到的carousel原生JS
//		var jsthis = $(this)[0];
//		var jqthis = $(this);
////		将大总管变量私有化
//		jsthis.c = 0;
////		将定时器调用的函数私有化
//		jsthis.run = function(){
//			jsthis.c++;
//			if (jsthis.c==5) {
//				jqthis.find('ul.u-name').css('left',0);
//				jsthis.c=1;
//			}
//			
////			判断圆点是否循环到4号元素，让其从0号重新开始
//			if(jsthis.c==4){
//				$("ul.n-name li").eq(0).css('background','#A10000')
//							.siblings('li').css('background','#1E1E1E');
//			}else{
//				$("ul.n-name li").eq(jsthis.c).css('background','#A10000')
//							.siblings('li').css('background','#1E1E1E');
//			}
////			计算left值
//			var t = jsthis.c*-439;
////			然ul运动过去
//			jqthis.find('ul.u-name').animate({'left':t+'px'},500);
//		}
////		定时器-函数 结束
//	
////		为当前循环到的对象添加定时器
//		jqthis.timer = setInterval(jsthis.run,3000);
//			
//			
////		为显示区域 加鼠标移入事件  显示左右两侧箭头按钮
//		$(".carousel").hover(function(){
//			$(".arrows").show();
//		})
//		
////		为左按钮加单击事件,控制图片移动 c--
//		$(".carousel .arrows .arrows_left").click(function(){
//			jsthis.c--;
////			判断c到未调整到0	
//			if (jsthis.c==-1) {
//				$("ul.u-name").css('left','-2195px');
//				jsthis.c=4;
//			}
////			计算c相对应的left值
//			var left = jsthis.c*-439;
////			改动大div left值移动
//			$("ul.u-name").animate({'left':left+'px'},500,function(){
////				清理定时器
//				clearInterval(jqthis.timer);
//			});
//		})
////		按钮单击事件结束
//	})
//	轮播图结束
	
	
	
})