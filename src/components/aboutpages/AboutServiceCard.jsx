import React from 'react'
import { Link } from 'react-router-dom';
import "../../assest/css/aboutcss/serviceCard.css";
import cloud from "../../assest/images/serviceCloud.svg";
import software from "../../assest/images/servicesoftware.svg";
import machine from "../../assest/images/servicemachine.svg";
const serviceArray = [
    {
        id: 1,
        icon: cloud,
        title: "Cloud Services",
        detail: " We offer comprehensive cloud solutions to help businesses harness......",
        link: "/service/detail",
        num: "01"
    },
    {
        id: 2,
        icon: software,
        title: "Software Services",
        detail: " We offer comprehensive software solutions to meet your business needs......",
        link: "/service/detail",
        num: "02"
    },
    {
        id: 3,
        icon: machine,
        title: "Machine Learning",
        detail: "We offer cutting- edge solutions leveraging the power of machine learning.....",
        link: "/service/detail",
        num: "03"
    },
]
const ServiceCard = () =>
{
    return (
        <section className='service_card_wrapper'>
            <div className='container'>
                <div className='row gy-3'>
                    {
                        serviceArray.map((index, id) =>
                        {
                            return (
                                <>
                                    <div className='col-lg-4 col-md-6 service_card_b_e' key={id}>
                                        <div className='service_card'>
                                            <div className="service-top">
                                                <span className='head_img'>
                                                    <img src={index.icon} alt={index.icon} />
                                                </span>
                                                <span className="service-number">{index.num}</span>
                                            </div>

                                            <h3 className='service_title'>
                                                {index.title}
                                            </h3>
                                            <p className='detail_text'>
                                                {index.detail}
                                            </p>
                                            <Link className='smoke_btn' to={`${index.link}/${index.id}`}>Read More</Link>
                                        </div>

                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ServiceCard