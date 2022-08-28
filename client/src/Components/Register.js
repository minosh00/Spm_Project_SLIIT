import React, {useState,useRef,useEffect} from 'react';
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';
import swal from 'sweetalert';
import Login from '../images/test.png';


const Register = props=>{
    const [user,setUser] = useState({fname:"",lname:"", Phonenumber:"",username: "", password : "", role : ""});
   
    const [message,setMessage] = useState(null);
   
    let timerID = useRef(null);

    useEffect(()=>{
        return ()=>{
            clearTimeout(timerID);
        }
    },[]);


    const onChange = e =>{
        setUser({...user,[e.target.name] : e.target.value});
    }

    const resetForm = ()=>{
        setUser({fname:"",lname:"", Phonenumber:"",username : "", password : "",role : ""});
    }

    const onSubmit = e =>{
        e.preventDefault();
        AuthService.register(user).then(data=>{
            const { message } = data;
            swal("Grate!", "Account created sucssfully ", "success");
            resetForm();
            if(!message.msgError){
                timerID = setTimeout(()=>{
                    props.history.push('/login');
                },2000)
            }
        });
    }



    return(
        <div className="container">
                 <br></br> <br></br> <br></br>     
                <div className="square border border-primary border-4 " > 
       
            <form onSubmit={onSubmit}>
                <h3 style={{alignContent: 'center',marginLeft:'40%'}}>Please Register</h3><br></br>
<div className="container" style-={{alignContent: 'center',}}>
<img  src={Login} alt="" width="35%" height="20%" style={{marginLeft:'40%'}}/>
</div>
              

                <br></br>
                <label htmlFor="username" style={{width:'70%' ,marginLeft:'15%'}} className="h6">Username: </label>
                <input type="text" 
                       name="username" 
                       value={user.username}
                       onChange={onChange} 
                       style={{width:'70%' ,marginLeft:'15%'}}
                       className="form-control" 
                       placeholder="Enter Username"/>
 <br></br>

<label htmlFor="fname"style={{width:'70%' ,marginLeft:'15%'}} className="h6">fname: </label>
                <input type="text" 
                       name="fname" 
                       value={user.fname}
                       style={{width:'70%' ,marginLeft:'15%'}}
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter first name"/>
<br></br>

<label htmlFor="lname" style={{width:'70%' ,marginLeft:'15%'}} className="h6">lname: </label>
                <input type="text" 
                       name="lname" style={{width:'70%' ,marginLeft:'15%'}}
                       value={user.lname}
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter last name"/>
<br></br>

<label htmlFor="Phonenumber"style={{width:'70%' ,marginLeft:'15%'}}  className="h6">phone number: </label>
                <input type="number" 
                       name="Phonenumber" 
                       value={user.Phonenumber}
                       onChange={onChange} 
                       style={{width:'70%' ,marginLeft:'15%'}}
                       className="form-control" 
                       placeholder="Enter Phonenumber"/>

<br></br>

                <label htmlFor="password" style={{width:'70%' ,marginLeft:'15%'}}  className="h6">Password: </label>
                <input type="password" 
                style={{width:'70%' ,marginLeft:'15%'}}
                       name="password"
                       value={user.password} 
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter Password"/>
                       <br></br>
                <label htmlFor="role" style={{width:'70%' ,marginLeft:'15%'}} className="h6"> </label>
                <input type="text" 
                       name="role"
                       style={{width:'70%' ,marginLeft:'15%'}}
                       value={user.role}  
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter role (admin/user)"/>
                       <br></br>
                       <div class="mb-3 form-check">
    <input type="checkbox" style={{width:'1%' ,marginLeft:'15%'}}  class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1" style={{width:'70%' ,marginLeft:'18%'}} >"I Agree" Checkboxes for Privacy Policies and Terms and Conditions Agreements</label>
  </div>
                <button className="btn btn-lg btn-primary btn-block" style={{width:'50%' ,marginLeft:'25%'}}
                        type="submit">Register</button>     <br></br> <br></br> <br></br>
            </form>
            {message ? <Message message={message}/> : null}
            </div>
        </div>
    )
}

export default Register;