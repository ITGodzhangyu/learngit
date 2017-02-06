function changpinmenu(){
	$(".changpin-left-menu img").eq(0).css({"border":"1px solid #efefef"});
	$(".changpin-left-menu img").click(function(){
		$(this).css({"border":"1px solid #efefef"});
		$(".changpin-left-menu img").not(this).css({"border":"1px solid #fff"});
		$(".changpin-left-top img")[0].src=$(this).attr("src");
	});
}
function nav(){
	for(var i=0;i<16;i++){
		$(".c"+i).css({"left":i%8*150+50+"px"})
		if(i>=8){
			$(".c"+i).css({"top":"150px","opacity":0});
		}	
	}
	$(".nav .right li").mouseenter(function(){
		for(var i=0;i<16;i++){
			$(this).find(".c"+i).animate({"left":i%8*150-50+"px","opacity":1},500+100*i);
		}
		$(this).find(".hid").css({"display":"block"});
	})
	$(".nav .right li").mouseleave(function(){
		$(this).find(".hid").css({"display":"none"});
		for(var i=0;i<16;i++){
			$(".c"+i).css({"left":i%8*150+50+"px","opacity":0})
		}
	})
	$(".cc").mouseenter(function(){
		$(this).css({"opacity":1});
		$(".cc").not(this).css({"opacity":0.5});
	})
	$(".cc").mouseleave(function(){
		$(".cc").css({"opacity":1});
	})
}
function goumai(){
	for(var i=1;i<5;i++){
		jia(".jia"+i+" span");
	}
}
function jia(g){
	$(g).click(function(){
		$(this).css({"border":"1px solid #00c3f5"});
		$(g).not(this).css({"border":"1px solid #dcdcdc"});
	});
}
function f1(){
	var _img=null;
	for(var i=1;i<14;i++){
		_img=document.createElement("img");
		_img.src="img/f1"+i+".jpg";
		$(".xianqing .f1").append(_img);
	}
}
function ff(){
	$(".fg").css({"display":"none"});
	$(".f1").css({"display":"block"});
	$(".xianqing-shangpin").css({"color":"#00c3f5","border-bottom":"2px solid #00c3f5","padding-bottom":"18px"})
	$(".xianqing-shangpin").click(function(){
		$(".ff").css({"color":"#666","border":"none","padding-bottom":"20px"});
		$(this).css({"color":"#00c3f5","border-bottom":"2px solid #00c3f5","padding-bottom":"18px"})
		$(".fg").css({"display":"none"});
		$(".f1").css({"display":"block"});
	})
	$(".xianqing-canshu").click(function(){
		$(".ff").css({"color":"#666","border":"none","padding-bottom":"20px"});
		$(this).css({"color":"#00c3f5","border-bottom":"2px solid #00c3f5","padding-bottom":"18px"})
		$(".fg").css({"display":"none"});
		$(".f2").css({"display":"block"});
	})
	$(".xianqing-wenti").click(function(){
		$(".ff").css({"color":"#666","border":"none","padding-bottom":"20px"});
		$(this).css({"color":"#00c3f5","border-bottom":"2px solid #00c3f5","padding-bottom":"18px"})
		$(".fg").css({"display":"none"});
		$(".f3").css({"display":"block"});
	})
}
function fx(){
	var _timer=0;
	function time(){
		window.clearTimeout(_timer);
		if($("body")[0].scrollTop>0){
			$(".fx").css({"display":"block"});
		}else{
			$(".fx").css({"display":"none"});
		}
		_timer=window.setTimeout(time,100);
	}
	time();	
}
function fx2(){
	var _timer=0;
	var _height=0;
	function time(){
		window.clearTimeout(_timer);
		_height=$(document).scrollTop()
		if(_height>280){
			$(".fx2").animate({"top":"0px"},300);	
		}else{
			$(".fx2").finish();
			$(".fx2").css({"top":"-80px"});
		}
		if(_height>600){
			$(".fx2 .fx2-right").animate({"right":"0px"},300);
		}else{
			$(".fx2 .fx2-right").animate({"right":"-128px"},300);
		}
		if(_height>1000){
			$(".fx2 .fx2-left").css({"display":"block"});
		}else{
			$(".fx2 .fx2-left").css({"display":"none"});
		}
		_timer=window.setTimeout(time,300);
	}
	time();	
}
$(document).ready(function(){
	changpinmenu();
	nav();
	f1();
	ff();
	fx();
	goumai();
	fx2();
});