import { Button } from '@material-tailwind/react';
import React from 'react'
import { useAuth } from '../context/AuthContext'
// import results2  from './BuildPage.js'
const PreviewPage = () => {
  const {results3} = useAuth();
  const Print = () => {
    window.print();
  }
  const data1 = results3
  // const {results2,results3,results4} = useAuth();
  return (
    <div> 
      <div className="flex justify-center">
      <div className="float-left w-auto">
          <hr className="border-2"></hr>
          <div className="mx-3 my-10">
          <div className="text-sm flex justify-start font-bold"> Certificates </div>
          <div className='text-sm text-left'>
            <div className="flex justify-start my-1">{data1[1][0]}</div>
            <div className="flex justify-start my-1">{data1[2][0]}</div>
            <div className="flex justify-start my-1">{data1[3][0]}</div>
            <div className="flex justify-start my-1">{data1[4][0]}</div>
            <div className="flex justify-start my-1">{data1[5][0]}</div>
            <div className="flex justify-start my-1">{data1[6][0]}</div>
            <div className="flex justify-start my-1">{data1[7][0]}</div>
            <div className="flex justify-start my-1">{data1[8][0]}</div>
            </div>
          </div>
      </div>
   
     
    </div>
    <div className="flex justify-center">
    
    <div className="float-right w-[40%]">
        
          <hr className="border-2"></hr>
          <div className="my-10">
          <div className="mx-3">
          <div className="text-sm font-bold flex justify-start"> Link </div>
            <div className="flex justify-start my-1 text-sm">{data1[1][1]}</div>
            <div className="flex justify-start my-1 text-sm">{data1[2][1]}</div>
            <div className="flex justify-start my-1 text-sm">{data1[3][1]}</div>
            <div className="flex justify-start my-1 text-sm">{data1[4][1]}</div>
            <div className="flex justify-start my-1 text-sm">{data1[5][1]}</div>
            <div className="flex justify-start my-1 text-sm">{data1[6][1]}</div>
            <div className="flex justify-start my-1 text-sm">{data1[7][1]}</div>
            <div className="flex justify-start my-1 text-sm">{data1[8][1]}</div>
          </div>
        </div>
      </div>
    
    
   
      {/* <div className="float-right">
        <div className="my-10">
          <hr className="border-2"></hr>
          <div className="mx-3">
          <div className="text-sm font-bold flex justify-start"> Date of Start </div>
          <div className='text-sm'>
          <div className="flex justify-start my-1">{data1[1][3]}</div>
          <div className="flex justify-start my-1">{data1[2][3]}</div>
          <div className="flex justify-start my-1">{data1[3][3]}</div>
          <div className="flex justify-start my-1">{data1[4][3]}</div>
          <div className="flex justify-start my-1">{data1[5][3]}</div>
          <div className="flex justify-start my-1">{data1[6][3]}</div>
          <div className="flex justify-start my-1">{data1[7][3]}</div>
          <div className="flex justify-start my-1">{data1[8][3]}</div>
          </div>
          </div>
        </div>
      </div> */}

      {/* <div className="float-left">
        <div className="my-10">
          <hr className="border-2"></hr>
          <div className="mx-3">
          <div className="text-sm font-bold flex justify-start"> Company </div>
          <div className='text-sm'>
          <div className="flex justify-start my-1">{data1[1][2]}</div>
          <div className="flex justify-start my-1">{data1[2][2]}</div>
          <div className="flex justify-start my-1">{data1[3][2]}</div>
          <div className="flex justify-start my-1">{data1[4][2]}</div>
          <div className="flex justify-start my-1">{data1[5][2]}</div>
          <div className="flex justify-start my-1">{data1[6][2]}</div>
          <div className="flex justify-start my-1">{data1[7][2]}</div>
          <div className="flex justify-start my-1">{data1[8][2]}</div>
          </div>
          </div>
        </div>
      </div> */}
   
    </div>
    <Button onClick={Print}>DOWNLOAD</Button>
    </div>
  )
}

export default PreviewPage