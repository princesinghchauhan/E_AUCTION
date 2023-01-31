// import './App.css';
// import { Routes, Route } from "react-router-dom"
// import HomePage from './HomePage/homePage'
// import AdminFooter from './Footer/footer';
// import Dashboard from './Dashboard/dashboard';
// import AdminNavbar from './Navbar/navbar';
// import Sidebar from './Sidebar/sidebar';
// import Trade from './Trade/Trade';
// import Business from './Business/Business';
// import AdminProfile from './AdminProfile/AdminProfile';
// import SignUp from './Ragistration/registration'
// import UserLogin from './Login/Login';


// function App() {
//   return (
//     <>
//       <AdminNavbar />
//       <div style={{ display: 'flex', marginTop: '30px' }}>
//         <div >
//           <Sidebar />
//         </div>
//         <div>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/business" element={<Business />} />
//             <Route path="/trade" element={<Trade />} />
//             <Route path="/adminprofile" element={<AdminProfile />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/login" element={<UserLogin />} />
//           </Routes>
//         </div>

//       </div>
//       <AdminFooter />
//     </>

//   );
// }

// export default App;

import './App.css';
import React from 'react'
import { Routes, Route } from "react-router-dom"
import UserLogin from './Login/Login';
import HomePage from './HomePage/homePage';
import SignUp from './Ragistration/registration';
import Dashboard from './Dashboard/dashboard';
import Business from './Business/Business'
import Trade from './Trade/Trade';
import AdminProfile from './AdminProfile/AdminProfile';


function App() {
  
  return (
    <>
      {/* <UserLogin /> */}
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/business" element={<Business />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/adminprofile" element={<AdminProfile />} />
      </Routes>
    </>
  )
}

export default App;