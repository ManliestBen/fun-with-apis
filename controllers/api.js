function pokedex(req, res) {
  res.render('pokedex')
}

function weather(req, res) {
  res.render('weather')
}

export {
  pokedex,
  weather
}