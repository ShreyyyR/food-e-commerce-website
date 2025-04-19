// import { useCart } from "../context/CartContext";

// const Cart = () => {
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

//   const cartTotal = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="container mt-4">
//       <h2>Your Cart</h2>

//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="d-flex align-items-center mb-3 border-bottom pb-2"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 width={60}
//                 height={60}
//                 className="me-3"
//               />
//               <div className="flex-grow-1">
//                 <strong>{item.name}</strong>
//                 <div>Quantity: {item.quantity}</div>
//                 <div>Price: ${(item.price * item.quantity).toFixed(2)}</div>
//               </div>
//               <div>
//                 <button
//                   className="btn btn-outline-secondary btn-sm me-1"
//                   onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                 >
//                   -
//                 </button>
//                 <button
//                   className="btn btn-outline-secondary btn-sm me-1"
//                   onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                 >
//                   +
//                 </button>
//                 <button
//                   className="btn btn-outline-danger btn-sm"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}

//           <div className="text-end mt-4">
//             <h4>Total: ${cartTotal.toFixed(2)}</h4>
//             <button
//               className="btn btn-success mt-2"
//               onClick={() => alert("Proceeding to checkout...")}
//             >
//               Checkout
//             </button>
//             <button className="btn btn-danger mt-2 ms-2" onClick={clearCart}>
//               Clear Cart
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;

import { useEffect, useState } from "react";
import axios from "axios";

interface CartItem {
  id: number;
  product_name: string;
  product_image: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchCart = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCartItems(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setLoading(false);
    }
  };

  const updateQuantity = async (id: number, quantity: number) => {
    if (quantity < 1) return;
    try {
      await axios.put(
        `http://localhost:5000/api/cart/update/${id}`,
        { quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchCart(); // refresh cart
    } catch (err) {
      console.error("Update quantity failed:", err);
    }
  };

  const removeItem = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/remove/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCart();
    } catch (err) {
      console.error("Remove failed:", err);
    }
  };

  const clearCart = async () => {
    for (const item of cartItems) {
      await removeItem(item.id);
    }
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading) return <p className="text-center mt-5">Loading cart...</p>;

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="d-flex align-items-center mb-3 border-bottom pb-2"
            >
              <img
                src={item.product_image}
                alt={item.product_name}
                width={60}
                height={60}
                className="me-3"
              />
              <div className="flex-grow-1">
                <strong>{item.product_name}</strong>
                <div>Quantity: {item.quantity}</div>
                <div>Price: ₹{(item.price * item.quantity).toFixed(2)}</div>
              </div>
              <div>
                <button
                  className="btn btn-outline-secondary btn-sm me-1"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  className="btn btn-outline-secondary btn-sm me-1"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-end mt-4">
            <h4>Total: ₹{cartTotal.toFixed(2)}</h4>
            <button
              className="btn btn-success mt-2"
              onClick={() => alert("Proceeding to checkout...")}
            >
              Checkout
            </button>
            <button className="btn btn-danger mt-2 ms-2" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
