import { useEffect, useState } from "react";
import axios from "axios";

interface OrderItem {
  id: number;
  product_name: string;
  product_image: string;
  quantity: number;
  price: number;
  ordered_at: string;
}

const OrderHistory = () => {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        "http://localhost:5000/api/orders/history",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrders(response.data);
    } catch (err) {
      console.error("Error fetching order history", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading)
    return <p className="text-center mt-5">Loading order history...</p>;

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Order History</h2>
      {orders.length === 0 ? (
        <p className="text-center">No past orders found.</p>
      ) : (
        <div className="row">
          {orders.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={item.product_image}
                  className="card-img-top"
                  alt={item.product_name}
                  height={200}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.product_name}</h5>
                  <p className="card-text">
                    Quantity: {item.quantity}
                    <br />
                    Price: ₹{(item.price * item.quantity).toFixed(2)}
                    <br />
                    <small className="text-muted">
                      Ordered at: {new Date(item.ordered_at).toLocaleString()}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
