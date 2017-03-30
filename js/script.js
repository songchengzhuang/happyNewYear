window.onload = function() {
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");
	var page_02 = document.getElementById("page_02");

	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];

	/*音乐自动播放完了后，转盘自动停止*/
	audio.addEventListener("ended", function(event) {
		music.className = "#1";
	}, false);

	/*音乐转盘点击音乐停止播放和 装盘停止转动 .但是这是在电脑端的点击，要是在手机端的就要 改成 触碰。*/
	/*music.onclick=function(){
		if (audio.paused) {
			audio.play();
			this.className="playdonghua";
		 	//this.setAttribute("class","playdonghua");
			//this.style.animationPlayState="running";   //可以让转盘停在原处，但是兼容性很差。
		}
		else{
			audio.pause();
			this.className="#1";
			//this.setAttribute("class","#1");
			//this.style.animationPlayState="paused";   //可以让转盘停在原处，但是兼容性很差。
		}
	}*/

	/*手机端的触碰 监听一个事件*/
	music.addEventListener("touchstart", function(event) {
		if(audio.paused) {
			audio.play();
			this.className = "playdonghua";
		} else {
			audio.pause();
			this.className = "#1";
		}
	}, false);

	/*点击灯笼出现翻页效果*/
	window.addEventListener("touchstart", function(event) {
		page1.style.display = "none";
		page2.style.display = "block";
		page_02.style.display = "block";
		page_02.style.top = "100%";
		page3.style.display = "block";
		page3.style.top = "100%";

		setTimeout(function() {
			page2.setAttribute("class", "page fadeout");
			page_02.setAttribute("class", "page fadeoutin1");
		}, 5600);

		setTimeout(function() {
			page_02.setAttribute("class", "page fadeoutin2");
			page3.setAttribute("class", "page fadein");
		}, 13000);
	}, false);

}