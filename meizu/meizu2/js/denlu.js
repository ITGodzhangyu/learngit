var n=1;
$(document).ready(function(){
	$(".zhang").css({"color":"#32a5e7"})
	$(".zhang").click(function(){
		$(".zhanghao").css({"display":"block"})
		$(".iphone").css({"display":"none"})
		$(".zhang").css({"color":"#32a5e7"});
		$(".yan").css({"color":"#7f7f7f"});
		n=1;
	});
	$(".yan").click(function(){
		n=2;
		$(".zhanghao").css({"display":"none"})
		$(".iphone").css({"display":"block"})
		$(".yan").css({"color":"#32a5e7"});
		$(".zhang").css({"color":"#7f7f7f"});
	});
	se(".zhang",".yan");
	main();
});
function se(a,b){
	$(b).mouseenter(function(){
		if(n==1){$(b).css({"color":"#2b2b2b"});}
		else{$(b).css({"color":"#008ec7"});}
	});
	$(b).mouseleave(function(){
		if(n==1){$(b).css({"color":"#7f7f7f"});}
		else{$(b).css({"color":"#32a5e7"});}
	});
	$(a).mouseenter(function(){
		if(n==1){$(a).css({"color":"#008ec7"});}
		else{$(a).css({"color":"#2b2b2b"});}
	});
	$(a).mouseleave(function(){
		if(n==1){$(a).css({"color":"#32a5e7"});}
		else{$(a).css({"color":"#7f7f7f"});}
	});
}
   function main() {
   			var n=0;
            $(".submit").click(function () {
                var user=$(".den-iphone").val();
                var pwd_f = $(".den-mima").val();
                var _params = {
                    "user": user,
                    "password": pwd_f
                };
                $.post("api/login.php", _params, function (data,textStatus){
                    
						if(data=="0"){
							 n++;
							 alert("您好，这是您第"+n+"输入机会次机会！三次登录失败将进入注册");
							 if(n==3){n=0;window.location.href="zhuce.html";}
						}else{
							n=0;
							alert("欢迎:"+data+" 光顾!!");
							window.location.href="index.html";
							
						}
                });
            });
        }
    
  