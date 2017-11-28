$(function () {

    $("#tutorial-2").hide();
    $("#tutorial-3").hide();
    $("#tutorial-4").hide();


    $(".ball").click(changeSlides);
    $("#slide-1 .circle").css("background", "#8AC5FF");


    function changeSlides(e){
        var checker = e.currentTarget.id;


        if(checker === "slide-1"){
            $("#tutorial-2, #tutorial-3, #tutorial-4").fadeOut(300);

            $("#slide-1 .circle").css("background", "#8AC5FF");
            $("#slide-2 .circle, #slide-3 .circle, #slide-4 .circle").css("background", "white");

            $("#tutorial-1").delay(400).fadeIn(300);

        }else if(checker === "slide-2"){
            $("#tutorial-1, #tutorial-3, #tutorial-4").fadeOut(300);

            $("#slide-2 .circle").css("background", "#8AC5FF");
            $("#slide-1 .circle, #slide-3 .circle, #slide-4 .circle").css("background", "white");

            $("#tutorial-2").delay(400).fadeIn(300);

        }else if(checker === "slide-3"){
            $("#tutorial-1, #tutorial-2, #tutorial-4").fadeOut(300);

            $("#slide-3 .circle").css("background", "#8AC5FF");
            $("#slide-2 .circle, #slide-1 .circle, #slide-4 .circle").css("background", "white");

            $("#tutorial-3").delay(400).fadeIn(300);

        }else if(checker === "slide-4"){
            $("#tutorial-1, #tutorial-3, #tutorial-2").fadeOut(300);

            $("#slide-4 .circle").css("background", "#8AC5FF");
            $("#slide-2 .circle, #slide-3 .circle, #slide-1 .circle").css("background", "white");

            $("#tutorial-4").delay(400).fadeIn(300);

        }
    }

    $(".next").click(changeNext);

    function changeNext() {
        var nextButton = $("#volgende");
        if ($("#tutorial-1").is(":visible")) {
            console.log("test1")
            $("#tutorial-1").fadeOut(300);

            $("#slide-2 .circle").css("background", "#8AC5FF");
            $("#slide-1 .circle").css("background", "white");

            $("#tutorial-2").delay(400).fadeIn(300);

        } else if ($("#tutorial-2").is(":visible")) {
            console.log("test2")
            $("#tutorial-2").fadeOut(300);

            $("#slide-3 .circle").css("background", "#8AC5FF");
            $("#slide-2 .circle").css("background", "white");

            $("#tutorial-3").delay(400).fadeIn(300);

        } else if ($("#tutorial-3").is(":visible")) {
            console.log("test3")
            $("#tutorial-3").fadeOut(300);

            $("#slide-4 .circle").css("background", "#8AC5FF");
            $("#slide-3 .circle").css("background", "white");

            $("#tutorial-4").delay(400).fadeIn(300);

        } else if ($("#tutorial-4").is(":visible")) {
            $("#Tutorial").fadeOut(700);
            $(".mapContainer").css('opacity','1');
            $(".mapContainer").show('slow');
        }
    }

    $("#startApp").click(function () {

        $("#introTekst").fadeOut();
        $(".mapContainer").css('opacity','1');
        $(".mapContainer").show('slow');

    })
})
