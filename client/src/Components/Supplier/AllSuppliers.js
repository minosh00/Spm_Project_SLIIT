import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../Restaurants/Loader";
import autoTable from 'jspdf-autotable'
import { jsPDF } from "jspdf";
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


 function pdfGenerat(){
  var doc = new jsPDF('landscape', 'px', 'a4', 'false');
  
  doc.autoTable({
         
          body: [
              [{ content: '  ', colSpan: 2, rowSpan: 2, styles: { halign: 'center' } }],
            ],
          })
      autoTable(doc, { html: '#supdate' })
     doc.save('supply.pdf')

        }


 return (
    <div className="container">
      <br></br>   
      <br></br> 
      <h3 className=" fw-bolder mb-4"><center>Suppliers</center></h3>   
      <br></br>
      <div class="input-group">
      <div className="col-md-4">
        <input type="search" class="form-control" style={{ }} placeholder="Search by Supplier Name  " aria-label="Search"  onChange={event=>{setserachItem(event.target.value)}} 
   aria-describedby="search-addon" />
        </div>
    </div>
    <br></br><br></br>
    <h3> <Link to="/addsupplier"><span type="submit" class="badge rounded-pill badge-info">Add New Supplier</span></Link></h3>
    <br></br>
    <MDBTable align='middle'>
      <MDBTableHead >
      <button className="btn btn-danger btn-sm"  onClick={pdfGenerat}>Generate  Menu PDF</button>
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
    <MDBTableBody id="supdate" >
    {Supplier &&
             Supplier.filter((users)=>{
               if(serachItem ==""){
                     return users
               }else if(users.suppliername.toLowerCase().includes(serachItem.toLowerCase())){
            
                 return users
    }   }).map((user) => {
    return (
       <tr>
         <td>
           <div className='d-flex align-items-center'>
             <div className='ms-3'>
               <p className='fw-bold mb-1'>{user.suppliername}</p>
             </div>
           </div>
         </td>
         <td>
           <p className='fw-normal mb-1'>  {user.supplierCompanyName}</p>
         </td>
         <td>
           <p className='fw-normal mb-1'>  {user.SupplyItemsname}</p>
         </td>
         <td>
           <p className='fw-normal mb-1'>  {user.SupplyAmount}</p>
         </td>
         <td>
           <p className='fw-normal mb-1'>  {user.SupplyDate}</p>
         </td>
         <td>
         <p className='fw-normal mb-1'>  {user.totalPrice}</p>
         </td>
         <td>
         <Link to={`/updateSupplierByID/${user?._id}`}>
         <h5><span  type="submit" class="badge rounded-pill badge-success">Update</span></h5>
                    
          </Link>
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

