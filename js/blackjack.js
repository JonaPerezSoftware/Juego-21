document.getElementById("pedir").style.visibility = "hidden";
document.getElementById("puntuaciones").style.visibility = "hidden";
document.getElementById("reset").style.visibility = "hidden";
let carta = ["asC","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC","asB","2B","3B","4B","5B","6B","7B","8B","9B","10B","JB","QB","KB","asT","2T","3T","4T","5T","6T","7T","8T","9T","10T","JT","QT","KT","asCN","2CN","3CN","4CN","5CN","6CN","7CN","8CN","9CN","10CN","JCN","QCN","KCN"]
let cartasJugador = []
let cartasMaquina = []
let valoresLetras = {
    'a': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,'1': 10, 'J': 10, 'Q': 10, 'K': 10,  
};

//ciclo para generar dos cartas aleatorias para el jugador
for (let i = 0; i < 2; i++) {
    let indiceAleatorio = Math.floor(Math.random() * carta.length);
    cartasJugador.push(carta[indiceAleatorio]);
}

console.log (cartasJugador)

//eliminamos las dos del jugador de las cartas de la baraja
let cartaEliminar = cartasJugador 

let nuevaCarta = [];

for (let i = 0; i < carta.length; i++) {
  let cadenaActual = carta[i];
  
  let escartaEliminar = false;
  for (let j = 0; j < cartaEliminar.length; j++) {
    if (cadenaActual === cartaEliminar[j]) {
      escartaEliminar = true;
      break;
    }
  }
  
  if (!escartaEliminar) {
    nuevaCarta.push(cadenaActual);
  }
}

console.log("Nuevo arreglo con 50 cadenas:", nuevaCarta);

//ciclo para generar las 2 cartas de la maquina
for (let i = 0; i < 2; i++) {
    let indiceAleatorio = Math.floor(Math.random() * nuevaCarta.length);
    cartasMaquina.push(nuevaCarta[indiceAleatorio]);
}

console.log (cartasMaquina)

//Eliminamos las 2 cartas de la maquina de la baraja de 50 cartas
let cartaEliminar2 = cartasMaquina 

let nuevaCarta2 = [];

for (let v = 0; v < nuevaCarta.length; v++) {
  let cadenaActual2 = nuevaCarta[v];
  
  let escartaEliminarm = false;
  for (let r = 0; r < cartaEliminar2.length; r++) {
    if (cadenaActual2 === cartaEliminar2[r]) {
      escartaEliminarm = true;
      break;
    }
  }
  
  if (!escartaEliminarm) {
    nuevaCarta2.push(cadenaActual2);
  }
}

console.log("Nuevo arreglo con 48 cadenas:", nuevaCarta2);

function empezar(){
    document.getElementById("play").style.visibility = "hidden";
    document.getElementById("pedir").style.visibility = "visible";
    document.getElementById("puntuaciones").style.visibility = "visible";
    
    // suma de las cartas del jugador
    let sumaTotal = 0
    for (let i = 0; i < cartasJugador.length; i++) {
        let cadena = cartasJugador[i];
        for (let j = 0; j < cadena.length; j++) {
        let letra = cadena[j]; 
        
        if (valoresLetras.hasOwnProperty(letra)) {
            sumaTotal += valoresLetras[letra];
        }
        }
    }

    // suma de las cartas de la maquina
    let sumaTotalM = 0
    for (let i = 0; i < cartasMaquina.length; i++) {
        let cadena = cartasMaquina[i];
        for (let j = 0; j < cadena.length; j++) {
        let letra = cadena[j];
        
        if (valoresLetras.hasOwnProperty(letra)) {
            sumaTotalM += valoresLetras[letra];
        }
        }
    }

    document.getElementById("respJugador").textContent= `Los puntos del jugador son ${sumaTotal}`
    document.getElementById("respMaquina").textContent= `Los puntos de la maquina son ${sumaTotalM}`
    // document.getElementById("resp").innerHTML= `Las cartas del jugador son ${cartasJugador}`+"<br>"+`Las cartas de la maquina son ${cartasMaquina}`
    return {
        sumaTotalMa: sumaTotalM , 
        sumaTotalJ : sumaTotal
    }

}


function jugador(){
    //Usamos la funcion "jugador" para darle una carta al jugador
    for (let i = 0; i < 1; i++) {
        let indiceAleatorio = Math.floor(Math.random() * nuevaCarta2.length);
        cartasJugador.push(nuevaCarta2[indiceAleatorio]);
    }
    
    console.log ("nuevas cartas del jugador", cartasJugador)

    //eliminamos las cartas de la baraja
    let cartaEliminar = cartasJugador 

    let nuevaBaraja = [];

    for (let i = 0; i < nuevaCarta2.length; i++) {
    let cadenaActual = nuevaCarta2[i];
    
    let escartaEliminar = false;
    for (let j = 0; j < cartaEliminar.length; j++) {
        if (cadenaActual === cartaEliminar[j]) {
        escartaEliminar = true;
        break;
        }
    }
    
    if (!escartaEliminar) {
        nuevaBaraja.push(cadenaActual);
    }
    }

    console.log("Nuevo arreglo con "+nuevaBaraja.length+ " cadenas:", nuevaBaraja);

    // sumamos los puntos
    let sumaTotal = 0
    for (let i = 0; i < cartasJugador.length; i++) {
        let cadena = cartasJugador[i];
        for (let j = 0; j < cadena.length; j++) {
        let letra = cadena[j]; 
        
        if (valoresLetras.hasOwnProperty(letra)) {
            sumaTotal += valoresLetras[letra];
        }
        }
    }

    // document.getElementById("resp").innerHTML= `Las cartas del jugador son ${cartasJugador}`
    document.getElementById("respJugador").textContent= `Los puntos del jugador son ${sumaTotal}`
    return {
        baraja: nuevaBaraja
    }
}

//funcion para mostrar cartas y ganadores
function puntos(){
    document.getElementById("reset").style.visibility = "visible";
    document.getElementById('cartasJugador').style.visibility="visible"
    document.getElementById('cartasMaquina').style.visibility="visible"
    //usamos una condicion para la maquina
    let {sumaTotalMa} = empezar()
    console.log("Puntos de la maquina", sumaTotalMa)
    let {baraja} = jugador()
    console.log("barajaa",baraja)
            
    //le damos mas cartas a la maquina hasta que los puntos sean menor a 19
    if(sumaTotalMa<19){
        for (let i = 0; i < 1; i++) {
        let indiceAleatorio = Math.floor(Math.random() * baraja.length);
        cartasMaquina.push(baraja[indiceAleatorio])
        }
    }

    //quitamos las cartas de la baraja
    let cartaEliminar = cartasMaquina

    let nuevaBaraja = [];

    for (let i = 0; i < baraja.length; i++) {
    let cadenaActual = baraja[i];
    
    let escartaEliminar = false;
    for (let j = 0; j < cartaEliminar.length; j++) {
        if (cadenaActual === cartaEliminar[j]) {
        escartaEliminar = true;
        break;
        }
    }
    
    if (!escartaEliminar) {
        nuevaBaraja.push(cadenaActual);
    }
    }

    console.log("Nuevo arreglo con "+nuevaBaraja.length+ " cadenas:", nuevaBaraja);

    console.log(cartasMaquina)

    //sumamos los puntos de la maquina
    sumaTotalMa = 0
    for (let i = 0; i < cartasMaquina.length; i++) {
        let cadena = cartasMaquina[i];
        for (let j = 0; j < cadena.length; j++) {
        let letra = cadena[j];
        
        if (valoresLetras.hasOwnProperty(letra)) {
            sumaTotalMa += valoresLetras[letra];
        }
        }
    }

    //Volvemos añadir cartas a la maquina si es necesario
    if(sumaTotalMa<19){
        for (let i = 0; i < 1; i++) {
        let indiceAleatorio = Math.floor(Math.random() * nuevaBaraja.length);
        cartasMaquina.push(nuevaBaraja[indiceAleatorio])
        }
    }

    //volvemos a eliminar las cartas
    let cartaEliminar2 = cartasMaquina

    let nuevaBaraja2 = [];

    for (let i = 0; i < nuevaBaraja.length; i++) {
    let cadenaActual = nuevaBaraja[i];
    
    let escartaEliminar = false;
    for (let j = 0; j < cartaEliminar2.length; j++) {
        if (cadenaActual === cartaEliminar2[j]) {
        escartaEliminar = true;
        break;
        }
    }
    
    if (!escartaEliminar) {
        nuevaBaraja2.push(cadenaActual);
    }
    }

    console.log("Nuevo arreglo con "+nuevaBaraja2.length+ " cadenas:", nuevaBaraja2);

    console.log(cartasMaquina)

    //volvemos a sumar los puntos de la maquina
    sumaTotalMa = 0
    for (let i = 0; i < cartasMaquina.length; i++) {
        let cadena = cartasMaquina[i];
        for (let j = 0; j < cadena.length; j++) {
        let letra = cadena[j];
        
        if (valoresLetras.hasOwnProperty(letra)) {
            sumaTotalMa += valoresLetras[letra];
        }
        }
    }

    //eliminamos la ultima carta del jugador ya que al usar la funcion se añade una carta a las del jugador sin que queramos

    console.log("Las cartas del jugador son: ", cartasJugador)

    let ultimaCarta = cartasJugador.pop()
    console.log("Cartas eliminadas: ", ultimaCarta)
    console.log("Nuevas cartas: ",cartasJugador)

    //convertimos en valor la ultima carta eliminada
    let restaUC = 0

    for (let j = 0; j < ultimaCarta.length; j++) {
        let letra = ultimaCarta[j];
        if (valoresLetras.hasOwnProperty(letra)) {
            restaUC += valoresLetras[letra];
        }
    }
    console.log(restaUC)

    //restamos la ultima carta en los puntos del jugador

    let {sumaTotalJ} = empezar()
    sumaTotalJ -= restaUC
    console.log("Puntos del jugador: ", sumaTotalJ)

    sumaTotalJ += restaUC

    //Mostramos los puntos y el ganador
    if (sumaTotalMa == sumaTotalJ && sumaTotalJ<22 && sumaTotalMa<22){
        document.getElementById("info").innerHTML = `Empate!`
    }else if (sumaTotalMa == sumaTotalJ && sumaTotalJ>21 && sumaTotalMa>21){
        document.getElementById("info").innerHTML = `Empate!...Ambos se han pasado de puntos`
    }else if (sumaTotalJ == 21){
        document.getElementById("info").innerHTML = `!! Has ganado!`                                                   
    }else if(sumaTotalJ > 21){
        document.getElementById("info").innerHTML = `Has perdido...Te has pasado de puntos`
    }else if (sumaTotalMa > 21){
        document.getElementById("info").innerHTML = `!! Has ganado! La maquina se ha pasado de puntos.` 
    }else if (sumaTotalMa > sumaTotalJ){
        document.getElementById("info").innerHTML = `Ha ganado la maquina...` 
    }else{
        document.getElementById("info").innerHTML = `Has ganado!!!` 
    }


    document.getElementById("respMaquina").textContent= `Los puntos de la maquina son ${sumaTotalMa}`
    document.getElementById("resp").innerHTML= `Las cartas del jugador son ${cartasJugador}`+"<br>"+`Las cartas de la maquina son ${cartasMaquina}` 
    document.getElementById("pedir").style.visibility = "hidden";
    document.getElementById("puntuaciones").style.visibility = "hidden";
    dibujarCarta(cartasJugador,cartasMaquina)

}



//mostramos las imagenes de la carta
function dibujarCarta(cartasJugador, cartasMaquina) {
    // Funcion auxiliar: muestra la carta si existe, sino oculta el elemento
    function mostrarCarta(id, nombreCarta) {
        const imgEl = document.getElementById(id);
        if (!imgEl) return;
        if (nombreCarta !== undefined && nombreCarta !== null) {
            imgEl.src = "/imagenes/cartas/" + nombreCarta + ".svg";
            imgEl.style.display = "inline";
        } else {
            imgEl.style.display = "none";
        }
    }

    // Cartas del jugador (hasta 7)
    mostrarCarta('carta1J', cartasJugador[0]);
    mostrarCarta('carta2J', cartasJugador[1]);
    mostrarCarta('carta3J', cartasJugador[2]);
    mostrarCarta('carta4J', cartasJugador[3]);
    mostrarCarta('carta5J', cartasJugador[4]);
    mostrarCarta('carta6J', cartasJugador[5]);
    mostrarCarta('carta7J', cartasJugador[6]);

    // Cartas de la maquina (hasta 4)
    mostrarCarta('carta1M', cartasMaquina[0]);
    mostrarCarta('carta2M', cartasMaquina[1]);
    mostrarCarta('carta3M', cartasMaquina[2]);
    mostrarCarta('carta4M', cartasMaquina[3]);
}


//funcion para reiniciar todo
function playagain() {
	location.reload(true);
}

