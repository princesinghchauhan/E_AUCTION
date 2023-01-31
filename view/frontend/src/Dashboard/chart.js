import React from 'react'
// import { Bar } from 'react-chartjs-2'
import {
    LineChart,
    ResponsiveContainer,
    Legend,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

// Sample chart data
const pdata = [
    {
        name: 'MongoDb',
        student: 11,
        fees: 120
    },
    {
        name: 'Javascript',
        student: 15,
        fees: 12
    },
    {
        name: 'PHP',
        student: 5,
        fees: 10
    },
    {
        name: 'Java',
        student: 10,
        fees: 5
    },
    {
        name: 'C#',
        student: 9,
        fees: 4
    },
    {
        name: 'C++',
        student: 10,
        fees: 8
    },
];


function Graph() {
    return (
        <div>
            <h2 className="text-heading">
                Expenses
            </h2>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name"
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="student"

                        stroke="black" activeDot={{ r: 8 }} />
                    <Line dataKey="fees"
                        stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Graph

// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// import Title from './title';

// // Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }

// const data = [
//   createData('00:00', 0),
//   createData('03:00', 300),
//   createData('06:00', 600),
//   createData('09:00', 800),
//   createData('12:00', 1500),
//   createData('15:00', 2000),
//   createData('18:00', 2400),
//   createData('21:00', 2400),
//   createData('24:00', undefined),
// ];

// export default function Graph() {
//   const theme = useTheme();

//   return (
//     <React.Fragment>
//       <Title>Today</Title>
//       <ResponsiveContainer>
//         <LineChart
//           data={data}
//           margin={{
//             top: 16,
//             right: 16,
//             bottom: 0,
//             left: 24,
//           }}
//         >
//           <XAxis
//             dataKey="time"
//             stroke={theme.palette.text.secondary}
//             style={theme.typography.body2}
//           />
//           <YAxis
//             stroke={theme.palette.text.secondary}
//             style={theme.typography.body2}
//           >
//             <Label
//               angle={270}
//               position="left"
//               style={{
//                 textAnchor: 'middle',
//                 fill: theme.palette.text.primary,
//                 ...theme.typography.body1,
//               }}
//             >
//               Sales ($)
//             </Label>
//           </YAxis>
//           <Line
//             isAnimationActive={false}
//             type="monotone"
//             dataKey="amount"
//             stroke={theme.palette.primary.main}
//             dot={false}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </React.Fragment>
//   );
// }