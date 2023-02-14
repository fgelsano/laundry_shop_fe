import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import Sidebar from './sidebar'


const mainlayout = () => {
  return (
    <div className="Admin-Nav">
        <Navbar/>
      <div id="layoutSidenav">
      
            <div id="layoutSidenav_nav">
                <Sidebar/>
            </div>
            <div id="layoutSidenav_content">
               <Footer/> 
            </div>
    </div>
    </div>
  )
}

export default mainlayout
