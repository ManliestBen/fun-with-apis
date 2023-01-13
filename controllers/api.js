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

function weather(req, res) {
  res.render('weather')
}

export {
  pokedex,
  weather
}