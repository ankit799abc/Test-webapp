import './App.css';
import Mainpage from './Dashboard/Mainpage';
import Register from './pages/Register';
import Loginpage from './pages/Loginpage';

import { BrowserRouter as Router,Route ,Routes } from 'react-router-dom';
import PublicRoute from './Routes/PublicRoutee';
import ProtectedRoute from './Routes/ProtectedRoute';
import Modified from './StudentModified/Modified';

function App() {
  return (
    <>
    
     <Routes>
     <Route path='/dashboard' element={
      <ProtectedRoute> 
        <Mainpage />
      </ProtectedRoute>
     
     }  />

     <Route path='/' element={
      <PublicRoute>
        <Loginpage />
      </PublicRoute>
     }  />

     
     <Route path='/update/:_id' element={
       <ProtectedRoute>
       <Modified />
     </ProtectedRoute>
     }  />


     </Routes>
     
    </>
  );
}

export default App;
