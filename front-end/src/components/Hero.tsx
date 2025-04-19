// const Hero = () => {
//   return (
//     <div
//       className="text-center text-white d-flex align-items-center justify-content-center"
//       style={{
//         backgroundImage: "url(src/assets/images/cafe.png)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "30vh",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div>
//         <h1 className="display-4 bold">Where Freshness Meets Flavor</h1>
//         <p className="lead">
//           Experience premium quality food at your doorstep, always fresh and
//           ready to enjoy.
//         </p>
//       </div>
//     </div>
//   );
// };

const Hero = () => {
  return (
    <div
      className="text-center text-white d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundImage: "url('src/assets/images/cafe.png')",
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
          fontSize: "3.2rem",
          fontWeight: "bold",
          fontFamily: "'Brush Script MT', cursive",
          textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
        }}
      >
        Welcome to Shrey’s Café
      </h1>
      <p
        className="lead mt-3"
        style={{
          maxWidth: "700px",
          fontSize: "1.2rem",
          fontStyle: "italic",
          textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        A cozy corner of delicious pastries, fresh brews, and heartfelt flavors.
        Discover handcrafted dishes made with love — served with warmth, every
        single time.
      </p>
    </div>
  );
};

export default Hero;
