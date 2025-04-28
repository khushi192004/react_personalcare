import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/user/signup", {
        name,
        email,
        phone,
        address,
        password,
      });

      if (response.data.success) {
        console.log("Registration successful:[", response.data);
        toast.success(response.data.message, {
            onClose: ()=> navigate('/login')
        });
 
      } else {
        console.error("Registration failed:", response.data.message);
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred while registering. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="cs_contact_section cs_gray_bg_4 cs_radius_10">
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_contact_form_wrap">
              <h2 className="cs_fs_36 cs_medium text-uppercase cs_secondary_font">
                REGISTER
              </h2>
              <form onSubmit={handleSubmit} className="cs_contact_form">
                <div className="row">
                  <div className="col-lg-12">
                    <label className="cs_semibold">
                      Name<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="cs_form_field"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                    <div className="cs_height_15 cs_height_lg_15" />
                  </div>
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
                      Phone<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="cs_form_field"
                      value={phone}
                      onChange={handlePhoneChange}
                      required
                    />
                    <div className="cs_height_15 cs_height_lg_15" />
                  </div>
                  <div className="col-lg-12">
                    <label className="cs_semibold">
                      Address<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="cs_form_field"
                      value={address}
                      onChange={handleAddressChange}
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
                      <span>REGISTER</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1">
            <div className="cs_contact_info cs_radius_8 cs_accent_bg">
              {/* Additional info section (optional) */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;