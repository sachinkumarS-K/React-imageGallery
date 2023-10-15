import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Card/Card';
import './ImageList.css'

function ImageList() {
    const [url , setUrl] = useState('https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20');

    const [data , setData] = useState([]);

    async function fetchData(){
        const response = await axios.get(url) ;
        const data = response.data.photos ;
        //console.log(data);

        const info = data.map(curr => {
            return{
                image : curr.url,
                desc : curr.description,
                title : curr.title ,
                id : curr.id
            }
        });
        console.log(info);
        setData(info) ;
    }

    useEffect(()=> {
        fetchData() ;
    },[url]);
  return (
    <div className='cardWrapper'>
      {
      data.map(e => <Card key={e.id} img = {e.image} id = {e.id} desc={e.desc} title={e.title} />)
      }
    </div>
  )
}

export default ImageList
