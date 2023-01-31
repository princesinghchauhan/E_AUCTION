// import './style.css'
// import React, { useState, useEffect } from 'react'
// import { Button, Modal, Form, Col, Row } from 'react-bootstrap'
// import Avatar from '@mui/material/Avatar';

// function AdminProfile() {
//   let [data, setData] = useState([])
//   let [show, setShow] = useState(false);

//   const [validated, setValidated] = useState(false);

//   let handleShow = () => setShow(true);
//   let [Full_Name, setFull_Name] = useState('')
//   let [Email, setEmail] = useState('')
//   let [gender, setGender] = useState('')
//   let [mobile, setMobile] = useState('')
//   let [Address, setAddress] = useState('')

//   useEffect(() => {
//     submitData();
//   }, []);

//   async function submitData() {
//     const api = "http://localhost:5000/userregistrationget";
//     try {
//       const res = await fetch(api, { method: "GET" })
//       const data1 = await res.json()
//       setData(data1)

//     }
//     catch (error) {
//       console.log(error)
//     }
//   }

//   function updateProfile(user_id) {
//     let item = {
//       Full_Name: Full_Name,
//       Email: Email,
//       gender: gender,
//       mobile: mobile,
//       Address: Address
//     }

//     fetch(`http://localhost:5000/userregistrationput/${user_id}`,
//       {
//         method: "PUT",
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(item)
//       })
//       .then((result) => {
//         result.json().then((res) => {
//           console.warn(res);
//           submitData();
//         })
//       })
//   }

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   return (
//     <>
//       <div className='Admin_form'>
//         <Modal.Dialog 
//         // show={show}
//         // dialogClassName="modal-900w"
//         //  aria-labelledby="example-custom-modal-styling-title"
//         >
//           <Modal.Header >
//             <Modal.Title style={{ display: "flex" }}>
//               <Avatar

//                 src="/"
//                 sx={{ width: 80, height: 80 }}
//               />
//               <h2 style={{ marginLeft: "20px" }}>My Profile</h2>

//             </Modal.Title>
//           </Modal.Header>

//           <Modal.Body size="lg">
//             <Form noValidate validated={validated} onSubmit={handleSubmit}>
//               <Row className="mb-5" >
//                 <Form.Group as={Col} md="12" controlId="validationCustom01">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control

//                     value={Full_Name} onChange={(e) => setFull_Name(e.target.value)}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     Please provide a valid email.
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group as={Col} md="12" controlId="validationCustom01">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     // required
//                     // type="text"
//                     // defaultValue="prince23@gmail.com"
//                     value={Email} onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     Please provide a valid email.
//                   </Form.Control.Feedback>
//                 </Form.Group>
//               </Row>

//               <Row className="mb-5">
//                 <Form.Group as={Col} md="12" controlId="validationCustom03">
//                   <Form.Label>Gender</Form.Label>
//                   <Form.Control  value={gender} onChange={(e) => setGender(e.target.value)} />
//                   <Form.Control.Feedback type="invalid">
//                     Please provide a valid gender.
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group as={Col} md="12" controlId="validationCustom03">
//                   <Form.Label>Mobile</Form.Label>
//                   <Form.Control  value={mobile} onChange={(e) => setMobile(e.target.value)} />
//                   <Form.Control.Feedback type="invalid">
//                     Please provide a valid Mobile.
//                   </Form.Control.Feedback>
//                 </Form.Group>
//               </Row>

//               <Row className="mb-5">
//                 <Form.Group as={Col} md="6" controlId="validationCustom03">
//                   <Form.Label>Address</Form.Label>
//                   <Form.Control  value={Address} onChange={(e) => setAddress(e.target.value)} />
//                   <Form.Control.Feedback type="invalid">
//                     Please provide a valid address.
//                   </Form.Control.Feedback>
//                 </Form.Group>
//               </Row>
//               <Button type="submit" onClick={updateProfile}>Update profile</Button>

//             </Form>
//           </Modal.Body>
//         </Modal.Dialog>
//       </div>
//     </>
//   )
// }

// export default AdminProfile




////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import './style.css'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

export default function AdminProfile() {

  let [data, setData] = useState([])
  let [Full_Name, setFull_Name] = useState('')

  useEffect(() => {
    submitData();
  }, []);

  async function submitData() {
    const api = "http://localhost:5000/userregistrationget";
    try {
      const res = await fetch(api, { method: "GET" })
      const data1 = await res.json()
      setData(data1)

    }
    catch (error) {
      console.log(error)
    }
  }

  /////////////////put fatch/////////////////////////////


  function updateBusiness() {
    let item = {
        Full_Name, Email, GST, PAN, Address, state, city
    }

    fetch(`http://localhost:5000/businessnameupdate/${Email}`,
        {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then((result) => {
            result.json().then((res) => {
                console.warn(res);
                submitData();
            })
        })
}

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
      {data.map((user) => (
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="9" xl="7">
              <MDBCard>
                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                  <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                    <MDBBtn outline color="dark" onClick={submitData} style={{ height: '36px', overflow: 'visible' }}>
                      Edit profile
                    </MDBBtn>
                  </div>
                  <div className="ms-3" style={{ marginTop: '160px' }}>
                    <MDBTypography tag="h5">{user.Full_Name}</MDBTypography>
                  </div>
                </div>
                <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa', height: "10vh" }}>

                </div>

                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted" value={Full_Name} onChange={(e) => setFull_Name(e.target.value)}>{user.Full_Name} </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{user.Email}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Gender</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{user.gender}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Mobile</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{user.mobile}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Address</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{user.Address}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>

              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      ))}
    </div>
  );
}