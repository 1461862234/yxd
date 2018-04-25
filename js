#canvas 压缩图片
function cutDowmImg(img, width){
	var canvas = document.createElement("canvas");
	canvas.width = Math.min(img.width, width);
	canvas.height = img.height*width/img.width;
	var cxt = canvas.getContext("2d");
	cxt.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
	return canvas.toDataURL();
}

#Js+canvas 图片压缩
//选择文件后进行文件上传
	$("#upload").on("change", function(e){
		var reader=new FileReader();
		reader.onload=function(){
		  var img = new Image();
          img.src = reader.result;
          img.onload = function(){
        	  var str = cutDowmImg(img, 500);
        	  imgLrzLoad(this, e, str);
          }
		}  
		reader.readAsDataURL(this.files[0])
		$("#picture-upload").hide();
		
	});

#网站禁止右键方法
＜body oncontextmenu=self.event.returnValue=false onselectstart="return false"＞

#Js 通过canvas添加水印
//canvas压缩文件
function cutDowmImg(img, width){
	var canvas = document.createElement("canvas");
	canvas.width = Math.min(img.width, width);
	canvas.height = img.height*width/img.width;
	var cxt = canvas.getContext("2d");
	cxt.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
	cxt.font="20px microsoft yahei";
	cxt.fillStyle = "rgba(255,255,255,0.5)";
	var time = CurentTime();
    cxt.fillText(time,50,50);
	return canvas.toDataURL();
}

#//兄弟元素同级其他元素
siblings()
