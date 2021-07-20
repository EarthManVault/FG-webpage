const correctAnswers = [
  "Matt is an athlete.",
  "Matt is a doctor.",
  "Matt is a veterinarian and an athlete.",
  "Matt is a veterinarian.",
];

const correctAltAnswers = [
  "Matt is a doctor.",
  "Matt is an athlete.",
  "Matt is a veterinarian and an athlete.",
  "Matt is a veterinarian.",
];

function checkAnswer() {
  const li = document.querySelectorAll(".wrapper");
  let listDump = new Array();
  li.forEach(function (text) {
    listDump.push(text.innerHTML);
  });
  listDump = JSON.stringify(listDump)

  // This is a terrible way to this, but it kind of works 
  let answers = new Array();
  let s = "";
  for (var i = 0; i < listDump.length; i++){
    if (listDump[i] == '>') { i++;
      while (listDump[i] != '>') {
        s+= listDump[i];
        i++;
      }
      answers.push(s.replaceAll("</ul", ""));
      s = "";
    }
  }
 // console.log(answers);
 // console.log(correctAnswers);
  if (JSON.stringify(correctAnswers) === JSON.stringify(answers) || JSON.stringify(correctAltAnswers) === JSON.stringify(answers)) {
   // alert("Correct :)");
   var x = document.getElementById("correctDIV");
   x.style.display = "block";
  } else {
   // alert("Try Again...");
   var x = document.getElementById("wrongDIV");
   x.style.display = "block"; 
  }
}

function correctGoodNews() {
   x = document.getElementById("correctGoodNews");
   x.style.display = "block"; 
    x = document.getElementById("correctBadNews");
   x.style.display = "none"; 
}
function correctBadNews() {
   x = document.getElementById("correctBadNews");
   x.style.display = "block"; 
   x = document.getElementById("correctGoodNews");
   x.style.display = "none"; 
}

function wrongGoodNews() {
x = document.getElementById("wrongBadNews");
   x.style.display = "none"; 
   x = document.getElementById("wrongGoodNews");
   x.style.display = "block"; 
}
function wrongBadNews() {
 x = document.getElementById("wrongBadNews");
   x.style.display = "block"; 
   x = document.getElementById("wrongGoodNews");
   x.style.display = "none"; 
}
