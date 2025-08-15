import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_BASE_URL;

const SignUp = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    axios
      .post(`${API}/auth/user/signup`, {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        console.log("Signup successful:", res.data);
        alert("Signup successful! Please log in.");
        navigate("/login");
      })
      .catch((err) => {
        console.error("Signup error:", err);
        setError("Signup failed. Try again.");
      });
  };

  return (
    <div className="signupContainer">
      <form className="signupBox" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="signupBtn">Sign Up</button>

        <a
          href="/login"
          style={{
            color: "white",
            marginTop: "5px",
            textDecoration: "none",
          }}
        >
          Already a User? Login Here
        </a>
      </form>
    </div>
  );
};

export default SignUp;
