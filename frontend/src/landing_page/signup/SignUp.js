import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../AsiosConfig";

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // New Loading State
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      const { data } = await axios.post(
        "https://zerodha-backend-o0vr.onrender.com/SignUp",
        { ...inputValue },
        { withCredentials: true }
      );
      
      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          // Note: Using window.location for external redirect as per your original logic
          window.location.href = `https://zerodhadb.onrender.com?username=${username}`;
        }, 1000);
      } else {
        handleError(message);
        setIsLoading(false); // Stop loading if backend returns error
      }
    } catch (error) {
      console.log(error);
      handleError("Registration failed. Please try again.");
      setIsLoading(false); // Stop loading on network error
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="signup-wrapper" style={styles.wrapper}>
      {/* Loading Modal Overlay */}
      {isLoading && (
        <div style={styles.loaderOverlay}>
          <div className="spinner-border text-light" role="status" style={{ width: "3.5rem", height: "3.5rem" }}>
            <span className="visually-hidden">Creating Account...</span>
          </div>
          <h4 className="text-white mt-3 fw-light">Creating your account...</h4>
        </div>
      )}

      <div className="card shadow-lg p-4" style={styles.card}>
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: "#444" }}>Join Us</h2>
          <p className="text-muted">Create an account to get started</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              name="username"
              className="form-control p-2"
              value={username}
              placeholder="Choose a username"
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control p-2"
              value={email}
              placeholder="name@example.com"
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="mb-4 text-start">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control p-2"
              value={password}
              placeholder="••••••••"
              onChange={handleOnChange}
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="btn btn-primary w-100 py-2 fs-5"
            style={styles.submitBtn}
          >
            {isLoading ? "Processing..." : "Sign Up"}
          </button>

          <div className="text-center mt-4">
            <span className="text-muted">
              Already have an account? <Link to={"/login"} className="text-decoration-none fw-bold" style={{color: "#387ed1"}}>Login</Link>
            </span>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

// Styles (Kept consistent with Login for brand identity)
const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f4f7f9",
    padding: "20px"
  },
  card: {
    maxWidth: "450px",
    width: "100%",
    borderRadius: "15px",
    border: "none"
  },
  submitBtn: {
    backgroundColor: "#387ed1",
    border: "none",
    borderRadius: "8px",
    transition: "0.3s"
  },
  loaderOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default SignUp;