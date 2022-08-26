import React, {useState,useRef,useEffect} from 'react';
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';

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
            setMessage(message);
            resetForm();
            if(!message.msgError){
                timerID = setTimeout(()=>{
                    props.history.push('/login');
                },2000)
            }
        });
    }



    return(
        <div>
            <form onSubmit={onSubmit}>
                <h3>Please Register</h3>
                <label htmlFor="username" className="sr-only">Username: </label>
                <input type="text" 
                       name="username" 
                       value={user.username}
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter Username"/>


<label htmlFor="fname" className="sr-only">fname: </label>
                <input type="text" 
                       name="fname" 
                       value={user.fname}
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter first name"/>


<label htmlFor="lname" className="sr-only">lname: </label>
                <input type="text" 
                       name="lname" 
                       value={user.lname}
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter last name"/>


<label htmlFor="Phonenumber" className="sr-only">phone number: </label>
                <input type="number" 
                       name="Phonenumber" 
                       value={user.Phonenumber}
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter Phonenumber"/>



                <label htmlFor="password" className="sr-only">Password: </label>
                <input type="password" 
                       name="password"
                       value={user.password} 
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter Password"/>
                <label htmlFor="role" className="sr-only">Role: </label>
                <input type="text" 
                       name="role"
                       value={user.role}  
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter role (admin/user)"/>
                <button className="btn btn-lg btn-primary btn-block" 
                        type="submit">Register</button>
            </form>
            {message ? <Message message={message}/> : null}
        </div>
    )
}

export default Register;