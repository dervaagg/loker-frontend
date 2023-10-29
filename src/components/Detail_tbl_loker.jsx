import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { IconEye } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
  "Nama",
  // "NIK",
  "Domisili",
  "Tahapan",
  // "Berkas",
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
];

export function Table3({idloker, no_ktp}) {
  const [reg, setReg] = useState([]);
  
  const regList = async () => {
    try {
      const response = await axios.get(`http://localhost:9000/api/petugas/loker/${idloker}/apply`);
      setReg(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    regList();
  }, [])

  return (
    <div  style={{ maxHeight: "100vh", overflowY: "auto" }}>
      <div className="pl-96 pt-8 pr-10 pb-8">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Registrant list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about registrant <b>{reg.map(data => data.nama_pekerjaan)}</b>
            </Typography>
          </div>
        </div>
        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row w-full md:w-max"></div>
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
            </div>
          </CardHeader>
          <CardBody className=" px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head, index) => (
                    <th
                      key={head}
                      className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="flex items-center justify-between gap-40 font-normal leading-none opacity-70"
                      >
                        {head}{" "}
                        {index !== TABLE_HEAD.length - 1 && (
                          <ChevronUpDownIcon
                            strokeWidth={2}
                            className="h-4 w-4"
                          />
                        )}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {reg.map(({ nama_pencaker, kota, tahapan, no_ktp }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={nama_pencaker}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {nama_pencaker}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {kota}
                          </Typography>
                        </div>
                      </td>
                      {/* <td className={classes}>
                          <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {dom}
                              </Typography>
                            </div>
                          </div>
                        </td> */}
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
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={tahapan ? "Seleksi Administrasi" : "Seleksi Wawancara"}
                            color={tahapan ? "blue-gray" : "orange"}
                          />
                        </div>
                      </td>
                      {/* <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {berkas}
                            </Typography>
                          </div>
                        </div>
                      </td> */}
                      <td className={classes}>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <Link to={`/job/${idloker}/apply/${no_ktp}`}>
                              <Tooltip content="Aplicant Detail's">
                                <IconButton variant="text">
                                  <IconEye className="h-4 w-4" />
                                </IconButton>
                              </Tooltip>
                            </Link>
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
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
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
