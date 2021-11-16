var imgs = [ "img/0.webp" , "img/1.webp" , "img/2.webp" , "img/3.webp" , "img/4.webp" , "img/5.webp" ] ;
var cur = 0;

setBlock();

function roll() {
	cur++;
	if (cur >= imgs.length) cur = 0;
	document.getElementById("roll").src = imgs[cur] ;
	setBlock();
}

var fID = setInterval("roll()",3000) ;

function setBlock(){
	var s = "" ;
	for ( var i in imgs ) {
		if (i==cur)
			s += '<div class="cur" changeImg('+i+')></div>';
		else 
			s += '<div onclick="changeImg('+i+')"></div>';
	}
	document.getElementById("block").innerHTML = s ;
 }
setBlock();

function changeImg(k) {
	clearInterval(fID); //取消自动切换，重新开始计时
	cur = k ;
	document.getElementById("roll").src = imgs[cur] ;
	setBlock();
	fID ;
}