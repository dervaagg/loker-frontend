import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const sidebarStyle = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  width: "20rem", // Sesuaikan lebar sidebar sesuai kebutuhan
  backgroundColor: "blue-gray-400",
};

export function Sidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card
      style={sidebarStyle}
      className="p-4 shadow-xl shadow-blue-gray-900/25 rounded-none z-10"
    >
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray" className="text-center">
          BPYDD
        </Typography>
      </div>
      <List className="flex flex-col flex-1 justify-between">
        <div>
          <Link to="/">
            <Accordion>
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Dashboard
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>
          </Link>

          <Link to="/job">
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Job Vacancy
            </ListItem>
          </Link>

          <Link to="/registrant">
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Registrant
            </ListItem>
          </Link>
        </div>

        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5 " />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
