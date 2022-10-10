import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../Restaurants/Loader";
import { Link } from "react-router-dom";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const  AllSuppliers = ()=> {
 const [serachItem,setserachItem] =useState([]);
 const [Supplier, setusers] = useState();
 const [loading, setloading] = useState(true);

 useEffect(async () => {
   try {
     const data = await (
       await axios.get("http://localhost:5000/supplier/getAllSupplier")
     ).data;
     setusers(data);
     setloading(false);
   } catch (error) {
     console.log(error);
     setloading(false);
   }
 }, []);


 const removeSupplier = id =>{
   axios.delete(`http://localhost:5000/supplier/RemoveSupplier/${id}`)
   .then(res => 
     
     {Swal.fire('Congrats' , ' Remove  Supplier successfully ' , 'success')
 
 }    )
 setusers(Supplier.filter(elem=>elem._id !== id))
 }

 return (
    <div className="container">
      <br></br>   
      <br></br> 
      <h3 className=" fw-bolder mb-4"><center>Suppliers</center></h3>   
      <br></br>
      <div class="input-group">
      <div className="col-md-9">
        <input type="search" class="form-control" style={{ }} placeholder="Search by Supplier Name  " aria-label="Search"  onChange={event=>{setserachItem(event.target.value)}} 
   aria-describedby="search-addon" />
        </div>
    </div>
    <br></br><br></br>
    <h3> <Link to="/addsupplier"><span type="submit" class="badge rounded-pill badge-info">Add New Supplier</span></Link></h3>
    <br></br>
    <MDBTable align='middle'>
      <MDBTableHead>
       <tr>
         <th scope='col'>Supplier name   </th>
         <th scope='col'>Supplier Company </th>
         <th scope='col'>Supplies Items   </th>
         <th scope='col'>Supplies Amount   </th>
         <th scope='col'>Supply Date   </th>
         <th scope='col'>Total Price  </th>
         <th scope='col'>Actions</th>
       </tr>
      </MDBTableHead>
    <MDBTableBody>
    {Supplier &&
             Supplier.filter((users)=>{
               if(serachItem ==""){
                     return users
               }else if(users.fname.toLowerCase().includes(serachItem.toLowerCase())){
            
                 return users
    }   }).map((user) => {
    return (
       <tr>
         <td>
           <div className='d-flex align-items-center'>
             <div className='ms-3'>
               <p className='fw-bold mb-1'>{user.fname}</p>
             </div>
           </div>
         </td>
         <td>
           <p className='fw-normal mb-1'>  {user.Company}</p>
         </td>
         <td>
           <p className='fw-normal mb-1'>  {user.Supplies}</p>
         </td>
         <td>
           <p className='fw-normal mb-1'>  {user.SupplyAmount}</p>
         </td>
         <td>
           <p className='fw-normal mb-1'>  {user.SupplyDate}</p>
         </td>
         <td>
         <p className='fw-normal mb-1'>  {user.totPrice}</p>
         </td>
         <td>
         <h5><Link to ="/"><span   type="submit" class="badge rounded-pill badge-info">Update</span></Link></h5> 
         <h5><span  onClick={()=>removeSupplier(user._id)}  type="submit" class="badge rounded-pill badge-danger">Remove</span></h5> 
         </td>
       </tr>
          );
       })}
     </MDBTableBody>
   </MDBTable>
   </div>
   
 );
}
export default AllSuppliers ;

