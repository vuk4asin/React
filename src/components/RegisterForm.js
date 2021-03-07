import React, {useState} from 'react'
import Facebook from './Facebook';
import Google from './Google';
// import FacebookLogin from 'react-facebook-login';



function RegisterForm({Register, error}) {
    const [details,setDetails] = useState({name:"", email:"", password:""});
    
    const submitHandler = e => {
        e.preventDefault();

        Register(details);
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? (<div className='error'>{error}</div>) : ""}
                 <div className="form-group">
                     <label htmlFor="name">Name:</label>
                     <input type="text" name="name" id="name" onChange={e=>setDetails({...details,name:e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange ={e=>setDetails({...details,email:e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange = {e=>setDetails({...details,password:e.target.value})} value={details.password}/>
                </div> 
                <div className="form-group">
                    <Facebook />
                   
                </div> 
             
                <br/>
                
                <br/>
                <br/>

                <Google/>

                <br/>
                <br/>

                <input type="submit" value="LOGIN"/>
                <br/>
                
            </div>
        </form>
    )
        
    
}


export default RegisterForm;