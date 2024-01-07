import React,{useState , useEffect } from 'react'
import './Modified.css'
import { useParams } from 'react-router-dom';
import API from '../redux/services/API';
import { useSelector } from "react-redux";

function Modified() {

    const [email, setemail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  
  const { _id } = useParams();

  const updatestudent = async () => {
    try {
      
      const {data} = await API.put(`/student/update/${_id}` ,{name,email,phone});
     
     
      alert(`Error adding student: ${data.message}`);
    } catch (error) {
      
      alert(`Error adding student: ${error.message}`);
    }
  };

  const pagechange = ()=>{
    window.location.replace(`/dashboard`);
  }

  const getSingleStudent = async () => {
    try {
      
      const { data } = await API.get(`/student/${_id}`);
      if (data?.success) {
        setName(data.student.name);
        setemail(data.student.email)  
        setPhone(data.student.phone)
        // console.log(data); 
      }else{
        alert(`Error adding student: ${data.message}`);
      } 
      console.log(data);
    } catch (error) {
      alert(`Error adding student: ${error.message}`);
      
    }
  };
  
  useEffect(() => {
    getSingleStudent(); 
  }, []);


  return (
    <div className='outerbox1'>
        <div  className="class-form1">
            <div  className="class-form-inner1">
            <div className='searchfield2'>
           
            
           <div className='inputsearch1'>
      
      <form >
        
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

          <input type="email" value={email} onChange={(e) => setemail(e.target.value)} />
   
          <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
       
       
      </form>

      </div>
      
      <div className='givename1'>
       
        <p>Name: </p>
        <p>Email: </p>
        <p>Phone: </p>
      </div >

    </div>
    
    <div className='lowerdiv1'>
               
                <button className='lowerbtn cen1' type="button" onClick={(e)=>pagechange()}>Cencel</button>
                <button className='lowerbtn upd1'type="button" onClick={(e)=>updatestudent()}>Update</button>

            </div>
            </div>

            
         </div>
 m  </div>
  )
}

export default Modified