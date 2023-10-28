import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email:'',
    password:'',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const data = {
      email: formData.email,
      password: formData.password
    }

    try {
      const response = await axios.post("http://localhost:9000/api/petugas", data);
      console.log("Submitted data:", data);
      navigate("/home");

    } catch (error) {
      console.error(error);
    }
  }

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
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                size="lg"
                placeholder="Enter your password"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            {/* <Link to={"/Home"}> */}
              <Button onClick={handleSubmit} className="mt-6" fullWidth>
                Log In
              </Button>
            {/* </Link> */}
          </form>
        </div>
      </Card>
    </div>
  );
}
