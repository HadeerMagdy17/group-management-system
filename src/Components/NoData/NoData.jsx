import React from 'react'
import noData from "../../assets/imgs/no--data.webp";
export default function NoData() {
  return (
    <div className="text-center">
            <img src={noData} className="img-fluid" alt="no-data"/>
           <p> No groups Found</p>
           
            </div>
  )
}