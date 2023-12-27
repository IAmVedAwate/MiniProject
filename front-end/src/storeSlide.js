import React, { Component, useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

function StoreSlide(){
  const [data, setData] = useState([]);
    useEffect(()=>{
      fetch('http://localhost:8081/users')
      .then(res=> res.json())
      .then(data=> setData(data))
      .catch(err=> console.log(err));
    },[])
    
    return (
      <Carousel>    
      {data.map(info=> (
        <div className='item__css'> 
        <div className="store_info">
         <div className="store_names">
           <div className="store_id">
             <h2>{info.id}.</h2>
           </div>
           <div className="store_name">
             <h3>Store Name: {info.store_name}</h3>
             <h3>Address: {info.address} </h3>
             <h3>Rank: {info.rank} </h3>
           </div>
         </div>
         <div className="store_btns">
           <div className="store_info_btn"> <h3 className="nav_btns">Track</h3> </div>
           <div className="store_info_btn"> <h3 className="nav_btns">History</h3> </div>
           <div className="store_info_btn"> <h3 className="nav_btns">Contact</h3> </div>
           <div className="store_info_btn"> <h3 className="nav_btns">View</h3> </div>
         </div>
       </div> 
        </div>
      ))}
        </Carousel>)
  }
export default StoreSlide;