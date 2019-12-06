function setCookie(cookieName, cookieValue) {
    if(cookieName == null || cookieValue == null) { 
        return "Enter valid cookie details"
    };

    var documentCookies = "Foo=Bar; Bar=Baz; Baz=Foo;";
    var cookies = documentCookies.split("; ");
    cookies.push(`${cookieName}=${cookieValue}`);

    for (let index = 0; index < cookies.length; index++) {
        if(cookies[index].endsWith(";")) { continue }
        cookies[index] = `${cookies[index]};`;
    }
    
    return cookies.join(" ");
}

console.log(setCookie("Bez", "Buz"));