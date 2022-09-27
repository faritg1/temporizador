let boton1 = document.getElementById("iniciar")

function temporizador (tiempo)
{
    if (tiempo <= 0)
    {
        document.getElementById("relt").innerHTML = "FINALIZADO"
    }
    else
    {
        document.getElementById("relt").innerHTML = tiempo
        setTimeout(temporizador,1000, tiempo-1)
    }

}

function reloj()
{
    let valor = document.getElementById("seg").value
    return temporizador(valor)
}
boton1.addEventListener("click", reloj)
