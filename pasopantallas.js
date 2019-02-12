// función para pasar de pantalla 1 a pantalla 2
function pasopant2(){
document.getElementById('pantalla1').style.display='none';
document.getElementById('pantalla2').style.display='inline-block';
}
// función para pasar de pantalla 2 a pantalla 4
function pasopant4(){
document.getElementById('pantalla2').style.display='none';
document.getElementById('pantalla4').style.display='inline-block';
}
// función para pasar de pantalla 4 a pantalla 5
function pasopant5(){
document.getElementById('pantalla4').style.display='none';
document.getElementById('pantalla5').style.display='inline-block';
}
// función para pasar de pantalla 4 a pantalla 2
function pasopant4a2(){
document.getElementById('pantalla4').style.display='none';
document.getElementById('pantalla2').style.display='inline-block';
}

function pasopant2a4(){
    
}


////// Empiezan los manejadores de eventos///////

// activamos un envento en el boton con id entrar para disparar la función pasopant2
document.getElementById('entrar').addEventListener('click',pasopant2);

// activamos un envento en el boton con id entrar para disparar la función pasopant4
document.getElementById('comjuego').addEventListener('click',pasopant4);

// activamos un envento en el boton con id despedida para ir a la pantalla 5
document.getElementById('despedida').addEventListener('click',pasopant5);

// activamos un envento en el boton con id volver para a la pantalla 2
document.getElementById('volver').addEventListener('click',pasopant4a2);








