import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/homepages/Home'
import AboutMore from '../components/aboutpages/AboutMore'
import Team from '../components/teampages/Team'
import TeamCard from '../components/teampages/TeamCard'
import GetTouch from '../components/reusable/GetTouch'
import Service from '../components/servicePages/Service'
import ServiceDetails from '../components/servicePages/ServiceDetails'
import Plan from '../components/planPages/Plan'
import Project from '../components/projects/project'
import ErrorPage from '../ErrorPage'
const HomeRoutes = () =>
{
  return (
    <Routes>
      <Route  exact  path="/" element={<Home />} />
      <Route  path="/aboutus" element={<AboutMore />} />
      <Route  path="/team" element={<Team />} />
      <Route  path="/team-detail/:id" element={<TeamCard />} />
      <Route  path="/contact" element={<GetTouch />} />
      <Route  path="/service" element={<Service />} />
      <Route  path="/plan" element={<Plan />} />
      <Route  path="/project" element={<Project />} />
      <Route  path="/servicedetails/:id" element={<ServiceDetails />} />
      <Route  path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default HomeRoutes
