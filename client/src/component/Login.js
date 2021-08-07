import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history= useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const loginUser = async (e)=>{
        e.preventDefault();

      const res = await  fetch('/Login',{
          method:"POST",
          headers:{
              "content-Type":"application/json"
          },
          body:JSON.stringify({
              email,
              password
          })
      });

      const data = res.json();

      if(res.status === 400 || !data){
          window.alert('invalid')
      }else{
          window.alert('successfull');
          history.push("/");
      }



    }
    return (
        <section className="Sign container">
                <div className="Sign-container">
                    <div className="Sign-container-left">
                        <div className="sign-content">
                            <h2 className="slc-headline"><i  className="uil uil-user"></i>LogIN  </h2>
                            <form method="POST" className="sign-form" >
                                
                                <div className="form-group">
                                    <label className="form-icon" htmlFor="email"><i  className="uil uil-envelope"></i></label>
                                    <input type="email" name="email" id="email"  
                                          value={email}
                                          onChange={ (e)=> setEmail(e.target.value)}
                                        placeholder="Your Email " />
                                </div>

                                <div className="form-group">
                                    <label className="form-icon" htmlFor="password"><i  className="uil uil-lock"></i></label>
                                    <input type="password" name="password" id="password"  
                                          value={password}
                                          onChange={ (e)=> setPassword(e.target.value)}
                                        placeholder="Your Password " />
                                </div>
                                
                                <div className="botton">
                                    <div className="btn" id="botton">
                                    <input type="button" value="submit" onClick={loginUser} />
                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </section>
    )
}

export default Login
