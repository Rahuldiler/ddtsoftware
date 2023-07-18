import React, { useState } from 'react'
import logoImg from "../../assest/images/mainlogo.jpg";
import "../../assest/css/header.css";
import
{
  BiPhoneCall,
  BiEnvelope,
  BiMap,
  BiRightArrowAlt,
  BiMenu
} from "react-icons/bi";
// import logo from "../../assest/images/logomain.png"
import { Link, NavLink } from 'react-router-dom';
const Header = () =>
{
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <section className='container header_top py-0'>
        <div className='logo'>
          <img src={logoImg} alt={logoImg} />
        </div>
        <div className='reach_out_wrap'>
          <div className='contact_dt_card'>
            <span>
              <BiPhoneCall />
            </span>
            <div>
              <p>Call Anytime 24/7</p>
              <Link>(+91 9818113799)</Link>
            </div>
          </div>
          <div className='contact_dt_card'>
            <span>
              <BiEnvelope />
            </span>
            <div>
              <p>Mail Us for support</p>
              <Link>info@ddtsoftwareandecommerce.com </Link>
            </div>
          </div>
          <div className='contact_dt_card'>
            <span>
              <BiMap />
            </span>
            <div>
              <p>office Address</p>
              <Link>2nd floor, 331-B,Janakpuri<br/> New Delhi-110058</Link>
            </div>
          </div>
        </div>

      </section>
      <section className='container menu_wrapper py-0'>
        <nav className='navbar_desk'>
          <BiMenu onClick={() => setToggle(!toggle)} className='toggle_icon' />
          <ul className={!toggle ? "main_links" : "mobile_links"}>
            <div className='mobile_logo'>
              <img src={logoImg} alt={logoImg} />
            </div>
            <li>
              <NavLink className="nav_item" to="/myportfolio">Home</NavLink>
            </li>
            <li>
              <NavLink className="nav_item" to="/team">Team</NavLink>
            </li>
            <li>
              <NavLink className="nav_item" to="/service">Services</NavLink>
            </li>

            <li>
              <NavLink className="nav_item" to="/project">Project</NavLink>
            </li>
            <li>
              <NavLink className="nav_item" to="/plan">Plan</NavLink>
            </li>
            <li>
              <NavLink className="nav_item" to="/aboutus">About Us</NavLink>
            </li>
            <li>
              <NavLink className="nav_item" to="/contact">Contact Us</NavLink>
            </li>
          </ul>
          <Link className="cta" to="/contact">
            <span>Get In Touch</span>
            <BiRightArrowAlt />
          </Link>
        </nav>
      </section>
    </>

  )
}

export default Header