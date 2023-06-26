import React from 'react';
import "../../assest/css/progress.css";
import { BiCopy } from 'react-icons/bi';
import ProgressBar from 'react-bootstrap/ProgressBar';
import progressImg from "../../assest/images/progress.jpg";
const Progress = () =>
{
    const business = 65;
    const career = 90;
    const innovation = 85;

    return (
        <section className='progress_wrapper'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='progress_text'>
                            <p className='sub_heading_title'>
                                <BiCopy />  THE GREAT COMPANY SKILL
                            </p>
                            <h2 className='main_heading_title'>
                                CONNECTING PEOPLE AND BUILD TECHNOLOGY
                            </h2>
                            <p className='detail_text' style={{ textAlign: 'justify' }}>
                                Energistically evisculate an expanded array of meta-services after cross-media strategic theme areas.
                                Interactively simplify interactive customer service before fully tested relationship parallel
                                task high standards...
                            </p>
                            <div className='bars'>
                                <div className='bar_label'>
                                    <h2>
                                        BUSINESS SECURITY
                                    </h2>
                                    <h2>
                                        65%
                                    </h2>
                                </div>
                                <ProgressBar now={business} />
                            </div>

                            <div className='bars'>
                                <div className='bar_label'>
                                    <h2>
                                        CAREER DEVELOPMENT
                                    </h2>
                                    <h2>
                                        90%
                                    </h2>
                                </div>
                                <ProgressBar now={career} />
                            </div>

                            <div className='bars'>
                                <div className='bar_label'>
                                    <h2>
                                        BUSINESS INOVATION
                                    </h2>
                                    <h2>
                                        85%
                                    </h2>
                                </div>
                                <ProgressBar now={innovation} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <img src={progressImg} className='img-fluid' alt={progressImg} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Progress