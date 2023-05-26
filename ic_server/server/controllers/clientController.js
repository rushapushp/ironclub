const { Client } = require("../models/models");
const ApiError = require("../error/ApiError");


class ClientController {
    async create(req, res, next){
        try {
            const { name, age, exp, phonenumber, trainer } = req.body;
            const client = await Client.create({
              name,
              age,
              exp,
              phonenumber,
              trainer,
            });
            return res.json(client);

          } catch (e) {
            next(ApiError.badRequest(e.message));
          }
    }

    async getAll(req, res) {
        const clients = await Client.findAll()
            return res.json(clients)
    }
}
module.exports = new ClientController()