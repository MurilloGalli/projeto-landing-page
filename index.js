var leonardo = window.document.getElementById ("leonardo")
var bruna = window.document.getElementById ("bruna")
var samantha = window.document.getElementById ("samantha")
var setaesquerda = window.document.getElementById ("setaesquerda")
var setadireita = window.document.getElementById ("setadireita")

function rolarparadireita ()
{
    leonardo.style ="display: none"
    bruna.style="display: flex"
    setaesquerda.style ="display: flex; margin-top: 55px"
    setadireita.style ="display:none"
}

function rolarparaesquerda ()
{
    leonardo.style ="display: flex"
    bruna.style="display: none"
    setaesquerda.style ="display: none"
    setadireita.style ="display: flex"
}