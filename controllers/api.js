import axios from 'axios'


function pokedex(req, res) {
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000')
  .then(response => {
    console.log(response.data)
    res.render('pokedex', {
      pokemons: response.data.results
    })
  })
}

function pokeSearch(req, res) {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`)
  .then(response => {
    res.render('pokeSearch', {
      pokemon: response.data
    })
  })
}

function weather(req, res) {
  res.render('weather')
}

export {
  pokedex,
  weather,
  pokeSearch
}