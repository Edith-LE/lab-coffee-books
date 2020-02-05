const router = require ('express').Router()
const{
  indexGet,
  createGet,
  createPost,
  detailGet
} = require('../controllers/protected.controllers')

router.get('/', indexGet)
router.get('/create', createGet)
router.post('/create', createPost)
router.get('/places/:id', detailGet)

module.exports = router