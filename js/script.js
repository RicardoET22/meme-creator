//cambiar fondo
let cabecera = document.getElementsByTagName("header");
function dark(){
  cabecera[0].style.backgroundColor = '#000';   
  cabecera[0].classList.remove('ligero'); 
  document.body.style.backgroundColor = "#000";
  document.getElementById("evento").innerHTML = "Cambiaste al tema oscuro";
} 
//light
document.getElementById('capa2').addEventListener('click',light);
function light(){
cabecera[0].style.backgroundColor = '#39ff85bd';
cabecera[0].classList.add('ligero');
document.body.style.backgroundColor = "#39ff85bd"
document.getElementById("evento").innerHTML = "Cambiaste al tema nature";
}
document.getElementById('capa3').addEventListener('click', function (){defaulte()})
let defaulte = function(){
cabecera[0].style.backgroundColor = 'transparent';
document.body.style.backgroundColor = "#d9edfaa0"
cabecera[0].classList.remove('dark');
document.getElementById("evento").innerHTML = "Cambiaste al tema default";
}
 

//fin header
function changeImage(source) {
  var imagePreview = document.getElementById("image-preview");
  var textOverlay = document.getElementById("text-overlay");
  imagePreview.src = source;
  textOverlay.innerText = "";
}

var textInput = document.getElementById("text-input");
textInput.addEventListener("input", function(event) {
  var textOverlay = document.getElementById("text-overlay");
  textOverlay.innerText = event.target.value;
});
var authorInput = document.getElementById("author-input");
authorInput.addEventListener("input", function(event) {
  var authorOverlay = document.getElementById("author-overlay");
  authorOverlay.innerText = event.target.value;
});

var textMover = document.getElementById("text-overlay");
    function arriba() {
      
        textMover.style.top = (textMover.offsetTop - 30 ) + "px";
    }
    function abajo() {
        textMover.style.top = (textMover.offsetTop + 30 ) + "px";
    }
    function izquierda() {
        textMover.style.left = (textMover.offsetLeft - 30 ) + "px";
    }
    function derecha() {
        textMover.style.left = (textMover.offsetLeft + 30 ) + "px";
    }

//Tamaño de fuente
let dimension = function(){
  console.log("Entra");
  let fuente =  document.getElementById('tamanio').value;
  document.getElementById('text-overlay').classList.remove('chico');
  document.getElementById('text-overlay').classList.remove('mediano');
  document.getElementById('text-overlay').classList.remove('grande');
  document.getElementById('text-overlay').classList.add(fuente);
      }

//Color del texto
const colorPicker = document.getElementById("color-picker");
		const textOverlay = document.getElementById("text-overlay");

		colorPicker.addEventListener("change", function() {
			textOverlay.style.color = colorPicker.value;
		});
//categorias
function showSection(sectionId) {
  // Ocultar todas las secciones
  const sections = document.getElementsByClassName("section");
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }

  // Mostrar la sección seleccionada
  const section = document.getElementById("data-" + sectionId);
  section.classList.add("active");
}      
