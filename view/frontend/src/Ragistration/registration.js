import React, { useState } from 'react';
import { Button, Modal, Form, Col, Row } from 'react-bootstrap'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// import {useHistory} from 'react-router-dom/useHistory'

const preventDefault = (event) => event.preventDefault();

const SignUp = () => {
  // const [validated, setValidated] = useState(false);
  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  // };

  let [Full_Name, setFull_Name] = useState('')
  let [Email, setEmail] = useState('')
  let [gender, setGender] = useState('')
  let [password, setPassword] = useState('')
  let [mobile, setMobile] = useState('')
  let [Address, setAddress] = useState('')
  let [Registration_date, setRegistration_date] = useState('')
// const history = useHistory();
  ////////////////post fetch/////////////////

  function submitData() {
    let userData = {
      Full_Name: Full_Name,
      Email: Email,
      gender: gender,
      password: password,
      mobile: mobile,
      Address: Address,
      Registration_date: Registration_date
    }

    let reqData =  fetch(`${process.env.REACT_APP_URL}/userregistrationpost`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    reqData=  reqData.JSON()
    // localStorage.setItem("user-item", JSON.stringify(reqData))
    // history.push('/add')
      .then(response => console.log(`Data Submitted ${response.status}`))

    alert("User Register Successfull")
   

  }
  //////////////////////////////////////////

  return (
    <>
      <div className='Admin_form'>
        <Modal.Dialog
        // dialogClassName="modal-900w"
        //  aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header  >
            <Modal.Title  style={{display: "flex"}}>
              <Avatar

                src="/"
                sx={{ width: 80, height: 80 }}
              />
              <h2 style={{ marginLeft: "20px"}}> Sign Up</h2>
             
            </Modal.Title>
          </Modal.Header>

          <Modal.Body size="lg">
            <Form >
              <Row className="mb-5" >
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    // required
                    type="text"
                    // defaultValue="Prince singh"
                    value={Full_Name} onChange={(e) => setFull_Name(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="text"

                    value={Email} onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-5">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid gender.
                  </Form.Control.Feedback>
                </Form.Group>
  
                <Form.Group as={Col} md="6" >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
                  {/* <Form.Control.Feedback type="invalid">
                    Please provide a valid password.
                  </Form.Control.Feedback> */}
                </Form.Group>


              </Row>

              <Row className="mb-5">

                <Form.Group as={Col} md="6" controlId="validationCustom05">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control value={mobile} onChange={(e) => setMobile(e.target.value)} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Mobile.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom06">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" value={Address} onChange={(e) => setAddress(e.target.value)} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid address.
                  </Form.Control.Feedback>
                </Form.Group>


              </Row>

              <Row>
                <Form.Group as={Col} md="6" controlId="validationCustom07">
                  <Form.Label>Registration Date</Form.Label>
                  <Form.Control value={Registration_date} onChange={(e) => setRegistration_date(e.target.value)} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid date.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <br></br>
              <Button type="submit" onClick={submitData} >Save Profile</Button>
              <Box
                sx={{
                  typography: 'body1',
                  '& > :not(style) + :not(style)': {
                    ml: 2,
                  },
                }}
                onClick={preventDefault}
              >
               

              </Box>
            </Form>
            <Link href="/">Login</Link>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    </>
  );
};
export default SignUp;