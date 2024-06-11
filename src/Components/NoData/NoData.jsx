import React from 'react'
import noData from "../../assets/imgs/no--data.webp";
export default function NoData() {
  return (
    <div className="text-center">
            <img src={noData} className="img-fluid" alt="No data available"/>
           <p> No groups Found</p>
           
            </div>
  )
}