$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 250){
            $("#navbarr").addClass("navbarScript");
        }else{
            $("#navbarr").removeClass("navbarScript");
        }
    });
});