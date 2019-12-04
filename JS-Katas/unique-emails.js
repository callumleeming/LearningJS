let input = ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"];
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails

var numUniqueEmails = function (emails) {
  let results = [];

  for (let i = 0; i < emails.length; i++) {
    let email = emails[i].split("+");
    let domain = email[1].split("@").pop();
    let local = email.shift().split(".").join("");
    let result = `${local}@${domain}`;
    
    if(!results.includes(result)) { 
      results.push(result)
    }
  };  

  return results.length;
};

console.log(numUniqueEmails(input));
