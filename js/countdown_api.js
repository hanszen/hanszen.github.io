// Code taken from https://logwork.com/widget/countdown
// Countdown_api.js was modified to not be a hyperlink to their webpage.

(function () {
    var m = document.querySelectorAll(".countdown-timer"), a = "countdown-active", e, c, n, j, d, l;
    n = window.addEventListener ? "addEventListener" : "attachEvent";
    j = window[n];
    d = n == "attachEvent" ? "onmessage" : "message";
    for (e = 0; e < m.length; e++) {
        h(m[e])
    }

    function k(o, i) {
        if (o == 0) {
            return Math.floor((Math.random() * i) + 0)
        } else {
            return Math.floor(Math.random() * (i - o + 1)) + o
        }
    }

    function b(o) {
        var i;
        if (o.indexOf("//") > -1) {
            i = o.split("/")[2]
        } else {
            i = o.split("/")[0]
        }
        i = i.split(":")[0];
        i = i.split("?")[0];
        return i
    }

    function h(z) {
        var p = "", q = "", s = "", v = "", A = "", o = "", y = "", r = "", i = "", t = "", u = "", x = k(1, 1000000),
            w = "";
        w = "https://logwork.com/widget/countdown"
        p = "https://logwork.com/widget/countdown"
        if (typeof z.attributes.rel !== "undefined") {
            w = ""
        }
        if (z.tagName != "A") {
            w = ""
        }
        if (typeof z.innerText === "undefined") {
            w = ""
        } else {
            if (z.innerText == "") {
                w = ""
            }
        }
        if (z.className.indexOf(a) === -1) {
            z.style.position = "relative";
            z.style.overflow = "hidden";
            z.style.display = "inline-block";
            if (typeof z.innerText !== "undefined") {
                A = encodeURIComponent(z.innerText)
            }
            if (typeof z.dataset.background !== "undefined") {
                o = encodeURIComponent(z.dataset.background)
            }
            if (typeof z.dataset.timezone !== "undefined") {
                y = encodeURIComponent(z.dataset.timezone)
            }
            if (typeof z.dataset.width !== "undefined") {
                r = encodeURIComponent(z.dataset.width)
            } else {
                z.style.width = "100%"
            }
            if (typeof z.dataset.style !== "undefined") {
                i = encodeURIComponent(z.dataset.style)
            }
            if (typeof z.dataset.language !== "undefined") {
                v = encodeURIComponent(z.dataset.language)
            }
            if (typeof z.dataset.textcolor !== "undefined") {
                q = encodeURIComponent(z.dataset.textcolor)
            }
            if (typeof z.dataset.digitscolor !== "undefined") {
                s = encodeURIComponent(z.dataset.digitscolor)
            }
            if (typeof z.dataset.unitscolor !== "undefined") {
                u = encodeURIComponent(z.dataset.unitscolor)
            }
            if (typeof z.dataset.date !== "undefined") {
                t = encodeURIComponent(z.dataset.date)
            }
            z.id = "time_countdown_" + x;
            countdown_width = "";
            countdown_height = "";
            l = window.location.origin + window.location.pathname;
            c = document.createElement("iframe");
            c.setAttribute("src", p + "/?text=" + A + "&timezone=" + y + "&width=" + r + "&style=" + i + "&uid=" + x + "&loc=" + w + "&language=" + v + "&textcolor=" + q + "&background=" + o + "&date=" + t + "&digitscolor=" + s + "&unitscolor=" + u + "&url=" + l);
            c.id = "countdown_iframe_" + x;
            c.style.width = countdown_width + "px";
            c.style.height = countdown_height + "px";
            c.style.width = "1px";
            c.style.height = "1px";
            c.style.backgroundColor = "none transparent";
            c.style.border = "none";
            c.style.margin = "0px";
            c.setAttribute("scrolling", "no");
            c.setAttribute("allowtransparency", "true");
            c.setAttribute("frameborder", "0");
            c.setAttribute("title", "Countdown");
            z.innerHTML = "";
            z.appendChild(c);
            z.target = "_blank";
            overlay_div = document.createElement("div");
            overlay_div.style.width = countdown_width + "px";
            overlay_div.style.height = countdown_height + "px";
            overlay_div.style.width = "1px";
            overlay_div.style.height = "1px";
            overlay_div.style.position = "absolute";
            overlay_div.style.left = "0";
            overlay_div.style.top = "0";
            overlay_div.style.opacity = "0";
            overlay_div.id = "ovd_" + x;
            z.appendChild(overlay_div);
            z.addEventListener("mouseover", function () {
                f(z, "button_over")
            }, false);
            z.addEventListener("mouseout", function () {
                f(z, "button_out")
            }, false);
            g(z, a)
        }
    }

    function f(i, p) {
        var o = i.getElementsByTagName("iframe")[0].contentWindow;
        o.postMessage(p, "*")
    }

    function g(o, i) {
        if (o.classList) {
            o.classList.add(i)
        } else {
            o.className += " " + i
        }
    }

    j(d, function (p) {
        var i, o;
        if (p.data.event_id === "js_countdown_show") {
            i = document.getElementById("countdown_iframe_" + p.data.uid);
            o = document.getElementById("time_countdown_" + p.data.uid);
            if (i !== null) {
                i.style.height = "100%";
                i.style.visibility = "visible";
                if (typeof o.dataset.width !== "undefined") {
                    i.style.width = o.dataset.width + "px"
                } else {
                    i.style.width = "100%"
                }
                if (p.data.page == "not_found") {
                    // o.attributes.href.value = "https://" + b(o.attributes.href.value) + "/countdown-timer";
                    i.style.width = "500px";
                    i.style.height = "50px"
                }
                f(o, "js_countdown_size")
            }
        }
        if (p.data.event_id === "time_countdown_size") {
            i = document.getElementById("countdown_iframe_" + p.data.uid);
            o = document.getElementById("time_countdown_" + p.data.uid);
            overlay = document.getElementById("ovd_" + p.data.uid);
            if (p.data.width !== null && p.data.height !== null && i !== null) {
                if (typeof o.dataset.width !== "undefined") {
                    i.style.width = o.dataset.size + "px"
                } else {
                    i.style.width = "100%"
                }
                o.style.height = p.data.height + "px";
                i.style.height = "100%";
                i.style.visibility = "visible";
                overlay.style.width = (p.data.width + 6) + "px";
                overlay.style.height = (p.data.height + 6) + "px"
            }
        }
    }, false)
})();