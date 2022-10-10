import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const AddToCart = (props) => {
  const Quantity = 1;

  useEffect(() => {
    console.log("data", props?.data);
  }, []);

  return (
    <div>
      <Link to="/Displaymenus"><span type="submit" class="badge rounded-pill badge-warning">back to menu list </span></Link>
      <MDBTable align='middle' >
        <MDBTableHead>
          <tr>
            <th scope='col'>Order Menu Images   </th>
            <th scope='col'>Order Menu  item Description </th>
            <th scope='col'>Order Menu  item Quantity  </th>
            <th scope='col'>Order Menu  item   price </th>
            <th scope='col'>Each Item Price </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody  >

          {props?.data?.map((item) => {
            return (
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <img
                      src={item?.images}
                      alt=''
                      style={{ width: '45px', height: '45px' }}
                      className='rounded-circle'
                    />
                    <div className='ms-3'>
                      <p className='fw-bold mb-1'>  {item?.foodName}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className='fw-normal mb-1'>    {item?.Description}</p>
                </td>
                <td>
                  <p className='fw-normal mb-1'>    {Quantity}</p>
                </td>

                <td>
                  <h4> <MDBBadge color='success' pill>
                    {item?.price}
                  </MDBBadge></h4>
                </td>
         
              </tr>
    
            )
          

          })}

        </MDBTableBody>

      
      </MDBTable>

    </div>
  )
}

export default AddToCart