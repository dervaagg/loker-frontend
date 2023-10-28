import {
  Card,
  Input,
  Button,
  Typography,
  CardBody,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import { async } from "q";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export function Form1() {
  const [formData, setFormData] = useState({
    idperusahaan: '',
    nama: '',
    tipe: '',
    deskripsi: '',
    usia_min: null,
    usia_max: null,
    gaji_min: null,
    gaji_max: null,
    nama_cp: '',
    no_tlp_cp: '',
    tgl_update: null,
    tgl_aktif: null,
    tgl_tutup: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      idperusahaan: formData.idperusahaan,
      nama: formData.nama,
      tipe: formData.tipe,
      deskripsi: formData.deskripsi,
      usia_min: formData.usia_min,
      usia_max: formData.usia_max,
      gaji_min: formData.gaji_min,
      gaji_max: formData.gaji_max,
      nama_cp: formData.nama_cp,
      no_tlp_cp: formData.no_tlp_cp,
      tgl_update: formData.tgl_update,
      tgl_aktif: formData.tgl_aktif,
      tgl_tutup: formData.tgl_tutup,
    }

    console.log('Submitted data:', data);

    // try {
    //   const response = await axios.post("http://localhost:9000/api/petugas/loker", formData);

    //   if (response.data.errors) {
    //     console.error("Gagal menambahkan pekerjaan:", response.data.errors);
    //   } else {
    //     console.log("Pekerjaan berhasil ditambahkan:", response.data);

    //   }
    // } catch (error) {
    //   console.error("Gagal menambahkan pekerjaan:", error);
    // }
  };

  return (
    <div className="" style={{ maxHeight: "100vh", overflowY: "auto" }}>
      <div className="pl-96 py-8 pr-10">
        <div>
          <p className="text-lg font-semibold">Add Job Vacancy</p>
        </div>
        <div className="md:pt-4 md:pl-48 md:pr-96 flex justify-center items-center">
            <div className="md:pl-20">
          <Card className="w-full">
            <CardBody
              className="mx-auto"
            >
              <form onSubmit={handleSubmit} className="mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Kode Perusahan
                  </Typography>
                  <Input
                    size="lg"
                    name="idperusahaan"
                    value={formData.idperusahaan}
                    onChange={handleChange}
                    placeholder=""
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    label=""
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Nama Pekerjaan
                  </Typography>
                  <Input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    size="lg"
                    placeholder="Masukan nama lowongan pekerjaan"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Jenis Pekerjaan
                  </Typography>
                  <Select
                    label="Pilih Jenis Pekerjaan"
                    name="tipe"
                    onChange={handleChange}
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                  >
                    <Option value={formData.tipe}>Internship</Option>
                    <Option>Management Trainee</Option>
                    <Option>PKWT</Option>
                    <Option>PKWTT</Option>
                  </Select>
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Gaji Maksimum
                  </Typography>
                  <Input
                    type="number"
                    name="gaji_max"
                    value={formData.gaji_max}
                    onChange={handleChange}
                    size="lg"
                    placeholder="Masukan nominal gaji"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Gaji Minimum
                  </Typography>
                  <Input
                    type="number"
                    name="gaji_min"
                    value={formData.gaji_min}
                    onChange={handleChange}
                    size="lg"
                    placeholder="Masukan nominal gaji"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Deskripsi Pekerjaan
                  </Typography>
                  <Textarea
                    type="text"
                    name="deskripsi"
                    value={formData.deskripsi}
                    onChange={handleChange}
                    size="lg"
                    placeholder="Masukan deskripsi lowongan pekerjaan"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Tanggal Mulai
                  </Typography>
                  <Input
                    type="date"
                    name="tgl_aktif"
                    value={formData.tgl_aktif}
                    onChange={handleChange}
                    size="lg"
                    placeholder=""
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Tanggal Selesai
                  </Typography>
                  <Input
                    type="date"
                    className="w-full p-2 !border-t-blue-gray-200 focus:!border-t-gray-900"
                    name="tgl_tutup"
                    value={formData.tgl_tutup}
                    onChange={handleChange}
                    size="lg"
                    placeholder=""
                    // className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Kuota Penerimaan
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Masukan kuota penerimaan"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  /> */}
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Status Lowongan Pekerjaan
                  </Typography>
                  <Select label="Aktif" disabled>
                    <Option></Option>
                    <Option></Option>
                    <Option></Option>
                  </Select>
                </div>
                <Button onClick={handleSubmit} className="mt-6" fullWidth>
                  Add Job Vacancy
                </Button>
              </form>
            </CardBody>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
