// esta función es el programa pares y nones
function jugar(){
    var jugador,  maquina;
// definimos jugador y maquina 
    jugador =[];
    maquina =[];
    // el jugador elige,//////////////////////////
   // jugador[0] = 'impares';
    
    jugador[0] = saberSiParesNones();
   // jugador[0] = prompt('elige pares o impares');
    // maquina lo contrario de jugador
    if(jugador[0]==='pares'){
        maquina[0]='impares';
    }
    else{
        maquina[0]='pares';
    }
    
        console.log(jugador[0]);
        console.log(maquina[0]);
    var resultados= '<li> has elegido ' + jugador[0]+'</li>';
resultados+='<li> La maquina ha elegido ' + maquina[0]+'</li>';
    
    //////// saca dedos jugador/////////////////
    jugador[1]=Number(tomarnumeros());
        //jugador[1]=5;
       
    console.log(jugador[1]);
   // jugador[1]=Number(prompt('Elige un numero del 1 al 10'));
    //saca dedos máquina
    
    maquina[1]=Math.floor(Math.random()*11);
    console.log(maquina[1]);
    resultados+='<li> Elegiste el número ' + jugador[1]+'</li>';
resultados+='<li> La maquina ha elegido el número ' + maquina[1]+'</li>';
    
    // evaluamos jugada
    var evaluar = (jugador[1]+maquina[1])%2;
    console.log('evaluar es igual a ' +evaluar);
    // decidimos quien gana
    if (evaluar===0){// si sales pares
        if(jugador[0]==='pares'){
                console.log('jugador gana');
                console.log('maquina pierde');
            resultados+='<li> El jugador gana, la máquina pierde</li>';
            }else{
               console.log('jugador pierde');
                console.log('maquina gana'); 
                resultados+='<li> El jugador pierde, la máquina gana</li>';
            }
         }
     if (evaluar===1){// si sales impares
        if(jugador[0]==='pares'){
                console.log('jugador pierde');
                console.log('maquina gana'); 
            resultados+='<li> El jugador pierde, la máquina gana</li>';
            }else{
               console.log('jugador gana');
                console.log('pierde maquina'); 
                resultados+='<li> El jugador gana, la máquina pierde</li>';
            }
         }
   
document.getElementById('display').innerHTML=resultados;
   
}



