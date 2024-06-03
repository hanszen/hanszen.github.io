// Code taken from https://logwork.com/widget/countdown
// Countdown_api.js was modified to not be a hyperlink to their webpage.

(function (e, i, h, f, c, b, d) {
    d = new Date(), h += "?v=" + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours(), c = e.createElement(i), b = e.getElementsByTagName(i)[0];
    if (e.getElementById(f)) {
        return
    }
    c.src = h;
    c.id = f;
    b.parentNode.insertBefore(c, b)
})(document, "script", "/js/countdown_api.js", "countdown-timer");