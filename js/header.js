function threeFn() {
	document.getElementById("Top_push").style.display = "none" ;
	document.getElementById("header").style.height = "180px" ;
}

var int = self.setInterval("clock()", 1000)
var i = 0;

function clock() {
	i++;
	if (i > 4) i = 0;
	var texts = ["母婴神券日", "保暖羽绒服", "抢电脑数码", "我也不知道", "还能写点啥", ];
	var t = new Date()
	document.getElementById("clock").innerHTML = texts[i]
}
