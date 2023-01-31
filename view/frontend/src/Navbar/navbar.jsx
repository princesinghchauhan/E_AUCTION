import React from 'react'
import './style.css'

import {
    Box,
    Avatar,
    Menu,
    MenuItem,
    ListItemIcon,
    Divider,
    IconButton,
    Tooltip
} from '@mui/material';



import { PersonAdd, Settings, Logout } from '@mui/icons-material';
import { Container, Navbar } from 'react-bootstrap';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'antd';



function AdminNavbar() {
    const navigate = useNavigate()
    function logout(){
        localStorage.clear()
        navigate('/')
    }
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='Admin-navbar'>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='nav-logo' ><h1>🤖 </h1> <h2> Online Auction</h2></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <React.Fragment>
                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                    <Tooltip title="Account settings">
                                        <IconButton
                                            onClick={handleClick}
                                            size="small"
                                            sx={{ ml: 2 }}
                                            aria-controls={open ? 'account-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                        >
                                            <Avatar sx={{
                                                bgcolor: deepPurple[400], color: 'white',
                                                width: 32, height: 32
                                            }}>PS</Avatar>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem>
                                       
                                            <Avatar alt="Prince Singh" src="/adminprofile" /> <Link  to="/adminprofile" >Profile</Link>
                                      
                                        {/* <Avatar  alt="Prince Singh" src="public\images\20220218_215918.jpg" /> Profile */}
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        Add another account
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            {/* <Logout fontSize="small" /><Link  onClick={logout} >Logout</Link> */}
                                            {/* <Button className='btn btn-primary' onClick={logout}>Logout</Button> */}
                                        </ListItemIcon>
                                        <Button className='btn btn-primary' onClick={logout}>Logout</Button>
                                    </MenuItem>
                                </Menu> 
                            </React.Fragment>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default AdminNavbar

