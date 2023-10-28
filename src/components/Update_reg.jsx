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
import { useState } from "react";
import { useHistory } from "react-router-dom";
import async from "q";
// import axios from "axios";

export function Form5() {
  const [formData, setFormData] = useState({
    id_loker: "",
    nama_pencaker: "",
    domisili: "",
    status_pencaker: "",
    berkas: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id_loker: formData.id_loker,
      nama_pencaker: formData.nama_pencaker,
      domisili: formData.domisili,
      status_pencaker: formData.status_pencaker,
      berkas: formData.berkas,
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
                <form className="mb-2 w-80 max-w-screen-lg sm:w-96">
                  <div className="mb-1 flex flex-col gap-6">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Kode Lowongan Pekerjaan
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
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Nama Pendaftar
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
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Domisili
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
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Status Pendaftar
                    </Typography>
                    <Select
                      label="Pilih Status"
                      animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                      }}
                    >
                      <Option>Diterima</Option>
                      <Option>Ditolak</Option>
                      <Option>Proses Administrasi</Option>
                      <Option>Proses Wawancara</Option>
                    </Select>
                    <Typography
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
                    />
                    <a href="#" className="text-blue-600">
                      <p className="text-sm font-light underline">
                        Cek berkas disini
                      </p>
                    </a>
                  </div>
                  <Button color="amber" className="mt-6" fullWidth>
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
