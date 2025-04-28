import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();                  
    // Add your login logic here, such as API call or authentication
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset fields after submission if needed
    setEmail("");
    setPassword("");
    try {
      const response = await axios.post("personalcare/login", {
        email: email,
        password: password,
      });

      if (response.data.userData.isAuth) {
        console.log("Login successful:", response.data);
        console.log(response.data);
        toast.success("Login successful!", {
          onClose: () => window.location.reload()
        });
      } else {
        console.error("Login failed:", response.data.message);
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="cs_contact_section cs_gray_bg_4 cs_radius_10">
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_contact_form_wrap">
              <h2 className="cs_fs_36 cs_medium text-uppercase cs_secondary_font">
                LOGIN
              </h2>
              <form onSubmit={handleSubmit} className="cs_contact_form">
                <div className="row">
                  <div className="col-lg-12">
                    <label className="cs_semibold">
                      Email Address<span>*</span>
                    </label>
                    <input
                      type="email"
                      className="cs_form_field"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    <div className="cs_height_15 cs_height_lg_15" />
                  </div>
                  <div className="col-lg-12">
                    <label className="cs_semibold">
                      Password<span>*</span>
                    </label>
                    <input
                      type="password"
                      className="cs_form_field"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                    <div className="cs_height_15 cs_height_lg_15" />
                  </div>
                  <div className="col-lg-12">
                    <button
                      className="cs_btn cs_style_1 cs_fs_18 w-100"
                      type="submit"
                    >
                      <span>LOGIN</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1">
            <div className="cs_contact_info cs_radius_8 cs_accent_bg">
              {/* Contact information section (can be omitted in login form) */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;