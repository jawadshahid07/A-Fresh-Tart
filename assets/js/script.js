'use strict';



/*
    Preloader:
    End the loading once the document is loaded

*/

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});