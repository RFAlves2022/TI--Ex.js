/*let url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
fetch(url)
    .then(Response => Response.json())
    .then(function (dados) {
        for (let i = 0; i < dados.results.length; i++) {
            fnPegaUmPokemon(dados.results[i].url)
        }
    })

function fnPegaUmPokemon(urlPokemon) {
    fetch(urlPokemon)
        .then(Response => Response.json())
        .then(function (dadosPokemon) {
            fnCriarCartao(dadosPokemon.name, dadosPokemon.id, dadosPokemon.sprite)
        })
}

function fnCriarCartao(nome, numero, tipo, foto) {
    let pokemonList = document.querySelector(".lista-pokemon")
    pokemonList.innerHTML += `<li class='um-pokemon'>`
    pokemonList.innerHTML += `<img src="${foto}">`
    pokemonList.innerHTML += `<h3>${nome}</h3>`
    pokemonList.innerHTML += `<h4>${tipo}</h4>`
    pokemonList.innerHTML += `<h4>${numero}</h4>`
    pokemonList.innerHTML += `</li>`
}
*/
function fnMontarCartao(){
    let nome, foto, tipo, numero
    let listaPokemons = document.querySelector(".lista-pokemon")
    listaPokemons.innerHTML += "<li>"
    listaPokemons.innerHTML += `<h3>${nome}</h3>`
    listaPokemons.innerHTML += `<p><img src="${foto}"></p>`
    listaPokemons.innerHTML += `<p>${tipo}</p>`
    listaPokemons.innerHTML += `<h4>${numero}</h4>`
    listaPokemons.innerHTML += "</li>"
}