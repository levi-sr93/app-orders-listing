class OrderController {
  //list all orders
  index(req, res) {
    res.send("index");
  }

  //create order
  store(req, res) {
    res.send("store");
  }

  //update orders
  update(req, res) {
    res.send("update");
  }
}

module.exports = new OrderController();
