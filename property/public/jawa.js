function function1() {
  var element = document.getElementById("1");
  var element2 = document.getElementById("2");
  var element3 = document.getElementById("b9");
  var element4 = document.getElementById("b10");
  element2.classList.remove("button1");
  element2.classList.add("button2");
  element.classList.remove("button2");
  element.classList.add("button1");
  element3.style.display = "block";
  element4.style.display = "none";
}
function function2() {
  var element = document.getElementById("1");
  var element2 = document.getElementById("2");
  var element3 = document.getElementById("b9");
  var element4 = document.getElementById("b10");
  element.classList.remove("button1");
  element.classList.add("button2");
  element2.classList.add("button1");
  element2.classList.remove("button2");
  element3.style.display = "none";
  element4.style.display = "block";
}

function function3() {
  document.getElementById("3").style.display = "none";
  document.getElementById("4").style.display = "flex";
  document.getElementById("8").style.display = "none";

  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "block";
}

function function4() {
  document.getElementById("4").style.display = "none";
  document.getElementById("3").style.display = "flex";
  document.getElementById("8").style.display = "flex";

  document.getElementById("b1").style.display = "block";
  document.getElementById("b2").style.display = "none";
}

function function5() {
  console.log("allah");
  document.getElementById("5").style.display = "none";
  document.getElementById("6").style.display = "block";
  document.getElementById("7").style.display = "flex";
}
function function6() {
  document.getElementById("6").style.display = "none";
  document.getElementById("5").style.display = "block";
  document.getElementById("7").style.display = "none";
}
function function7() {
  document.getElementById("villa").style.height = "100%";
  document.getElementById("style2").style.display = "block";
  document.getElementById("style1").style.display = "none";
}
function function8() {
  document.getElementById("villa").style.height = "70px";
  document.getElementById("style2").style.display = "none";
  document.getElementById("style1").style.display = "block";
}
