import { MagnifyingGlassIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Card, CardHeader, Input, Typography, Button, CardBody, Chip, CardFooter, Tabs, TabsHeader, Tab, Avatar, IconButton, Tooltip } from "@material-tailwind/react";
import { IconEye } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
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
  "Kode Lowongan Pekerjaan",
  "Nama",
  // "NIK",
  "Domisili",
  "Status",
  "Berkas",
  "Action",
];

const TABLE_ROWS = [
  {
    kode: "LOKER-001",
    name: "Dece",
    dom: "Jakarta",
    stat: true,
    berkas: "link berkas",
  },

  {
    kode: "LOKER-001",
    name: "Budi",
    dom: "Jakarta",
    stat: false,
    berkas: "link berkas",
  },
  {
    kode: "LOKER-002",
    name: "Abdul",
    dom: "Jakarta",
    stat: true,
    berkas: "link berkas",
  },

  {
    kode: "LOKER-003",
    name: "Adit",
    dom: "Jakarta",
    stat: false,
    berkas: "link berkas",
  },
];

export function Table2({ idloker, no_ktp }) {
  const [pencaker, setPencaker] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/petugas/pencaker")
      .then((res) => {
        setPencaker(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ maxHeight: "100vh", overflowY: "auto" }}>
      <div className="pl-96 pt-8 pr-10 pb-8">
        <div>
          <Typography variant="h5" color="blue-gray">
            All Registrant List
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about registrant
          </Typography>
        </div>
        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center justify-between gap-8"></div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row w-full md:w-max"></div>
              {/* <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div> */}
            </div>
          </CardHeader>
          <CardBody className="px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head, index) => (
                    <th key={head} className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                      <Typography variant="small" color="blue-gray" className="flex items-center justify-between gap-20 font-normal leading-none opacity-70">
                        {head} {index !== TABLE_HEAD.length - 1 && <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pencaker.map(({ idloker, no_ktp, nama_pekerjaan, nama_pencaker, kota, tahapan, file_ktp }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={nama_pekerjaan}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {nama_pekerjaan}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            {nama_pencaker}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {kota}
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
                        <div className="w-max">
                          <Chip variant="ghost" size="sm" value={tahapan} color={tahapan === "Lolos Seleksi" ? "green" : tahapan === "Seleksi Administrasi" ? "orange" : tahapan === "Seleksi Wawancara" ? "orange" : "red"} />
                        </div>
                      </td>
                      {console.log(tahapan)}
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {file_ktp}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <Tooltip content="Aplicant Detail's">
                              <Link to={`/job/${idloker}/apply/${no_ktp}`}>
                                <IconButton variant="text">
                                  <IconEye className="h-4 w-4" />
                                </IconButton>
                              </Link>
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
