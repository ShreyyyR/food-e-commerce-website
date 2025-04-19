// import React, { useState } from "react";
// import axios from "axios";

// const User = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       if (isLogin) {
//         // 🔐 Login
//         const response = await axios.post(
//           "http://localhost:5000/api/users/login",
//           {
//             email,
//             password,
//           }
//         );

//         // ✅ Store token and user
//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("user", JSON.stringify(response.data.user));

//         alert(`Welcome ${response.data.user.name}!`);
//         window.location.href = "/"; // redirect to homepage after login
//       } else {
//         // 🆕 Signup
//         await axios.post("http://localhost:5000/api/users/register", {
//           name,
//           email,
//           password,
//         });

//         alert("Signup successful! Please log in.");
//         setIsLogin(true);
//       }
//     } catch (error: any) {
//       console.error("Auth error:", error.response?.data || error.message);
//       alert(
//         error.response?.data?.message ||
//           "Login or Signup failed. Please try again."
//       );
//     }
//   };

//   return (
//     <div className="container my-5" style={{ maxWidth: "500px" }}>
//       <h2 className="mb-4 text-center">
//         {isLogin ? "User Login" : "User Signup"}
//       </h2>

//       <form onSubmit={handleSubmit}>
//         {!isLogin && (
//           <div className="mb-3">
//             <label className="form-label">Full Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={name}
//               required
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//         )}

//         <div className="mb-3">
//           <label className="form-label">Email Address</label>
//           <input
//             type="email"
//             className="form-control"
//             value={email}
//             required
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             type={showPassword ? "text" : "password"}
//             className="form-control"
//             value={password}
//             required
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <div className="form-check mt-2">
//             <input
//               type="checkbox"
//               className="form-check-input"
//               id="showPassword"
//               checked={showPassword}
//               onChange={() => setShowPassword(!showPassword)}
//             />
//             <label className="form-check-label" htmlFor="showPassword">
//               Show Password
//             </label>
//           </div>
//         </div>

//         <button
//           type="submit"
//           className={`btn ${isLogin ? "btn-primary" : "btn-success"} w-100`}
//         >
//           {isLogin ? "Login" : "Sign Up"}
//         </button>
//       </form>

//       <p className="mt-3 text-center">
//         {isLogin ? "New user?" : "Already have an account?"}{" "}
//         <button
//           className="btn btn-link p-0"
//           onClick={() => setIsLogin(!isLogin)}
//         >
//           {isLogin ? "Sign up here" : "Login here"}
//         </button>
//       </p>

//       {/* ✅ Logout Button */}
//       {localStorage.getItem("token") && (
//         <div className="text-center mt-4">
//           <button
//             className="btn btn-outline-danger"
//             onClick={() => {
//               localStorage.removeItem("token");
//               localStorage.removeItem("user");
//               alert("You have been logged out.");
//               window.location.href = "/";
//             }}
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default User;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const User = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [user, setUser] = useState<any>(null);

//   // ✅ Load user from localStorage on page load
//   useEffect(() => {
//     const stored = localStorage.getItem("user");
//     if (stored) {
//       setUser(JSON.parse(stored));
//     }
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       if (isLogin) {
//         const response = await axios.post(
//           "http://localhost:5000/api/users/login",
//           {
//             email,
//             password,
//           }
//         );
//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("user", JSON.stringify(response.data.user));
//         setUser(response.data.user);
//         alert(`Welcome ${response.data.user.name}!`);
//       } else {
//         await axios.post("http://localhost:5000/api/users/register", {
//           name,
//           email,
//           password,
//         });
//         alert("Signup successful! Please log in.");
//         setIsLogin(true);
//       }
//     } catch (error: any) {
//       console.error("Login error:", error);
//       alert(error.response?.data?.message || "Login or Signup failed.");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//     setEmail("");
//     setPassword("");
//     setName("");
//     alert("You have been logged out.");
//   };

//   return (
//     <div className="container my-5" style={{ maxWidth: "500px" }}>
//       <h2 className="mb-4 text-center">
//         {user
//           ? `Welcome, ${user.name}`
//           : isLogin
//           ? "User Login"
//           : "User Signup"}
//       </h2>

//       {user ? (
//         <div className="text-center">
//           <p className="lead">You are logged in.</p>
//           <button className="btn btn-outline-danger" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       ) : (
//         <>
//           <form onSubmit={handleSubmit}>
//             {!isLogin && (
//               <div className="mb-3">
//                 <label className="form-label">Full Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={name}
//                   required
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//             )}
//             <div className="mb-3">
//               <label className="form-label">Email Address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 value={email}
//                 required
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 className="form-control"
//                 value={password}
//                 required
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <div className="form-check mt-2">
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   id="showPassword"
//                   checked={showPassword}
//                   onChange={() => setShowPassword(!showPassword)}
//                 />
//                 <label className="form-check-label" htmlFor="showPassword">
//                   Show Password
//                 </label>
//               </div>
//             </div>
//             <button
//               type="submit"
//               className={`btn ${isLogin ? "btn-primary" : "btn-success"} w-100`}
//             >
//               {isLogin ? "Login" : "Sign Up"}
//             </button>
//           </form>

//           <p className="mt-3 text-center">
//             {isLogin ? "New user?" : "Already have an account?"}{" "}
//             <button
//               className="btn btn-link p-0"
//               onClick={() => setIsLogin(!isLogin)}
//             >
//               {isLogin ? "Sign up here" : "Login here"}
//             </button>
//           </p>
//         </>
//       )}
//     </div>
//   );
// };

// export default User;

import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState<any>(null);

  // Check if user already logged in
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const response = await axios.post(
          "http://localhost:5000/api/users/login",
          {
            email,
            password,
          }
        );
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        alert(`Welcome ${response.data.user.name}!`);
        // ✅ Refresh app so Header, Cart, Orders update
        window.location.href = "/";
      } else {
        await axios.post("http://localhost:5000/api/users/register", {
          name,
          email,
          password,
        });
        alert("Signup successful! Please log in.");
        setIsLogin(true);
      }
    } catch (error: any) {
      console.error("Login error:", error);
      alert(error.response?.data?.message || "Login or Signup failed.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    alert("You have been logged out.");
    window.location.reload(); // Optional: refresh the app
  };

  return (
    <div className="container my-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4 text-center">
        {user
          ? `Welcome, ${user.name}`
          : isLogin
          ? "User Login"
          : "User Signup"}
      </h2>

      {user ? (
        <div className="text-center">
          <p className="lead">You are logged in.</p>
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="form-check mt-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="showPassword"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                <label className="form-check-label" htmlFor="showPassword">
                  Show Password
                </label>
              </div>
            </div>

            <button
              type="submit"
              className={`btn ${isLogin ? "btn-primary" : "btn-success"} w-100`}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <p className="mt-3 text-center">
            {isLogin ? "New user?" : "Already have an account?"}{" "}
            <button
              className="btn btn-link p-0"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign up here" : "Login here"}
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default User;
