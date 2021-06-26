// show/hidden Gallery ---------------------------------------------------
$(document).ready(function() {
    // Handle click on paging links
    $(".menu__item__link").click(function(e) {
        e.preventDefault();

        var current = $(this).text().toLowerCase();
        $(".menu__gallery__page").addClass("hidden");
        $("#gallery__page__" + current).removeClass("hidden");
        $(".menu__item__link").removeClass("active");
        $(this).addClass("active");
    });
});


// $(document).ready(function() {
//     $("#pizza").click(function(event) {
//         event.preventDefault();
//         $("#gallery__page__salad").addClass("hidden");
//         $("#gallery__page__pizza").removeClass("hidden");
//         $("#gallery__page__noodle").addClass("hidden");
//         $("#pizza").addClass("active");
//         $("#salad").removeClass("active");
//         $("#noodle").removeClass("active");
//     });
//     $("#salad").click(function(event) {
//         event.preventDefault();
//         $("#gallery__page__salad").removeClass("hidden");
//         $("#gallery__page__pizza").addClass("hidden");
//         $("#gallery__page__noodle").addClass("hidden");
//         $("#pizza").removeClass("active");
//         $("#salad").addClass("active");
//         $("#noodle").removeClass("active");
//     });
//     $("#noodle").click(function(event) {
//         event.preventDefault();
//         $("#gallery__page__salad").addClass("hidden");
//         $("#gallery__page__pizza").addClass("hidden");
//         $("#gallery__page__noodle").removeClass("hidden");
//         $("#pizza").removeClass("active");
//         $("#salad").removeClass("active");
//         $("#noodle").addClass("active");
//     });
// });