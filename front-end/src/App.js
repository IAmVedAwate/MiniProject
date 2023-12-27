import React, { Component } from 'react'

import Home from './home'
import Bills from './bills'
import Contacts from './contacts'
import CreateBill from './createBill'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


class App extends Component {
  
  render(){

    return (
      <>
        <Router>
          <Routes>
          <Route exact path="/" element={<Home/>} />
          
          <Route path="/biils" element={<Bills/>} />
            
          <Route path="/contacts" element={<Contacts/>} />

          <Route path="/create_bill" element={<CreateBill/>} />
            
          </Routes>
      </Router>
        
      </>
    )
  }
}






//   );
// }

// }

export default App;




