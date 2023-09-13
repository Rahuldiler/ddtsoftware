import React from 'react';
import "../../assest/css/Servicecss/serviceDetails.css";
import { BiCheckCircle, BiRightArrowAlt } from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';
import projectArray from '../ArrayFiles/projectArray';
const ProjectDetails = ({ projectId }) =>
{
    const filteredArray = projectArray.filter(item => item.id === parseInt(projectId));
    return (
        <>
            <section className='service_detai_page'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <ul className='lt_list_cntnt'>
                                <h2 className='service_title'>All Project</h2>
                                <li>
                                    <NavLink className="detail_text" to="/project/1">React Projects</NavLink>
                                </li>
                                <li>
                                    <NavLink className="detail_text" to="/project/2">Web Design Projects</NavLink>
                                </li>
                                <li>
                                    <NavLink className="detail_text" to="/project/3">PHP Projects </NavLink>
                                </li>
                                <li>
                                    <NavLink className="detail_text" to="/project/4">Digital Marketing Projects</NavLink>
                                </li>
                            </ul>
                            <ul className='lt_list_cntnt time_cnt'>
                                <h2 className='service_title'>Achievements</h2>
                                <li>
                                    <p className='detail_text'>Most Service Provider</p>
                                </li>
                                <li>
                                    <p className='detail_text'>Complete 430+ Projects</p>
                                </li>
                                <li>
                                    <p className='detail_text'>Make 2000+ Clients Happy</p>
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

                                filteredArray.map((index) =>
                                {
                                    return (
                                        <div key={index.id}>
                                            <div className='it_slt_bsns_t_sec'>
                                                <img src={index.imageUrl} alt="projectSample" />
                                                <h2 className='service_title'>{index.title}</h2>
                                                <p>
                                                    {index.hdpara}
                                                </p>
                                            </div>
                                            <div className='it_slt_bsns_md_sec p-3 bg-white'>
                                                <img src={index.icon} alt="projectSample" />
                                                <ul>
                                                    <h3 className='sub_heading_title'>{index.incldet} :</h3>
                                                    {
                                                        index?.incldescription?.map((e, id) =>
                                                        {
                                                            return (
                                                                <>
                                                                    <li key={id}>
                                                                        <p className='detail_text'>
                                                                            <BiCheckCircle /> {e.detail}
                                                                        </p>

                                                                    </li>
                                                                </>

                                                            )
                                                        })
                                                    }
                                                    <Link to={`https://${index.link}`} className='blue_btn' target='_blank' rel='noopener noreferrer'>View Project</Link>
                                                </ul>

                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectDetails