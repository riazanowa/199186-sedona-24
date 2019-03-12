var popup = document.querySelector(".modal-search");
var button = document.querySelector(".open-search-button");


button.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.toggle("modal-show");
});