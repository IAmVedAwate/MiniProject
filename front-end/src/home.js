import React, { Component } from 'react'
import StoreSlide from './storeSlide'
import RequestSlide from './requestSlide'
import './App.css'
import { Link } from 'react-router-dom'

function Home(){
    return (
        <>
            <h1 style={{textAlign: "center"}}> Retail Management System </h1>
        <div className='App'>
        <div className="fluid-container info__container">  
        <div className="navbar">
      <div className="nav_section">
        <Link to="/">
        <h3 className="nav_btns">Info</h3>
        </Link>
      </div>
      <div className="nav_section">
        <Link to="/bills">
        <h3 className="nav_btns">Bills</h3>
        </Link>
      </div>
      <div className="nav_section">
        <Link to="/contacts">
        <h3 className="nav_btns">Contacts</h3>
        </Link>
      </div>
      <div className="nav_section">
        <div className="search-bar">
          <input type="text" placeholder="Search For Anything"/>
        </div>
      </div>
    </div>
          <div className='carousel__area'>
          
          <StoreSlide />
            
          </div>
          <div className='carousel__area'>
            
          <RequestSlide />

          </div>
          <div className="revenue__depth">
      <div className="rev_dep">
        <h2>Revenue: 200000₹</h2>
      </div>
      <div className="rev_dep">
        <h2>Depth: 30000₹</h2>
      </div>
    </div>
    <div className="pie__top_category">
      <div className="pie_chart">
        <div className="chart">
          <div className="slice one"></div>
          <div className="slice two"></div>
          <div className="slice three"></div>
        </div>
      </div>
      <div className="top_category">
        <div className="container1">
          <h2 className="top_h2">Top: <span>Soup Products</span></h2>
          <ul className="list_ul">
            <li className="list_li"><span className="list_span">Stores: </span> <span className="count">13 stores</span></li>
            <li className="list_li"><span className="list_span">Regular: </span> <span className="count">3 stores</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="fast_sold">
      <div className="product-list">
        <h2>Fast Sold Items</h2>
        <ul>
          <li><i className="fas fa-pump-soap"></i> Soup product </li>
          <li><i className="fas fa-cookie"></i> Bakery Products</li>
          <li><i className="fas fa-bag-shopping"></i> Grocery Products</li>
          <li><i className="fas fa-book"></i> Stationary Products</li>
          <li><i className="fas fa-camera"></i> Camera</li>
        </ul>
      </div>
    </div>
    <div className="bar_graph">

      <div className="chart2">
        <div className="axis-y">
          <div className="tick">100</div>
          <div className="tick">80</div>
          <div className="tick">60</div>
          <div className="tick">40</div>
          <div className="tick">20</div>
          <div className="tick">0</div>
        </div>
        <div className="graph">
          <div className="category">
            <div className="bar1"></div>
            <div className="bar2"></div>
          </div>
          <div className="category">
            <div className="bar1"></div>
            <div className="bar2"></div>
          </div>
          <div className="category">
            <div className="bar1"></div>
            <div className="bar2"></div>
          </div>
          <div className="category">
            <div className="bar1"></div>
            <div className="bar2"></div>
          </div>
          <div className="category">
            <div className="bar1"></div>
            <div className="bar2"></div>
          </div>
          <div className="category">
            <div className="bar1"></div>
            <div className="bar2"></div>
          </div>
        </div>

      </div>
      <div className="axis-x">
        <div className="label">Category 1</div>
        <div className="label">Category 2</div>
        <div className="label">Category 3</div>
        <div className="label">Category 4</div>
        <div className="label">Category 5</div>
        <div className="label">Category 6</div>
      </div>

    </div>
    </div>
        </div>
        </>
    )
}

export default Home;