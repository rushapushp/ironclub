const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Cart} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}


class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Похоже, что ваш email или пароль неверны, попробуйте еще раз.'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Этот email уже был зарегистрирован ранее.'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const cart = await Cart.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
            
        }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Мы не знаем о таком пользователе...'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Вы указали неверный пароль, попробуйте езе раз.'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
        
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }

    async getAll(err, res, req, next) {
        // let users = await User.findAll();
        // console.log(users.every(user => user instanceof User));
        // console.log("All users", JSON.stringify(users, null, 2));

        try{
            const users = await User
            .findAll()
            if(!users) throw new Error('Список пуст')
            const sorted = users.sort((a, b) => {
                return new Date(a.date).getTime() - new Date(b.date).getTime()
            })
            res.status(200).json({
                allUsers: sorted
            }) 
        }
        catch(err){
            res.status(500).json({ msg: err.message })
        }
        
    }
}

module.exports = new UserController()