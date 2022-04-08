import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {

  const [companies, setCompanies] = useState([]);
  // const [companiesAPI, setCompaniesAPI] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/medicins-compenies')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCompanies(data.data);
      })
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/api/medicines')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCompanies(data.data);
      })
  }, []);


  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home companies={companies} />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

  // const handleDeleteCustomer = (id) => {
  //     fetch('http://localhost:5000/api/customers/' + id,
  //         { method: 'DELETE' })
  //         .then(res => res.json())
  //         .then(data => {
  //             console.log(data)

  //             let tempCustomers = []

  //             tempCustomers = customers.filter(c => c.id !== id)
  //             setCustomers(tempCustomers);
  //         })
  // }
