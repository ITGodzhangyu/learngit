function  main(){
            var _reg={
                //"account":/^\w{6,12}$/g,//验证用户账号的长度够不够，并且限制只能字母数字下横线
                "account":/^1[345678]\d{9}$/g,//验证手机号
                "secret":/^.{6,20}$/g //验证密码
            }
            $(".zhu-iphone")[0].onblur=function(){
                _reg.account.lastIndex=0;
				if(_reg.account.test(this.value)) {
                    var _self=this;
                    $.post("api/checkUser.php", {"condition": "user='" + this.value + "'"}, function (data,textStatus) {
                        if (textStatus=="success" && parseInt(data) > 0) {
                            alert("**手机号码已被占用，请重新输入！！");
                        } else {
                            
                        }
                    });
                }else{
                   alert("*手机格式不正确！！") ;
                }
            }
            $(".submit")[0].onclick=function(){
               var _params={
                        "user":$(".zhu-iphone")[0].value,
                        "secret":$(".mima")[0].value,
               }
				_reg.account.lastIndex=0;
				_reg.secret.lastIndex=0;
                    if(_reg.account.test(_params.user) && _reg.secret.test(_params.secret)) {
                        $.post("api/registerUser.php", _params, function (data,textStatus) {
                            if (textStatus=="success" && parseInt(data) > 0) {
                                alert("您已顺利成为会员！！！");
                                window.location.href="denlu.html";
                            }else {
                                alert("尊敬的用户您好，您注册会员操作失败，请重试，或者联系管理员！！！");
                            }
                        });
                    }else{
                        alert("尊敬的用户您好，您的基本信息不完整，为了安全请完善！！");
                    }
            }
        }
$(document).ready(function(){
	main();
});
