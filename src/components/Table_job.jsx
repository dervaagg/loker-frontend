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
import { IconEye, IconList, IconTrash } from "@tabler/icons-react";
import { Link } from "react-router-dom";

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
  "Pekerjaan",
  "Jenis Pekerjaan",
  //   "Gaji",
  "Deskripsi Pekerjaan",
  //   "Tanggal Mulai",
  //   "Tanggal Berakhir",
  "Kuota Penerimaan",
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
        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center justify-between gap-8"></div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row w-full md:w-max">
                <Link to={"/addJob"}>
                  <Button className="flex items-center gap-3" size="sm">
                    <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add job
                  </Button>
                </Link>
              </div>
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-0">
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
                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
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
                {TABLE_ROWS.map(
                  (
                    { kode, job, type, paid, desc, start, end, kuota, stat },
                    index
                  ) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={kode}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {kode}
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
                              {job}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {type}
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
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {desc}
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
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {kuota}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              variant="ghost"
                              size="sm"
                              value={stat ? "aktif" : "proses"}
                              color={stat ? "green" : "blue-gray"}
                            />
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <Link to={"/detailJob"}>
                                <Tooltip content="Job Vacancy Detail's">
                                  <IconButton variant="text">
                                    <IconEye className="h-4 w-4" />
                                  </IconButton>
                                </Tooltip>
                              </Link>
                            </div>
                            <div>
                              <Link to={"/detailRegList"}>
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
                  }
                )}
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
