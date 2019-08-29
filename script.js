$("li").click(function () {
    // if($(this).css("color") === "rgb(128, 128, 128)") {
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     })
    // } else {
    //     $(this).css({
    //         color: "grey",
    //         textDecoration: "line-through"
    //     })
    // }
    $(this).toggleClass("done");

});

$("span").click(function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(function () {
        $(this).remove();
    });
});

$("input").keypress(function (event) {
    if(event.which === 13) {
        var itemText = $(this).val();
        $(this).val("");
        $("ul").append("<li>" + itemText + "</li>");
    }
});
