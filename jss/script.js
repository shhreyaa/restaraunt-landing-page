const emailBtn = document.getElementById("btn-email");
const subscribtion = document.getElementById("sub");


//for hover in Why Choose us
var reasonWrap = document.getElementsByClassName("reason-item");
for (var i = 0; i < reasonWrap.length; i++) {
  reasonWrap[i].onmouseover = function () {
    //remove unactive one

    var el = reasonWrap[0];
    while (el) {
      if (el.tagName === "DIV") {
        el.classList.remove("shadow");
      
      }
      el = el.nextSibling;
    }
    this.classList.add("shadow");
  };
}

//for hover in Menu

var menuWrap = document.getElementsByClassName("ft");
var foodWrap = document.getElementsByClassName("process-food")
for (var i = 0; i < menuWrap.length; i++) {
  menuWrap[i].onmouseover = function () {
    //remove unactive one

    var el = menuWrap[0];
    while (el) {
      if (el.tagName === "DIV") {
        el.classList.remove("click");
        
       
      }
      el = el.nextSibling;
    }
    this.classList.add("click");

  };
}
for (var i = 0; i < foodWrap.length; i++) {
  foodWrap[i].onmouseover = function () {
    //remove unactive one

    var el = foodWrap[0];
    while (el) {
      console.log(el)
      if (el.tagName === "IMG") {
        el.classList.remove("clicked");
       
      }
      el = el.nextSibling;
    }
    this.classList.add("clicked");
  };
}

//for icons


// for responsive nav-bar
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

//for email validation

function validate(event) {
  const email = document.getElementById("email").value;

  console.log(email);
  event.preventDefault();

  var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-zA-Z]{2,8})(.[a-zA-Z]{2,8})$/;
  if (regx.test(email)) {
    console.log("valid");
    document.getElementById("email").style.border = "1px";
    document.getElementById("validity").innerHTML = "";
  } else {
    document.getElementById("email").style.border = "2px solid red";
    document.getElementById("validity").innerHTML = "Invalid Email address";
  }
}

function subscribe(event) {
  const subscrib = document.getElementById("subscribe").value;

  console.log(email);
  event.preventDefault();

  var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-zA-Z]{2,8})(.[a-zA-Z]{2,8})$/;
  if (regx.test(subscrib)) {
    console.log("valid");
    document.getElementById("subscribe").style.border = "1px";
    document.getElementById("valid").style.color = "#636465";
    document.getElementById("valid").innerHTML =
      "You have been added to the subscription list";
  } else {
    document.getElementById("subscribe").style.border = "2px solid red";
    document.getElementById("valid").style.color = "red";
    document.getElementById("valid").innerHTML = "Invalid Email address";
  }
}
emailBtn.addEventListener("click", validate);
sub.addEventListener("click", subscribe);


