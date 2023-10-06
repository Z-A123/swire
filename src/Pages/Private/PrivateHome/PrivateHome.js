import React from 'react'
//import cat from "./cat.gif"
import log from "./log.gif"
import CVUploadPage from '../../../Components/JobList/CVUploadPage'



export default function PrivateHome() {




  return (
    <div className="container P-5">
        <h1 className="display-3 text-light mb-4">
        Welcome to your personal space
        </h1>
        
        
        <img src={log} alt=""  width="300px"/>

        <div className="p-3 mb-2 bg-danger text-white"> <CVUploadPage /></div>
        
        
       


    </div>
  )
}
