 
import React, { useState } from "react";
import Swal from "sweetalert2";
import logo from '../../images/menuss.png'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from "axios";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';




const AddMenu = () => {



    const [values, setValues] = useState({
        foodName: "",
        price: "",
        RestaurantsType: "",
        Description:"",
        images:""
    });


  
    const validationSchema = Yup.object().shape({
        foodName: Yup.string()
            .required('Name is required*')
            .min(5, 'Name must be at least 5 characters*'),
            price: Yup.string()
            .required('price is required*'),
            RestaurantsType: Yup.string()
            .required('Restaurants Type is required*'),
            Description: Yup.string()
            .required('food Description  Type is required*')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState, reset } = useForm(formOptions);
    const { errors } = formState;


    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
  
    const onSubmit = async (data) => {

        try {

            const response = await axios.post(`http://localhost:5000/foods/menu`, data);

            if (response.status === 201) {
                toast(response.data.message, { type: toast.TYPE.SUCCESS });
                reset();

                // setTimeout to 2.5s and navigate back to ViewMember page
                setTimeout(() => {
                    window.location = "/";
                }, 2500);
                setTimeout();
            }

        } catch (error) {
            toast(error.response.data.message, { type: toast.TYPE.ERROR });
        }
    }


    
    
  
  return (

    <div style={{backgroundColor:"black"}}>
			      
		<br/>
   
<div className="container-fluid px-1 px-md-7 px-lg-1 px-xl-5 py-10 mx-auto " style={{backgroundColor:"black"}}>

                   <div className="card card0 border-0" style={{backgroundColor:"black"}}>
               
                     <br></br>
               
                       <div className="row d-flex" >
                  
                           <div className="col-lg-6" >
                               <div className="card1 pb-5">
                          
                                   <div className="row px-3 justify-content-center mt-4 mb-5 border-line" > <img  src={logo} style={{height:"240%" ,width:"250%" , marginTop:"40%"}} className="image" /> </div>
                               </div>

                       
                           </div>

                           
                           <div className="col-lg-6">
                           <h1 style={{color:"red" }} >Add New Menu item  </h1>
                               <div className="card2 card border-0 px-4 py-5" style={{backgroundColor:"black"}}>
                               <form  onSubmit={handleSubmit(onSubmit)}>
                        
                               <br></br>
                            
                                   <div class="form-floating mb-3">
                                   <label for="" style={{color:"white" , fontSize:"20px"}}>  Food Name </label><br></br><br></br>
                                       <input type="text"  id="floatingInput"  style={{width:"200%"}}        className={`form-control ${errors.foodName ? 'is-invalid' : ''}`}    name="foodName"       {...register('foodName')}        onChange={handleChange}  required placeholder="food name " />
                                   
                                   </div>
                                   
                                   <div className="invalid-feedback">{errors.foodName?.message}</div>


                                   <div class="form-floating mb-3"><br></br><br></br>
                                   <label for="floatingPassword" style={{color:"white" , fontSize:"20px"}}  >Food Price </label>
                                       <input  id="floatingPassword"  style={{width:"200%"}}          name="price"  {...register('price')}     className={`form-control ${errors.price ? 'is-invalid' : ''}`}         onChange={handleChange}  required  type="number"   placeholder="Food Price " />
                                     
                                   </div>
                                   
                                   <div className="invalid-feedback">{errors.price?.message}</div>


                                   <div class="form-floating mb-3"><br></br><br></br>
                                   <label for="floatingInput"  style={{color:"white" , fontSize:"20px"}}  >  Restaurants Type </label>
                                    
                                       <input type="text" id="exampleFormControlTextarea3"  style={{width:"200%"}}     {...register('RestaurantsType')}    className={`form-control ${errors.RestaurantsType ? 'is-invalid' : ''}`}         name="RestaurantsType"         onChange={handleChange}  required  placeholder="  Restaurants Type"  >
                                       </input>

                                   </div>

                                        <div className="invalid-feedback">{errors.RestaurantsType?.message}</div>
                                  
                                   
                                   
                                   <div class="form-floating mb-3"><br></br><br></br>
                                   <label for="floatingInput"  style={{color:"white" , fontSize:"20px"}}  >  Description </label>
                                    
                                       <textarea   id="exampleFormControlTextarea3"   style={{width:"200%"}}     {...register('Description')}     className={`form-control ${errors.Description ? 'is-invalid' : ''}`}      name="Description"          onChange={handleChange}  required  placeholder=" food Description"    rows="6">
                                       </textarea>

                                   </div>


                                   <div className="invalid-feedback">{errors.Description?.message}</div>
                                 

                                   <div class="form-floating mb-3"><br></br><br></br>
                                   <label for="floatingInput"  style={{color:"white" , fontSize:"20px"}}  >  Image Link </label>
                                    
                                       <textarea  id="exampleFormControlTextarea3" style={{width:"200%"}}     {...register('images')}     className={`form-control ${errors.images ? 'is-invalid' : ''}`}          name="images"          onChange={handleChange}  required  placeholder="  food image link   "  rows="6">
                                       </textarea>

                                   </div>

                                   <div className="invalid-feedback">{errors.images?.message}</div>






                              
                                   <div className="row mb-5 px-4">
                                       <a ><button  type="submit"   style={{ fontSize:"15px"  }}   className="btn btn-danger">Add Menu  </button></a>
                                      <br></br><br></br>
                                      <a ><Link  to ="/AllMenus"><button  type="submit"   style={{ fontSize:"10px"  }}    className="btn btn-success">Back to Home    </button></Link></a>

                                   </div>
                                   </form>
                                   <div>
                                     
                               
                                       
                                   </div>
                                   
                               </div>
                           </div>
                       </div>
                     
               
                   </div>
               </div>
               </div>

  );
};

export default AddMenu;
