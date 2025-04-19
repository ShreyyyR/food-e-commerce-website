import { useState } from "react";
import ProductCard from "../components/ProductCard";

const allProducts = [
  {
    id: 1,
    name: "Pizza Margherita",
    description: "Classic tomato sauce, mozzarella & fresh basil.",
    price: 499,
    image: "src/assets/images/Pizza Margherita.png",
    category: "Pizza",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    description: "Spicy pepperoni and mozzarella on a crispy crust.",
    price: 549,
    image: "src/assets/images/Pepperoni Pizza.png",
    category: "Pizza",
  },
  {
    id: 3,
    name: "BBQ Chicken Pizza",
    description: "Chicken, BBQ sauce, and onions on a golden crust.",
    price: 599,
    image: "src/assets/images/BBQ Chicken Pizza.png",
    category: "Pizza",
  },
  {
    id: 4,
    name: "Spaghetti Alfredo",
    description: "Creamy Alfredo sauce tossed with tender spaghetti.",
    price: 599,
    image: "src/assets/images/Spaghetti Alfredo.png",
    category: "Pasta",
  },
  {
    id: 5,
    name: "Penne Arrabbiata",
    description: "Spicy tomato garlic sauce with penne pasta.",
    price: 649,
    image: "src/assets/images/Penne Arrabbiata.png",
    category: "Pasta",
  },
  {
    id: 6,
    name: "Lasagna",
    description: "Layers of pasta, cheese, and rich meat sauce.",
    price: 699,
    image: "src/assets/images/Lasagna.png",
    category: "Pasta",
  },
  {
    id: 7,
    name: "Espresso",
    description: "Strong and rich coffee brewed under pressure.",
    price: 399,
    image: "src/assets/images/Espresso.png",
    category: "Beverages",
  },
  {
    id: 8,
    name: "Iced Tea",
    description: "Refreshing black tea with lemon and mint.",
    price: 449,
    image: "src/assets/images/Iced Tea.png",
    category: "Beverages",
  },
  {
    id: 9,
    name: "Hot Chocolate",
    description: "Warm chocolate drink with whipped cream.",
    price: 499,
    image: "src/assets/images/Hot Chocolate.png",
    category: "Beverages",
  },
  {
    id: 10,
    name: "Veggie Burger",
    description: "Grilled veggie patty with fresh toppings.",
    price: 399,
    image: "src/assets/images/Veggie Burger.png",
    category: "Burger",
  },
  {
    id: 11,
    name: "Cheese Burger",
    description: "Juicy beef patty with melted cheese.",
    price: 449,
    image: "src/assets/images/Cheese Burger.png",
    category: "Burger",
  },
  {
    id: 12,
    name: "Crispy Chicken Burger",
    description: "Crispy chicken filet with spicy sauce.",
    price: 499,
    image: "src/assets/images/Crispy Chicken Burger.png",
    category: "Burger",
  },
  {
    id: 13,
    name: "Café Latte",
    description: "Smooth espresso with steamed milk.",
    price: 299,
    image: "src/assets/images/Café Latte.png",
    category: "Cafe Special",
  },
  {
    id: 14,
    name: "Cappuccino",
    description: "Rich espresso with foam and cinnamon.",
    price: 349,
    image: "src/assets/images/Cappuccino.png",
    category: "Cafe Special",
  },
  {
    id: 15,
    name: "Mocha",
    description: "Chocolate espresso topped with cream.",
    price: 399,
    image: "src/assets/images/Mocha.png",
    category: "Cafe Special",
  },
  {
    id: 16,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center.",
    price: 199,
    image: "src/assets/images/Chocolate Lava Cake.png",
    category: "Desserts",
  },
  {
    id: 17,
    name: "Strawberry Cheesecake",
    description: "Creamy cheesecake topped with strawberries.",
    price: 299,
    image: "src/assets/images/Strawberry Cheesecake.png",
    category: "Desserts",
  },
  {
    id: 18,
    name: "Tiramisu",
    description: "Coffee-flavored Italian dessert.",
    price: 399,
    image: "src/assets/images/Tiramisu.png",
    category: "Desserts",
  },
  {
    id: 19,
    name: "Butter Croissant",
    description: "Flaky and buttery French pastry.",
    price: 199,
    image: "src/assets/images/Butter Croissant.png",
    category: "Croissant",
  },
  {
    id: 20,
    name: "Chocolate Croissant",
    description: "Croissant filled with rich chocolate.",
    price: 249,
    image: "src/assets/images/Chocolate Croissant.png",
    category: "Croissant",
  },
  {
    id: 21,
    name: "Almond Croissant",
    description: "Topped and filled with almond paste.",
    price: 299,
    image: "src/assets/images/Almond Croissant.png",
    category: "Croissant",
  },
];

const categories = [
  "All",
  "Pizza",
  "Pasta",
  "Beverages",
  "Burger",
  "Cafe Special",
  "Desserts",
  "Croissant",
];

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const filtered = allProducts
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => category === "All" || p.category === category)
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={sectionTitleStyle}>
        Browse Our Menu
      </h2>

      {/* 🔎 Filter UI */}
      <div className="row mb-4">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Sort by</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* 🧾 Product Grid */}
      <div className="row">
        {filtered.map((product) => (
          <div className="col-md-6 col-lg-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center">No matching items found.</p>
        )}
      </div>
    </div>
  );
};

const sectionTitleStyle = {
  fontFamily: "'Georgia', serif",
  fontStyle: "italic",
  // fontWeight: "bold",
  fontSize: "2.2rem",
  color: "#da939e",
};

export default Products;
