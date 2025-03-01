import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful! 🎉");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
