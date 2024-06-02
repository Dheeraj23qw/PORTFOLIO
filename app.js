let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
const msg = document.getElementById("msg");

var typed = new Typed(".text", {
  strings: [
    "MERN Stack Developer",
    "Fronted Developer",
    "UI/UX Designer",
    
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  startDelay: 1000,
  loop: true,
});

function submitmsg() {
  msg.innerHTML = "Submited Successfully";
  setTimeout(() => {
    msg.innerHTML = "";
  }, 3000);
}

function opentab() {
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function () {
      for (let j = 0; j < tabcontents.length; j++) {
        tabcontents[j].style.display = "none";
        tablinks[j].classList.remove("active-link");
      }
      tabcontents[i].style.display = "block";
      tablinks[i].classList.add("active-link");
    });
  }
}

function closemenu() {
  document.getElementById("sidemenu").style.right = "-200px";
}

function openmenu() {
  document.getElementById("sidemenu").style.right = "0px";
}
