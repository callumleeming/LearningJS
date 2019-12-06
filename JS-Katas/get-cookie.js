function getCookie(cookieName) {
    var splitCookies = window.document.cookie.split("; ");
    var cookies = {};

    for (var index = 0; index < splitCookies.length; index++) {
        var cookie = splitCookies[index].split("=");
        var key = cookie[0];

        cookies[key] = cookie[1];
    }

    return cookies[cookieName] || null;
}

console.log(getCookieValueByName("someCookie")); //someValue