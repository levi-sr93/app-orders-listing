const Order = require("../models/Oder");
class OrderController {
  //list all orders
  async index(req, res) {
    const orders = await Order.find();
    return res.json(orders);
  }

  //create order
  async store(req, res) {
    const { table, description } = req.body;

    if (!table || !description) {
      return res.sendStatus(400);
    }

    const order = await Order.create({
      table,
      description,
    });

    res.json(order);
  }

  //update orders
  async update(req, res) {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.sendStatus(400);
    }

    const order = await Order.findByIdAndUpdate(
      { _id: id },
      { status },
      { new: true }
    );

    return res.json(order);
  }
}

module.exports = new OrderController();
