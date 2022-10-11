  
 import React, { useState, useEffect } from "react";
 import axios from "axios";
 import Swal from "sweetalert2";
 import Loader from "./Loader";
 import { Link } from "react-router-dom";
 import autoTable from 'jspdf-autotable'
import { jsPDF } from "jspdf";
 import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

//ss

 const  AllMenus = ()=> {



  const [serachItem,setserachItem] =useState([]);
  const [users, setusers] = useState();
  const [loading, setloading] = useState(true);



  useEffect(async () => {
    try {
      const data = await (
        await axios.get("http://localhost:5000/menu/getAllMenu/")
      ).data;
      setusers(data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }, []);


  const removefood = id =>{
    axios.delete(`http://localhost:5000/foods/RemoveFood/${id}`)
    .then(res => 
      
      {Swal.fire('Congrats' , ' remove successfully ' , 'success')
  
  }    )
  setusers(users.filter(elem=>elem._id !== id))
  }


  function pdfGenerat(){
    var doc = new jsPDF('landscape', 'px', 'a4', 'false');
    
    doc.autoTable({
           
            body: [
                [{ content: '  ', colSpan: 2, rowSpan: 2, styles: { halign: 'center' } }],
              ],
            })
        autoTable(doc, { html: '#cusdet' })
       doc.save('menu.pdf')
  
          }





  return (
    <div      className="container">
        <br></br>   <br></br>   <br></br>
        <div class="input-group">
  <div className="col-md-9">

  <input type="search" class="form-control" style={{ }} placeholder="Search by Food Name  " aria-label="Search"  onChange={event=>{setserachItem(event.target.value)}} 
    aria-describedby="search-addon" />
  </div>
</div>
<br></br><br></br>
<h3> <Link to="/addMenu"><span type="submit" class="badge rounded-pill badge-info">Add New Menu</span></Link></h3>
<br></br>
<MDBTable align='middle'>

      <MDBTableHead>
      <button className="btn btn-danger btn-sm"  onClick={pdfGenerat}>Generate  Menu PDF</button>
        <tr>
          <th scope='col'>Food Name </th>
          <th scope='col'>Food Description</th>
          <th scope='col'>Food Price </th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody id="cusdet">
      {users &&
              users.filter((users)=>{
                if(serachItem ==""){
                      return users
                }else if(users.name.toLowerCase().includes(serachItem.toLowerCase())){
             
                  return users
   }   })
           .map((user) => {
                return (
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={user.images}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{user.name}</p>
         
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>   {user.description}</p>
         
          </td>
          
          <td> Rs: {user.price}</td>
          <td>
          <h5><Link to ={{pathname:`/updateMenuByID/${user?._id}`}}><span   type="submit" class="badge rounded-pill badge-warning">Update</span></Link></h5> 
          <h5><span  onClick={()=>removefood(user?._id)}  type="submit" class="badge rounded-pill badge-danger">Delete</span></h5> 
          </td>
        </tr>
           );
        })}
      </MDBTableBody>
    </MDBTable>
    </div>
    
  );
}
 export default AllMenus;

