import React from 'react'
import banner1 from "../../assest/images/banner1.jpg";
import banner2 from "../../assest/images/banner2.jpg";
import banner3 from "../../assest/images/banner3.jpg";
import { Link } from 'react-router-dom';
import "../../assest/css/banner.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { Carousel } from 'react-bootstrap';
const BannerComp = () =>
{
    return (
        <>
            <div className='banner_wrapper'>
                <Carousel indicators={false}>
                    <Carousel.Item interval={3000}>
                        <img src={banner1} alt={banner1} />
                        <div className='rotation_effect_bx'>
                            <div className='blue_rotation'></div>
                            <div className='dark_rotation'></div>
                        </div>
                        <Carousel.Caption>
                            <div className='banner_head'>
                                <div>
                                    <p>
                                        We have top IT expert
                                    </p>
                                    <h2>
                                        TOP PROFESSINAL IT
                                        <br />
                                        SERVICE & SOLUTION 2022
                                    </h2>
                                    <div className='read_more_links'>
                                        <Link className='blue_btn' to="/aboutus">
                                            About Us <BiRightArrowAlt />
                                        </Link>
                                        <Link className='light_btn' to="/blog">
                                            Read More <BiRightArrowAlt />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img src={banner2} alt={banner2} />
                        <div className='rotation_effect_bx'>
                            <div className='blue_rotation'></div>
                            <div className='dark_rotation'></div>
                        </div>
                        <Carousel.Caption>
                            <div className='banner_head'>
                                <div>
                                    <p>
                                        HIGHLY QUALIFIYED ENGINEERS
                                    </p>
                                    <h2>
                                        TEAM OF LEGENDS &
                                        <br />
                                        PROFESSINAL ENGINEERS
                                    </h2>
                                    <div className='read_more_links'>
                                        <Link className='blue_btn' to="/aboutus">
                                            About Us <BiRightArrowAlt />
                                        </Link>
                                        <Link className='light_btn' to="/blog">
                                            Read More <BiRightArrowAlt />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img src={banner3} alt={banner3} />
                        <div className='rotation_effect_bx'>
                            <div className='blue_rotation'></div>
                            <div className='dark_rotation'></div>
                        </div>
                        <Carousel.Caption>
                            <div className='banner_head'>
                                <div>
                                    <p>
                                        PROVIDE FREE CONSULTATION
                                    </p>
                                    <h2>
                                        EXPERT IT SOLUTION
                                        <br />
                                        SUPPORT & MANAGEMNT
                                    </h2>
                                    <div className='read_more_links'>
                                        <Link className='blue_btn' to="/aboutus">
                                            About Us <BiRightArrowAlt />
                                        </Link>
                                        <Link className='light_btn' to="/blog">
                                            Read More <BiRightArrowAlt />
                                        </Link>
                                    </div>
                                </div>

                            </div>

                        </Carousel.Caption>

                    </Carousel.Item>
                </Carousel>
            </div>



        </>

    )
}

export default BannerComp