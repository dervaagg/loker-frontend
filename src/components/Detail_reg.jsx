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

export function Form4() {
  return (
    <div className="fixed" style={{ maxHeight: "100vh", overflowY: "auto" }}>
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
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Kode Lowongan Pekerjaan
                    </Typography>
                    <p>LOKER-001</p>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Nama Pendaftar
                    </Typography>
                    <p>DECE</p>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Domisili
                    </Typography>
                    <p>Jakarta</p>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Status
                    </Typography>
                    <p>-</p>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Berkas
                    </Typography>
                    <p>
                      https://drive.google.com/drive/folders/1hVqd-1_A_QRqgZPhXqoBGpwSlo52lQDb
                    </p>
                  </div>
                  <div className="flex gap-4 mt-6 justify-end">
                    <Link to={"/updateReg"}>
                    <Button color="amber">Update</Button>
                    </Link>
                    <Button color="red">Delete</Button>
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
