import { Router } from 'express'
import * as apiCtrl from '../controllers/api.js'

const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' })
})



export { 
  router
}
