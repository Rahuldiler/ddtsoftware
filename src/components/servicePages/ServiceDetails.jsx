import React from 'react';
import Breadcrumb from '../reusable/Breadcrumb';
import Layout from '../reusable/Layout';
import "../../assest/css/Servicecss/serviceDetails.css";
import service1 from "../../assest/images/servicedet1.jpg";
import service12 from "../../assest/images/servicedet2.jpg";
import service13 from "../../assest/images/servicedet4.jpg";
import { BiCheckCircle, BiAlarm, BiRightArrowAlt } from "react-icons/bi";
import { Accordion } from 'react-bootstrap';
import serviceArray from '../ArrayFiles/serviceArray';
import { Link, NavLink, useParams } from 'react-router-dom';
const ServiceDetails = () =>
{
    const userId = useParams();
    return (
        <>
            <Layout>
                <Breadcrumb pageHeader="Service Detail" />
                <section className='service_detai_page'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <ul className='lt_list_cntnt'>
                                    <h2 className='service_title'>All Services</h2>
                                    <li>
                                        <NavLink className="detail_text" to="/servicedetails/1">Cloud solutions</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="detail_text" to="/servicedetails/2">UI/UX Designing</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="detail_text" to="/servicedetails/3">Digital Marketing</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="detail_text" to="/servicedetails/4">web development</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="detail_text" to="/servicedetails/5">Software Services</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="detail_text" to="/servicedetails/6">Machine Learning</NavLink>
                                    </li>
                                </ul>
                                <ul className='lt_list_cntnt time_cnt'>
                                    <h2 className='service_title'>Working Hours</h2>
                                    <li>
                                        <BiAlarm /> <p className='detail_text'>Mon – Fri 1.00 – 2:00 pm</p>
                                    </li>
                                    <li>
                                        <BiAlarm /> <p className='detail_text'>Saturday 8.00 – 12:00 pm</p>
                                    </li>
                                    <li>
                                        <BiAlarm /> <span className='detail_text'>Sunday closed</span>
                                    </li>
                                </ul>
                                <div className='qry_cnt'>
                                    <div>
                                        <h2 className='main_heading_title'>Have Any Query?</h2>
                                        <Link className='blue_btn' to="/contact">
                                            Get quote <BiRightArrowAlt />
                                        </Link>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-8'>
                                {
                                    serviceArray.filter(item => item.id === parseInt(userId.id)).map((index) =>
                                    {
                                        return (
                                            <>
                                                <div className='it_slt_bsns_t_sec'>
                                                    <img src={service1} alt={service1} />
                                                    <h2 className='service_title'>{index.head}</h2>
                                                    <p>
                                                        {index.hdpara}
                                                    </p>
                                                </div>
                                                <div className='it_slt_bsns_md_sec'>
                                                    <img src={service13} alt={service13} />
                                                    <ul>
                                                        <h3 className='sub_heading_title'>{index.incldet} :</h3>
                                                        {
                                                            index?.servincld?.map((e, id) =>
                                                            {
                                                                return (

                                                                    <li key={id}>
                                                                        <p className='detail_text'>
                                                                            <BiCheckCircle /> {e.ser}
                                                                        </p>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                                <div className='it_slt_bsns_lt_sec'>
                                                    <img src={service12} alt={service12} />
                                                    <h2 className='service_title head'>{index.faqsHead}</h2>
                                                    <Accordion defaultActiveKey="0">
                                                        {
                                                            index.faqs?.map((i, id) =>
                                                            {
                                                                return (
                                                                    <Accordion.Item eventKey={id}>
                                                                        <Accordion.Header className='service_title'>{i.que}</Accordion.Header>
                                                                        <Accordion.Body>
                                                                            <p>
                                                                                {i.ans}
                                                                            </p>

                                                                        </Accordion.Body>
                                                                    </Accordion.Item>
                                                                )
                                                            })
                                                        }
                                                    </Accordion>
                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default ServiceDetails