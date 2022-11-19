import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useCSVReader } from "react-papaparse";
import { Button } from "@material-tailwind/react";
import "./HomePage.css";
import svgimage from "../assets/undraw_online_cv_re_gn0a.svg";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import Footer from "../components/Footer";

export const results2 = [];
export const results3 = [];
export const results4 = [];

const HomePage = () => {
  const navigate = useNavigate();
  const { CSVReader } = useCSVReader();
  const [uploaded, setUploaded] = useState(false);
  const [load, setLoad] = useState(undefined);
  const [accept, setAccept] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 2000);
  }, []);

  const StartBuild = () => {
    setTimeout(() => {
      setLoad(true);
    }, 2000);
    navigate("/BuildPage");
  };
  return (
    <div>
      {!load && accept ? (
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
            <div className="text-4xl mb-7 mt-8 heading1 ">
              Welcome to Easy Click
            </div>
            <div className="text-3xl heading2">
              Easy Click will help you build your personal resume using LinkedIn
              profile
            </div>
            <div className="para text-lg text-gray-800 mt-6">
              <p>
                Make a great first impression & stand out from the crowd with
                our modern resume templates.
              </p>
            </div>
            <div className="flex justify-center my-10">
              

              
              <div className="float-right w-[30%] h-[30%] my-4 ml-36">
                <img src={svgimage} alt="yoursvg" />
              </div>
            </div>
          </div>
          {uploaded ? (
            <div className="text-4xl text-center mt-10 mb-5">
              <Button color="amber" onClick={StartBuild}>
                BUILD{" "}
              </Button>
            </div>
          ) : (
            <div></div>
          )}
          <div>
            {/* <Footer /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
