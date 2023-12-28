import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ContactMe = () => {
    const [data,setData] = useState({
      name:"",email:"",titile:"",description:""
    });
    function changeHandler(event){
      setData( (prevData) =>(
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ) )

    }
    async function clickHandler(event){
        event.preventDefault();
        setData({
          name:"",email:"",subject:"",message:""
        });
        const {name,email,subject,message} = data;
        await fetch('https://portfolio-f0e73-default-rtdb.firebaseio.com/Portfolio.json',{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            name,email,subject,message
          })
        })
        

        toast("Submitted!!");

    }
    
  return (
    <div className="contactus-form-container" id="contactme">
    <div className="container">

      <h1 className="contactus-heading">Contact me</h1>

      <h3 className="contactus-sub-heading">
        Questions, thoughts, or just want to say hello?
      </h3>


      <div className="contactus-form-container">
        <form className="form" action="" onSubmit={clickHandler} method='POST'>
          <div className="formfield-container" >
            <input className="formfield" 
            required
            type="text" 
            value={data.name}
            name="name" 
            id="" 
            placeholder="Enter your name" 
                onChange={changeHandler}
            />

            <input className="formfield" 
            required
            type="email" 
            value={data.email}
            name="email" 
            id="" 
            placeholder="Enter your email address" 
            onChange={changeHandler}
            />
            <textarea
             value={data.message}
             name="message" 
            required
            id="" cols="30" rows="10" 
            className="formfield formfield-textarea"
            placeholder="Enter your message"
            onChange={changeHandler}></textarea>

          </div>
          
          <div>
            <button type="submit" className="btn-pink" id="submit-btn" >
              Send Message<i className="submit-icon fa-solid fa-paper-plane"></i>
            
            </button>
            <ToastContainer />
         
          </div>

        </form>

      </div>


    </div>
  </div>
  )
}
