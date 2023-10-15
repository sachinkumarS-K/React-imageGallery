import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Details.css'
import { useParams } from 'react-router-dom';

function Detail() {
   const {id} =  useParams() ;
    const [data , setData] = useState({})
   const url = `https://api.slingacademy.com/v1/sample-data/photos/${id}` ;

    const fetchData = async() => {
       
        const data = await axios.get(url) ;
        const info =  data.data.photo  ;
        console.log(info);
        setData(info)
    }

   useEffect(() => {
    fetchData() 
   } ,[])
  
  return (
    <div className='wrapper'>
      <div className="imageCont">
        <img src={data.url} alt="" />
      </div>
      <div className="content">
        <h1 className='title'> {data.title}</h1>
        <p className='desc'>{data.description}</p>
      </div>
    </div>
  )
}


export default Detail
