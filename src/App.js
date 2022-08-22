
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {SubmitShifts} from './components/SubmitShifts/SubmitShifts';
import {Home} from './Home';
import {AdminDashboard} from './components/Admin/AdminDashboard';
import {Error} from './components/Error/Error';
import React, {useState} from 'react';
import {Login} from './components/Login/Login';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <>
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="SubmitShifts" element={<SubmitShifts />} />
      <Route path="Login" element={<Login setUser={setUser} />} />
      
        <Route 
        path="AdminDashboard" 
        element= {
        <ProtectedRoute user={user}>
          {<AdminDashboard user={user} />} 
        </ProtectedRoute>
        } />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
      
    </div>
    </>
  );
}

export default App;
