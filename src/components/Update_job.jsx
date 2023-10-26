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

export default function Form3() {
  return (
    <div className="fixed" style={{ maxHeight: "100vh", overflowY: "auto" }}>
      <div className="pl-96 py-8 pr-10">
        <div>
          <p className="text-lg font-semibold">Update Job Vacancy</p>
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
                      Nama Pekerjaan
                    </Typography>
                    <Input
                      size="lg"
                      placeholder=""
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Jenis Pekerjaan
                    </Typography>
                    <Select
                      label="Pilih Jenis Pekerjaan"
                      animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                      }}
                    >
                      <Option>Internship</Option>
                      <Option>Management Trainee</Option>
                      <Option>PKWT</Option>
                      <Option>PKWTT</Option>
                    </Select>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Gaji
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="Masukan nominal gaji"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Deskripsi Pekerjaan
                    </Typography>
                    <Textarea
                      size="lg"
                      placeholder="Masukan deskripsi lowongan pekerjaan"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Tanggal Mulai
                    </Typography>
                    <Input
                      size="lg"
                      placeholder=""
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Tanggal Selesai
                    </Typography>
                    <Input
                      size="lg"
                      placeholder=""
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Typography
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
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Status Lowongan Pekerjaan
                    </Typography>
                    <Select
                      label="Pilih Jenis Pekerjaan"
                      animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                      }}
                    >
                      <Option>Aktif</Option>
                      <Option>Proses Seleksi</Option>
                      <Option>Ditutup</Option>
                    </Select>
                  </div>
                  <Button color="amber" className="mt-6" fullWidth>
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
