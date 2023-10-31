import { Card, Input, Button, Typography, CardBody, Select, Option, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import async from "q";
import axios from "axios";
import dayjs from "dayjs";
import id from "dayjs/locale/id";

dayjs.locale(id);

export function Form5({ idloker, no_ktp }) {
  const [formData, setFormData] = useState({});

  const getDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/api/petugas/loker/${idloker}/apply/${no_ktp}`);
      console.log(res.data);
      setFormData(res.data);
    } catch (error) {
      console.error("Gagal mengambil data", error);
    }
  };

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData([{ ...formData?.[0], [name]: value }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const convertTahapan = (tahapan) => {
      // console.log(tahapan === "Seleksi Administrasi", tahapan, formData?.[0]?.tahapan);
      // console.log(tahapan === "Seleksi Wawancara", tahapan, formData?.[0]?.tahapan);

      if (tahapan === "Seleksi Administrasi") {
        return 1;
      } else if (tahapan === "Seleksi Wawancara") {
        return 2;
      }
    };

    // formData?.[0]?.tahapan = convertTahapan(formData?.[0]?.tahapan);

    const data = {
      idtahapan: convertTahapan(formData?.[0]?.tahapan),
    };

    console.log("Submitted data:", data);

    // try {
    //   const response = await axios.post(
    //     "http://localhost:9000/api/petugas/loker",
    //     formData
    //   );

    //   if (response.data.errors) {
    //     console.error("Gagal Update:", response.data.errors);
    //   } else {
    //     console.log("Berhasil Update:", response.data);
    //   }
    // } catch (error) {
    //   console.error("Gagal Update:", error);
    // }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div style={{ maxHeight: "100vh", overflowY: "auto" }}>
      <div className="pl-96 py-8 pr-10">
        <div>
          <p className="text-lg font-semibold">Update Registrant</p>
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
                      placeholder={formData?.[0]?.idloker}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      label=""
                      disabled
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Nomor KTP
                    </Typography>
                    <Input
                      size="lg"
                      placeholder={formData?.[0]?.no_ktp}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      label=""
                      disabled
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Nama Pendaftar
                    </Typography>
                    <Input
                      size="lg"
                      placeholder={formData?.[0]?.nama_pencaker}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      label=""
                      disabled
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Jenis Kelamin
                    </Typography>
                    <Input
                      size="lg"
                      placeholder={formData?.[0]?.jenis_kelamin}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      label=""
                      disabled
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Tempat dan Tanggal Lahir
                    </Typography>
                    <Input
                      size="lg"
                      placeholder={formData?.[0]?.tempat_lahir + ", " + dayjs(formData?.[0]?.tanggal_lahir).format("DD MMMM YYYY")}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      label=""
                      disabled
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Alamat
                    </Typography>
                    <Input
                      size="lg"
                      placeholder={formData?.[0]?.alamat}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      label=""
                      disabled
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Kota
                    </Typography>
                    <Input
                      size="lg"
                      placeholder={formData?.[0]?.kota}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      label=""
                      disabled
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                      Status Pendaftar
                    </Typography>
                    <Select
                      label="Pilih Status"
                      animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                      }}
                      name="idtahapan"
                      // defaultValue={parseInt(details?.[0]?.idtahapan)}
                      value={formData?.[0]?.tahapan}
                      onChange={(value) => {
                        handleChange({ target: { name: "tahapan", value: value } });
                      }}
                    >
                      {/* <Option>Diterima</Option>
                      <Option>Ditolak</Option> */}
                      <Option value="Seleksi Administrasi">Seleksi Administrasi</Option>
                      <Option value="Seleksi Wawancara">Seleksi Wawancara</Option>
                    </Select>
                    {/* <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Berkas
                    </Typography>
                    <Input
                      size="lg"
                      placeholder=""
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      label=""
                      disabled
                    /> */}
                    <a href="#" className="text-blue-600">
                      <p className="text-sm font-light underline">Cek berkas disini</p>
                    </a>
                  </div>
                  <Button onClick={handleSubmit} color="amber" className="mt-6" fullWidth>
                    Update Status
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
