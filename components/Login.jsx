import {Link} from "react-router-dom";
import { auth } from "../firebase.config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./Login.css";
const Login = () =>{
   
   const loginwithGoogle = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((res)=>{
        console.log("signin-",res);
    }).catch((err)=>{
        console.log("err",err);
    })
   }

    return (
        <div className="login">
            <div className="login-logo"></div>
            <div className="loginCard">
               
                <div className="loginCardCont">
                  <div className="go-backbtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none" className="ng-star-inserted"><path d="M8.37377 1.70711C8.7643 1.31658 8.7643 0.683418 8.37377 0.292893C7.98325 -0.0976311 7.35008 -0.0976311 6.95956 0.292893L0.292893 6.95956C-0.097631 7.35009 -0.097631 7.98325 0.292893 8.37377L6.95956 15.0404C7.35008 15.431 7.98325 15.431 8.37377 15.0404C8.7643 14.6499 8.7643 14.0168 8.37377 13.6262L2.41421 7.66667L8.37377 1.70711Z" fill="#ECECEC"></path></svg>
                  </div>
                    <div className="login-start-text">
                        <p>Let's get < br/> started <span className="start-text-dot">.</span></p>    
                    </div>
                   <p>Mobile Number</p>
                   <div className="login-input-cont">
                       <form action="" className="login-form">
                           <div className="login-flag-cont">
                               <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="IN" className="INFlag"/>
                               <div className="INno-cont">
                                   <input type="text" name="" id="" value="+91" readOnly className="lesswidth login-no-inp"/>
                               </div>
                           </div>
                           <svg width="2" height="31" viewBox="0 0 2 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0V30.5" stroke="white"></path></svg>
                           <div className="contact-cont">
                             <input type="number" name="contact" id="contact" className="contact-inp login-no-inp" required/>
                           </div>
                          <div className="proceed-btn-Cont">
                             <input type="submit" value="Proceed" name="proceed" id="proceed" />
                          </div>
                       </form>                 
                   </div>
                   <div className="login-another-p">
                       <p>Or, Use one of the following options</p>
                   </div>
                    <div className="login-options-cont">
                        <div className="loginOpts">
                            <div className="login-icon-email"></div>
                            <div className="icon-text">Email</div>
                        </div>
                        <div className="loginOpts">
                            <div className="login-icon-fb"></div>
                            <div className="icon-text">Facebook</div>
                        </div>
                        <div className="loginOpts" onClick={loginwithGoogle}>
                            <div className="login-icon-google"></div>
                            <div className="icon-text">Google</div>
                        </div>
                    </div>  
                </div>
               
            </div>   
        
        <div className="trianle-shape"></div>
        </div>
    )
}

export default Login;