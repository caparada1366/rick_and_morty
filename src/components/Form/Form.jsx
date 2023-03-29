import React from 'react'
import { useState } from 'react'
import validation from './validation';

export default function Form({login}) {

const [userData, setUserData] = useState({
    email: "",
    password: ""
})
const [errors, setErrors] = useState({
  email: "",
  password: ""
});

function handleChange(event){
    setUserData({
      ...userData,
        [event.target.name]: event.target.value,
        })
    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value,
    }))
}
function handleSubmit (event){
  event.preventDefault();
  login(userData);
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Email: </label><input name ="email" value={userData.email} onChange={handleChange} ></input>
            {errors.email && <p style={{color: "red"}}> {errors.email}</p>}
            <label>Password: </label><input name="password" value={userData.password} onChange={handleChange} ></input>
            {errors.password && <p style={{color: "red"}}> {errors.password}</p>}
            <button>Submit</button>
        </form>
    </div>
  )
}
