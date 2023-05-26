const Router = require('express')
const router = new Router()

const cartController = require('../controllers/cartController')

// ------- Добавил проверку на авторизацию для того, чтобы вытащить оттуда авторизованного юзера -------- //
const authMiddleware = require('../middleware/authMiddleware')

// ------- CRUD корзины ------- //
router.get('/', authMiddleware , cartController.getCartUser)
router.post('/', authMiddleware , cartController.addToCart)
router.get('/all', authMiddleware, cartController.getAllCarts)


module.exports = router