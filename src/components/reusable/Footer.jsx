import React from 'react'
import { BiMap, BiTimeFive, BiPhoneCall } from "react-icons/bi";
import { BsInstagram, BsTwitter, BsYoutube, BsFacebook } from "react-icons/bs";
import "../../assest/css/footer.css";
// import logo from "../../assest/images/logomain.png"
import { Link } from 'react-router-dom';
const Footer = () =>
{
  return (
    <>
      <section className="footer_Wrapper">
        <div className='footer_top'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='footer_card'>
                  <div>
                    <div className='card_icon'>
                      <BiMap />
                    </div>
                  </div>

                  <div className='f_c_text'>
                    <h2 className='sub_heading_title2'>
                      OFFICE ADDRESS
                    </h2>
                    <p className='mb-3'>
                      2nd floor, 331-B, Block-C4B, Janakpuri, New Delhi-110058 (Day Shift)
                    </p>
                    <p>
                      2nd Floor, 512, Udyog Vihar Phase V, Sector 19, Gurugram, Haryana 122008 (Night Shift)
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='footer_card'>
                  <div className='card_icon'>
                    <BiTimeFive />
                  </div>
                  <div className='f_c_text'>
                    <h2 className='sub_heading_title2'>
                      Working Hours
                    </h2>
                    <p>
                      Weekdays 10AM – 7PM
                      <br />
                      Weekdays 10AM – 7PM
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='footer_card  border-0'>
                  <div className='card_icon'>
                    <BiPhoneCall />
                  </div>
                  <div className='f_c_text'>
                    <h2 className='sub_heading_title2'>
                      Contact Us
                    </h2>
                    <Link to="rahuldhana.com@gmail.com">
                      info@ddtsoftwareandecommerce.com
                    </Link>
                    <p>
                      +91 9818113799
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer_bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                {/* <img src={logo} alt={logo} /> */}
                <h2 className='sub_heading_title2 my-0'>
                  About us
                </h2>
                <p>
                  Empowering your digital success with tailored IT solutions.
                </p>
                <div className='social_link'>
                  <Link to="facebook.com">
                    <BsInstagram />
                  </Link>
                  <Link to="facebook.com">
                    <BsTwitter />
                  </Link>
                  <Link to="facebook.com">
                    <BsYoutube />
                  </Link>
                  <Link to="facebook.com">
                    <BsFacebook />
                  </Link>
                </div>
              </div>
              <div className='col-lg-2 col-md-3 col-6'>
                <h2 className='sub_heading_title2 '>
                  Links
                </h2>
                <Link to="/">
                  Team
                </Link>
                <Link to="/">
                  Projects
                </Link>
                <Link to="/">
                  Contact Us
                </Link>
                <Link to="/">
                  About Us
                </Link>
              </div>
              <div className='col-lg-2 col-md-3 col-6'>
                <h2 className='sub_heading_title2'>
                  Explore
                </h2>
                <Link to="/">
                  Team
                </Link>
                <Link to="/">
                  Projects
                </Link>
                <Link to="/">
                  Contact Us
                </Link>
                <Link to="/">
                  About Us
                </Link>
              </div>
              <div className='col-lg-4'>
                <h2 className='sub_heading_title2'>
                  Office Maps
                </h2>
              </div>
            </div>
          </div>
        </div>

      </section >
    </>
  )
}

export default Footer