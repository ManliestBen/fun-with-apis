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
  res.render('weather', {
    results: null
  })
}

function weatherSearch(req, res) {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${req.body.zipcode}&appid=${process.env.WEATHER_API_KEY}`)
  .then(response => {
    console.log(response.data)
    res.render('weather', {
      results: response.data
    })
  })
}

export {
  pokedex,
  weather,
  pokeSearch,
  weatherSearch
}