import { Router } from 'express'
import * as apiCtrl from '../controllers/api.js'

const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' })
})

router.get('/pokemon', apiCtrl.pokedex)
router.get('/pokemon/:name', apiCtrl.pokeSearch)
router.get('/weather', apiCtrl.weather)
router.post('/weather/search', apiCtrl.weatherSearch)

export { 
  router
}
