const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.get('/get-all-users', userController.getAll)
// router.get('/auth', (req, res) => {
//     res.json({message: 'auth router is working!!!'})
// })



module.exports = router