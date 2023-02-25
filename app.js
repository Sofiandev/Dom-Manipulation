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
  ring(e.key);
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
