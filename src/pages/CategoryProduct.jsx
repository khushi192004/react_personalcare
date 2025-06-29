import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const CategoryProducts = () => {
  let id = useLocation().pathname.split("/")[2];
  console.log(id);

  let [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios
      .get(
        `https://personalcarebackend.onrender.com/category/${id}`
      )
      .then((response) => {
        setProducts(response.data["products"]);
      });
  }, [id]);

  console.log(products);

  return (
    <>
      <div className="cs_height_40 cs_height_lg_30" />
      <div className="container">
        <div
          className="cs_breadcamp_wrap cs_style_1 cs_type_1 cs_accent_light_bg cs_bg_filed cs_radius_8"
          style={{ backgroundImage: "url(./assets/images/breadcamp_bg_2.jpg)" }}
        >
          <div>
            <h1 className="cs_breadcamp_title cs_fs_54 cs_semibold">
              Discover Our Beauty Collection
            </h1>
          </div>
        </div>
      </div>
      
      <div className="cs_height_80 cs_height_lg_70" />
      <div className="container">
        <div className="cs_height_50 cs_height_lg_50" />
        <div className="cs_grid_5_column cs_products_view cs_style_1">
          {products?.length > 0 ? (
            products?.map((value) => {
              return (
                <>
                  <div className="cs_grid_col">
                    <div className="cs_product_card cs_style_1 cs_radius_12">
                      <div className="cs_product_card_in">
                        <div className="cs_product_thumb cs_center">
                          <img src={value.images[0]} alt="Product" />
                          <div className="cs_products_btns"></div>
                        </div>
                        <div className="cs_product_info">
                          <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                            <Link class="nav-link" to="shop.html">
                              {value.brand_name}
                            </Link>
                          </div>
                          <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                            {value.product_name}
                          </h2>
                          <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                            Rs. {value.price}
                          </p>
                          <div className="cs_product_ratings">
                            <div className="cs_rating_number cs_ternary_color cs_fs_14 cs_light">
                              <span className="fw-bolder">
                                ({value.rating}/5)
                              </span>
                              <br />
                              <span className="fw-bolder">
                                Materials : {value.materials.join(" , ")}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link
                        class="nav-link"
                        to={`/productdetails/${value._id}`}
                        className="cs_product_link"
                      />
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <h1>No Products Found</h1>
          )}
        </div>
        <div className="cs_height_70 cs_height_lg_40" />
      </div>

    </>
  );
};

export default CategoryProducts;