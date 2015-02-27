
$(document).ready(function () {

    var UserAgentString = navigator.userAgent;
    if ((UserAgentString.indexOf('Windows Phone')) != -1) {
        if (!checkCookie())
            $('.bookmark-popup').fadeIn('slow').delay(15000).fadeOut('slow');
    }
    $('.bookmark-popup .close').click(function () {
        $('.bookmark-popup').hide();
        setCookie("wp-bookmark-nordicautoel", "true", 1);
    });
});

function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    }
    else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function checkCookie() {
    var username = getCookie("wp-bookmark-nordicautoel");
    if (username != null && username != "") {
        return true;
    }
    else {
        return false;
    }
}

