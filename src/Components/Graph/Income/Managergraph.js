import {React, useEffect, useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import '../Css/Managergraph.css';
import axios from 'axios';

export default function Managergraph() {
    //here you have to fetch the da6ta from the backebd

    const [gdata, setData] = useState([]);

   /* useEffect (() => {
        const response = axios.get("");
        try{
          if(response !== null){
            setData(response.data);
          }
        }catch(err){
          console.log(err);
        }
       
    }, []);*/

    const data = [
        { month: 'January', income: 4000 },
        { month: 'February', income: 3000 },
        { month: 'March', income: 5000 },
        { month: 'April', income: 4500 },
        { month: 'May', income: 7000 },
        { month: 'June', income: 6500 },
        { month: 'Janua', income: 4000 },
        { month: 'Febry', income: 3000 },
        { month: 'Mrch', income: 5000 },
        { month: 'Apil', income: 4500 },
        { month: 'Ma', income: 7000 },
        { month: 'Jue', income: 6500 },
      ];
      
  return (
    <div className="managergraphcontainer">
    <div className="graphcard">
      <h2 className="graphtitle">Monthly Income Overview</h2>
      <div className="chartcontainer">
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="blue" />
        </BarChart>
      </div>
    </div>
  </div>
  )
}
