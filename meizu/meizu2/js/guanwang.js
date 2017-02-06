
function guanmove(){
	for(var i=0;i<4;i++){
		$(".guan-move span").eq(i).css({"z-index":i,"background-image":"url(img/shouye-banner"+(i+1)+".jpg)"});
	}
	$(".guan-move span").eq(4).css({"background-image":"url(img/shouye-banner1.jpg)"});
	var _left=1;
	var timer=0;
	var _width=$(".guan-move span").width();
	function leeft(){
		_left-=1;
		if(_left<-160){
			_left=-1;
		}
		guannavb(_left);
		$(".guan-move").animate({"left":_left/40*_width+"px"},1,function(){
			if(_left%40==0){
				$(".guan-control span").css({"background":"#fff","border":"none","width":"10px","height":"10px"});
				$(".guan-control span").eq(_left/(-40)).css({"background":"none","border":"1px solid #fff","width":"12px","height":"12px"});
				$(".header a").css({"color":"#fff"});
				$(".header a").mouseleave(function(){$(this).css({"color":"#fff"});});
				$(".gg img").attr({"src":"img/guan-logo1.jpg"})
				if(_left==-80||_left==-120){
						$(".gg img").attr({"src":"img/guan-logo2.jpg"});
						$(".header a").css({"color":"#515151"});
						$(".header a").mouseleave(function(){$(this).css({"color":"#515151"});})
						$(".guan-control span").css({"background":"#515151","border":"none","width":"10px","height":"10px"});
						$(".guan-control span").eq(_left/(-40)).css({"background":"none","border":"1px solid #515151","width":"12px","height":"12px"});
				}
				if(_left==-160){$(".guan-control span").eq((_left+160)/(-40)).css({"background":"none","border":"1px solid #fff","width":"12px","height":"12px"});}
				timer=window.setTimeout(leeft,5000);
			}else{
				return leeft();
			}
		});	
	}
	leeft();
	$(".guan-control span").click(function(){
		$(".guan-move").stop();
		window.clearTimeout(timer);
		_left=$(this).index()*(-40)+1;
		leeft();
	});
	$(".header a").mouseover(function(){$(this).css({"color":"#00c3f5"});});
}
function guannavb(_left){
	var _index=0;
	for(var i=1;i<5;i++){
		mouse(i,_left);
	}
}
function mouse(n,_left){
	$(".guan-nav-b"+n).mouseover(function(){
			$(".guan-nav-b"+n+1).css({"display":"block"});
			$(".header a").css({"color":"#515151"});
			$(".gg img").attr({"src":"img/guan-logo2.jpg"});
			$(".header a").mouseover(function(){
				$(this).css({"color":"#00c3f5"});
			})
			$(".bheader").css({"background":"#fff"});
		});
		$(".guan-nav-b"+n).mouseleave(function(){
			$(".guan-nav-b"+n+1).css({"display":"none"});
			$(".bheader").css({"background":"none"});
			if(_left>=-40){$(".header a").css({"color":"#fff"});$(".gg img").attr({"src":"img/guan-logo1.jpg"});}
			else{$(".header a").css({"color":"#515151"});$(".gg img").attr({"src":"img/guan-logo2.jpg"});}
		});
}
function guannavb11(){
	ajax("post","json/guanwang.json",true,null,function(data){
		var _data=JSON.parse(data);
		var _img=null,m=0;
		var _p=null,_a=null;
		for(var n in _data){
			m=0;
			for(var i in _data[n]){
				_a=document.createElement("a");
				_img=document.createElement("img");
				_p=document.createElement("p");
				$(_a).append(_img);
				$(_a).append(_p);
				$(_a)[0].href=_data[n][i]["href"];
				$(_img)[0].src=_data[n][i]["img"];
				$(_p)[0].innerHTML=_data[n][i]["title"];
				$(_a)[0].className="d"+m;
				$(_a).css({"right":150*(m-1)+"px"});m++;
				$("\."+n+" div").append(_a);
			}
		}
	});
}
//function nav(){
//	for(var m=0;m<7;m++){
//		$(".guan-nav-bb").mouseenter(function(){
//			$(".guan-nav-b div a").eq(m).animate({"right":150*m+"px","opacity":"1"},100*m)
//		})
//		$(".guan-nav-bb").mouseleave(function(){
//				$(".guan-nav-b div a").eq(m).css({"right":150*(m-1)+"px","opacity":0})
//		})
//		$(".guan-nav-b div a").eq(m).mouseenter(function(){
//			$(this).css({"opacity":1});
//			$(".guan-nav-b div a").not(this).css({"opacity":0.5});
//		})
//		$(".guan-nav-b div a").eq(m).mouseleave(function(){
//			$(".guan-nav-b div a").css({"opacity":1});
//		})
//	}
//}
$(document).ready(function(){
	guanmove();
	guannavb11();
	//nav();
});