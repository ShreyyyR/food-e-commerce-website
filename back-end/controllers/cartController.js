const db = require("../db");

// ✅ Add to Cart (uses req.user.id from token)
const addToCart = async (req, res) => {
  const { product_name, product_image, price, quantity } = req.body;
  const user_id = req.user.id;

  try {
    const existing = await db.query(
      "SELECT * FROM cart_items WHERE user_id = $1 AND product_name = $2",
      [user_id, product_name]
    );

    if (existing.rows.length > 0) {
      const newQty = existing.rows[0].quantity + quantity;
      await db.query("UPDATE cart_items SET quantity = $1 WHERE id = $2", [
        newQty,
        existing.rows[0].id,
      ]);
      return res.json({ message: "Cart updated (quantity increased)" });
    }

    await db.query(
      "INSERT INTO cart_items (user_id, product_name, product_image, price, quantity) VALUES ($1, $2, $3, $4, $5)",
      [user_id, product_name, product_image, price, quantity]
    );
    res.status(201).json({ message: "Item added to cart" });
  } catch (err) {
    console.error("Add to cart error:", err.message);
    res.status(500).json({ message: "Failed to add to cart" });
  }
};

// ✅ Get all items for logged-in user
const getUserCart = async (req, res) => {
  const user_id = req.user.id;

  try {
    const result = await db.query(
      "SELECT * FROM cart_items WHERE user_id = $1",
      [user_id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Get cart error:", err.message);
    res.status(500).json({ message: "Failed to get cart" });
  }
};

// ✅ Update quantity
const updateQuantity = async (req, res) => {
  const { itemId } = req.params;
  const { quantity } = req.body;

  try {
    await db.query(
      "UPDATE cart_items SET quantity = $1 WHERE id = $2",
      [quantity, itemId]
    );
    res.json({ message: "Quantity updated" });
  } catch (err) {
    console.error("Update error:", err.message);
    res.status(500).json({ message: "Failed to update quantity" });
  }
};

// ✅ Remove from cart
const removeFromCart = async (req, res) => {
  const { itemId } = req.params;

  try {
    await db.query("DELETE FROM cart_items WHERE id = $1", [itemId]);
    res.json({ message: "Item removed from cart" });
  } catch (err) {
    console.error("Remove error:", err.message);
    res.status(500).json({ message: "Failed to remove item" });
  }
};

module.exports = {
  addToCart,
  getUserCart,
  updateQuantity,
  removeFromCart,
};
