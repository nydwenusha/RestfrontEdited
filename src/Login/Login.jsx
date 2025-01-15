import React , { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Css/Login.css';
//import eyeoff from '../Sources/eyeoff.png';
//import openeye from '../Sources/openeye.png';
import axios from 'axios';

export default function Login() {

const Navigate = useNavigate();

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
 
    
const change = (event) => {
    setEmail(event.target.value); 
}

const setpasswordmanager = (event) => {
    setPassword(event.target.value);
}

/* following code is used for the mangae the login form validation seterror2 and set sucess functions */
const setError2 = (id, message) => {
  const element = document.getElementById(id);
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = id => {
  const element = document.getElementById(id);
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

async function login(event){
  event.preventDefault();
  try{
    await axios.post("http://localhost:8080/api/login/profile", {
      user_id: email,
      password: password,
    },{ withCredentials: true }).then((res) => {
      if(res.data.message === "Login Failed, Please Enter User Id and Password"){
        setError2('emaild', 'Please Enter User Id');
        setError2('managerin', 'Please Enter Password');
      }
      if(res.data.message === "Incorrect your password or user id"){
        setError2('emaild', 'Incorrect your user id, Please check');
        
      }
      if(res.data.message === "Login Failed, check your password"){
        setSuccess('emaild');
        setError2('managerin', 'Login Failed, check your password');
      }
      if(res.data.message === "Admin"){
        setSuccess('managerin');
        setSuccess('emaild');
        Navigate(`/Admin/Dashboard`);
      }
      if(res.data.message === "Manager"){
        setSuccess('managerin');
        setSuccess('emaild');
        Navigate(`/Manager/Profile`);
      }
      if(res.data.message === "Login Failed, Please Enter User Id"){
        setError2('emaild', ' Please Enter User Id');
      }
      if(res.data.message === "Login Failed, Please Enter Password"){
        setError2('managerin', 'Please Enter Password');
      }
      
      if(res.data.message === "Login Failed, check your password" && res.data.message === "Incorrect your password or user id"){
        setError2('emaild', 'Please check your details and try again');
        setError2('managerin', 'Please check your details and try again');
      }
    })
  }catch (err){
    setError2('emaild', 'Please check your details and try again');
    setError2('managerin', 'Please check your details and try again');
  }
}

return (
  <div className='Sigupcontainer'>
  <div className='secondcontainer'>
    <div className='sigupforum1'>
      <div className='Header1'>
        Login
        <div className='underline1'></div>
      </div>
        <form onSubmit={login}>
          <div className='inputs1'>
            <div className='input3'>
              <input id = 'emaild' type='text' placeholder='User Id' onChange={change}></input>
              <div className="error"></div>
            </div>
            <div className='input3'>
              <input id = 'managerin' type="password" placeholder=' Enter Password' onChange={setpasswordmanager}></input>
              <div className="error"></div>
            </div> 
            <button type="submit">Login</button> 
          </div> 
        </form>
      <div className='forgetpassword' style={{width:'100%', textAlign:'right', marginTop:'-15px', marginBottom:'10px' ,
         fontSize:'14px', paddingBottom:'10px', display:'flex', flexDirection:'column',
         marginLeft:0
         }}>
        <a href='/VerifyEmail' style={{textDecoration:'none', color:'gray', marginRight:'30px'}}>forget password?</a>
      </div>
    </div>
  </div>
</div> 
  )
}
