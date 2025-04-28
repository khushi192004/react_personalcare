import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
   {/* Start Footer Section */}
   <footer className="cs_footer cs_style_2 cs_type_1 cs_primary_bg cs_white_color cs_light">
        <div className="container">
          <div className="cs_newsletter cs_style_3"></div>
          <div className="cs_footer_row">
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_widget_title cs_secondary_font cs_semibold cs_fs_16 text-uppercase cs_white_color">MY ACCOUNT</h2>
                <ul className="cs_menu_widget cs_mp_0">
                  <li><Link to="/login">Sign In</Link></li>
                  <li><Link to="/signup">Sign Up</Link></li>
                </ul>
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_widget_title cs_secondary_font cs_semibold cs_fs_16 text-uppercase cs_white_color">CONTACT INFORMATION</h2>
                <ul className="cs_contact_widget cs_mp_0">
                  <li>
                    <i>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.2324 13.9201C16.0242 12.8867 14.798 12.2608 13.6047 13.2926L12.8921 13.9162C12.3707 14.3689 11.4014 16.484 7.65346 12.1726C3.90634 7.86665 6.1362 7.19621 6.65834 6.74743L7.37483 6.12304C8.56195 5.08889 8.11395 3.78704 7.25776 2.44694L6.74107 1.63524C5.88098 0.29826 4.94439 -0.579789 3.75415 0.452797L3.11102 1.01475C2.58498 1.39797 1.11454 2.64363 0.757853 5.01007C0.328585 7.84948 1.68273 11.101 4.78517 14.6686C7.88371 18.2378 10.9175 20.0306 13.7912 19.9993C16.1795 19.9736 17.6219 18.692 18.073 18.2261L18.7184 17.6633C19.9056 16.6315 19.168 15.581 17.959 14.5453L17.2324 13.9201Z" fill="currentColor" />
                      </svg>
                    </i>
                    <a href="tel:+1(555)123-4567">+1 (555) 123-4567</a>
                  </li>
                  <li>
                    <i>
                      <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.29341 13.0642C1.54501 13.1854 1.82301 13.2502 2.10761 13.2502H15.875C16.0806 13.2502 16.2828 13.2164 16.4742 13.1518L11.0422 7.47281C10.7594 7.74421 10.5068 7.98641 10.296 8.18781C9.57121 8.88121 8.42881 8.88121 7.70401 8.18781C7.45421 7.94901 7.14441 7.65181 6.79501 7.31641L1.29341 13.0642Z" fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.3198 1.42969C16.5204 2.20029 13.9042 4.72209 11.9436 6.60649L17.461 12.3747C17.6484 12.0777 17.75 11.7315 17.75 11.3747V2.62469C17.75 2.18669 17.5968 1.76449 17.3198 1.42969Z" fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.671405 1.41992C0.389005 1.75632 0.232605 2.18272 0.232605 2.62532V11.3753C0.232605 11.6551 0.295205 11.9285 0.412605 12.1767L5.8936 6.45032C3.9758 4.60612 1.506 2.22492 0.671405 1.41992Z" fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.8044 0.7748L8.568 7.2844C8.8096 7.5156 9.1904 7.5156 9.432 7.2844C10.9856 5.7982 14.8192 2.1044 16.1956 0.7776C16.0904 0.7594 15.9832 0.75 15.875 0.75H2.1076C2.0054 0.75 1.904 0.7584 1.8044 0.7748Z" fill="currentColor" />
                      </svg>
                    </i>
                    <a href="mailto:cs@glowify.com">cs@glowify.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cs_bottom_footer d-flex cs_fs_14">
            <ul className="cs_footer_links cs_mp_0">
              <li>
                <a href="/#">Privacy Policy</a>
              </li>
              <li>
                <a href="/#">Terms & Condition</a>
              </li>
            </ul>
            <p className="cs_copyright mb-0">Copyright © 2024 Glowify. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
      {/* End Footer Section */}
</div>

  )
}

export default Footer
