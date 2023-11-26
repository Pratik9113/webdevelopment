//$(document).ready(function(){
    // console.log("text");
    // $("button").on("click",function(){
    //     $("h1").css("color","#32c888");
    // });

    // $("p").click(function(){
    //     alert("you click on paragragh");
    // });

    // $("p").dblclick(function(){
    //     alert("you click on paragragh");
    // });

    // $("p").mouseenter(function(){
    //     alert("you click on paragragh");
    // });
    // this all about event manpulation 

    // string manuplilation 

// });

$(document).ready(function(){
    $("button").click(function(){
        // console.log($("body").css("background-color", "#32c888"));
        // $("p").css({"background": "#32c888", "font-size": "20px"});
        // $("h1,h2,p").addClass("green");
        // $("h1,h2,p").addClass("green big");
        // $("h1,h2,p").toggleClass("green big");
        // $("h1,h2,p").toggleClass("green");

        // text manupliation
        // $("h1").text("how are you buddy");
        /// $("h1").html("heyy !! <span style = 'color:#32c888;'>pratik</span>, how are you ");

        // attribute manuplilation
        $("img").attr("src","https://prepinsta.com/wp-content/themes/prepinsta-2020/images/landing-page/Capture2.png");
        $("a").attr("href","www.google.com");
    });
});