import React from "react";
import { FaPhone } from "react-icons/fa";
import receptionist from '../assets/receptionist.jpeg'
import { FaPencilAlt } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset(); 
  };
  const navigate = useNavigate()
  return (
    <div className="contactpage">
      <div className="contactBox">
      <div className="contactheader">
        <p>Have Questions?</p>
        <h2 className="contactTitle">Contact <span style={{ color: '#2E4053' }}>us </span><FaPhone style={{ fontSize: '1.3rem', color: '#2E4053' }}  /></h2>
      </div>
      </div>
     <div className="form">
     <div className="contactDescription" data-aos="fade-right">
      <img src={receptionist} className="receptionist"  alt="body" />
    <p className="descriptionText"> Get instant replies from our 24/7 customer service team. Our dedicated support specialists are always available to assist you, no matter the time or day.
    </p>
      </div>
     <form data-aos="fade-left"  data-aos-delay="400"  onSubmit={handleSubmit(onSubmit)}>  
        <div className="formInputs" > 
        <div>
        <input id="Name" className="inputText" type="text" placeholder="name" {...register("Name", { required: true })} />
        {errors.Name && <span className="error1">Name field is required</span>}  
          </div>   
        <div>
        <input id="email" className="inputText" type="email" placeholder="email" {...register("email", { required: true })} />
        {errors.email && <span className="error">Email field is required</span>}
        </div>
        </div>
       <div>
       <div className="inputWithIcon">
              <input id=" Question" className="formQuestion" type="text" placeholder="Enter your question" {...register("Question", { required: true })}/>
              <FaPencilAlt className="inputIcon" />
            </div>
            {errors.Question && <span className="error">Email field is required</span>}
       </div>

            <button type="submit" className="submit">submit</button>
      </form>
      
     </div>
    </div>
  );
};

export default Contact;
