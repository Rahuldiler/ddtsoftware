import React from 'react';
import "../../assest/css/itsolution.css";
import itsolution from "../../assest/images/itsolution.jpg";
import itsolution2 from "../../assest/images/itsolution2.jpg";
import { BiCopy, BiPhoneCall, BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const ITsolutuion = () =>
{
    
    return (
        <section className='it_solution'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5'>
                        <div className='it_img_wrap'>
                            <img src={itsolution} alt={itsolution} />
                            <div className='it_v_wrap'>
                                <img src={itsolution2} alt={itsolution2} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-7'>
                        <div className='it_text_wrap'>
                            <div className='it_heading'>
                                <p className='sub_heading_title'>
                                    <BiCopy />  GET BEST IT SOLUTION 2022
                                </p>
                                <h2 className='main_heading_title'>
                                    TRUST OUR BEST IT SOLUTION FOR YOUR BUSINESS
                                </h2>
                            </div>
                            <div className='it_body'>
                                <p className='detail_text'>
                                    Compellingly mesh cross-platform portals through functional human capital
                                    world-class architectures for orthogonal initiatives. Assertively benchmark
                                    visionary quality vectors after covalent e-tailers. Intrinsicly enhance 24/7
                                    users and supply process
                                </p>
                                <div className='it_card_wrap'>
                                    <span>
                                        <BiPhoneCall />
                                    </span>
                                    <div>
                                        <p>

                                            24 HOURS SERVICE AVAILABLE
                                        </p>
                                        <h2>
                                            Call Us: <Link to="/">(+91)9818113799</Link>
                                        </h2>
                                    </div>
                                </div>
                                <Link className='blue_btn' to="/aboutus">
                                    About Us <BiRightArrowAlt />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ITsolutuion