const colors = ["#fff2", "#fff4", "#fff7", "#fffc"];
const generateSpaceLayer = (size,selector,totalStars,duration) =>{

    const layer = [];

    for(let i = 0; i< totalStars; i++){
        const color = colors[Math.floor(Math.random() * colors.length)]
        const x = Math.floor(Math.random() * 100); 
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y+100}vh 0 ${color}`); 
    }

    const container = document.querySelector(selector);
    container.style.setProperty("--space-layer",layer.join(","));
    container.style.setProperty("--size",size);
    container.style.setProperty("--duration",duration);
}
const generarArbolesLeft = (numArboles) =>{
    var contenedorPadre = document.getElementById("arboles-left");
    var contenedorPadreR = document.getElementById("arboles-right");
    var arbol = document.querySelector("arbol");

    for(let i = 1; i<= numArboles; i++){
        var arbol = document.createElement("div");
        var arbolR = document.createElement("div");
        arbol.classList.add("arbol");
        arbol.classList.add("arbolMargin");

        arbolR.classList.add("arbol");
        arbolR.classList.add("arbolMargin");

        var numeroAleatorio = Math.floor(Math.random() * 4) + 4;
        arbol.style.setProperty("--alturaArbol",`${numeroAleatorio}rem`);
        arbolR.style.setProperty("--alturaArbol",`${numeroAleatorio}rem`);
        contenedorPadre.appendChild(arbol);
        contenedorPadreR.appendChild(arbolR);
        
    }   

    
}


generateSpaceLayer("1px",".space-1",900,"25s");
generateSpaceLayer("2px",".space-2",166,"20s");
generateSpaceLayer("4px",".space-3",70,"15s");
generarArbolesLeft(4);

