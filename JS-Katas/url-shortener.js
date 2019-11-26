let longUrl = "https://example.com/exercises/make-url-shortener";
let hash = {};

var encode = function(longUrl) {
  const hexDecimal = Math.random().toString(36).substring(2, 8);
  hash[hexDecimal] = longUrl;
  return `www.shorter-url.com/${hexDecimal}`
};

var decode = function(shortUrl) {
    return hash[shortUrl.split("/")[1]];
};

console.log(encode(longUrl));
console.log(decode(encode(longUrl)));
    