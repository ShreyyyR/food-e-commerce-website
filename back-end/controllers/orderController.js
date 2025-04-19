const db = require("../db");

// ✅ Checkout: Move all cart items to orders table
const checkoutOrder = async (req, res) => {
  const user_id = req.user.id;

  try {
    // Get all cart items
    const cartItems = await db.query(
      "SELECT * FROM cart_items WHERE user_id = $1",
      [user_id]
    );

    if (cartItems.rows.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // Insert into orders table
    for (const item of cartItems.rows) {
      await db.query(
        `INSERT INTO orders 
         (user_id, product_name, product_image, price, quantity) 
         VALUES ($1, $2, $3, $4, $5)`,
        [
          item.user_id,
          item.product_name,
          item.product_image,
          item.price,
          item.quantity,
        ]
      );
    }

    // Clear the cart
    await db.query("DELETE FROM cart_items WHERE user_id = $1", [user_id]);

    res.json({ message: "Checkout successful. Order placed!" });
  } catch (err) {
    console.error("Checkout error:", err.message);
    res.status(500).json({ message: "Checkout failed" });
  }
};

// ✅ Get past orders
const getOrderHistory = async (req, res) => {
  const user_id = req.user.id;

  try {
    const result = await db.query(
      "SELECT * FROM orders WHERE user_id = $1 ORDER BY ordered_at DESC",
      [user_id]
    );

    res.json(result.rows);
  } catch (err) {
    console.error("Order history error:", err.message);
    res.status(500).json({ message: "Failed to fetch order history" });
  }
};

module.exports = {
  checkoutOrder,
  getOrderHistory,
};
