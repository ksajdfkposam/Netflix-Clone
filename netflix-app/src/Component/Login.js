import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseCon.js' ;
import { getAuth, 
  signInWithEmailAndPassword,createUserWithEmailAndPassword
} from "firebase/auth";
import { useEffect, useState } from "react";

console.log(firebaseConfig)

const Login = ({title,tit}) => {
  const t="Sign-In";
  console.log(tit,"tits")
  initializeApp(firebaseConfig);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user,setUser]=useState(false);

  const [ isEmailUsed, setIsEmailUsed] = useState(false);
  const auth = getAuth();


const clickEmail=(e)=>{
  setEmail(e.target.value)

}
console.log(email)

const clickPass=(e)=>{
  setPassword(e.target.value)
}

console.log(password)



  const navigate=useNavigate();
const clickOn=(e)=>{
  if(title===true){
signInWithEmailAndPassword(auth,email,password)
.then(auth=>{
  if(auth){
    navigate('/dashboard');

  }
})
.catch(error => setUser(true))
 // navigate('/dashboard');
}
else{
  console.log(auth,"authkk")
    createUserWithEmailAndPassword(auth, email, password)
    .then(
      auth => {
        if(auth){
          navigate('/dashboard');
        }
      })
      .catch( error => setIsEmailUsed(true));
  
}
}














    return (
    
            <div className="LOGIN-1 w-100">
  <div className="container ">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card back text-white" >
          <div className="card-body p-5 text-center">

            <div className="mb-md-1 mt-md-1 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">{tit}</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" className="form-control form-control-lg" value={email} onChange={clickEmail}/>
                <label className="form-label">Email</label>
              </div>

              <div className="form-outline form-white mb-1">
                <input type="password" id="typePasswordX" className="form-control form-control-lg" value={password} onChange={clickPass} />
                <label className="form-label" >Password</label>
              </div>
 
 {title===true && user && <p className=''>User Does Not Exist</p>}
              { title===true && <p  className="small mb-2 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>}
              {title===false && isEmailUsed && <p className=''>Account already exists</p>}
              <button className="btn btn-outline-light btn-lg px-5" type="submit"  onClick={clickOn} >{(title)?"Login":t}</button>
              
              

            </div>

            <div>
              
             {title===true && <p className="">Don't have an account? <Link to="/register"  className="text-white-50 fw-bold">Sign Up</Link>
              </p>}

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

        </div>
    );
};

export default Login;