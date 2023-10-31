import { Card, CardBody, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
// import { Pie } from "react-chartjs-2";
import axios from "axios";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

export function Dashboard() {
  const DonutData = {
    labels: ["Lolos", "Tidak Lolos"],
    datasets: [
      {
        label: "Poll",
        data: [3, 6],
        backgroundColor: ["rgb(102, 178, 255)", "rgb(255, 102, 102)"],
        borderColor: ["rgb(102, 178, 255)", "rgb(255, 102, 132)"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {};
  // const [setDonutData] = useState({})
  // const [pencakerGender, setPencakerGender] = useState([])
  const [result, setResult] = useState([]);

  const res = axios.get("http://localhost:9000/api/petugas/dashboard");

  // const fetchData = res.then(response => {
  //     response.data.filter(data => data.kolom === 'Total Laki-laki' || data.kolom === 'Total Perempuan')
  //   })

  // setDonutData(fetchData)

  // console.log(fetchData)

  // console.log(data)

  const Chart = () => {
    res
      .then((result) => {
        // console.log(result.data)
        const dataObj = result.data;
        // console.log(dataObj)
        const filter = dataObj.filter(
          (data) =>
            data.kolom === "Total Laki-laki" || data.kolom === "Total Perempuan"
        );
        console.log(filter);

        // setDonutData(filter)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    res.then((result) => setResult(result.data));
    Chart();
  }, []);

  // console.log(donutData)

  return (
    <div
      className="w-full overflow-x-hidden h-screen fixed"
      style={{ maxHeight: "100vh", overflowY: "auto" }}
    >
      <div className="ml-80 px-8 mt-10">
        <p className="text-md font-semibold text-sm">Dashboard</p>
      </div>
      <div className="ml-80 py-4 px-16 grid lg:grid-cols-3 gap-10 grid-cols-1">
        {Object.values(result).map((data) => {
          if (
            data.kolom !== "Total Laki-laki" &&
            data.kolom !== "Total Perempuan"
          ) {
            return (
              <Card className="w-full">
                <CardBody>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    {data.kolom}
                  </Typography>
                  <Typography>{data.total}</Typography>
                </CardBody>
              </Card>
            );
          }
          return null;
        })}
      </div>
      <div className="ml-80 py-4 px-16">
        <Card className="w-full h-screen" style={{ position: "relative" }}>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Status
            </Typography>
            <p className="mb-5">
              Chart ini merupakan kalkulasi jumlah pendaftar yang dinyatakan <b>lolos</b> dan <b>tidak lolos</b>
            </p>
            <div
              style={{
                position: "absolute",
                top: "53%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "600px",
                height: "600px",
              }}
            >
              <Doughnut data={DonutData} options={options} />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
