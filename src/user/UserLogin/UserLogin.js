import React, { useState } from "react";
import "./UserLogin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_BASE_URL;

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    axios
      .post(`${API}/auth/user/login`, {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        console.log("Login successful:", res.data);

        localStorage.setItem("email", res.data.email);
        localStorage.setItem("name", res.data.fullName);
        localStorage.setItem("token", res.data.token);

        navigate("/"); 
      })
      .catch((err) => {
        console.error("Login error:", err);
        setError("Invalid email or password");
      });
  };

  return (
    <div className="loginContainer">
      <form className="LoginBox" onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}

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

        <button type="submit" className="submitBtn">
          Login
        </button>

        <a
          href="/signup"
          style={{
            color: "white",
            marginTop: "5px",
            textDecoration: "none",
          }}
        >
          New User? Sign up

        
        </a>
        <Link style={{
            color: "goldenrod",
            marginTop: "5px",
            textDecoration: "none" ,marginTop:'10px',fontWeight:'bold'}} to="/admin/login">Admin? Login Here</Link>
      </form>
    </div>
  );
};

export default Login;
