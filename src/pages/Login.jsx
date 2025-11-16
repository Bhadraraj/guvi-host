import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, Mail, Lock } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-bg.png)" }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Login</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="login-form-wrapper bg-white shadow-sm p-4 p-lg-5 rounded">
                <div className="title-area text-center mb-4">
                  <h2 className="sec-title">Welcome Back</h2>
                  <p className="sec-text">Login to access your account</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label className="form-label">
                      <Mail size={16} className="me-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter your email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label className="form-label">
                      <Lock size={16} className="me-2" />
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter your password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group mb-4 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="remember"
                        name="remember"
                        checked={formData.remember}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="remember">
                        Remember me
                      </label>
                    </div>
                    <Link to="/forgot-password" className="link-btn">
                      Forgot Password?
                    </Link>
                  </div>

                  <button type="submit" className="ot-btn w-100 mb-3">
                    Login
                    <LogIn size={16} className="ms-2" />
                  </button>

                  <div className="text-center">
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link to="/register" className="link-btn">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
