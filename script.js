const letraA = document.getElementById("letraA");

letraA.addEventListener("keypress", (pegaTecla) => {
    let tecla = event.keyCode;
    if(tecla === 97) {
        alert("Tecla A clicada.")
    }
})