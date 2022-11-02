convidados = [];
var displayConvidados = [];

var convidadosNovo = document.getElementById("nome_texto").value;
console.log(convidadosNovo);
convidados.push(convidadosNovo);

function sorting()
{
    convidados.sort();
    console.log(convidados);

    convidados.join("");
    console.log(convidados);

    var convidadosLargura = convidados.lenght;
    console.log(convidadosLargura);

    for (var k = 0; k < convidadosLargura; k++)
    {
        displayConvidados.push(convidados[k]);
        document.getElementById("lista").innerHTML = displayConvidados;
    }
}

function pesquisar()
{
    var s = document.getElementById("pesquisar_nome").value;
    var found = 0;
    var q;

    for ( q = 0; q < convidadosLargura; ++q)
    {
        if (s == convidados[q])
        {
            found = found + 1;
        }
    }
    document.getElementById("resultado").innerHTML = "Nome encontrador" + found + "vez(ez)";
    console.log("Nome enconstrado" + found + "vez(ez)"); 
}