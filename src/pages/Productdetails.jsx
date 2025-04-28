import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

function ProductDetails() {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,                                           
    slidesToScroll: 1,
    arrows: true,
  };

  const [activeTab, setActiveTab] = useState("tab_1");

  let id = useLocation().pathname.split("/")[2];
  let [productDetails, setProductDetails] = useState({});
  let [images, setImages] = useState([]);
  let [materials, setMaterials] = useState([]);

  useEffect(() => {
    axios
      .get(`https://personalcarebackend.onrender.com/products/${id}`)
      .then((response) => {
        setProductDetails(response.data["product"]);
        setImages(response.data["product"]["images"]);
        setMaterials(response.data["product"]["materials"]);
      });
  }, []);

  return (
    <div>
      {/* Start Product Details */}
      <div className="container">
        <div className="cs_height_45 cs_height_lg_45" />
        <div className="cs_height_45 cs_height_lg_45" />
        <div className="row cs_gap_y_40">
          <div className="col-lg-6">
            <Slider {...settings}>
              {images.map((value) => {
                return (
                  <>
                    <div>
                      <img
                        src={value}
                        alt="Thumb"
                        width="60%"
                        style={{ display: "block", margin: "0 auto" }}
                      />
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
          <div className="col-lg-6">
            <div className="cs_details cs_style_1">
              <p className="cs_product_category cs_fs_14 cs_light">
                {productDetails.brand_name}
              </p>
              <h2 className="cs_product_title cs_fs_36 cs_medium mb-0 cs_secondary_font">
                {productDetails.product_name}
              </h2>
              <div className="cs_height_16 cs_height_lg_16" />
              <ul className="cs_details_list_1 cs_mp_0">
                <li>
                  <div className="cs_product_ratings">
                    <div className="cs_rating_number cs_ternary_color cs_fs_14 cs_light">
                      <span>({productDetails.rating}/5) </span>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="cs_fs_18 cs_primary_color">
                    {productDetails.rating}
                  </span>{" "}
                  Ratings
                </li>
              </ul>
              <div className="cs_height_34 cs_height_lg_30" />
              <p className="cs_product_price cs_fs_54 cs_semibold cs_accent_color mb-0">
                Rs. {productDetails.price}
              </p>
              <div className="cs_height_40 cs_height_lg_30" />
              <hr />
              <div className="cs_height_40 cs_height_lg_30" />
              <ul className="cs_details_list_2 cs_mp_0 cs_light">
                <li>
                  <b className="cs_semibold cs_primary_color">
                    Brief Description
                  </b>{" "}
                  {productDetails.description}
                </li>
                <li>
                  <b className="cs_semibold cs_primary_color">
                    Usage Instructions{" "}
                  </b>{" "}
                  {productDetails.usage_instructions}
                </li>
                <li>
                  <b className="cs_semibold cs_primary_color">Materials </b>{" "}
                  {productDetails.materials}
                </li>
              </ul>

              <div className="cs_height_50 cs_height_lg_40" />
              <div className="cs_btn_group_1">
                <Link to={`/productInquiry/${productDetails._id}`} className="cs_btn cs_style_2 cs_fs_18 cs_medium">
                  Do Inquiry ?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Product Details */}

      <div className="cs_height_120 cs_height_lg_70" />
      {/* End Related Products */}
    </div>
  );
}

export default ProductDetails;
