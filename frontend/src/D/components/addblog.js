import React, {useState , useEffect} from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import AddEmployeeImage from "./images/addEmployee.png";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import Sidebar from './Sidebar'
import Lottie from 'react-lottie';
import animationData from './images/Animation - 1715446201110.json';
import Header from '../../Pages/navbar';
import Footer from '../../Pages/footer';



export default function AddEmployee(){
  
  const componentID = `component${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  const [description, setdescription]= useState("");
  const [filepath, setFilepath]= useState("");
  const[contact, setContact]= useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const[catogory, setcatogory]=useState("");
  const[join,setJoin]= useState(getCurrentDate());
  const [errors,setError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  useEffect(() => {
    setJoin(getCurrentDate()); // Update the current date each time the component is rendered
  }, []);
  

  const handlePhoneChange = (e) => {
    setContact
    (e.target.value);

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(e.target.value)) {
      setPhoneError("Invalid phone number");
      document.getElementById("phone-error").style.color = "red";
    } else {
      setPhoneError("");
      document.getElementById("phone-error").style.color = "inherit";
    }
  };
 
 

  function handleImage(e) {
    console.log(e.target.files);
    setFilepath(e.target.files[0])

   

  }
  

   function sendData(e){
    e.preventDefault();

    if(componentID.length===0 || description.length===0 || contact.length===0 || catogory.length===0 || join.length===0 || filepath.length===0){
      setError(true);
  }
  else{
        const formData = {
        componentID,
        description,
          filepath,
          contact,
          catogory,
          join
      }
    }

    const formData = new FormData();


    formData.append('componentID', componentID);
    formData.append('description', description);
    formData.append('filepath', filepath);
    formData.append('contact', contact);
    formData.append('catogory', catogory);
    formData.append('join', join);


    axios.post("http://localhost:5001/component/add", formData).then(()=>{
      
      //alert("Employee Added")
      toast.success("component Added Successfully!",{theme:'colored'});

      
    }).catch((err)=>{
      toast.error(err);
    })
  }


    return(
      <div>
         <Header />
        
         <div 
        
        style= {{
          
          display: 'flex',
          justifyContent: 'center', /* Center horizontally */
          alignItems: 'center', /* Center vertically */
          minHeight: '100vh',
          backgroundImage: `url("../images/finance-background.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',


      }}>
      
      
        <div className= "container" style={{display:"flex"}}>
       
        <ToastContainer></ToastContainer>
        <div className="container" style={{ display: "flex" }}>
                        <div style={{ width: '600px', height: '500px', marginTop: '10px' }}>
                            <Lottie options={{ loop: true, autoplay: true, animationData: animationData }} />
                        </div>
                      
                        &nbsp;&nbsp;&nbsp;&nbsp;

          <div className="addEmployeeForm" style={{
                    boxShadow: "0 0 10px 0 white",
                    padding: "20px",
                    borderRadius: "10px",
                    backgroundColor: "#F5F5F5",
                    outline: "2px solid blue",
                    width:"1000px"
                }}>
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl white:text-dark">
          Add New component
              </h1>
        <form onSubmit={sendData} class="max-w-sm mx-auto">
           <div class="mb-5">
    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 white:text-dark" >Component ID:</label>
    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={componentID}  aria-describedby="emailHelp" placeholder="Enter component Name"
    />

          {errors&&componentID.length<=0?<label className="validation-label">ID cannot be empty</label>:""}
  </div>
        <div className="mb-5">

        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Component Source Code :</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={description} placeholder="Enter Employee description"
           onChange={(e)=>{

     setdescription(e.target.value);
}}/>

{errors&&description.length<=0?<label className="validation-label">description cannot be empty</label>:""}
  </div>


  <div class="mb-5">
            <label class="block mb-2 text-sm font-medium text-gray-900 white :text-dark" for="file_input">Upload Image :</label>
            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"
              onChange={
                handleImage

              } />
             {errors&&filepath.length<=0?<label className="validation-label">Image cannot be empty</label>:""}

          </div>

          <div className="mb-5">
  
  
     
  </div>  

  <div className="form-group">
  <div className="form-group">
  <label class="block mb-2 text-sm font-medium text-gray-900 white:text-dark">Catogory:</label>
  <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"id="catogory" value={catogory} onChange={(e) => setcatogory(e.target.value)}>
    <option value="">Select catogory</option>
    <option value="React Native">React Native</option>
    <option value="React">React</option>
    <option value="Bootstrap">Bootstrap</option>
    <option value="Anguler">Anguler</option>
    <option value="Java">Java</option>
    <option value="Python">Python</option>
  </select>
  {errors && catogory.length <= 0 ? <label className="validation-label">catogory cannot be empty</label> : ""}
</div>
  </div>
 <br></br>
  <div class="relative max-w-sm">
                        <label for="block mb-2 text-sm font-medium text-gray-900 white:text-dark"> Publish Date : </label>
        <input type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="join" name="join" value={join} max={join}  min={join} onChange={(event) => setJoin(event.target.value)} required />
                        {errors&&join.length<=0?<label className="validation-label">Join Date cannot be empty</label>:""}
                    </div>

 <br></br>
 

 <button type="submit"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>
                    &nbsp;&nbsp;
                    <Link class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"  to={"/viewemployee"}>
                    <i class="fa-solid fa-backward"></i>&nbsp;Back
                    </Link>
</form>
   </div>
   </div>
  </div>
  </div>
  <Footer />
      </div>
     
   
    )
}


