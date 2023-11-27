var figura = document.getElementById("figura");
let button = document.getElementById("btn");
var titulo = document.querySelector(".fig");

function circulo(){
    figura.classList.toggle("circulo");
    titulo.innerText = "circulo";
}

function moveTop(){
    figura.classList.toggle("moveTop");
    titulo.innerText = "Move Top";
}


function rectangulo(){
    figura.classList.toggle("rectangulo");
   titulo.innerText = "rectangulo";
}

function rombo(){
    figura.classList.toggle("rombo");
    titulo.innerText = "rombo";
}

function imagen(){
    figura.classList.toggle("imagen");
   titulo.innerText = "imagen";
}

function imgif(){
    figura.classList.toggle("imgif");
   titulo.innerText= "gif";
}

function triangulo(){
    figura.classList.toggle("triangulo");
   titulo.innerText= "triangulo";
}

function huevo(){
    figura.classList.toggle("huevo");
   titulo.innerText= "huevo";
}

function pacMan(){
    figura.classList.toggle("pacMan");
   titulo.innerText= "pacMan";
}

function luna(){
    figura.classList.toggle("luna");
   titulo.innerText= "luna";
}

function hoja(){
    figura.classList.toggle("hoja");
   titulo.innerText= "hoja";
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
   titulo.innerText = "trapecio";
}

function moveLeft(){
    figura.classList.toggle("moveLeft");
 titulo.innerText= "Move Left";
}

function moveBottom(){
    figura.classList.toggle("moveBottom");
 titulo.innerText= "Move Bottom";
}

function moveRight(){
    figura.classList.toggle("moveRight");
 titulo.innerText = "Move Right";
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
         titulo.innerText = "Cambiar Fondo";
    });
});
function cambiarColor() {
    var leftElement = document.getElementById('leftElement');
    var rightElement = document.getElementById('rightElement');

    leftElement.classList.toggle('colorCambiado');
    rightElement.classList.toggle('colorCambiado');
     titulo.innerText = "Cambiar Color";
}
function propuesta() {
    var leftElement = document.getElementById('leftElement');
    var rightElement = document.getElementById('rightElement');

    leftElement.classList.toggle('colorCambiado1');
    rightElement.classList.toggle('colorCambiado2');
     titulo.innerText= "Propuesta";
}

