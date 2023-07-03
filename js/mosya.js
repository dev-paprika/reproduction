$(document).ready(function () {
    $(".menu-link").hover(
        function () {
            // Hover in
            $(this)
                .find(".sub-menu")
                .removeClass("close")
                .hide()
                .slideDown("fast");
        },
        function () {
            // Hover out
            $(this)
                .find(".sub-menu")
                .slideUp(5, function () {
                    $(this).addClass("close");
                });
        }
    );
});
