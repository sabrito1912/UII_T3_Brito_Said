    let indice = 0;
    let imagenes = ["img/sergio-perez-2026.png", "img/charles-leclerc-2026.png", "img/max-verstappen-2026.png", "img/fernando-alonso-2026_0.png",
    "img/lewis-hamilton-2026.png"];
    document.getElementById("siguiente").addEventListener('click', () =>{
    if(indice <4){
    indice++;
}
    document.getElementById("img").setAttribute("src", imagenes[indice]);
});
    document.getElementById("anterior").addEventListener('click', () => {
        if (indice > 0) {
            indice--;
        }
        document.getElementById("img").setAttribute("src", imagenes[indice]);
    });
