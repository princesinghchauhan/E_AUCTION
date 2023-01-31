
import './style.css'
import {Link} from 'react-router-dom'


import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<Link  to="/dashboard">Dashboard</Link>, '1', <PieChartOutlined />),
  getItem(<Link  to="/business">Business</Link>, '2', <DesktopOutlined />),
  getItem(<Link  to="/trade">Trade</Link>, '3', <ContainerOutlined />),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div style={{width: 256, marginTop: -82.5, height: '100%'}}>
      <Button type="primary" onClick={toggleCollapsed} style={{ height: '36px', width: '36px',  marginBottom: 16, marginLeft: 10, borderRadius:'20px', backgroundColor: 'transparent', color: 'white' }} >
        {collapsed ? <MenuOutlined /> : <MenuOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        style={{backgroundColor: '#355C7D', color: 'white'}}
      />
    </div>
  );
};
export default App;