import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useCSVReader } from "react-papaparse";
import { Button } from "@material-tailwind/react";
import "./HomePage.css";
import svgimage from "../assets/undraw_online_cv_re_gn0a.svg";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import Footer from "../components/Footer";



const HomePage = () => {
  const navigate = useNavigate();
  // const { CSVReader } = useCSVReader();
  // const [uploaded, setUploaded] = useState(false);
  const [load, setLoad] = useState(undefined);
  // const [accept, setAccept] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 2000);
  }, []);

  const StartBuild = () => {
    // setTimeout(() => {
    //   setLoad(true);
    // }, 2000);
    navigate("/UploadPage");
  };
  return (
    <div>
      {!load  ? (
        <div className="loading flex justify-center my-[10%]">
          <ReactLoading
            type="bubbles"
            color="#00BFFF"
            height={667}
            width={375}
          />
        </div>
      ) : (
        <div className="bg-[url('https://www.resumonk.com/assets/bgs/pattern-a22a4b6635b785fb8a96255f4b0377efdee937e81e32cf3c3e7d23c4b95768da.png')] bg-contain w-screen h-screen">
          {/* <div className=" justify-center items-center top-0 left-0 w-full h-full bg-white opacity-90"> */}
          <Header />

          <div className="maincontent">
            <div className="text-4xl mb-7 mt-5 heading1 duration-300 hover:scale-110">
              Welcome to Easy Click
            </div>
            <div className="text-3xl heading2 duration-300 hover:scale-110">
              Easy Click will help you build your personal resume using LinkedIn
              profile
            </div>
            <div className="para text-lg text-gray-800 mt-5">
              <p>
                Make a great first impression & stand out from the crowd with
                our modern resume templates.
              </p>
            </div>
            <div className="flex justify-center my-5">
              <div className="float-right w-[30%] h-[30%] my-4 ml-36 duration-300 hover:scale-110">
                <img src={svgimage} alt="yoursvg" />
              </div>
            </div>
          </div>
          <div className="text-4xl text-center duration-300 hover:scale-110 hover:delay-75  my-auto">
            <Button color="amber" className="hover:bg-purple-300 hover:text-white" onClick={StartBuild}>
              GET STARTED{" "}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
