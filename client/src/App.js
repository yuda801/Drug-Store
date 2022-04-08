import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Meds from './components/Meds.js';
import AddMedicin from './components/AddMedicin.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {

  const [companies, setCompanies] = useState([]);
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/medicins-compenies')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCompanies(data.data);
      })
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/api/medicins')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMedicines(data.data);
      })
  }, []);


  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home companies={companies} />} />
          <Route path="/medicins" element={<Meds medicines={medicines} />} />
          <Route path="/add-medicins" element={<AddMedicin medicines={medicines} />} />
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
