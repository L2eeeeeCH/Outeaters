window.onload = eventLoad;

$(function(){
	$("#photoList img").click(function(){

		var N = $(this).attr("id").substr(3);

		//var Photo_Path = $(this).attr("src");

		$("#mainPhoto").attr( "src", "img/meal.jpg");
	});
});