const redLight = document.getElementById("red-light");
const orangeLight = document.getElementById("orange-light");
const greenlight = document.getElementById("green-light");

let pauseLights;

window.addEventListener("load", () => {
  redLight.classList.add("red");
  pauseLights = setInterval(lightOn, 10000);
});

function lightOn() {
  RedlightOn();
}

function RedlightOn() {
  redLight.classList.add("red");
  greenlight.classList.remove("green");
  setTimeout(orangeLightOn, 5000);
}

function orangeLightOn() {
  redLight.classList.remove("red");
  orangeLight.classList.add("orange");
  setTimeout(greenLightOn, 2000);
}

function greenLightOn() {
  orangeLight.classList.remove("orange");
  greenlight.classList.add("green");
}

document.addEventListener("keypress", function (event) {
  if (event.key === "p") {
    stopLight();
  }
});

function stopLight() {
  clearInterval(pauseLights);
  console.log("triggerd");
}

document.addEventListener("keypress", function (event) {
  if (event.key === "r") {
    pauseLights = setInterval(lightOn, 10000);
  }
});
