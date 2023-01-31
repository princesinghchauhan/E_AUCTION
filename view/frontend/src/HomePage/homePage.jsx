import React from 'react'
import './style.css'




import AdminFooter from '../Footer/footer';
import Business from '../Business/Business';
import AdminNavbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import Dashboard from '../Dashboard/dashboard';
import Trade from '../Trade/Trade';
import AdminProfile from '../AdminProfile/AdminProfile'


function HomePage() {
  return (
    <>
   <AdminNavbar />
      <div style={{ display: 'flex', marginTop: '30px' }}>
        <div >
          <Sidebar />
        </div>
      

      </div>
      <AdminFooter />
    </>
  )
}

export default HomePage