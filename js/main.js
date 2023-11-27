let figura = document.getElementById("figura");
let button = document.getElementById("btn");


function circulo(){
    figura.classList.toggle("circulo");
    titulo.innerText = "Cambiar a circulo";
}

function moveTop(){
    figura.classList.toggle("moveTop");
    titulo.innerText = "Cambiar a moveTop";
}


function rectangulo(){
    figura.classList.toggle("rectangulo");
   titulo.innerText = "Cambiar a rectangulo";
}

function rombo(){
    figura.classList.toggle("rombo");
    titulo.innerText = "Cambiar a rombo";
}

function imagen(){
    figura.classList.toggle("imagen");
   titulo.innerText = "Cambiar a imagen";
}

function imgif(){
    figura.classList.toggle("imgif");
   titulo.innerText = "Cambiar a gif";
}

function triangulo(){
    figura.classList.toggle("triangulo");
   titulo.innerText = "Cambiar a triangulo";
}

function huevo(){
    figura.classList.toggle("huevo");
   titulo.innerText = "Cambiar a huevo";
}

function pacMan(){
    figura.classList.toggle("pacMan");
   titulo.innerText = "Cambiar a pacMan";
}

function luna(){
    figura.classList.toggle("luna");
   titulo.innerText = "Cambiar a luna";
}

function hoja(){
    figura.classList.toggle("hoja");
   titulo.innerText = "Cambiar a hoja";
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
   titulo.innerText = "Cambiar a trapecio";
}

function moveLeft(){
    figura.classList.toggle("moveLeft");
 titulo.innerText = "Cambiar a moveLeft";
}

function moveBottom(){
    figura.classList.toggle("moveBottom");
 titulo.innerText = "Cambiar a moveBottom";
}

function moveRight(){
    figura.classList.toggle("moveRight");
 titulo.innerText = "Cambiar a moveRight";
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
         titulo.innerText = "Cambiar a Cambiar Fondo";
    });
});
function cambiarColor() {
    var leftElement = document.getElementById('leftElement');
    var rightElement = document.getElementById('rightElement');

    leftElement.classList.toggle('colorCambiado');
    rightElement.classList.toggle('colorCambiado');
     titulo.innerText = "Cambiar a cambiarColor";
}
function propuesta() {
    var leftElement = document.getElementById('leftElement');
    var rightElement = document.getElementById('rightElement');

    leftElement.classList.toggle('colorCambiado1');
    rightElement.classList.toggle('colorCambiado2');
     titulo.innerText = "Cambiar a Propuesta";
}

