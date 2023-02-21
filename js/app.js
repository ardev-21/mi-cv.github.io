// Menu
var menu_visible = false;
let menu = document.getElementById("nav");

function mostrarOcultarMenu() {
  if (menu_visible == false) {
    menu.style.display = "block";
    menu_visible = true;
  } else {
    menu.style.display = "none";
    menu_visible = false;
  }
}

// Barras
function crearBarra(id_barra) {
  for (i = 0; i <= 100; i++) {
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
  }
}

// Creación
let html = document.getElementById("html");
crearBarra(html);
let css = document.getElementById("css");
crearBarra(css);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let mysql = document.getElementById("mysql");
crearBarra(mysql);
let php = document.getElementById("php");
crearBarra(php);
let python = document.getElementById("python");
crearBarra(python);

// Animación
let contadores = [-1, -1, -1, -1, -1, -1];
let entro = false;

function efectoHabilidades() {
  var habilidades = document.getElementById("habilidades");
  var distancia_skills =
    window.innerHeight - habilidades.getBoundingClientRect().top;

  if (distancia_skills >= 300 && entro == false) {
    entro = true;
    const intervalHtml = setInterval(function () {
      pintarBarra(html, 70, 0, intervalHtml);
    }, 100);
    const intervalCss = setInterval(function () {
      pintarBarra(css, 50, 1, intervalCss);
    }, 100);
    const intervalJavaScript = setInterval(function () {
      pintarBarra(javascript, 40, 2, intervalJavaScript);
    }, 100);
    const intervalMysql = setInterval(function () {
      pintarBarra(mysql, 35, 3, intervalMysql);
    }, 100);
    const intervalPhp = setInterval(function () {
      pintarBarra(php, 35, 4, intervalPhp);
    }, 100);
    const intervalPython = setInterval(function () {
      pintarBarra(python, 20, 5, intervalPython);
    }, 100);
  }
}

function pintarBarra(id_barra, cantidad, indice, interval) {
  contadores[indice]++;
  x = contadores[indice];
  if (x < cantidad) {
    let elementos = id_barra.getElementsByClassName("e");
    elementos[x].style.backgroundColor = "#44EBE9";
  } else {
    clearInterval(interval);
  }
}

window.onscroll = function () {
  efectoHabilidades();
};
