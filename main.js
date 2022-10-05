nome_convidado = [];

function submit()
{

    var nome_novo_convidado = document.getElementById("nome_add_texto").value;
    nome_convidado.push(nome_novo_convidado);
    console.log(nome_convidado)

    document.getElementById("pessoas_horizontal").innerHTML = nome_convidado;
}

function mostrar()
{
    var display_convidado_array = [];
    for (var i = 1; i <= 4; i++)
    {
        var nome_do_convidado = document.getElementById("nome_add_texto"+i).value;
        console.log(nome_do_convidado);
        nome_convidado.push(nome_do_convidado);
    }
    console.log(nome_convidado);

    var tamanho_array = nome_convidado.length;
    console.log(tamanho_array);

    for (var j = 0; j < tamanho_array; j++)
    {
        display_convidado_array.push("<h4>NOME: " + nome_convidado[j] +"</h4>");
        console.log(display_convidado_array);
    }
    console.log(display_convidado_array);
    
    var remove_virgula = display_convidado_array.join(" ");
    console.log(remove_virgula);

    document.getElementById("pessoas_vertical").innerHTML = remove_virgula;
    document.getElementById("sortButton").style.display = "inline-block";
}

function sorting()
{
    nome_convidado.sort();
    console.log(nome_convidado);
    
    var display_convidado_array_sorting = []; 
    var lenght_convidado__array = nome_convidado.length; 
    console.log(lenght_convidado__array);

    for (var k = 0; k < lenght_convidado__array; k++) 
    { 
      display_convidado_array_sorting.push("<h4>Nome: " + nome_convidado[k] + "</h4>"); 
      console.log(display_convidado_array_sorting); 
    } 

    var remover_virgula = display_convidado_array_sorting.join(" "); 
    console.log(remover_virgula); 
    document.getElementById("pessoas_organizadas").innerHTML = remover_virgula;

}

function pesquisar()
{
    var s = document.getElementById("nome_pesquisado_texto").value;
    var found = 0;
    var j;
    var g;

    for (j = 0; j<nome_convidado.length; j++)
    {
        if (s==nome_convidado[j])
        {
            found = found + 1;
        }
    }

    if (found = 0)
    {
        g = vezes
    }

    if (found = 1)
    {
        g = vez
    }

    if (found > 1)
    {
        g = vezes
    }

    document.getElementById("resposta_pesquisa").innerHTML = "Nome encontrado " + found + g;
    console.log("Nome encontrado " + found + g);
}