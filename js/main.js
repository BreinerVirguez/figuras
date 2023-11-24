let figura = document.getElementById("figura");
let button = document.getElementById("btn");


function circulo(){
    figura.classList.toggle("circulo");
}

function moveTop(){
    figura.classList.toggle("moveTop");
}


function rectangulo(){
    figura.classList.toggle("rectangulo");
}

function rombo(){
    figura.classList.toggle("rombo");
}

function imagen(){
    figura.classList.toggle("imagen");
}

function imgif(){
    figura.classList.toggle("imgif");
}

function triangulo(){
    figura.classList.toggle("triangulo");
}

function huevo(){
    figura.classList.toggle("huevo");
}

function pacMan(){
    figura.classList.toggle("pacMan");
}

function luna(){
    figura.classList.toggle("luna");
}

function hoja(){
    figura.classList.toggle("hoja");
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
}

function moveLeft(){
    figura.classList.toggle("moveLeft");
}

function moveBottom(){
    figura.classList.toggle("moveBottom");
}

function moveRight(){
    figura.classList.toggle("moveRight");
}

function mostrarPanelSuperior() {
    const panelSuperior = document.querySelector('.panel-superior');
    panelSuperior.classList.toggle('active');
}

function cerrarPanelSuperior() {
    const panelSuperior = document.querySelector('.panel-superior');
    panelSuperior.classList.remove('active');
}
function mostrarPanelinferior() {
    const panelinferior = document.querySelector('.panel-inferior');
    panelinferior.classList.toggle('active');
}

function cerrarPanelinferior() {
    const panelinferior = document.querySelector('.panel-inferior');
    panelinferior.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function () {
    var cambiarBtn = document.getElementById('cambiarBtn');
    cambiarBtn.addEventListener('click', function () {
        document.body.classList.toggle('cambio');
    });
});
function cambiarColor() {
    var leftElement = document.getElementById('leftElement');
    var rightElement = document.getElementById('rightElement');

    leftElement.classList.toggle('colorCambiado');
    rightElement.classList.toggle('colorCambiado');
}
function propuesta() {
    var leftElement = document.getElementById('leftElement');
    var rightElement = document.getElementById('rightElement');

    leftElement.classList.toggle('colorCambiado1');
    rightElement.classList.toggle('colorCambiado2');
}

