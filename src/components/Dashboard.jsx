import { Card, CardBody, Typography } from "@material-tailwind/react";

export function Dashboard() {
  return (
    <div className="w-100 overflow-x-hidden h-screen fixed" style={{ maxHeight: "100vh", overflowY: "auto" }}>
      <div className="ml-80 px-8 mt-10">
        <p className="text-md font-semibold text-sm">Dashboard</p>
      </div>
      <div className="ml-80 py-4 px-16 grid lg:grid-cols-3 gap-10 grid-cols-1">
        <Card className="w-80">
          <CardBody>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Lowongan Pekerjaan Aktif
            </Typography>
            <Typography>1</Typography>
          </CardBody>
        </Card>
        <Card className="w-80">
          <CardBody>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Lowongan Pekerjaan Proses
            </Typography>
            <Typography>1</Typography>
          </CardBody>
        </Card>
        <Card className="w-80">
          <CardBody>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Lowongan Pekerjaan Closed
            </Typography>
            <Typography>1</Typography>
          </CardBody>
        </Card>
        <Card className="w-80">
          <CardBody>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Total Lowongan Pekerjaan
            </Typography>
            <Typography>1</Typography>
          </CardBody>
        </Card>
        <Card className="w-80">
          <CardBody>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Total Perusahaan
            </Typography>
            <Typography>1</Typography>
          </CardBody>
        </Card>
        <Card className="w-80">
          <CardBody>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Total Pendaftar
            </Typography>
            <Typography>1</Typography>
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
            <Typography className="text-center">Dougnut Chart</Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
