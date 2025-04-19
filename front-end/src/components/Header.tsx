import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const location = useLocation();
  const { cart } = useCart();
  const token = localStorage.getItem("token");

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const getNavLinkStyle = (path: string): React.CSSProperties =>
    location.pathname === path
      ? {
          fontWeight: "600",
          color: "#da939e",
          borderBottom: "2px solid #da939e",
          paddingBottom: "4px",
        }
      : {};

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="src/assets/images/logo.png"
            alt="Posh Foods Logo"
            height="100"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={getNavLinkStyle("/")}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/products"
                style={getNavLinkStyle("/products")}
              >
                Products
              </Link>
            </li>

            {token && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/orders"
                  style={getNavLinkStyle("/orders")}
                >
                  Orders
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/user"
                style={getNavLinkStyle("/user")}
              >
                User
              </Link>
            </li>

            {token && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/cart"
                  style={{
                    ...getNavLinkStyle("/cart"),
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    position: "relative",
                  }}
                >
                  <span style={{ position: "relative" }}>
                    Cart 🛒
                    {totalQuantity > 0 && (
                      <span
                        className="badge rounded-pill bg-danger"
                        style={{
                          position: "absolute",
                          top: "-8px",
                          right: "-10px",
                          fontSize: "0.6rem",
                          padding: "3px 6px",
                        }}
                      >
                        {totalQuantity}
                      </span>
                    )}
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
