var eleResult = document.getElementById("result");
if (!window.console) {
    window.console = {};
}
console.log = function(result) {
    var text = document.createTextNode(result), br = document.createElement("br");
    eleResult.appendChild(text);
    eleResult.appendChild(br);
};

if (typeof Array.prototype.forEach != "function") {
  Array.prototype.forEach = function (fn, context) {
    for (var k = 0, length = this.length; k < length; k++) {
      if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) {
          fn.call(context, this[k], k, this);
      }
    }
  };
}

var database = {
  users: ["zhang", "jiang", "li"],
  sendEmail: function (user) {
    if (this.isValidUser(user)) {
      console.log("hello，" + user);
    } else {
      console.log("sorry，"+ user +",you aren't the relations");    
    }
  },
  isValidUser: function (user) {
    return /^zhang/.test(user);
  }
};

var users = [
  {name: "zhang", "email": "zhang@email.com"},
  {name: "jiang",   "email": "jiang@email.com"},
  {name: "li",  "email": "li@email.com"}
];

var emails = users.map(function (user) { return user.email; });

console.log(emails.join(", ")); 

var emailsZhang = users
  .map(function (user) { return user.email; })
  .filter(function(email) {  return /^zhang/.test(email); });

console.log(emailsZhang.join(", ")); 