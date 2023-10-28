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
import { Link } from "react-router-dom";
import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// export default function DetailJob() {
//   const history = useHistory();

//   const handleDelete = () => {
//     // Di sini Anda dapat menambahkan logika untuk menghapus pekerjaan.
//     // Anda dapat menggunakan API atau fungsi penghapusan yang sesuai.
//     // Setelah penghapusan berhasil, Anda bisa mengarahkan pengguna kembali ke halaman yang sesuai.
//     // Contoh:
    
//     // Menggunakan API atau fungsi penghapusan yang sesuai
//     axios.delete("http://localhost:9000/api/petugas/loker")
//       .then(response => {
//         console.log("Data berhasil dihapus", response);
//         // Redirect pengguna ke halaman yang sesuai (misalnya, daftar pekerjaan)
//         history.push("/job");
//       })
//       .catch(error => {
//         console.error("Gagal menghapus data", error);
//       });
//   }
// }

export default function Form2() {
  const handleDelete = () => {
    // Di sini Anda dapat menambahkan logika untuk menghapus pekerjaan.
    // Anda dapat menggunakan API atau fungsi penghapusan yang sesuai.
    // Setelah penghapusan berhasil, Anda bisa mengarahkan pengguna kembali ke halaman yang sesuai.
    // Contoh:
    
    // Menggunakan API atau fungsi penghapusan yang sesuai
    axios.delete("http://localhost:9000/api/petugas/loker")
      .then(response => {
        console.log("Data berhasil dihapus", response);
        // Redirect pengguna ke halaman yang sesuai (misalnya, daftar pekerjaan)
        // history.push("/job");
      })
      .catch(error => {
        console.error("Gagal menghapus data", error);
      });
  }
  return (
    <div  style={{ maxHeight: "100vh", overflowY: "auto" }}>
      <div className="pl-96 py-8 pr-10">
        <div>
          <p className="text-lg font-semibold">Job Vacancy Detail's</p>
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
                    <p>-</p>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Nama Pekerjaan
                    </Typography>
                    <p>-</p>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Jenis Pekerjaan
                    </Typography>
                    <p>-</p>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Gaji
                    </Typography>
                    <p>-</p>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Deskripsi Pekerjaan
                    </Typography>
                    <p>-</p>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Tanggal Mulai
                    </Typography>
                    <p>-</p>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Tanggal Selesai
                    </Typography>
                    <p>-</p>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Kuota Penerimaan
                    </Typography>
                    <p>-</p>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Status Lowongan Pekerjaan
                    </Typography>
                    <p>-</p>
                  </div>
                  <div className="flex gap-4 mt-6 justify-end">
                    <Link to="/updateJob">
                      <Button color="amber">Update</Button>
                    </Link>
                    <Button color="amber" onClick={handleDelete}>Delete</Button>
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
