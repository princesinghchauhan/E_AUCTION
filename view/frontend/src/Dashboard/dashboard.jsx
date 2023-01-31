import * as React from 'react';
import './style.css'
import Graph from './chart';
import { styled, Box, Paper, Grid } from '@mui/material';
import { ArrowDownOutlined, ArrowUpOutlined, LikeOutlined } from '@ant-design/icons';
import { Statistic } from 'antd';
import ColumnGroupingTable from './table';
import Navbar from '../Navbar/navbar';
import Sidebar from '../Navbar/navbar';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Dashboard() {
    return (
        <>
          <Navbar />
          <Sidebar />
       
        <Box sx={{ flexGrow: 1, marginTop: '55px', marginLeft: '20px', marginRight: '20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Item>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{
                                color: '#3f8600',
                            }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />

                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>

                        <Statistic
                            title="Idle"
                            value={9.3}
                            precision={2}
                            valueStyle={{
                                color: '#cf1322',
                            }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                        />

                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <Statistic title="Active Users" value={112893} />
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item><Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} /></Item>
                </Grid>
                <Grid item xs={5}>
                    <Item><ColumnGroupingTable /></Item>
                </Grid>
                <Grid item xs={6}>
                    <Item className='graph-admin'><Graph /></Item>
                </Grid>
            </Grid>
        </Box>
        </>
    );
}