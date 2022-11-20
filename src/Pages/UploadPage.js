import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

import "./UploadPage.css";
const UploadPage = () => {
    const navigate = useNavigate();
  const [build, setBuild] = useState(false);

  const StartUpload = () =>{
    navigate("/BuildPage")
  }
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
            color="#00BFFF"
            height={667}
            width={375}
          />
        </div>
      ) : (
        <div className=" stepscontainer bg-[url('https://www.resumonk.com/assets/bgs/pattern-a22a4b6635b785fb8a96255f4b0377efdee937e81e32cf3c3e7d23c4b95768da.png')] bg-contain w-screen h-screen">
          <div className="transition mt-10 text-[35px] stepsHead duration-300 hover:scale-110 ">
            Here are the steps you should follow
          </div>
            <div className="steps mt-10 w-auto">
              <div className="font-bold text-2xl flex w-[700px] mx-[27%] ">
                {" "}
                Step 1 :
                <div className="font-bold text-xl mx-5 my-auto float-left">
                  Download your complete LinkedIn profile as a zip file
                </div>
              </div>
              <div className="my-3 mt-3 w-[40%] mx-[31%] text-left">
                LinkedIn provides the complete profile data in a zip file and it
                only takes a few minutes to download it. EasyClick can convert
                this zip file to an impressive resume automatically.
                <div className="mt-2">
                    1 . You can download your LinkedIn profile as a zip file by <a href="https://www.linkedin.com/mypreferences/d/download-my-data" target="_blank" alt="link"><u>Clicking this </u></a>
                </div>
              </div>


              <div className="font-bold text-2xl flex my-7 w-[700px] mx-[27%]">
                {" "}
                Step 2 :
                <div className="font-bold text-xl mx-5 my-auto">
                Upload each CSV file as per your requirement
                </div>
              </div>
              <div className="my-3 mt-7 flex w-[40%] mx-[31%] text-left">
                Upload each CSV file as per your requirement, but the main files to be uploaded are certificates, projects, skills, and achievements.
              </div>

              <div className="font-bold text-2xl flex my-7 w-[700px] mx-[27%]">
                {" "}
                Step 3 :
                <div className="font-bold text-xl mx-5 my-auto">
                Your Resume is ready
                </div>
              </div>
              <div className="my-3 mt-7 flex w-[40%] mx-[31%] text-left">
                Download your resume in the format you want (PDF, DOCX)
              </div>
            </div>
            <div className="text-4xl  text-center duration-300 hover:scale-110 hover:delay-75  my-10">
            <Button color="amber" className="hover:bg-purple-300 hover:text-white" onClick={StartUpload}>
              START UPLOADING{" "}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadPage;
