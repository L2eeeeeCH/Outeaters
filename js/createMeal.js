// fusilado de: http://jsfiddle.net/LvsYc/    
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#preview').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
    
$("#modal-imgInp").change(function(){
    readURL(this);
});



