import React,{useState} from 'react'
import { useSelector } from "react-redux";
import "./Loginpage.css";
import{ handleLogin ,handleRegister } from"../redux/services/authService"



function Loginpage() {
 // const { loading, error, user,token } = useSelector((state) => state.auth);
  
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [sin , setsin] =useState('login');
  const [address, setCity] = useState('');
  const [website, setWebsite] = useState('');
  const [phone, setPhone] = useState('');
  
  const [name, setName] = useState('');

  /*const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', { username, password });
  };*/
  
   if(sin=="login"){
  return (
    <div className='outer'>
      
    <div className="login-form-container">
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={(e)=>handleLogin(e,email,password)}>
          Login
        </button>
         <a onClick={(e)=>setsin('register')}>if you are not logged in. Create Account </a> 
      </form>
    </div>
    </div>
      
  );
   }else{
    return (
      
      <div className='outer'>
      <div  className="login-form-container register">
        <h2>Register</h2>
        <form>
        <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            Phone:
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label>
          How did you hear about this?
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </label>
          <label>
            Full Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          
    
          <button type="button" onClick={(e)=>handleRegister(e,name,email,password,phone,address,website)}>
            Create Account
          </button>
          <a onClick={(e)=>setsin('login')}>Login Page </a> 
        </form>
      </div>
        
      </div>  
    );
   }
  
}


export default Loginpage
