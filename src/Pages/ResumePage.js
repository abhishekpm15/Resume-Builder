import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Header from "../components/Header";
import logesh from "../assets/logesh.png";
import logesh2 from "../assets/logesh2.png";
import {jsPDF} from "jspdf";
import "./UploadPage.css";
var newimg;

const ResumePage = () => {
  const [page, setPage] = useState(0);
  const [currpage, setCurrPage] = useState(logesh);

  const Print = (e) => {
    console.log(e);
    newimg = currpage;
    var doc = new jsPDF();
    doc.addImage(newimg,10,10);
    doc.save("Resume");
  };


  const next = () => {
    if (page === 0) {
      setPage(1);
      setCurrPage(logesh2);
      console.log(page);
      console.log(currpage);
    } else {
      setPage(0);
      setCurrPage(logesh);
      console.log(page);
      console.log(currpage);
    }
  };
  const [build, setBuild] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBuild(true);
    }, 2000);
  }, []);

  return (
    <div>
      <Header />
      {!build ? (
        <div className="flex justify-center my-[10%]">
          <ReactLoading
            type="bubbles"
            color="#7854F3"
            height={667}
            width={375}
          />
        </div>
      ) : (
        <div className=" stepscontainer bg-[url('https://www.resumonk.com/assets/bgs/pattern-a22a4b6635b785fb8a96255f4b0377efdee937e81e32cf3c3e7d23c4b95768da.png')] bg-contain w-screen h-screen">
          <div className="flex justify-center my-7" id="imgdiv">
            {page === 0 ? (
              <img src={logesh} width="27%" alt="logesh" />
            ) : (
              <img src={logesh2} width="27%" alt="logesh2" />
            )}
          </div>
          <div>
            <Button
              onClick={Print}
              color="amber"
              className="mx-3"
              id="downloadbtn"
            >
              DOWNLOAD
            </Button>
            <Button onClick={next} color="amber" id="nextpage">
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePage;
