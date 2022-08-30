 
 
import React, {useEffect, useState} from 'react';
import Icon from '@material-ui/core/Icon';
import axios from "axios";
import {Button, IconButton, Input, InputLabel, MenuItem, TextField} from "@material-ui/core";
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import * as yup from "yup";
import {useFormik} from "formik";
import styled from "styled-components";


//const useStyles = makeStyles({
  //  input: {
    //  color: "red"
    //}
  //});

 const AddFoods = () => {

   /// const classes = useStyles();
 //   const [imageFile,setImageFile] = useState([]);

    const validationSchema = yup.object({
        foodName: yup
            .string('Enter food name')
            .required('Food Name is required'),
        price: yup
            .string('Enter food price')
            .required('Food price is required'),
        restaurantType: yup
            .string('Enter Restaurant')
            .required('Restaurant is required'),
        description: yup
            .string('Enter Description')
            .required('Description is required'),
            image: yup
            .string('Enter image link')
            .required('image link is required'),

    });

    const formik = useFormik({
        initialValues: {
            foodName: '',
            price: '',
            restaurantType: '',
            description:'',
            image: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
           // const formData = new FormData();
           // formData.append('file',imageFile);
         //   const config = {
           //     headers: {
           //         'content-type': 'multipart/form-data'
           //     }
           // };
            const food = {
                foodName: values.foodName,
                price: values.price,
                restaurantType: values.restaurantType,
                description: values.description,
                image: values.image,
            }

          //  console.log(imageFile,food);

            axios.post('http://localhost:5000/foods/add', food)
                .then(response => {
             
                      
                            if (response.data.success) {
                                alert('Food Successfully Added')
                            } else {
                                alert('Failed to add food')
                            }
                        }).catch((error) => {
                        alert(error.message);
                    });

               

        },
    });

    return (
        <div >
               <br></br> <br></br>   <br></br> 
        <div className='container'  >
<div  className="square border border-primary border-4 " >


            <br></br>
            <div  style={{alignContent: 'center',marginLeft:'36%' , fontSize:"40px"}}  className={'dashboard-header'}>
                Add new Food 
              
            </div>
            <br></br> <br></br>
            <div className={'main-container'}>
                <div className={'form-container'}>
                    <form onSubmit={formik.handleSubmit}  className={'dashboard-header'}>
                        <TextField
                            fullWidth
                  
                            id="outlined-basic"
                            variant="outlined"
                            name="foodName"
                            label="Food Name"
                            value={formik.values.foodName}
                            onChange={formik.handleChange}
                            error={formik.touched.foodName && Boolean(formik.errors.foodName)}
                            helperText={formik.touched.foodName && formik.errors.foodName}
                        />
                        

                        <br/><br/>
                        <TextField
                            fullWidth
                            className={'dashboard-header'}
                            id="outlined-basic"
                            variant="outlined"
                            name="price"
                            label="Food  Price" color="secondary"
                            type="number"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            error={formik.touched.price && Boolean(formik.errors.price)}
                            helperText={formik.touched.price && formik.errors.price}
                        />
                        <br/><br/>
                        <br/>
                        <InputLabel className="fom" id="type">Restaurant Type</InputLabel>
                        <TextField
                        className="fom"
                        fullWidth
                          label="" 
                            select
                            id="outlined-basic"
                            variant="outlined"
                            name="restaurantType"
                         
                          
                            value={formik.values.restaurantType}
                            onChange={formik.handleChange}
                            error={formik.touched.restaurantType && Boolean(formik.errors.restaurantType)}
                            helperText={formik.touched.restaurantType && formik.errors.restaurantType}
                            style={{'marginTop': '10px', width : '150px'}}
                        >
                            <MenuItem  className="fom" value={'Asia'}>Echo</MenuItem>
                            <MenuItem  className="fom"  value={'Tea Lounge'}>Tea Lounge</MenuItem>
                            <MenuItem  className="fom"  value={'Bar'}>Tao</MenuItem>
                            <MenuItem  className="fom"  value={'Sri lanka'}>Aswedduma</MenuItem>
                        </TextField>
                        <br/><br/>
                        <TextField
                            fullWidth
                            className="fom"
                            id="filled-multiline-flexible"
                            variant="outlined"
                            multiline
                            maxRows={7}
                            name="description"
                            label="Description"
                        
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />


                        <br/><br/><br/>
                        <InputLabel  className="fom" id="image" style={{
                            marginTop: '10px',
                            
                        }}>Image</InputLabel>
                        <br/>
                        <TextField
                       
                            name="image"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            className="fom"
                           // type="file"
                            /*style={}*/
                            value={formik.values.image}
                            onChange={formik.handleChange}
                           // onChange={(e) => {setImageFile((e.target.files[0]))}}
                            error={formik.touched.image && Boolean(formik.errors.image)}
                            helperText={formik.touched.image && formik.errors.image}
                        />
                        <br/><br/><br/>
                        <button className="btn btn-lg btn-primary btn-block" 
                        type="submit"  style={{width:'50%' ,marginLeft:'25%'}}>Add food </button><br></br><br></br>
                    </form>
                </div>
            </div>
            </div>
            <br></br><br></br>
        </div>
        </div>
    );
};

export default AddFoods;