let containerBox = document.querySelector(".container");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let opacityBtn = document.querySelector("#opacityBtn");
let oneCircle = document.querySelector("#one");
let circles = document.querySelectorAll(".circle");
let inputTimer = document.querySelector("input[type=text]");
let spanTimer = document.querySelector("span");
let colorCheckbox = document.querySelector("#choose");
let radiusCheckbox = document.querySelector("#chRadius");
let colorBox = document.querySelector("#color");
let radiusBox = document.querySelector("#radius");
let radiusDiv = document.querySelector("#radiusDiv");
let radiusSpan = document.querySelector("#radiusSpan");
let timerId;
let time = 1000;
let intencityValue;
let idColor = null;
let radius = null;
let opacityValueSpan = document.querySelector(".opacity span");


startBtn.addEventListener("click", startFn);
stopBtn.addEventListener("click", stopFn);
opacityBtn.addEventListener("click", opacityBtnFn);
inputTimer.addEventListener("keydown", function timerFn(event) {
  if (event.key === "Enter") {
    if (Number.isFinite(+inputTimer.value)) {
      time = +inputTimer.value;
      spanTimer.innerText = "the interval of time: " + inputTimer.value;
      inputTimer.value = "";
    }
  }
});
colorCheckbox.addEventListener("click", chooseColorFn);
radiusCheckbox.addEventListener("click", chooseRadiusFn);
containerBox.addEventListener("click", changeColorRadiusFn);
colorBox.addEventListener("click", function (e) {
  idColor = e.target.id;
});
radiusBox.addEventListener("click", changeRadiusFn);

function startFn() {
  let i = 0;
  timerId = setTimeout(function flash() {
    circles[i].classList.add("on");

    if (i === 0) {
      i = 49;
      if (circles[i - 1].classList.contains("on")) {
        circles[i - 1].classList.remove("on");
      }
      i = 0;
      i++;
    } else if (i === 48) {
      if (circles[i - 1].classList.contains("on")) {
        circles[i - 1].classList.remove("on");
      }
      i = 0;
    } else {
      if (circles[i - 1].classList.contains("on")) {
        circles[i - 1].classList.remove("on");
      }
      i++;
    }

    timerId = setTimeout(flash, time);
  }, time);
}
function stopFn() {
  clearTimeout(timerId);
  circles.forEach((item) => item.classList.remove("on"));
}

function chooseColorFn() {
  if (colorCheckbox.checked) {
    colorBox.style.visibility = "visible";
  } else {
    idColor = null;
    colorBox.style.visibility = "hidden";
  }
}
function chooseRadiusFn() {
  if (radiusCheckbox.checked) {
    radiusDiv.style.visibility = "visible";
  } else {
    radiusDiv.style.visibility = "hidden";
  }
}

function changeColorRadiusFn(e) {
  if (e.target.classList.contains("circle")) {
    if (idColor !== null) {
      if (e.target.classList.contains("c0")) {
        e.target.classList.remove("c0");
      } else if (e.target.classList.contains("c1")) {
        e.target.classList.remove("c1");
      } else if (e.target.classList.contains("c2")) {
        e.target.classList.remove("c2");
      } else if (e.target.classList.contains("c3")) {
        e.target.classList.remove("c3");
      } else if (e.target.classList.contains("c4")) {
        e.target.classList.remove("c4");
      } else if (e.target.classList.contains("c5")) {
        e.target.classList.remove("c5");
      } else if (e.target.classList.contains("c6")) {
        e.target.classList.remove("c6");
      }
      e.target.classList.add(idColor);
    }
    if (radiusCheckbox.checked) {
      e.target.style.width = radius + "px";
      e.target.style.height = radius + "px";
    }
  }
}

function opacityBtnFn() {
  intencityValue = opacityBtn.value;
  containerBox.style.setProperty("--var-opacity", intencityValue / 100);
  console.log("value", intencityValue);
  opacityValueSpan.textContent = "opacity: " + intencityValue / 100;
}

function changeRadiusFn() {
  radius = radiusBox.value;
  radiusSpan.textContent = radius;
}
