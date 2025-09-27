import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import CreateGig from './pages/influencer/CreateGig'
import Gigs from './pages/Gigs'
import Dashboard from './pages/influencer/Dashboard'
import MyGigs from './pages/influencer/MyGigs'
import BusinessDashboard from './pages/business/Dashboard'
import Orders from './pages/business/Orders'

const App = () => {
  return (
    <div>
    <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="create-gig" element={<CreateGig />} />
        <Route path="gigs" element={<Gigs />} />
        <Route path="influencer-dashboard" element={<Dashboard />} />
        <Route path="my-gigs" element={<MyGigs />} />
        <Route path="business-dashboard" element={<BusinessDashboard />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
