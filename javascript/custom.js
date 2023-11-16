$(window).ready(function(){
    var buttonStr = '<div class="content-div">';
    buttonStr += '<button class="start-button" type="button">Başlat</button>';
    buttonStr += '<button class="stop-button" type="button">Durdur</button>';
    buttonStr += '</div>';

    var intervalID;

    setTimeout(() => {
        $("body").append(buttonStr);
    }, 1000);


    $("body").on("click", ".start-button", function () {
        startButton();

        intervalID = setInterval(() => {
            startButton();
        }, 3000);
    });;

    $("body").on("click", ".stop-button", function () {
        clearInterval(intervalID);
    });;

});


const startButton = () => {
    var content = $(".x9f619 div article:not(.likeds):first").addClass("likeds");
    content.find(".xp7jhwk .x1i10hfl").click();

    var targetPosition = content.offset().top;
    $('html, body').animate({
        scrollTop: targetPosition
    }, 500);
}
