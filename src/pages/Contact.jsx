import React, { useState } from 'react'
import axios from 'axios'

function contact() {

  let[userInquiry, setUserInquiry]=useState({
    username:"",
    email:"",
    phone:"",
    subject:"",
    message:"",
  });

  function handleSubmit(e){
    e.preventDefault();
    console.log(e);

    try{
      axios.
        post(
        "https://personalcarebackend.onrender.com/storeContactInquiry", userInquiry).then((response)=>{
        if(response.data.success){
          console.log("Contact inquiry sucessfullty subitted");
        }
     else{
          console.log("some error occured");
        }
      });
    }
    catch(e){
      console.log(e);
    }
  }


function handleInputChange(e){
  const {name, value}= e.target;

  setUserInquiry((userInquiry)=>({
    ...userInquiry,
    [name] : value
  })); 
}

console.log(userInquiry);
  return (
<div>

  {/* Start Breadcamp */}
  <div className="cs_height_40 cs_height_lg_30" />
  <div className="container">
    <div className="cs_breadcamp_wrap cs_style_1 cs_accent_light_bg cs_bg_filed cs_radius_8"
    style={{ backgroundImage: "url(assets/images/breadcamp_bg_7.jpg)" }}
    >
      <div>
        <h1 className="cs_breadcamp_title cs_fs_54 cs_semibold">Contact Us</h1>
      </div>
    </div>
  </div>
  {/* End Breadcamp */}
  <div className="cs_height_120 cs_height_lg_70" />
  <div className="container">
    <div className="cs_contact_section cs_gray_bg_4 cs_radius_10">
      <div className="row align-items-center cs_gap_y_40">
        <div className="col-lg-6">
          <div className="cs_contact_form_wrap">
            <h2 className="cs_fs_36 cs_medium text-uppercase cs_secondary_font">GET IN TOUCH</h2>
            <p className="cs_light">Have a question or need assistance? Feel free to reach out to us by filling out the contact form below. We'll get back to you as soon as possible.</p>
            <form action="#" onSubmit={handleSubmit} className="cs_contact_form">
              <div className="row">
                <div className="col-lg-6">
                  <label className="cs_semibold">Name<span>*</span></label>
                  <input type="text" name="username" className="cs_form_field" onInput={handleInputChange}/>
                  <div className="cs_height_15 cs_height_lg_15" />
                </div>
                <div className="col-lg-6">
                  <label className="cs_semibold">Email Address<span>*</span></label>
                  <input type="email" name="email" className="cs_form_field" onInput={handleInputChange}/>
                  <div className="cs_height_15 cs_height_lg_15" />
                </div>
                <div className="col-lg-12">
                  <label className="cs_semibold">Subject<span>*</span></label>
                  <input type="text" name="subject" className="cs_form_field" onInput={handleInputChange}/>
                  <div className="cs_height_15 cs_height_lg_15" />
                </div>
                <div className="col-lg-12">
                  <label className="cs_semibold">Phone Number<span>*</span></label>
                  <input type="text" name="phone" className="cs_form_field" onInput={handleInputChange}/>
                  <div className="cs_height_15 cs_height_lg_15" />
                </div>
                <div className="col-lg-12">
                  <label className="cs_semibold">Message<span>*</span></label>
                  <textarea cols={20} rows={5} name="message" className="cs_form_field" defaultValue={""} onInput={handleInputChange}/>
                  <div className="cs_height_30 cs_height_lg_30" />
                </div>
                <div className="col-lg-12">
                  <button className="cs_btn cs_style_1 cs_fs_18 w-100"><span>SEND MESSAGE</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-xl-5 col-lg-6 offset-xl-1">
          <div className="cs_contact_info cs_radius_8 cs_accent_bg">
            <img src="assets/images/contact_info_img.svg" alt className="cs_contact_info_img" />
            
          </div>
        </div>
      </div>
    </div>
    <div className="cs_height_120 cs_height_lg_70" />
    
  </div>
 
</div>

  )
}

export default contact