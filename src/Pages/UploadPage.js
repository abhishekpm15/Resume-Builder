import React, { useCallback, useEffect, useState } from "react";
import Header from "../components/Header";
import ReactLoading from "react-loading";
import { Button } from "@material-tailwind/react";
import "./BuildPage2.css";
import resumeauto from "../assets/resumeauto.jpg";
import resumemanual from "../assets/resumemanual.jpg";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

let i = 0;
const names = [
  "Please wait while we process your Resume",
  "Just few more moments",
  "Here is your Resume",
];

const BuildPage2 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setBuild(true);
    }, 2000);
  }, []);

  const navtolinkedin = () => {
    navigate("/BuildPage2");
  };
  // const navtobuild = () => {
  //   navigate("/BuildPage3");
  // };
  const [loaded, setLoaded] = useState(false);

  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
    setnewName(names[i++]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 6000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  const [build, setBuild] = useState(false);
  return (
    <div>
      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <Header />
      {loaded ? (
        <div className="justify-center my-[10%]">
          <div className="text-3xl all-names">{newName}</div>
          <div className="flex justify-center">
            <ReactLoading
              type="cubes"
              color="#7854F3"
              height={667}
              width={375}
            />
          </div>
        </div>
      ) : (
        <>
          {!build ? (
            <div className="flex justify-center my-[6%]">
              <ReactLoading
                type="bubbles"
                color="#7854F3"
                height={667}
                width={375}
              />
            </div>
          ) : (
            <>
              <div className=" stepscontainer bg-[url('https://www.resumonk.com/assets/bgs/pattern-a22a4b6635b785fb8a96255f4b0377efdee937e81e32cf3c3e7d23c4b95768da.png')] bg-contain w-screen h-screen">
                <div className="flex justify-evenly my-[8%]">
                  <div>
                    <Card className="w-72">
                      <CardHeader color="blue" className="relative h-56">
                        <img
                          src={resumemanual}
                          alt="img-blur-shadow"
                          className="h-full w-full"
                        />
                      </CardHeader>
                      <CardBody className="text-center">
                        <Typography variant="h5" className="mb-2">
                          Build your own resume
                        </Typography>
                        <Typography>
                          You can build your own resume by entering necessary
                          details to the form.
                        </Typography>
                      </CardBody>
                    </Card>
                    <form
                      method="post"
                      action="http://localhost/Resume-Builder-v1.0/Resume-Builder/create.php"
                      >
                      <Button
                        type="submit"
                        // onClick={navtobuild}
                        className="my-5 bg-light-blue-600 text-white active:bg-blue-600 font-bold text-sm px-6 py-3"
                      >
                        Select
                      </Button>
                    </form>
                  </div>
                  <div>
                    <Card className="w-72">
                      <CardHeader color="blue" className="relative h-56">
                        <img
                          src={resumeauto}
                          alt="img-blur-shadow"
                          className="h-full w-[100%]"
                        />
                      </CardHeader>
                      <CardBody className="text-center">
                        <Typography variant="h5" className="mb-2">
                          Upload linkedIn profile
                        </Typography>
                        <Typography>
                          You can upload your LinkedIn profile to get your
                          resume built automatically.
                        </Typography>
                      </CardBody>
                    </Card>
                    <Button
                      type="submit"
                      name="submit"
                      onClick={navtolinkedin}
                      className="my-5 bg-light-blue-600 text-white active:bg-blue-600 font-bold text-sm px-6 py-3"
                    >
                      Select
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BuildPage2;
