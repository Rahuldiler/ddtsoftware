import React from 'react'
import Layout from '../reusable/Layout'
import Breadcrumb from '../reusable/Breadcrumb'
import ErrorPage from '../../ErrorPage'

const Project = () =>
{
    return (

        <Layout>
            <Breadcrumb pageHeader="Projects" />
            <ErrorPage alertMessage={"We Will Update it soon "}/>
        </Layout>
    )
}

export default Project