import React, { useRef } from 'react'
import QRCode from "react-qr-code";
import { useState } from 'react';



const Main = () => {

    const [data, setdata] = useState("")
    // const inputRef = useRef("")
    // const Generate=()=>{
    //     setdata(inputRef.current.value)
    //     // console.log(inputRef.current)
    // }

   const onImageCownload = () => {
        const svg = document.getElementById("QRCode");
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          const pngFile = canvas.toDataURL("image/png");
          const downloadLink = document.createElement("a");
          downloadLink.download = "QRCode";
          downloadLink.href = `${pngFile}`;
          downloadLink.click();
        };
        img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
      };


    return (
        <>
        <div>
            <QRCode id="QRCode" value={data}/>
         </div>
         <button className=" text-dark btn btn-outline-secondary py-1 px-1 mt-3 me-1" style={{"boxShadow":"0px","borderRadius":"0px"}} onClick={()=>{
             onImageCownload()
         }} > Download QR</button>
       <div className="d-flex-column">
        <div className=" mb-3">
          <input type="text"  className=" mt-4  "  id="title" aria-describedby="emailHelp"  onChange={(e)=>setdata(e.target.value)}/> 
        </div>
        {/* <button className="btn btn-outline-dark py-1 me-1" style={{"boxShadow":"0px","borderRadius":"0px"}} onClick={()=>(Generate())} >Generate</button> */}
        </div>
        </>
    )
}

// ref={inputRef}

export default Main
