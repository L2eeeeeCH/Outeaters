window.onload = eventLoad;

$(function(){
	$("#meal-list img").click(function(){
		var N = $(this).attr("id").substr(2);
	})
})