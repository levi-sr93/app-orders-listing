const { Router } = require("express");
const OrderController = require("./controllers/OrderControllers");

const router = Router();

router.get("/orders", OrderController.index);
router.post("/orders", OrderController.store);
//used to partial modifications
router.patch("/orders/:id/status", OrderController.update);

module.exports = router;
