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
    
$("#imgInp").change(function(){
    readURL(this);
});

$("#bot").on('click', function(){
  

    
    $texto = ' <div class="cuadro"><input name="userfile[]" type="file" /></div>';
    $('#form2 .cuadro').last().after($texto );  


});


