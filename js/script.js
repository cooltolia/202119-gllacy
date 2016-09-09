var link = document.querySelector(".recall-btn");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-content-close");
var map = document.querySelector(".map")



link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    popup.classList.remove("modal-content-hidden");
    overlay.classList.add("modal-overlay-show");
    overlay.classList.remove("modal-overlay-hidden");
});


close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-hide");
    popup.classList.remove("modal-content-show");
    overlay.classList.add("modal-overlay-hide");
    overlay.classList.remove("modal-overlay-show");
});

