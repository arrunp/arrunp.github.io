$(document).ready(function () {
    $("#dropbanner a, #banner a, ul li a").bind("click", function (event) {
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").stop().animate({
            scrollLeft: $(target).offset().left, scrollTop: $(target).offset().top
        }, 1000);
    });
});

(function () {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.documentElement.scrollLeft -= (delta * 40); // Multiplied by 40
        document.body.scrollLeft -= (delta * 40); // Multiplied by 40
    }
    if (window.addEventListener) {
        // IE9, Chrome, Safari, Opera
        window.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        window.attachEvent("onmousewheel", scrollHorizontally);
    }
})();

$(document).ready(function () {
    $(window).scroll(function () {
        $("#welcome").css("opacity", 1 - $(window).scrollTop() / $('#welcome').height());
    });
});

$(window).scroll(function () {
    var banner_end = document.getElementById('banner-mark');
    var toolbar = document.getElementById('toolbar');

    if (window.scrollY > banner_end.offsetTop) {
        banner.classList.add('disappear');
        toolbar.classList.remove('disappear');
    }

    else {
        banner.classList.remove('disappear');
        toolbar.classList.add('disappear');
    }
});

var hello = document.getElementById('hello');

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.05;
    }, 10);
}
