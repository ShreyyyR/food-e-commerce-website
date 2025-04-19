const express = require("express");
const router = express.Router();
const {
  checkoutOrder,
  getOrderHistory
} = require("../controllers/orderController");

const verifyToken = require("../middleware/authMiddleware");

router.post("/checkout", verifyToken, checkoutOrder);
router.get("/history", verifyToken, getOrderHistory);

module.exports = router;
