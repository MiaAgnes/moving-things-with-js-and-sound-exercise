"use strict";

const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px"; 
dodger.style.left = "0px";

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 10}px`; 
  }
  playSoundOnMovement();
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) { 
    dodger.style.left = `${left + 10}px`;
  }
  playSoundOnMovement();
}

function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", ""); 
    const bottom = parseInt(bottomNumbers); 
    const containerHeight = parseInt(window.getComputedStyle(dodger.parentNode).height.replace("px", ""));
  
    if (bottom > 0) {
      dodger.style.bottom = `${bottom - 10}px`;
    }
    playSoundOnMovement();
  }

  function moveDodgerUp() { 
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
  
   
    if (bottom < 380) { 
      dodger.style.bottom = `${bottom + 10}px`; 
    }
    playSoundOnMovement();
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft(); 
    }
  
    if (event.key === "ArrowRight") {
      moveDodgerRight(); 
    }
  
    if (event.key === "ArrowUp") {
      moveDodgerUp(); 
    }
  
    if (event.key === "ArrowDown") {
      moveDodgerDown(); 
    }
  });

const movementSound = document.getElementById("movementSound");

function playSoundOnMovement() {
    movementSound.currentTime = 0;
    movementSound.play();
}

