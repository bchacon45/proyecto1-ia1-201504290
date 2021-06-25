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
    let varResultado;
    if (turno == "1"){
        varResultado = comprobarPosiciones(matriz);
    }else if (turno == "0"){
        varResultado = comprobarPosiciones(matriz);
    }
    return varResultado;
}

function comprobarPosiciones(matriz){
    let posiciones = [];
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            if(matriz[i][j] == 1){
                posiciones[0] = arribaComprobacion(matriz, j, i);
                posiciones[1] = abajoComprobacion(matriz, j, i);
                posiciones[2] = derechaComprobacion(matriz, j, i);
                posiciones[3] = izquierdaComprobacion(matriz, j, i);
                posiciones[4] = noresteComprobacion(matriz, j, i);
                posiciones[5] = noroesteComprobacion(matriz, j, i);
                posiciones[6] = suroesteComprobacion(matriz, j, i);
                posiciones[7] = suresteComprobacion(matriz, j, i);
            }
        }
    }
}

function arribaComprobacion(matriz, x, y){
    let cantComidas = 0;

    for(let i = y; i >= 0; i--){
        if(matriz[i][x] == 2 || matriz[i][x] == 1){
            return {comidas: 0, X: x, Y: y};
        }
        else if(matriz[i][x] == 0){
            cantComidas++;
        }
    }

    return {comidas: cantComidas, X: x, Y: y};
}

function abajoComprobacion(matriz, x, y){
    let cantComidas = 0;

    for(let i = y; i >= 0; i--){
        if(matriz[i][x] == 2 || matriz[i][x] == 1){
            return {comidas: 0, X: x, Y: y};
        }
        else if(matriz[i][x] == 0){
            cantComidas++;
        }
    }

    return {comidas: cantComidas, X: x, Y: y};
}

function derechaComprobacion(matriz, x, y){
    let cantComidas = 0;

    for(let i = y; i >= 0; i--){
        if(matriz[i][x] == 2 || matriz[i][x] == 1){
            return {comidas: 0, X: x, Y: y};
        }
        else if(matriz[i][x] == 0){
            cantComidas++;
        }
    }

    return {comidas: cantComidas, X: x, Y: y};
}

function izquierdaComprobacion(matriz, x, y){
    let cantComidas = 0;

    for(let i = y; i >= 0; i--){
        if(matriz[i][x] == 2 || matriz[i][x] == 1){
            return {comidas: 0, X: x, Y: y};
        }
        else if(matriz[i][x] == 0){
            cantComidas++;
        }
    }

    return {comidas: cantComidas, X: x, Y: y};
}

function noresteComprobacion(matriz, x, y){
    let cantComidas = 0;

    for(let i = y; i >= 0; i--){
        if(matriz[i][x] == 2 || matriz[i][x] == 1){
            return {comidas: 0, X: x, Y: y};
        }
        else if(matriz[i][x] == 0){
            cantComidas++;
        }
    }

    return {comidas: cantComidas, X: x, Y: y};
}

function noroesteComprobacion(matriz, x, y){
    let cantComidas = 0;

    for(let i = y; i >= 0; i--){
        if(matriz[i][x] == 2 || matriz[i][x] == 1){
            return {comidas: 0, X: x, Y: y};
        }
        else if(matriz[i][x] == 0){
            cantComidas++;
        }
    }

    return {comidas: cantComidas, X: x, Y: y};
}

function suroesteComprobacion(matriz, x, y){
    let cantComidas = 0;

    for(let i = y; i >= 0; i--){
        if(matriz[i][x] == 2 || matriz[i][x] == 1){
            return {comidas: 0, X: x, Y: y};
        }
        else if(matriz[i][x] == 0){
            cantComidas++;
        }
    }

    return {comidas: cantComidas, X: x, Y: y};
}

function suresteComprobacion(matriz, x, y){
    let cantComidas = 0;

    for(let i = y; i >= 0; i--){
        if(matriz[i][x] == 2 || matriz[i][x] == 1){
            return {comidas: 0, X: x, Y: y};
        }
        else if(matriz[i][x] == 0){
            cantComidas++;
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
