const ApiError = require('../error/ApiError');
const { Product, CartProduct, Cart } = require("../models/models")


class CartController {
    

    async addToCart(req,res,next){
        const user = req.user
        const {productId} = req.body
        const cart = await CartProduct.create({cartId : user.id, productId : productId})
        return res.json(cart)
    }
    
    async getCartUser(req,res, next){
        try{
        const {id} = req.user
        const cart = await CartProduct.findAll({include: {
                model: Product
            }, where: {cartId: id}})

        return res.json(cart)
    }catch (error) {
        next(ApiError.badRequest(error.message));
        
    }
    }

    async getAllCarts(err, res, req, next) {
        // let users = await User.findAll();
        // console.log(users.every(user => user instanceof User));
        // console.log("All users", JSON.stringify(users, null, 2));

        try{
            const carts = await CartProduct.findAll()
            if(!carts) throw new Error('Список пуст')
            const sorted = carts.sort((a, b) => {
                return new Date(a.date).getTime() - new Date(b.date).getTime()
            })
            res.status(200).json({
                allCarts: sorted
            }) 
        }
        catch(err){
            res.status(500).json({ msg: err.message })
        }
        
    }

}

module.exports = new CartController()