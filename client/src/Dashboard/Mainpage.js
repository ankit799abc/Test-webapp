import React,{useState , useEffect } from 'react'
import  "../Dashboard/Mainpage.css"
import API from '../redux/services/API';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Mainpage() {
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);
  const [selectedOption, setSelectedOption] = useState('2');
  const [email, setemail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [Addstudent, setAddstudent] = useState(true);
  const [Add, setAdd] = useState(0);
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [Delete, setDelete] = useState(true);

  const [data, setData] = useState([
   
  ]);

  

  const Modified=(e,val)=>{
    e.preventDefault();
    window.location.replace(`/update/${val._id}`);
  }
  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successfully");
    navigate("/");
  };

  const change=()=>{
   // e.preventDefault();
    setAddstudent(!Addstudent);
    setAdd(0);
    console.log("hii");
  }


  const deletestudent = async (val) => {
    
    try {
      
      const { data } = await API.delete(`/student/delete/${val._id}`);
      setDelete(!Delete)
      alert(`Error adding student: ${data.message}`);
    } catch (error) {
      alert(`Error adding student: ${error.message}`);
    }
  };

  // Add student
  const AddStudent = async () => {
    try {
      
      const  {data}  = await API.post(`/student/addStudent`,{name,email,phone});
      console.log(data.student)
      setAddstudent(!Addstudent);
      setAdd(1);
      
      
    } catch (error) {
      console.log(error);
    }
  };
   
  // getstudent record

  const getStudentRecords = async () => {
    try {
      
      const { data } = await API.get(`/student/allStudent?keyword=${selectedOption}&namestudent=${name}&emailstudent=${email}&phonestudent=${phone}`);
      if (data?.success) {
        setData(data?.student);
         console.log(data.success);
        
      } 
      console.log(data.success);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    if(Addstudent){
    getStudentRecords();
      if(Add==1){
        setAddstudent(!Addstudent)
      } 
    }
    
  }, [selectedOption,name,email,phone,Delete,Addstudent]);

  return (
      
      <div className='outerbox'>
        <div  className="class-form hello">

          <div className='first'>
          
         { Addstudent ?  <div className='box'>
           <h2>Apply Filter</h2>
           <div className='sort'>
            <h5> Sort the list</h5>
           <select className='option' value={selectedOption} onChange={handleChange}>
        <option value="2">Name incresing</option>
        <option value="1">Name decresing</option>
        <option value="3">Insert time incresing</option>
        <option value="4">Update time incresing</option>
      </select>
           </div>
              
           <div className='searchfield'>
           <h5>Search the List</h5>
            
           <div className='inputsearch'>
      
      <form >
        
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        
        
        
          <input type="email" value={email} onChange={(e) => setemail(e.target.value)} />
        
        
          <input type="number"  value={phone} onChange={(e) => setPhone(e.target.value)} />
       
       
      </form>

      </div>
      
      <div className='givename'>
       
        <p>Name: </p>
        <p>Email: </p>
        <p>Phone: </p>
      </div >
      
      <div className='addstudent'>
   
        <p className='search-btn'> if you are add student? <a onClick={(e)=>setAddstudent(!Addstudent)}>Click </a> </p>
      
        
        </div>   
    </div>
        

          </div>
          :     
          <div className='searchfield'>
          <h5>Add Student</h5>
           
          <div className='inputsearch'>
     
     <form >
       
         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
       
       
       
         <input type="email" value={email} onChange={(e) => setemail(e.target.value)} />
       
       
         <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      
      
     </form>

     </div>
     
     <div className='givename'>
      
       <p>Name: </p>
       <p>Email: </p>
       <p>Phone: </p>
     </div >
           
     

     <div className='addstudent'>
     <div className='lowerdiv aaa'>
               
               <button className='lowerbtn cen aaaa' type="button" onClick={(e)=>change()}>Cencel</button>
               <button className='lowerbtn upd aaaa'type="button" onClick={(e)=>AddStudent()}>Add</button>

           </div>
      
       
       </div>   
   </div>     
          }
         
      

          </div>
            
          <div className='second'>
          {data?.map((val) => (
          <div className='boxitem'>
            
            <span className='studentname'>{val.name.length > 10 ? `${val.name.slice(0, 10)}...` : val.name}</span>
            <button type="button"  className='btn' onClick={(e)=>Modified(e,val)}>Modifie</button>
            <button type="button"  className='btn' onClick={(e)=>deletestudent(val)}>Delete</button>
            
          </div>
          ))}
        </div>

      </div>
      
      
      <div className='fotter' onClick={handleLogout}>
            <span className='fotterlog'>LogOut</span>
      </div>
      
        
      </div>
      
  );
}

export default Mainpage