
function loop(){
	var n=0;
	function delay(){
		$("#banner img").eq(n).css({"opacity":0});
		$(".circle a").eq(n).css({"background":"none"});
		n++;
		if(n>=5){n=0}
		coop();
	}
	function coop(_cmd){
		$("#banner img").eq(n).css({"opacity":1,"z-index":2});
		$(".circle a").eq(n).css({"background":"#00C3F5"});
		$("#banner img").eq(n).animate({"z-index":1},3000,function(){
			$(this).animate({"opacity":0},300,delay);
		});
	}
	coop();
	function eventHandle(_current){
		$("#banner img").eq(n).finish();
		$("#banner img").stop();
		$("#banner img").css({"opacity":0,"z-index":1});
		$(".circle a").css({"background":"none"});
		n=$(_current).index();
		coop();
	}
	$("#banner img").unbind("mouseenter").mouseenter(function(){
		$("#banner img").eq(n).stop();
	});
	$("#banner img").unbind("mouseleave").mouseleave(function(){
		coop();
	});
	$(".circle a").unbind("mouseenter").mouseenter(function(){
		eventHandle(this);
	});
	$(".leftt").click(function(){
		eventHandle($(".circle a").eq(--n)[0]);
	});
	$(".rightt").click(function(){
		eventHandle($(".circle a").eq(++n)[0]);
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
var _left=-1241;
function main1(){
	function boop(){
		$("#move").css({"z-index":1});
		if($(".h3 .right").css("z-index")==1){
			$(".h3 .right").mouseover(function(){
				$(".h3 .right").css({"border-color":"#00C3F5","color":"#00C3F5"});
			})
			$(".h3 .right").mouseleave(function(){
				if(_left==0){$(".h3 .right").css({"border-color":"#bdbdbd","color":"#bdbdbd"});}
				else{$(".h3 .right").css({"border-color":"#efefef","color":"#efefef"});}
			});
			$(".h3 .left").mouseover(function(){
				$(".h3 .left").css({"border-color":"#efefef","color":"#efefef"});
			})
		}else{
			$(".h3 .right").mouseover(function(){
				$(".h3 .right").css({"border-color":"#efefef","color":"#efefef"});
			})
			$(".h3 .left").mouseover(function(){
				$(".h3 .left").css({"border-color":"#00C3F5","color":"#00C3F5"});
			})
			$(".h3 .left").mouseleave(function(){
				if(_left==-1241){$(".h3 .left").css({"border-color":"#bdbdbd","color":"#bdbdbd"});}
				else{$(".h3 .left").css({"border-color":"#efefef","color":"#efefef"});}
			});
		}
		if(_left==-1241){_left=0;
			$(".h3 .left").css({"border-color":"#efefef","color":"#efefef"});
			$(".h3 .right").css({"border-color":"#bdbdbd","color":"#bdbdbd","z-index":2});
		}
		else{_left=-1241;
			$(".h3 .right").css({"border-color":"#efefef","color":"#efefef","z-index":1});
			$(".h3 .left").css({"border-color":"#bdbdbd","color":"#bdbdbd"});
		}
		$("#move").animate({"left":_left+"px"},100,function(){
			$("#move").animate({"z-index":2},10000,boop)
		})
	}
	boop();
	$(".h3 .left").click(function(){
		$("#move").stop();
		_left=-1241;
		boop();
	});
	$(".h3 .right").click(function(){
		$("#move").stop();
		_left=0;
		boop();
	});
	
}

function tu1(){
	ajax("post","json/mmain_tu1.json",true,null,function(data){
		fn(data,$(".tu1"),"tu1_1");
	});
}
function tu2(){
	ajax("post","json/mmain_tu2.json",true,null,function(data){
		fn(data,$(".tu2"),"tu2_1");
	});
}
function tu3(){
	ajax("post","json/mmain_tu3.json",true,null,function(data){
		fn(data,$(".tu3"),"tu3_1");
	});
}
function tu4(){
	ajax("post","json/mmain_tu4.json",true,null,function(data){
		fn(data,$(".tu4"),"tu4_1");
	});
}
function fn(data,tu,tuu){
	var _data=JSON.parse(data);
	var _img=null;
	var _p=null,_p2=null,_p3=null,_div=null,_a=null,_div2=null,_a2=null,_b=null;
	for(var i in _data){
			_a2=document.createElement("a");
			_a=document.createElement("a");
			_div=document.createElement("div");
			_div2=document.createElement("div");
			_img=document.createElement("img");
			_p=document.createElement("p");
			_p2=document.createElement("p");
			_p3=document.createElement("p");
			_b=document.createElement("b");
			_a.href=_data[i]["src"]
			_img.src=_data[i]["img"];
			_a.className="tuu";
			$(_a).append(_img);
			if(i!=tuu){
				_p.innerHTML=_data[i]["title"];
				_p2.innerHTML=_data[i]["introduce"];
				_p3.innerHTML=_data[i]["price"];
				_b.innerHTML=_data[i]["addition"];
				_a.className="ttu";
				$(_a).append(_p);
				$(_a).append(_p2);
				$(_a).append(_p3);
				$(_a).append(_b);
			}else{
				$(_a2).html("立即购买");
				$(_div2).append(_a2);
				_a2.href="#";
				$(_a).append(_div2);
			}
			$(_p).css({"font-size":"14px"});
			$(_p2).css({"font-size":"12px","color":"#999"});
			$(_p3).css({"font-size":"14px","color":"#e02b41"});
			if(_data[i]["addition"]=="热卖"){
				$(_b).css({"background":"#f59646","width":"40px"});
			}else if(_data[i]["addition"]=="新品"){
				$(_b).css({"background":"#00c3f5","width":"40px"});
			}else if(_data[i]["addition"]=="现货"){
				$(_b).css({"background":"#00afbe","width":"40px"});
			}else if(_data[i]["addition"]=="特惠"){
				$(_b).css({"background":"#f0415f","width":"40px"});
			}else if(_data[i]["addition"]=="免息"){
				$(_b).css({"background":"#00afbe","width":"40px"});
			}
			$(_div).append(_a)
			tu.append(_div);
	}
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
$(document).ready(function(){
	loop();
	nav();
	main1();
	tu1();
	tu2();
	tu3();
	tu4();
	fx();
});