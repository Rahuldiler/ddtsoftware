import React from 'react'
import { BiCopy } from 'react-icons/bi';
import "../../assest/css/review.css";
import pankaj from "../../assest/images/teammem1.jpg";
import ravi from "../../assest/images/review2.jpg";
const Reviews = () =>
{
    return (
        <>
            <section className='review_wrapper'>
                <div className='container'>
                    <p className='sub_heading_title'>
                        <BiCopy />OUR BEST REVIEW’S
                    </p>
                    <h2 className='main_heading_title'>
                        Inspiring Tech Needs<br /> For Business
                    </h2>
                    <div className='row gx-3'>
                        <div className='col-md-6'>
                            <div className='review_card'>
                                <div className='review_card_head'>
                                    <img src={pankaj} alt={pankaj} />
                                    <p className='paragraph'>
                                        “Quickly formulate high yield web services before functional
                                        process improvements enable premier with e-business customer service.”
                                    </p>
                                </div>
                                <div className='review_card_footer'>
                                    <h3 className='sub_heading_title mb-1'>
                                        Pankaj Rao
                                    </h3>
                                    <p className='detail_text2'>
                                        CEO, IT'Z TECHIES
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='review_card'>
                                <div className='review_card_head'>
                                    <img src={ravi} alt={ravi} />
                                    <p className='paragraph'>
                                        “Quickly formulate high yield web services before functional
                                        process improvements enable premier with e-business customer service.”
                                    </p>
                                </div>
                                <div className='review_card_footer'>
                                    <h3 className='sub_heading_title mb-1'>
                                        Ravi Yadav
                                    </h3>
                                    <p className='detail_text2'>
                                        CEO, Benzol Technologies
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Reviews