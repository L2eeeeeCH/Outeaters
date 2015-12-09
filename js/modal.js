$(function(){
	$("#photoList img").click(function(){

		//var N = $(this).attr("id").substr(3);

		var Photo_Path = $(this).attr("src");

		if(Photo_Path == "img/add.jpg")
		{

		}
		else
		{
			$("#mainPhoto").attr( "src", Photo_Path);
		}
		
	});
});