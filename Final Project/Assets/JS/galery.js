function modalView(elem){
    var modal = document.getElementById("img-modal");
var img = document.getElementById("img");
var modalImg = document.getElementById("img");
var captionText = document.getElementById("description-modal");
  modal.style.display = "block";
  modalImg.src = elem.src;
  captionText.innerHTML = elem.alt;
};