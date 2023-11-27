var figura = document.getElementById("figura");
let button = document.getElementById("btn");
var titulo = document.querySelector(".fig");

function circulo(){
    figura.classList.toggle("circulo");
    titulo.innerText.toggle = "circulo";
}

function moveTop(){
    figura.classList.toggle("moveTop");
    titulo.innerText.toggle = "Move Top";
}


function rectangulo(){
    figura.classList.toggle("rectangulo");
   titulo.innerText.toggle = "rectangulo";
}

function rombo(){
    figura.classList.toggle("rombo");
    titulo.innerText.toggle = "rombo";
}

function imagen(){
    figura.classList.toggle("imagen");
   titulo.innerText.toggle = "imagen";
}

function imgif(){
    figura.classList.toggle("imgif");
   titulo.innerText.toggle = "gif";
}

function triangulo(){
    figura.classList.toggle("triangulo");
   titulo.innerText.toggle = "triangulo";
}

function huevo(){
    figura.classList.toggle("huevo");
   titulo.innerText.toggle = "huevo";
}

function pacMan(){
    figura.classList.toggle("pacMan");
   titulo.innerText.toggle = "pacMan";
}

function luna(){
    figura.classList.toggle("luna");
   titulo.innerText.toggle = "luna";
}

function hoja(){
    figura.classList.toggle("hoja");
   titulo.innerText.toggle = "hoja";
}

function mostrarPanelLateral() {
    const panelLateral = document.querySelector('.panel-lateral');
    panelLateral.classList.toggle('active');
}

function cerrarPanelLateral() {
    const panelLateral = document.querySelector('.panel-lateral');
    panelLateral.classList.remove('active');
}

function trapecio(){
    figura.classList.toggle("trapecio");
   titulo.innerText.toggle = "trapecio";
}

function moveLeft(){
    figura.classList.toggle("moveLeft");
 titulo.innerText.toggle = "Move Left";
}

function moveBottom(){
    figura.classList.toggle("moveBottom");
 titulo.innerText.toggle = "Move Bottom";
}

function moveRight(){
    figura.classList.toggle("moveRight");
 titulo.innerText.toggle = "Move Right";
}

function mostrarPanelSuperior() {
    const panelSuperior = document.querySelector('.panel-superior');
    panelSuperior.classList.toggle('active');
}

function cerrarPanelSuperior() {
    const panelSuperior = document.querySelector('.panel-superior');
    panelSuperior.classList.remove('active');
}
document.addEventListener('DOMContentLoaded', function () {
    var cambiarBtn = document.getElementById('cambiarBtn');
    cambiarBtn.addEventListener('click', function () {
        document.body.classList.toggle('cambio');
         titulo.innerText.toggle = "Cambiar Fondo";
    });
});
function cambiarColor() {
    var leftElement = document.getElementById('leftElement');
    var rightElement = document.getElementById('rightElement');

    leftElement.classList.toggle('colorCambiado');
    rightElement.classList.toggle('colorCambiado');
     titulo.innerText.toggle = "Cambiar Color";
}
function propuesta() {
    var leftElement = document.getElementById('leftElement');
    var rightElement = document.getElementById('rightElement');

    leftElement.classList.toggle('colorCambiado1');
    rightElement.classList.toggle('colorCambiado2');
     titulo.innerText.toggle = "Propuesta";
}

