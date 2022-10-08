/*let listaPokemons = [
    {
        'nome': 'pikachu',
        'tipo': 'elétrico',
        'foto': 'pikachu.png',
        'numero': '1'
    },
    {
        'nome': 'squirtle',
        'tipo': 'aquatico',
        'foto': 'squirtle.png',
        'numero': '2'
    },
]

let pokemonList = document.querySelector(".lista-pokemon")
for (let i = 0; i < listaPokemons.length; i++) {
    pokemonList.innerHTML += `<li class='um-pokemon'>`
    pokemonList.innerHTML += `<img src="${listaPokemons[i].foto}">`
    pokemonList.innerHTML += `<h3>${listaPokemons[i].nome}</h3>`
    pokemonList.innerHTML += `<h4>${listaPokemons[i].tipo}</h4>`
    pokemonList.innerHTML += `<h4>${listaPokemons[i].numero}</h4>`
    pokemonList.innerHTML += `</li>`
}*/

let url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
fetch(url)
    .then(Response=> Response.json())
    .then(function(dados){
        for(let i=0;i<dados.results.length; i++){
            fnPegaUmPokemon(dados.results[i].url)
        }
    })

function fnPegaUmPokemon(urlPokemon){
    fetch(urlPokemon)
    .then(Response => Response.json())
    .then(function(dadosPokemon){
        fnCriarCartao(dadosPokemon.name,dadosPokemon.id,dadosPokemon.sprite)
    })
}

function fnCriarCartao(nome,numero,tipo,foto){
    let pokemonList = document.querySelector(".lista-pokemon")
    pokemonList.innerHTML += `<li class='um-pokemon'>`
    pokemonList.innerHTML += `<img src="${foto}">`
    pokemonList.innerHTML += `<h3>${nome}</h3>`
    pokemonList.innerHTML += `<h4>${tipo}</h4>`
    pokemonList.innerHTML += `<h4>${numero}</h4>`
    pokemonList.innerHTML += `</li>`
}