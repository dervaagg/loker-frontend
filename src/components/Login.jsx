import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="px-5 py-5" color="" shadow={true}>
        <div className="flex flex-col items-center">
          <Typography variant="h4" color="blue-gray">
            Login
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="Enter your email"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="Enter your password"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Link to={"/Home"}>
              <Button className="mt-6" fullWidth>
                Log In
              </Button>
            </Link>
          </form>
        </div>
      </Card>
    </div>
  );
}
