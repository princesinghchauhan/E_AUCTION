import React, { useEffect, useState } from 'react'
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import DataTable from 'react-data-table-component'
import './style.css'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
// import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
// import { Switch, Space } from 'antd';

// <Space direction="vertical">
//     <Switch checkedChildren="abc" unCheckedChildren="def" defaultChecked />
// </Space>

function Business() {

    let [data, setData] = useState([])
    let [show, setShow] = useState(false);
    let [search, setSearch] = useState('');
    let [filteredbusiness, setFilterBusiness] = useState([]);


    let handleClose = () => setShow(false);
    let handleShow = () => setShow(true);


    let [user_id, setUser_id] = useState('')
    let [Business_id, setBusiness_id] = useState('')
    let [Business_Name, setBusiness_Name] = useState('')
    let [Contact_no, setContact_no] = useState('')
    let [Business_register_Date, setBusiness_register_Date] = useState('')
    let [status, setStatus] = useState('')
    let [Turnover, setTurnover] = useState('')
    let [Last_update, setLast_update] = useState('')
    let [URL, setUrl] = useState('')
    let [Email, setEmail] = useState('')
    let [GST, setGst] = useState('')
    let [PAN, setPan] = useState('')
    let [Address, setAddress] = useState('')
    let [state, setState] = useState('')
    let [city, setCity] = useState('')



    useEffect(() => {
        submitData();
    }, []);


    async function submitData() {
        const api = `${process.env.REACT_APP_URL}/businessnameget`;
        try {
            const response = await fetch(api, { method: "GET" })
            const data1 = await response.json()
            setData(data1)
            setFilterBusiness(data1)
        }
        catch (error) {
            console.log(error)
        }
    }

    function deleteBusiness(Business_id) {
        fetch(`http://localhost:5000/businessnamedelete/${Business_id}`,
            { method: "DELETE" })
            .then((res) => {
                if (res.status === 200) {
                    alert("User Deleted")
                }
            })
    }

    function selectData(user_id, Business_id, Business_Name,
        Contact_no, Business_register_Date, status, Turnover,
        Last_update, URL, Email, GST, PAN, Address, state, city) {

        handleShow()
        setUser_id(user_id)
        setBusiness_id(Business_id)
        setBusiness_Name(Business_Name)
        setContact_no(Contact_no)
        setBusiness_register_Date(Business_register_Date)
        setStatus(status)
        setTurnover(Turnover)
        setLast_update(Last_update)
        setUrl(URL)
        setEmail(Email)
        setGst(GST)
        setPan(PAN)
        setAddress(Address)
        setState(state)
        setCity(city)
    }


    function updateBusiness() {
        let item = {
            user_id, Business_id, Business_Name,
            Contact_no, Business_register_Date, status, Turnover,
            Last_update, URL, Email, GST, PAN, Address, state, city
        }

        fetch(`http://localhost:5000/businessnameupdate/${Business_id}`,
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

    const columns = [
        {
            name: "User Id",
            selector: row => row.user_id,
        },
        {
            name: "Business Id",
            selector: row => row.Business_id,
        },
        {
            name: "Business Name",
            selector: row => row.Business_Name,
        },
        {
            name: "Contact Number",
            selector: row => row.Contact_no,
        },
        {
            name: "Register Date",
            selector: row => row.Business_register_Date,
        },
        {
            name: "status",
            selector: row => row.status,
        },
        {
            name: "Turn Over",
            selector: row => row.Turnover,
        },
        {
            name: "Last Update",
            selector: row => row.Last_update,
        },
        {
            name: "URL",
            selector: row => row.URL,
        },
        {
            name: "Email Id",
            selector: row => row.Email,
        },
        {
            name: "GST Number",
            selector: row => row.GST,
        },
        {
            name: "PAN Number",
            selector: row => row.PAN,
        },
        {
            name: "Address",
            selector: row => row.Address,
        },
        {
            name: "State",
            selector: row => row.state,
        },
        {
            name: "City",
            selector: row => row.city,
        },
        {
            name: "edit",
            cell: row => <Button className='btn btn-sm btn-success' onClick={() => selectData(row.user_id, row.Business_id, row.Business_Name,
                row.Contact_no, row.Business_register_Date, row.status, row.Turnover,
                row.Last_update, row.URL, row.Email, row.GST, row.PAN, row.Address, row.state, row.city)}>Update</Button>
        },
        {
            name: "delete",
            cell: row => { return (<IconButton className='btn btn-sm btn-danger' onClick={() => deleteBusiness(row.user_id)}> <DeleteIcon /></IconButton>) }
        }
    ]

    useEffect(() => {
        const result = data.filter(value => {
            return value.Business_Name.toLowerCase().match(search.toLowerCase())
        })
        setFilterBusiness(result)
    }, [search])



    return (
        <div className='business-table'>
            <div className='container'>

                <Row style={{ marginTop: '20px' }}>
                    <Col xs={12} md={9}>
                      <h3> Business List </h3> 
                    </Col>
                </Row>

                <DataTable
                    columns={columns}
                    data={filteredbusiness}
                    pagination
                    fixedHeader
                    highlightOnHover
                    selectableRows
                    selectableRowsHighlight
                    subHeader
                    subHeaderComponent={
                        <input type="search"
                            placeholder='search here'
                            className='w-25 form-control'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    }

                />

                <Modal show={show} onHide={handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicId">
                                <Form.Label>User Id</Form.Label>
                                <Form.Control type="text" value={user_id} onChange={(e) => setUser_id(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicId">
                                <Form.Label>Business Id</Form.Label>
                                <Form.Control type="text" value={Business_id} onChange={(e) => setBusiness_id(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicId">
                                <Form.Label>Business Name</Form.Label>
                                <Form.Control type="text" value={Business_Name} onChange={(e) => setBusiness_Name(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicId">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="text" value={Contact_no} onChange={(e) => setContact_no(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicId">
                                <Form.Label>Business Register Date</Form.Label>
                                <Form.Control type="text" value={Business_register_Date} onChange={(e) => setBusiness_register_Date(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicId">
                                <Form.Label>Status</Form.Label>
                                <Form.Control type="text" value={status} onChange={(e) => setState(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicId">
                                <Form.Label>Turn Over</Form.Label>
                                <Form.Control type="text" value={Turnover} onChange={(e) => setTurnover(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicId">
                                <Form.Label>Last Update</Form.Label>
                                <Form.Control type="text" value={Last_update} onChange={(e) => setLast_update(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicId">
                                <Form.Label>URL</Form.Label>
                                <Form.Control type="text" value={URL} onChange={(e) => setUrl(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicId">
                                <Form.Label>Email ID</Form.Label>
                                <Form.Control type="text" value={Email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicId">
                                <Form.Label>GST Number</Form.Label>
                                <Form.Control type="text" value={GST} onChange={(e) => setGst(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicId">
                                <Form.Label>PAN Number</Form.Label>
                                <Form.Control type="text" value={PAN} onChange={(e) => setPan(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicId">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" value={Address} onChange={(e) => setAddress(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicId">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" value={state} onChange={(e) => setState(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicId">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" onClick={updateBusiness}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>

    )
}

export default Business