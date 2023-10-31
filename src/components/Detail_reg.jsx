import { Card, Input, Button, Typography, CardBody, Select, Option, Textarea } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import id from "dayjs/locale/id";

dayjs.locale(id);

export default function Form4({ idloker, no_ktp }) {
  const [details, setDetails] = useState({});

  const getDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/api/petugas/loker/${idloker}/apply/${no_ktp}`);
      console.log(res.data);
      setDetails(res.data);
    } catch (error) {
      console.error("Gagal mengambil data", error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div style={{ maxHeight: "100vh", overflowY: "auto" }}>
      <div className="pl-96 py-8 pr-10">
        <div>
          <p className="text-lg font-semibold">Aplicant Detail's</p>
        </div>
        <div className="md:pt-4 md:pl-48 md:pr-96 flex justify-center items-center">
          <div className="md:pl-20">
            <Card className="w-full">
              <CardBody className="mx-auto">
                <form className="mb-2 w-80 max-w-screen-lg sm:w-96">
                  <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Kode Lowongan Pekerjaan
                    </Typography>
                    <p>{idloker}</p>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Nomor KTP
                    </Typography>
                    <p>{no_ktp}</p>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Nama Pendaftar
                    </Typography>
                    <p>{details?.[0]?.nama_pencaker}</p>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Jenis Kelamin
                    </Typography>
                    <p>{details?.[0]?.jenis_kelamin}</p>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Tempat dan Tanggal Lahir
                    </Typography>
                    <p>
                      {details?.[0]?.tempat_lahir}, {dayjs(details?.[0]?.tanggal_lahir).format("DD MMMM YYYY")}
                    </p>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Alamat
                    </Typography>
                    <p>
                      {details?.[0]?.alamat}
                    </p>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Kota
                    </Typography>
                    <p>
                      {details?.[0]?.kota}
                    </p>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Email
                    </Typography>
                    <p>
                      {details?.[0]?.email}
                    </p>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Nomor Telepon
                    </Typography>
                    <p>
                      {details?.[0]?.no_telp}
                    </p>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Berkas
                    </Typography>
                    <p>{details?.[0]?.file_ktp}</p>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Status
                    </Typography>
                    <p>{details?.[0]?.tahapan}</p>
                  </div>
                  <div className="flex gap-4 mt-6 justify-end">
                    <Link to={`/job/${idloker}/apply/${no_ktp}/edit`}>
                      <Button color="amber">Update</Button>
                    </Link>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
