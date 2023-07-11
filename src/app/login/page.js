-//use client
import React from "react"
import { login } from "../../firebase/auth";

export default function Login() {

const [state , setstate] = React.useState({ 
  email:"",
  password: ""
});

function onChange (event){
  const value = event.target.value;
  const name = event.target.name;
setstate({
 ...state,
 [name]: value
})
}

function onlogin(){
const {email, password} = state;
login(email, password);

}

  return (
    <div className="container">
       <input name="email" onChange= {onChange} value={state.email} placeholder= "email" type="text" />

       <input password= "password" onChange={onChange} value={state.password}  placeholder= "12345"  type= "password" />

       <button>login</button>
</div>
)
}