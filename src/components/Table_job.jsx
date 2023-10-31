import { MagnifyingGlassIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Card, CardHeader, Input, Typography, Button, CardBody, Chip, CardFooter, Tabs, TabsHeader, Tab, Avatar, IconButton, Tooltip } from "@material-tailwind/react";
import { IconEye, IconList, IconTrash } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Select, Option } from "@material-tailwind/react";

// const TABS = [
//   {
//     label: "All",
//     value: "all",
//   },
//   {
//     label: "Monitored",
//     value: "monitored",
//   },
//   {
//     label: "Unmonitored",
//     value: "unmonitored",
//   },
// ];

const TABLE_HEAD = [
  "Kode Perusahaan",
  "Pekerjaan",
  "Jenis Pekerjaan",
  //   "Gaji",
  "Deskripsi Pekerjaan",
  //   "Tanggal Mulai",
  //   "Tanggal Berakhir",
  // "Kuota Penerimaan",
  "Status",
  "Action",
];

const TABLE_ROWS = [
  {
    kode: "LOKER-001",
    job: "IT",
    type: "Internship",
    paid: "1.000.000",
    desc: "Ngoding",
    start: "01/01/23",
    end: "01/01/24",
    kuota: "10",
    stat: true,
  },
  {
    kode: "LOKER-002",
    job: "IT",
    type: "Internship",
    paid: "1.000.000",
    desc: "Ngoding",
    start: "01/01/23",
    end: "01/01/24",
    kuota: "10",
    stat: false,
  },
  {
    kode: "LOKER-003",
    job: "IT",
    type: "Internship",
    paid: "1.000.000",
    desc: "Ngoding",
    start: "01/01/23",
    end: "01/01/24",
    kuota: "10",
    stat: false,
  },
  {
    kode: "LOKER-004",
    job: "IT",
    type: "Internship",
    paid: "1.000.000",
    desc: "Ngoding",
    start: "01/01/23",
    end: "01/01/24",
    kuota: "10",
    stat: true,
  },
  {
    kode: "LOKER-005",
    job: "IT",
    type: "Internship",
    paid: "1.000.000",
    desc: "Ngoding",
    start: "01/01/23",
    end: "01/01/24",
    kuota: "10",
    stat: true,
  },
  {
    kode: "LOKER-006",
    job: "IT",
    type: "Internship",
    paid: "1.000.000",
    desc: "Ngoding",
    start: "01/01/23",
    end: "01/01/24",
    kuota: "10",
    stat: false,
  },
  {
    kode: "LOKER-007",
    job: "IT",
    type: "Internship",
    paid: "1.000.000",
    desc: "Ngoding",
    start: "01/01/23",
    end: "01/01/24",
    kuota: "10",
    stat: true,
  },
  {
    kode: "LOKER-008",
    job: "IT",
    type: "Internship",
    paid: "1.000.000",
    desc: "Ngoding",
    start: "01/01/23",
    end: "01/01/24",
    kuota: "10",
    stat: true,
  },
  {
    kode: "LOKER-009",
    job: "IT",
    type: "Internship",
    paid: "1.000.000",
    desc: "Ngoding",
    start: "01/01/23",
    end: "01/01/24",
    kuota: "10",
    stat: false,
  },
  {
    kode: "LOKER-010",
    job: "IT",
    type: "Internship",
    paid: "1.000.000",
    desc: "Ngoding",
    start: "01/01/23",
    end: "01/01/24",
    kuota: "10",
    stat: false,
  },
  {
    kode: "LOKER-011",
    job: "IT",
    type: "Internship",
    paid: "1.000.000",
    desc: "Ngoding",
    start: "01/01/23",
    end: "01/01/24",
    kuota: "10",
    stat: true,
  },
  //   {
  //     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
  //     name: "John Michael",
  //     email: "john@creative-tim.com",
  //     job: "Manager",
  //     org: "Organization",
  //     online: true,
  //     date: "23/04/18",
  //   },
  //   {
  //     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
  //     name: "Alexa Liras",
  //     email: "alexa@creative-tim.com",
  //     job: "Programator",
  //     org: "Developer",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
  //     name: "Laurent Perrier",
  //     email: "laurent@creative-tim.com",
  //     job: "Executive",
  //     org: "Projects",
  //     online: false,
  //     date: "19/09/17",
  //   },
  //   {
  //     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
  //     name: "Michael Levi",
  //     email: "michael@creative-tim.com",
  //     job: "Programator",
  //     org: "Developer",
  //     online: true,
  //     date: "24/12/08",
  //   },
  //   {
  //     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
  //     name: "Richard Gran",
  //     email: "richard@creative-tim.com",
  //     job: "Manager",
  //     org: "Executive",
  //     online: false,
  //     date: "04/10/21",
  //   },
];

export function Table1() {
  const [loker, setLoker] = useState([]);
  const [status, setStatus] = useState("Semua");

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/petugas/loker", {
        params: {
          status: status,
        },
      })
      .then((res) => {
        // console.log(res.data)
        setLoker(res.data);
      })
      .catch((err) => console.log(err));
  }, [status]);


  const convertStatus = (status) => {
    if (status === "Aktif") {
      return <Chip variant="ghost" size="sm" value={"Aktif"} color={"green"} />;
    } else if (status === "Proses Seleksi") {
      return <Chip variant="ghost" size="sm" value={"Proses Seleksi"} color={"blue-gray"} />;
    } else if (status === "Ditutup") {
      return <Chip variant="ghost" size="sm" value={"Ditutup"} color={"red"} />;
    }
  };

  console.log(status);

  return (
    <div style={{ maxHeight: "100vh", overflowY: "auto" }}>
      <div className="pl-96 pt-8 pr-10 pb-8">
        <div>
          <Typography variant="h5" color="blue-gray">
            Job Vacancy
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about job vacancy
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row bg-white p-4 border rounded-xl shadow-sm my-4">
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row w-full md:w-max">
            <Link to={"/addJob"}>
              <Button className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add job
              </Button>
            </Link>
          </div>
          <div className="w-full md:w-72 relative">
            <Select variant="standard" value={status} onChange={(value) => setStatus(value)}>
              <Option value="Semua">Semua</Option>
              <Option value="1">Aktif</Option>
              <Option value="2">Proses Seleksi</Option>
              <Option value="3">Ditutup</Option>
            </Select>
          </div>
        </div>

        <Card className="h-full w-full">
          {/* <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center justify-between gap-8"></div>
          </CardHeader> */}
          <CardBody className="px-0 static">
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head, index) => (
                    <th key={head} className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                      <Typography variant="small" color="blue-gray" className="flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                        {head} {index !== TABLE_HEAD.length - 1 && <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loker.map(({ idloker, idperusahaan, nama_pekerjaan, tipe, deskripsi, status }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={idperusahaan}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {idperusahaan}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            {nama_pekerjaan}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {tipe}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      {/* <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {paid}
                          </Typography>
                        </div>
                      </td> */}
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {deskripsi}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      {/* <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {start}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {end}
                          </Typography>
                        </div>
                      </td> */}
                      {/* <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {kuota}
                            </Typography>
                          </div>
                        </td> */}
                      <td className={classes}>
                        <div className="w-max">{convertStatus(status)}</div>
                      </td>
                      <td className={classes}>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <Link to={`/job/${idloker}`}>
                              <Tooltip content="Job Vacancy Detail's">
                                <IconButton variant="text">
                                  <IconEye className="h-4 w-4" />
                                </IconButton>
                              </Tooltip>
                            </Link>
                          </div>
                          <div>
                            <Link to={`/job/${idloker}/apply`}>
                              <Tooltip content="Registrant List">
                                <IconButton variant="text">
                                  <IconList className="h-4 w-4" />
                                </IconButton>
                              </Tooltip>
                            </Link>
                          </div>
                          <div>
                            <Tooltip content="Delete">
                              <IconButton variant="text">
                                <IconTrash className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography variant="small" color="blue-gray" className="font-normal">
              Page 1 of 10
            </Typography>
            <div className="flex gap-2">
              <Button variant="outlined" size="sm">
                Previous
              </Button>
              <Button variant="outlined" size="sm">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
