import { Card, CardBody, Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

export function Dashboard() {
  // const [donutData, setDonutData] = React.useState({})
  // const [pencakerGender, setPencakerGender] = React.useState([])
  const [datas, setData] = React.useState([])

  // const Chart = async () => {
  //   let penGender = []

  //   try {
  //     const res = await axios.get('http://localhost:9000/api/pencaker/dashboard')
  //     const penGender = res.data.filter((data) => data.kolom === 'total_laki_laki' || data.kolom === 'total_perempuan')
      
  //     setDonutData({
  //       labels: ["Laki-laki", "Perempuan"],
  //       datasets: [
  //         {
  //           label: "Pencaker",
  //           data: penGender,
  //           backgroundColor: [
  //             "rgba(255, 99, 132, 0.6)",
  //             "rgba(54, 162, 235, 0.6)"
  //           ]
  //         }
  //       ]
  //     })
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('http://localhost:9000/api/petugas/dashboard')
      const data = await res.data
      setData(data)
    }
    getData()
  }, [])
  
  console.log(datas)

  return (
    <div className="w-full overflow-x-hidden h-screen fixed" style={{ maxHeight: "100vh", overflowY: "auto" }}>
      <div className="ml-80 px-8 mt-10">
        <p className="text-md font-semibold text-sm">Dashboard</p>
      </div>
      <div className="ml-80 py-4 px-16 grid lg:grid-cols-3 gap-10 grid-cols-1">
        <Card className="w-full">
          <CardBody>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Lowongan Pekerjaan Aktif
            </Typography>
            <Typography>{datas[0].total}</Typography>
          </CardBody>
        </Card>
        <Card className="w-full">
          <CardBody>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Lowongan Pekerjaan Proses
            </Typography>
            <Typography>{datas[1].total}</Typography>
          </CardBody>
        </Card>
        <Card className="w-full">
          <CardBody>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Lowongan Pekerjaan Closed
            </Typography>
            <Typography>{datas[2].total}</Typography>
          </CardBody>
        </Card>
        <Card className="w-full">
          <CardBody>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Total Lowongan Pekerjaan
            </Typography>
            <Typography>{datas[6].total}</Typography>
          </CardBody>
        </Card>
        
        <Card className="w-full">
          <CardBody>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Total Pendaftar
            </Typography>
            <Typography>{datas[5].total}</Typography>
          </CardBody>
        </Card>
      </div>
      <div className="ml-80 py-4 px-16">
        <Card className="w-full h-screen">
          <CardBody>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Chart Diterima vs Gagal
            </Typography>
            {/* <Typography className="text-center">Dougnut Chart</Typography> */}
            {/* <Doughnut
              data={donutData}
              options={{
                responsive: true
              }}
            /> */}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
