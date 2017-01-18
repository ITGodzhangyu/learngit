function createHttpRequest(){
	try{
		return new window.XMLHttpRequest();
	}catch(e){
		return new ActiveXObject("Microsoft.XMLHttpRequest");
	}
}
/**
 *_method:打开服务器交互的方式
 *_url:boolean类型
 *_fn:回调函数
*/
function ajax(_method,_url,_ansy,_parameter,_fn){
	var _xhr=createHttpRequest();
	if(_xhr){
		_xhr.onreadystatechange=function(){
			if(_xhr.readyState==4){
				_fn(_xhr.responseText);
				//_fn===_fn1;
				//_fn1(_xhr.responseText);
			}
		}
		_xhr.open(_method,_url,_ansy);
		_xhr.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=\"utf-8\"");
		//_xhr.setRequestHeader("content-type","multipart/form-data;charset=\"utf-8\"");
		//_xhr.setRequestHeader("content-type","application/json;charset=\"utf-8\"");
		_xhr.send(_parameter);
	}else{
		alert("此浏览器不兼容请升级你的浏览器！！");
	}
}