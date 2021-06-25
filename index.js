const exp = require('express');
const app = exp();
app.listen(process.env.PORT || 6060, () => {console.log("Servidor online")});

app.get('/',(req, res) => {
    console.log(req.url);
    const valor = procesarCadena(req.url);
    res.send(valor);
}); 

function procesarCadena(cadena){
    let cad = cadena.toString().substring(2,cadena.length);
    let parts = cad.split('&');
    let turno = parts[0].substring(6,parts[0].length);
    let estado = parts[1].substring(7,parts[1].length);

    let matriz = [];
    let contador = 0;
    for(let i = 0; i < 8; i++){
        matriz[i] = [];
        for(let j = 0; j < 8; j++){
            matriz[i][j] = estado[contador];
            contador++;
            
        }
    }
    console.log(matriz);
    if (turno == "1"){
        
    }

    return "24";
}

function comprobarPosiciones(matriz){
    let posiciones = [];
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            if(matriz[i][j] == 1){
                posiciones[0] = arribaComprobacion(matriz, j, i);
            }
        }
    }
}

function arribaComprobacion(matriz, x, y){
    let cantComidas = 0;

    for(let i = y; i >= 0; i--){
        if(matriz[i][x] == 2 || matriz[i][x] == 1){
            return {comidas: 0, X: x, Y: y};
            posiciones
        }
        else if(matriz[i][x] == 0){

        }
    }

    return {comidas: cantComidas, X: x, Y: y};
}


function getMatrizPonderada(){
    let matriz = [];
    matriz[0] = [120, -20, 20, 5, 5, 20, -20, 120];
    matriz[1] = [-20, -40, -5, -5, -5, -5, -40, -20];
    matriz[2] = [20, -5, 15, 3, 3, 15, -5, 20];
    matriz[3] = [5, -5, 3, 3, 3, 3, -5, 5];
    matriz[4] = [5, -5, 3, 3, 3, 3, -5, 5];
    matriz[5] = [20, -5, 15, 3, 3, 15, -5, 20];
    matriz[6] = [-20, -40, -5, -5, -5, -5, -40, -20];
    matriz[7] = [120, -20, 20, 5, 5, 20, -20, 120];
    return matriz;
}
