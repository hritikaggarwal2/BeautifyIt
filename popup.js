$(document).ready(function(){
	var flag = 0

	chrome.tabs.insertCSS({file: 'style.css'});

	$("#button").click(function(){
		if (flag == 0) {
			$("#button").html("SUCCESS! TO REMOVE PRESS 'ctrl / &#8984; + R'");
			flag = 1;
		}
	});
});