// SELECTEURS

// document.querySelector("h4").style.background = "yellow";
// const baliseHTML = document.querySelector("h4");

// click event

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

/* <div style> > #id > .class > baliseHTML */

//---------------------------------------------------
// Mouse Events

const mouseMove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mouseMove.style.left = e.pageX + "px";
  mouseMove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mouseMove.style.transform = "scale(2) translate(-25%,-25%)";
});

window.addEventListener("mouseup", () => {
  mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
  mouseMove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//---------------------------------------------------

// Keypress

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = `./assets/${key}.mp3`;
  audio.play();
};
document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  let go = e.key;
  if (go === "a") {
    keypressContainer.style.background = "teal";
  } else if (go === "z") {
    keypressContainer.style.background = "pink";
  } else {
    keypressContainer.style.background = "orange";
  }
  if (e.key === "a") ring(e.key);
});

//--------------------------------------------------------

// Scroll Events

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 140) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//--------------------------------------------------------

// Form Events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let result = document.querySelector(".result");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
  // result.textContent = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cgv.checked) {
    result.innerHTML = `<h3> Votre pseudo : ${pseudo}</h3> <h4> Langage préféré : ${language}</h4>`;
  } else {
    alert("veuillez accepter les CGV");
  }
});

// ------------------------------------------------------------

// Load Event

window.addEventListener("load", () => {
  console.log("Document Chargé! ");
});

// ------------------------------------------------------------
//foreach
// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

// ------------------------------------------------------------
//addEventlistener vs onclick

// document.body.onclick = () => {
//   console.log("click !");
// };

// Bubbling => fin (de base l'eventlistener est paramétré en mode Bubbling)

document.body.addEventListener("click", () => {
  console.log("click 1 !");
});

//Usecapture
// 3eme paramètre "true" fait passer en Usecapture, par conséquent click 2 sera effectué avant click 1
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);

// https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/

// ------------------------------------------------------------------------

//Stop propagation

// questionContainer.addEventListener("click", (e) => {
//   // alert("test");
//   e.stopPropagation();
// });

//removeEventListener

//--------------------------------------------------------------------------

//BOM (BROWSER OBJECT MODEL)

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("http://google.com", "cours js", "height=600", "width=800");
// window.close()

// Evenement adossés à window
// window.alert("hello");

// confirm
btn2.addEventListener("click", () => {
  confirm("voulez vous vraiment vous tromper?");
});

// prompt

btn1.addEventListener("click", () => {
  answer = prompt("Entrez votre nom");
  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

// Timer, compte à rebours
setTimeout(() => {
  //logique à executer
  questionContainer.style.borderRadius = "300px";
}, 2000);

// let interval = setInterval(() => {
//   document.body.innerHTML += `<div class='box'><h2>Nouvelle Boite ! </h2></div>`;
// }, 10000);

// document.body.addEventListener("click", (e) => {
//   e.target.remove();
//   clearInterval(interval);
// });

// Location

// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");

// window.onload = () => {
//   location.href = "http://twitter.fr";
// };

//Navigator

// console.log(navigator.userAgent);

// Montrer la position du l'user

// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log("Votre position actuelle est :");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude : ${crd.longitude}`);
//   console.log(`La précision est de ${crd.accuracy} mètres.`);
// }

// function error(err) {
//   console.warn(`ERREUR (${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

// History

console.log(history);
// revenir à la page précédente
// window.history.back()
// revenir à la page souhaitée (ici 2 pages précédentes)
// window.history.go(-2);

// --------------------------------------------------------------------------
// SetProperty

window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layery + "px");
});
