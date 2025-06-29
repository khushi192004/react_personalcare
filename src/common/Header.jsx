import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function header() {

  let[categories, setCategories]=useState([])

  useEffect(()=>{
    axios.get("https://personalcarebackend.onrender.com/categories").then((response)=>{
        setCategories(response.data["categories"])
    });
  }, [])
  console.log(categories);

  return (
    <div>
  <header className="cs_site_header cs_style_1 cs_primary_color cs_sticky_header cs_white_bg">
    <div className="cs_main_header">
      <div className="container">
        <div className="cs_main_header_in">
          <div className="cs_main_header_left">
            <a className="cs_site_branding" href="index.html">
              <img src="assets/images/logo.svg" alt="Logo" />
            </a>
          </div>
          <div className="cs_main_header_right">
            <ul className="cs_header_list cs_mp_0">
              <li>
                <div className="cs_header_credential_btns">
                  <a href="login.html"><img src="assets/images/icons/user.svg" alt /></a>
                  <span>
                    <a href="/login">Log in</a> / <a href="/signup">Sign Up</a>
                  </span>
                </div>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="cs_bottom_header">
      <div className="container">
        <div className="cs_bottom_header_in">
          <div className="cs_bottom_header_left">
            <div className="cs_nav_wrap">
              <div className="cs_site_branding_wrap cs_mobile_show">
                <a className="cs_site_branding" href="index.html">
                  <img src="assets/images/logo.svg" alt="Logo" />
                </a>
                <button className="cs_close_mobile_active">
                  <i className="fa-regular fa-circle-xmark" />
                </button>
              </div>
              <div className="cs_nav_out">
                <div className="cs_nav_category_wrap cs_dropdown">
                  <span className="cs_nav_category_btn cs_dropdown_btn">All Categories</span>
                  <ul className="cs_nav_category_list cs_dropdown_content">

                  {categories.map((value)=>{
                    return (
                      <>
                         <li>
                         <Link to={`/categories/${value._id}`}>
                        <img src={value.image} alt="Product" />
                        <span>{value.name}</span>
                        </Link>
                        <a href="/ProductCategory" />
                        </li>
                        </>
                    )
                  })}

                  </ul>
                </div>
                <nav className="cs_nav cs_mobile_active">
                  <span className="cs_mobile_tab_btn cs_mobile_show">Menu</span>
                  <ul className="cs_nav_list">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                   
                    <li>
                      <Link to="/product">Product</Link>
                    </li>
                    <li>
                      <Link to="testimonial">Testimonials</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cs_header_overlay_mobile" />
  </header>
  <div className="cs_site_header_height_1" />
  
</div>

  )
}

export default header
