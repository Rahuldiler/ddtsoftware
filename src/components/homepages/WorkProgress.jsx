import React from 'react'
import progress1 from "../../assest/images/process1.svg";
import progress2 from "../../assest/images/process2.svg";
import progress3 from "../../assest/images/process3.svg";
import progress4 from "../../assest/images/process4.svg";
import arrowImg from "../../assest/images/proccesarrow.png";
import arrowImgUp from "../../assest/images/process-arrow2.png";
import "../../assest/css/workprogress.css";
const WorkProgress = () =>
{
    return (
        <section className='work_p_wrapper'>
            <p className='sub_heading_title text-center'>
                Work Process
            </p>
            <h2 className='main_heading_title text-center'>
                WE FOLLOW GREAT PROCESS
            </h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-sm-6 work_card'>
                        <div className='work_p_content'>
                            <div className='work_p_img'>
                                <img src={progress1} alt={progress1} />
                                <p>
                                    01
                                </p>
                            </div>

                        </div>
                        <div className='work_p_text'>
                            <h2 className='service_title '>
                                Medicine Help
                            </h2>
                            <p className='paragraph text-justify'>
                                Extensible for web iterate process before meta services impact with olisticly enable client.
                            </p>
                        </div>
                        <div className='work_p_arrow'>
                            <img src={arrowImg} alt={arrowImg} />
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6 work_card2'>
                        <div className='work_p_content'>
                            <div className='work_p_img'>
                                <img src={progress2} alt={progress2} />
                                <p>
                                    02
                                </p>
                            </div>

                        </div>
                        <div className='work_p_text'>
                            <h2 className='service_title '>
                                We Build and Create
                            </h2>
                            <p className='paragraph text-justify'>
                                Extensible for web iterate process before meta services impact with olisticly enable client.
                            </p>
                        </div>
                        <div className='work_p_arrow_up work_p_arrow '>
                            <img src={arrowImgUp} alt={arrowImgUp} />
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6 work_card'>
                        <div className='work_p_content'>
                            <div className='work_p_img'>
                                <img src={progress3} alt={progress3} />
                                <p>
                                    03
                                </p>
                            </div>

                        </div>
                        <div className='work_p_text'>
                            <h2 className='service_title '>
                                Water Delivery
                            </h2>
                            <p className='paragraph text-justify'>
                                Extensible for web iterate process before meta services impact with olisticly enable client.
                            </p>
                        </div>
                        <div className='work_p_arrow'>
                            <img src={arrowImg} alt={arrowImg} />
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6 work_card2'>
                        <div className='work_p_content'>
                            <div className='work_p_img'>
                                <img src={progress4} alt={progress4} />
                                <p>
                                    04
                                </p>
                            </div>

                        </div>
                        <div className='work_p_text'>
                            <h2 className='service_title '>
                                We Care About
                            </h2>
                            <p className='paragraph text-justify'>
                                Extensible for web iterate process before meta services impact with olisticly enable client.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkProgress