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
  {/* Start Header Section */}
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
                <div className="cs_header_social cs_mobile_show">
                  <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                  <a href="#"><i className="fa-brands fa-x-twitter" /></a>
                  <a href="#"><i className="fa-brands fa-instagram" /></a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <div className="cs_header_overlay_mobile" />
  </header>
  <div className="cs_site_header_height_1" />
  <div className="cs_cart_card_wrap">
    <div className="cs_cart_card">
      <div className="cs_cart_card_head cs_gray_bg">
        <h3 className="mb-0 cs_fs_18 cs_semibold">Your Cart (3)</h3>
        <button className="cs_cart_close">Close</button>
      </div>
      <div className="cs_cart_card_body">
        <div className="cs_cart_card_body_in">
          <ul className="cs_cart_card_list cs_mp_0">
            <li>
              <div className="cs_cart_card_item">
                <div className="cs_cart_card_item_left">
                  <img src="assets/images/product_1.png" alt="Product" />
                </div>
                <div className="cs_cart_card_item_right">
                  <h3 className="cs_fs_18 cs_medium">Rosewater Hydrating Mist</h3>
                  <div className="cs_quantity cs_style_1">
                    <button className="cs_quantity_button cs_decrement">
                      <i className="fa-solid fa-minus" />                      
                    </button>
                    <span className="cs_quantity_input cs_primary_color cs_medium">1</span>
                    <button className="cs_quantity_button cs_increment">
                      <i className="fa-solid fa-plus" />                      
                    </button>
                  </div>
                  <p className="mb-0">1 x <span className="cs_primary_color cs_medium"> $19.99</span></p>
                  <button className="cs_cart_card_item_remove" type="button"><i className="fa-regular fa-circle-xmark" /></button>
                </div>
              </div>
            </li>
            <li>
              <div className="cs_cart_card_item">
                <div className="cs_cart_card_item_left">
                  <img src="assets/images/product_2.png" alt="Product" />
                </div>
                <div className="cs_cart_card_item_right">
                  <h3 className="cs_fs_18 cs_medium">Charcoal Detoxifying Mask</h3>
                  <div className="cs_quantity cs_style_1">
                    <button className="cs_quantity_button cs_decrement">
                      <i className="fa-solid fa-minus" />                      
                    </button>
                    <span className="cs_quantity_input cs_primary_color cs_medium">1</span>
                    <button className="cs_quantity_button cs_increment">
                      <i className="fa-solid fa-plus" />                      
                    </button>
                  </div>
                  <p className="mb-0">1 x <span className="cs_primary_color cs_medium"> $14.99</span></p>
                  <button className="cs_cart_card_item_remove" type="button"><i className="fa-regular fa-circle-xmark" /></button>
                </div>
              </div>
            </li>
            <li>
              <div className="cs_cart_card_item">
                <div className="cs_cart_card_item_left">
                  <img src="assets/images/product_3.png" alt="Product" />
                </div>
                <div className="cs_cart_card_item_right">
                  <h3 className="cs_fs_18 cs_medium">Rosewater Hydrating Mist</h3>
                  <div className="cs_quantity cs_style_1">
                    <button className="cs_quantity_button cs_decrement">
                      <i className="fa-solid fa-minus" />                      
                    </button>
                    <span className="cs_quantity_input cs_primary_color cs_medium">0</span>
                    <button className="cs_quantity_button cs_increment">
                      <i className="fa-solid fa-plus" />                      
                    </button>
                  </div>
                  <p className="mb-0">1 x <span className="cs_primary_color cs_medium"> $19.99</span></p>
                  <button className="cs_cart_card_item_remove" type="button"><i className="fa-regular fa-circle-xmark" /></button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="cs_cart_card_footer">
        <div className="cs_cart_card_subtotal">
          <span>Subtotal:</span>
          <span className="cs_primary_color cs_semibold">$54.97</span>
        </div>
        <a href="cart.html" className="cs_btn cs_style_2 cs_medium cs_type_1 w-100">                                               
          <span>View Cart</span>
        </a>
        <div className="cs_height_10 cs_height_lg_10" />
        <a href="checkout.html" className="cs_btn cs_style_1 cs_medium cs_type_1 w-100">                                               
          <span>Checkout</span>
        </a>
      </div>
    </div>
    <div className="cs_cart_overlay" />
  </div>
  {/* End Header Section */}
</div>

  )
}

export default header
