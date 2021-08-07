import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Sign = () => {
      
    const history= useHistory();

    const [user, setUser] = useState({
        name: "", email: "", phone: "", password: "", cpassword: ""
    });
    let name, value;

    const handalInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }
    
    const PostData = async (e)=>{
        e.preventDefault();

        const {name,email,phone,password,cpassword} = user;

          const res = await fetch("/sign",{
            method:  "POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify ({
                name,email,phone,password,cpassword
            })  
        });
        const Data = await res.json();

        if(res.Data === 42  ||  !Data ){
            window.alert("Invailid Registration");
            console.log("invailid registration");
        }else{
            window.alert("Registration SuccessFull");
            console.log("registration Successfull");
            
            history.push('./Login')
        }
    }

    return (
        <>
            <section className="Sign container">
                <div className="Sign-container">
                    <div className="Sign-container-left">
                        <div className="sign-content">
                            <h2 className="slc-headline"><i  className="uil uil-user"></i>Sign Up  </h2>
                            <form method="POST" className="sign-form" >
                                <div className="form-group">
                                    <label className="form-icon" htmlFor="name"><i  className="uil uil-user"></i></label>
                                    <input type="text" name="name" id="name"  
                                        value={user.name}
                                        onChange={handalInputs}
                                        placeholder="Your Name " />
                                </div>
                                <div className="form-group">
                                    <label className="form-icon" htmlFor="email"><i  className="uil uil-envelope"></i></label>
                                    <input type="email" name="email" id="email"  
                                        value={user.email}
                                        onChange={handalInputs}
                                        placeholder="Your Email " />
                                </div>
                                <div className="form-group">
                                    <label className="form-icon" htmlFor="phone"><i  className="uil uil-phone"></i></label>
                                    <input type="number" name="phone" id="phone"  
                                        value={user.phone}
                                        onChange={handalInputs}
                                        placeholder="Your Number " />
                                </div>

                                <div className="form-group">
                                    <label className="form-icon" htmlFor="password"><i  className="uil uil-lock"></i></label>
                                    <input type="password" name="password" id="password"  
                                        value={user.password}
                                        onChange={handalInputs}
                                        placeholder="Your Password " />
                                </div>
                                <div className="form-group">
                                    <label className="form-icon" htmlFor="cpassword"><i  className="uil uil-lock"></i></label>
                                    <input type="password" name="cpassword" id="cpassword"  
                                        value={user.cpassword}
                                        onChange={handalInputs}
                                        placeholder="Confirm Password " />
                                </div>
                                <div className="botton">
                                    <div className="btn" id="botton">
                                    <input type="button" value="submit" onClick={PostData} />
                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Sign
