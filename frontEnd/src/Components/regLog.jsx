import {
  Card,
  //   CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { login, register } from "../Api/axiosConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CardDefault(props) {
  const [dataFirstName, setFirstName] = useState("");
  const [dataLastName, setLastName] = useState("");
  const [dataEmail, setEmail] = useState("");
  const [dataPassword, setPassword] = useState("");
  const [getEmail, getEmailSignIn] = useState("");
  const [getPassword, getPasswordSignIn] = useState("");
  const Navigate = useNavigate();
  //   const [allDataSignUp, setAllData] = useState({});

  const handelFirstNameRegister = (e) => {
    setFirstName(e.target.value);
  };
  const handelLastNameRegister = (e) => {
    setLastName(e.target.value);
  };
  const handelEmailRegister = (e) => {
    setEmail(e.target.value);
  };
  const handelPasswordRegister = (e) => {
    setPassword(e.target.value);
  };

  const handelEmailSignIn = (e) => {
    getEmailSignIn(e.target.value);
  };
  const handelPasswordSignIn = (e) => {
    getPasswordSignIn(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const allDataSignUp = {
      dataFirstName,
      dataLastName,
      dataEmail,
      dataPassword,
    };
    // console.log(allDataSignUp);
    register(allDataSignUp)
      .then((response) => {
        console.log(response);
        alert("you are registred");
      })
      .catch((error) => {
        console.log("erroe message :", error);
      });
    // await Api.post("/api/profile/register", allDataSignUp);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const dataSignIn = {
      getEmail,
      getPassword,
    };
    // Api.post('/register', dataSignIn);
    login(dataSignIn)
      .then((response) => {
        // Navigate("/login");
        // console.log({ dataSignIn });
        console.log(response);
        localStorage.setItem("token", response.data.token);
        // setmessage(response.data.message)
        // setusername(response.data.data.username);
        // setloading(false);
        // settoken(response.data.token)
        Navigate("/home");
      })
      .catch((error) => {
        console.log("erroe message ", error);
      });
    // const login = await Api.post("/login", dataSignIn);
  };

  return (
    <Card
      className={`sm:w-[49%] w-full h-full shadow-none flex justify-center items-center rounded-none `}
    >
      <CardBody className="w-full flex justify-center items-center">
        {props.type === "Login" ? (
          <Typography
            variant="h5"
            color="blue-gray"
            className="flex flex-col justify-center items-center w-full"
          >
            <h2 className="mb-3">Login</h2>
            <div className="w-[80%] flex flex-col justify-center items-center gap-5">
              <Input
                onChange={handelEmailSignIn}
                type="email"
                label="Email"
                className=""
              />
              <Input
                onChange={handelPasswordSignIn}
                type="password"
                label="Password"
                className=""
              />
            </div>
          </Typography>
        ) : (
          <Typography
            variant="h5"
            color="blue-gray"
            className="flex flex-col justify-center items-center w-full"
          >
            <h2 className="mb-3">Register</h2>
            <div className="w-[80%] flex flex-col justify-center items-center gap-3">
              <Input
                onChange={handelFirstNameRegister}
                type="text"
                label="FirstName"
                className=""
              />
              <Input
                onChange={handelLastNameRegister}
                type="text"
                label="LastName"
                className=""
              />
              <div className="w-full">
                <Input
                  onChange={handelEmailRegister}
                  type="email"
                  label="Email"
                  className=""
                />
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center gap-1 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-px h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Exemple: email@exemple.exemple
                </Typography>
              </div>
              <Input
                onChange={handelPasswordRegister}
                type="password"
                label="Password"
                className=""
              />
            </div>
            <Typography
              variant="small"
              color="gray"
              className="mt-2 flex items-center gap-1 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              Use at least 8 characters, one uppercase, one lowercase and one
              number.
            </Typography>
          </Typography>
        )}
      </CardBody>
      {props.type === "Login" ? (
        <CardFooter className="">
          <Button onClick={handleSignIn}>sign in</Button>
        </CardFooter>
      ) : (
        <CardFooter className="">
          <Button onClick={handleSignUp}>sing up</Button>
        </CardFooter>
      )}
    </Card>
  );
}
