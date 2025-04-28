import React, { useState } from 'react'
import axios from 'axios'
import { useLocation, Link } from 'react-router-dom';
import {toast} from 'react-toastify'

function ProductInquiry() {

  let id= useLocation().pathname.split("/")[2]

  let[inquiry, setInquiry]=useState({
    productId: id,
    username:"",
    email:"",
    phone:"",
    qty:"0",
    budget:"0",
    subject:"",
    message:"",
  })

  function handleInput(e){
    const {name, value}= e.target;
  
    setInquiry((inquiry)=>({
      ...inquiry,
      [name] : value
    })); 
  }
  console.log(inquiry);

  function handleSubmit(e){
    e.preventDefault();
    try{
      axios
        .post(
            "https://personalcarebackend.onrender.com/storeProductInquiry", 
            inquiry
            )
            .then((response)=>{
              console.log(response);
              console.log(response.data.message);
              toast.success("product inquiry submitted")

    setInquiry({
    username:"",
    email:"",
    phone:"",
    qty:"0",
    budget:"0",
    subject:"",
    message:"",
      })

    });
    }catch(e){
      toast.error(e);
    }
  }

  return (
   <div>
  {/* Start Breadcamp */}
  <div className="cs_height_40 cs_height_lg_30" />
  <div className="container">
    <div className="cs_breadcamp_wrap cs_style_1 cs_accent_light_bg cs_bg_filed cs_radius_8" data-src="assets/images/breadcamp_bg_7.jpg">
      <div>
        <h1 className="cs_breadcamp_title cs_fs_54 cs_semibold">Product Inquiry</h1>
        <ol className="breadcrumb cs_fs_18 mb-0">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item active">Product Inquiry</li>
        </ol>
      </div>
    </div>
  </div>
  {/* End Breadcamp */}
  <div className="cs_height_120 cs_height_lg_70 "/>
  <div className="container">
    <div className="cs_contact_section cs_gray_bg_4 cs_radius_10">
      <div className="row align-items-center cs_gap_y_40">
        <div className="col-lg-6 mx-auto">
          <div className="cs_contact_form_wrap">
            <h2 className="cs_fs_36 cs_medium text-uppercase cs_secondary_font">Do Product Inquiry</h2>
            <p className="cs_light">Have a question or need assistance? Feel free to reach out to us by filling out the contact form below. We'll get back to you as soon as possible.</p>
            <form action="#" onSubmit={handleSubmit} className="cs_contact_form">
              <div className="row">
                <div className="col-lg-12">
                  <label className="cs_semibold">Name<span>*</span></label>
                  <input type="text" name="username" className="cs_form_field" onInput={handleInput} value={inquiry.username}/>
                  <div className="cs_height_15 cs_height_lg_15" />
                </div>
                <div className="col-lg-6">
                  <label className="cs_semibold">Email Address<span>*</span></label>
                  <input type="email" name="email" className="cs_form_field" onInput={handleInput} value={inquiry.email}/>
                  <div className="cs_height_15 cs_height_lg_15" />
                </div>
                <div className="col-lg-6">
                  <label className="cs_semibold">Phone<span>*</span></label>
                  <input type="tel" name="phone" className="cs_form_field" onInput={handleInput} value={inquiry.phone}/>
                  <div className="cs_height_15 cs_height_lg_15" />
                </div>
                <div className="col-lg-6">
                  <label className="cs_semibold">Quantity<span>*</span></label>
                  <input type="number" name="qty" className="cs_form_field" onInput={handleInput} value={inquiry.qty}/>
                  <div className="cs_height_15 cs_height_lg_15" />
                </div>
                <div className="col-lg-6">
                  <label className="cs_semibold">budget<span>*</span></label>
                  <input type="number" name="budget" className="cs_form_field" onInput={handleInput} value={inquiry.budget}/>
                  <div className="cs_height_15 cs_height_lg_15" />
                </div>
                <div className="col-lg-12">
                  <label className="cs_semibold">Subject<span>*</span></label>
                  <input type="text" name="subject" className="cs_form_field" onInput={handleInput} value={inquiry.subject}/>
                  <div className="cs_height_15 cs_height_lg_15" />
                </div>
                <div className="col-lg-12">
                  <label className="cs_semibold">Message<span>*</span></label>
                  <textarea cols={30} rows={10} name="message" className="cs_form_field" defaultValue={""} onInput={handleInput} value={inquiry.messagecd}/>
                  <div className="cs_height_30 cs_height_lg_30" />
                </div>
                <div className="col-lg-12">
                  <button className="cs_btn cs_style_1 cs_fs_18 w-100"><span>SEND MESSAGE</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </div>
    <div className="cs_height_120 cs_height_lg_70" />
   
  </div>
  <div className="cs_height_120 cs_height_lg_70" />
</div>

  )
}

export default ProductInquiry
