import React, { useState } from "react"
import { useForm } from "react-hook-form"
import ErrorMessage from '../ErrorMessage'
import axios from 'axios'

import './Form.css'

const Form = () => {
  const [data, setData] = useState({ firstName: '', lastName: '', email: '', message: '', sent: false })

  const {
    register,
    errors,
  } = useForm()
  
  const handleChange = (e) => {
    const {name, value} = e.target
        setData({
            ...data,
            [name]: value
    })
  }
	
  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: "POST", 
      url:"/", 
      data: data
    }).then((res)=>{
      if (res.data.status === 'success'){
          alert("Message Sent."); 
          resetForm()
      }else if(res.data.status === 'fail'){
          alert("Message failed to send.")
      }
    })
}
const resetForm = () => {
    this.setState({firstName: '', lastName: '', email: '',subject:'', message: ''})
  }

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        
        <label>First Name</label>
        <input 
          name="firstName" 
          ref={register({ required: true })}
          onChange={handleChange}
          value={data.firstName}
        />
        <ErrorMessage error={errors.firstName} />

        <label>Last Name</label>
        <input 
          name="lastName" 
          ref={register({ required: true, minLength: 2 })}
          onChange={handleChange}
          value={data.lastName}
        />
        <ErrorMessage error={errors.lastName} />

        <label>Email</label>
        <input
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          onChange={handleChange}
          value={data.email}
        />
        <ErrorMessage error={errors.email} />

        <label>A message for us ?</label>
        <textarea 
          name="message"  
          ref={register({ required: true })}
          value={data.message}
          onChange={handleChange}
          rows='3'
        />
        <ErrorMessage error={errors.firstName} />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
