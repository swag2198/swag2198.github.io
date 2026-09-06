$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');

    $('a[href^="#"]').click(function(e) {
        var target = $(this.hash);
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 90
            }, 400);
        }
    });

    $('.video-zoomable').click(function() {
        var $video = $(this);
        if ($video.hasClass('video-zoomed')) {
            $video.removeClass('video-zoomed');
            $('.video-zoom-backdrop').remove();
        } else {
            $('body').append('<div class="video-zoom-backdrop"></div>');
            $video.addClass('video-zoomed');
        }
    });

    $(document).on('click', '.video-zoom-backdrop', function() {
        $('.video-zoomed').removeClass('video-zoomed');
        $(this).remove();
    });
});
