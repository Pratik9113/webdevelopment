$(document).ready(function(){
    $("button").click(function(){
        // this will hide all paragraph when we click on click me 
        // $("p").hide();

        // hide everything
        // $("*").hide();
        // $(this).hide();
        // $("p .main").hide();
        // $("#id").hide();
        $("p.main , div.main").hide();


    });
});