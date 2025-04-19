// import Hero from "../components/Hero";
// import ProductCard from "../components/ProductCard";

// const Home = () => {
//   const products = [
//     {
//       id: 1,
//       title: "Croissant",
//       description:
//         "French pastry in a crescent shape made from a laminated yeast dough similar to puff pastry.",
//       price: 10,
//       image: "src/assets/images/crs.png",
//     },
//     {
//       id: 2,
//       title: "Pizza",
//       description:
//         "Italian dish of flat dough with tomato, cheese, and toppings, baked in a wood-fired oven.",
//       price: 10,
//       image: "src/assets/images/pizza.png",
//     },
//     {
//       id: 3,
//       title: "Coffee",
//       description:
//         "Rich, aromatic beverage made from roasted coffee beans, with notes of caramel and nuttiness.",
//       price: 10,
//       image: "src/assets/images/cfe.png",
//     },
//   ];

//   const signatureDishes = products;

//   return (
//     <div>
//       <Hero />

//       {/* Signature Dishes Section */}
//       <section
//         className="py-5"
//         style={{
//           backgroundColor: "#fff0f5", // 🌸 very light pink background
//         }}
//       >
//         <div className="container text-center">
//           <h2
//             style={{
//               fontFamily: "'Georgia', serif",
//               fontStyle: "italic",
//               fontWeight: "bold",
//               fontSize: "2.5rem",
//               color: "#d291bc", // ✨ soft pink heading
//               marginBottom: "2rem",
//             }}
//           >
//             Signature Dishes
//           </h2>

//           <div className="row justify-content-center">
//             {signatureDishes.map((product) => (
//               <div className="col-md-6 col-lg-4 mb-4" key={product.id}>
//                 <ProductCard
//                   product={{
//                     id: product.id,
//                     name: product.title,
//                     description: product.description,
//                     price: product.price,
//                     image: product.image,
//                   }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

const Home = () => {
  return (
    <div
      className="text-center text-white d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundImage: "url('src/assets/images/cafe.png')", // Replace with your preferred image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <h1
        style={{
          fontSize: "7.2rem",
          fontStyle: "italic",
          fontFamily: "'Brush Script MT', cursive",
          textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
        }}
      >
        Welcome to Shrey’s Cafe
      </h1>
      <p
        className="lead mt-3"
        style={{
          maxWidth: "900px",
          fontSize: "2.2rem",
          fontStyle: "italic",
          fontFamily: "'Brush Script MT', cursive",
          textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        A cozy corner of delicious pastries, fresh brews, and heartfelt flavors.
        Discover handcrafted dishes made with love served with warmth, every
        single time.
      </p>
    </div>
  );
};

export default Home;
