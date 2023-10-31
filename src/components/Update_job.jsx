import { Card, Input, Button, Typography, CardBody, Select, Option, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import async from "q";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Form3({ idloker }) {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const getDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/api/petugas/loker/${idloker}`);

      setFormData(res.data);
    } catch (error) {
      console.error("Gagal mengambil data", error);
    }
  };

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      tgl_tutup: formData.tgl_tutup,
      status: formData.status,
    };

    console.log("Submitted data:", data);

    const convertStatus = (status) => {
      if (status === "Aktif") {
        return 1;
      } else if (status === "Proses Seleksi") {
        return 2;
      } else if (status === "Ditutup") {
        return 3;
      }
    };

    formData.status = convertStatus(formData.status);

    try {
      const response = await axios.put(`http://localhost:9000/api/petugas/loker/${idloker}/edit`, formData);

      console.log("Submitted data:", data);
      navigate("/job");
    } catch (error) {
      console.error("Gagal Mengupdate Pekerjaan:", error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div style={{ maxHeight: "100vh", overflowY: "auto" }}>
      <div className="pl-96 py-8 pr-10">
        <div>
          <p className="text-lg font-semibold">Update Job Vacancy</p>
        </div>
        <div className="md:pt-4 md:pl-48 md:pr-96 flex justify-center items-center">
          <div className="md:pl-20">
            <Card className="w-full">
              <CardBody className="mx-auto">
                <form onSubmit={handleSubmit} className="mb-2 w-80 max-w-screen-lg sm:w-96">
                  <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Kode Lowongan Pekerjaan
                    </Typography>
                    <Input
                      size="lg"
                      placeholder={formData.idperusahaan}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      label=""
                      disabled
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Nama Pekerjaan
                    </Typography>
                    <Input
                      size="lg"
                      placeholder={formData.nama_pekerjaan}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      disabled
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Jenis Pekerjaan
                    </Typography>
                    <Input
                      size="lg"
                      placeholder={formData.tipe}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      disabled
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Gaji Minimum
                    </Typography>
                    <Input
                      type="number"
                      size="lg"
                      placeholder={formData.gaji_min}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      disabled
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Gaji Maksimum
                    </Typography>
                    <Input
                      type="number"
                      size="lg"
                      placeholder={formData.gaji_max}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      disabled
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Usia Minimum
                    </Typography>
                    <Input
                      type="number"
                      size="lg"
                      placeholder={formData.usia_min}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      disabled
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Usia Minimum
                    </Typography>
                    <Input
                      type="number"
                      size="lg"
                      placeholder={formData.usia_max}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      disabled
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Deskripsi Pekerjaan
                    </Typography>
                    <Textarea
                      size="lg"
                      placeholder={formData.deskripsi}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      disabled
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Tanggal Mulai
                    </Typography>
                    <Input
                      type="date"
                      size="lg"
                      value={formData.tgl_aktif}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      disabled
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Tanggal Selesai
                    </Typography>
                    <Input
                      type="date"
                      size="lg"
                      placeholder=""
                      value={formData.tgl_tutup}
                      onChange={handleChange}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    {/* <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
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
                    <Select
                      label="Pilih Jenis Pekerjaan"
                      animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                      }}
                      value={formData.status}
                      onChange={(value) => {
                        handleChange({ target: { name: "status", value: value } });
                      }}
                    >
                      <Option value="Aktif">Aktif</Option>
                      <Option value="Proses Seleksi">Proses Seleksi</Option>
                      <Option value="Ditutup">Ditutup</Option>
                    </Select>
                  </div>
                  <Button onClick={handleSubmit} color="amber" className="mt-6" fullWidth>
                    Update Job Vacancy
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
