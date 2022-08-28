import React, {useState,useContext} from 'react';
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';
import {AuthContext} from '../Context/AuthContext';
import Logins from '../images/register.png';
import swal from 'sweetalert';


const Login = props=>{
    const [user,setUser] = useState({username: "", password : ""});
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChange = e =>{
        setUser({...user,[e.target.name] : e.target.value});
    }

    const onSubmit = e =>{
        e.preventDefault();
        AuthService.login(user).then(data=>{
            console.log(data);
            const { isAuthenticated,user,message} = data;
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                swal("Grate!", "Login sucssfully ", "success");
                props.history.push('/todos');
            }
            else
                setMessage(message);
        });
    }



    return(
        <div className="container" >
            <br></br><br></br><br></br>
            <div className="square border border-primary border-4 " >  <br></br>  <br></br>
            <form onSubmit={onSubmit} >
                <h3 style={{alignContent: 'center',marginLeft:'45%'}}>Please sign in</h3><br></br>
                <img  src={Logins} alt="" width="35%" height="20%" style={{marginLeft:'40%'}}/>

                <label htmlFor="username" style={{width:'70%' ,marginLeft:'15%'}} className="h6">User Name: </label>
                <input type="text" 
                 style={{width:'70%' ,marginLeft:'15%'}}
                       name="username" 
                       onChange={onChange} 
                       className="form-control" 
                      A placeholder="Enter Username"/><br></br><br></br>
   <label htmlFor="password" style={{width:'70%' ,marginLeft:'15%'}} className="h6">Password: </label>    
   <input type="password" 
                 style={{width:'70%' ,marginLeft:'15%'}}
                       name="password" 
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter Password"/><br></br><br></br>
                <button className="btn btn-lg btn-primary btn-block" 
                        type="submit"  style={{width:'50%' ,marginLeft:'25%'}}>Log in </button><br></br>
            </form>
            <br></br>  <br></br>
            </div>
            {message ? <Message message={message}/> : null}
        </div>
    )
}

export default Login;