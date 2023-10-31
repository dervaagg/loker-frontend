import { Card, CardBody, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
// import { Pie } from "react-chartjs-2";
import axios from "axios";
import 'chart.js/auto'
import { PieChart, Pie } from 'recharts';

export function Dashboard() {
  // const [donutData, setDonutData] = useState({})
  // const [pencakerGender, setPencakerGender] = useState([])
  const [result, setResult] = useState([])

  const res = axios.get('http://localhost:9000/api/petugas/dashboard')

  // const fetchData = res.then(response => {
  //     response.data.filter(data => data.kolom === 'Total Laki-laki' || data.kolom === 'Total Perempuan')
  //   })

  // setDonutData(fetchData)

  // console.log(fetchData)

  // console.log(data)

  // const Chart = () => {

  //   res
  //   .then(
  //     result => {
  //       // console.log(result.data)
  //       const dataObj = result.data
  //       // console.log(dataObj)
  //       const filter = dataObj.filter(data => data.kolom === 'Total Laki-laki' || data.kolom === 'Total Perempuan')
  //       console.log(filter)
        
  //       setDonutData(filter)
  //     })
  //   .catch(err => {
  //     console.log(err)
  //   }) 
  // }

  useEffect(() => {
    res
    .then(result => 
      setResult(result.data)
      )
    // Chart()
  }, [])
  
  // console.log(donutData)

  return (
    <div className="w-full overflow-x-hidden h-screen fixed" style={{ maxHeight: "100vh", overflowY: "auto" }}>
      <div className="ml-80 px-8 mt-10">
        <p className="text-md font-semibold text-sm">Dashboard</p>
      </div>
      <div className="ml-80 py-4 px-16 grid lg:grid-cols-3 gap-10 grid-cols-1">
        {Object.values(result).map((data) => {
          if(data.kolom !== 'Total Laki-laki' && data.kolom !== 'Total Perempuan')
          {
            return (
              <Card className="w-full">
                <CardBody>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    {data.kolom}
                  </Typography>
                  <Typography>{data.total}</Typography>
                </CardBody>
              </Card>
        )}
          return null  })}
      </div>
      {/* <div className="ml-80 py-4 px-16">
        <Card className="w-full h-screen">
          <CardBody>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Chart Diterima vs Gagal
            </Typography>
            <Typography className="text-center">Dougnut Chart</Typography>
            <PieChart width={400} height={400}>
              <Pie data={donutData} dataKey="total" nameKey="kolom" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" />
            </PieChart>
          </CardBody>
        </Card>
      </div> */}
    </div>
  );
}
