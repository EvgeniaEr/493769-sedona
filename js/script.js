var link = document.querySelector(".hotel-search-button");
var popup = document.querySelector(".hotel-search-block-two");
var form = popup.querySelector("form");
var content = popup.querySelector("[type=text]");

link.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.toggle("hotel-search-block-two-closed");
});

form.addEventListener("submit", function(evt){
	if(!content.value){
		evt.preventDefault();
		console.log("Нужно заполнить все поля формы");
	}
});

window.addEventListener("keydown", function(evt){
	if(evt.keyCode === 27){
		popup.classList.add("hotel-search-block-two-closed");
	}
});