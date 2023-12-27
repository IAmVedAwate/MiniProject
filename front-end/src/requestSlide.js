import React, { Component, useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom'

function RequestSlide(){
  const [data, setData] = useState([]);
    useEffect(()=>{
      fetch('http://localhost:8081/storereq')
      .then(res=> res.json())
      .then(data=> setData(data))
      .catch(err=> console.log(err));
    },[])
    
    return (
      <Carousel>    
      {data.map(info=> (
        <div className='slider'>
        <div className="new_store_name">
          <h3>Store Name: {info.store_name}</h3>
          <h3>Address: {info.address}</h3>
          <h3>Phone No. : {info.phone}</h3>
          <h3>Whatsapp No. : {info.whatsapp}</h3>
        </div>
        <div>
          <Link to="/create_bill">  
          <h3 className="create_bill_btn">Create Bill</h3>
          </Link>
        </div>
        </div>
      ))}
        </Carousel>)
  }
export default RequestSlide;