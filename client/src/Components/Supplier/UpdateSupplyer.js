import Swal from "sweetalert2";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateSupplierByID, getSupplierById } from "./services/Sup";
import { MDBBtn } from 'mdb-react-ui-kit'




const UpdateSupplyer = () => {

    
  const navigate = useNavigate();
  const { id } = useParams();

  const [suppliername, SETsuppliername] = useState("");
  const [supplierCompanyName, SETsupplierCompanyName] = useState();
  const [SupplyItemsname, SETSupplyItemsname] = useState("");
  const [SupplyAmount, SETSupplyAmount] = useState("");
  const [SupplyDate, SETSupplyDate] = useState("");
  const [totalPrice, SETtotalPrice] = useState("");

  
  const handlename = (e) => {
    SETsuppliername(e.target.value);
  };

  const handlemaxcount = (e) => {
    SETsupplierCompanyName(e.target.value);
  };

  const handleAdult = (e) => {
    SETSupplyItemsname(e.target.value);
  };

  const handleChildren = (e) => {
    SETSupplyAmount(e.target.value);
  };

  const handleBedroom = (e) => {
    SETSupplyDate(e.target.value);
  };

  const handlerentperday = (e) => {
    SETtotalPrice(e.target.value);
  };

  

  const GetData = async () => {

    let data = await getSupplierById(id);
    console.log("Update Supplier", data);

    SETsuppliername(data?.data?.suppliername);
    SETsupplierCompanyName(data?.data?.supplierCompanyName);
    SETSupplyItemsname(data?.data?.SupplyItemsname);
    SETSupplyAmount(data?.data?.SupplyAmount);
    SETSupplyDate(data?.data?.SupplyDate);
    SETtotalPrice(data?.data?.totalPrice);


  };

  useEffect(() => {
    GetData();
  }, []);


  const UpdateData = async (e) => {
    e.preventDefault();
    let newdata = {

        suppliername: suppliername,
        supplierCompanyName: supplierCompanyName,
        SupplyItemsname: SupplyItemsname,
        SupplyAmount: SupplyAmount,
        SupplyDate: SupplyDate,
        totalPrice: totalPrice,


    };

    let data = await updateSupplierByID(id, newdata);
    console.log("Update success ", data);
    if (!data?.data?.suppliername) {
      {
        Swal.fire('Congrats', 'Update   successfully ', 'success')
        navigate("/AllSuppliers");
      }

    } else {
      {
        Swal.fire('Congrats', 'Update  successfully ', 'success')
        navigate("/AllSuppliers");
      }
    }
  };



  return (
    <div>
    <div className="container shadow border border-5 my-5 mx-auto w-50">
      <div className="col p-3">
        <h3 className=" fw-bolder mb-4"><center>Update Room Details</center></h3>
        <form>

          <div className="row py-3">
            <div className="col-md-6">
              <label for="name"> supplier name  </label>
              <input type="text" class="form-control" value={suppliername} onChange={handlename} placeholder=" " />
            </div>
            <div class="col-md-6">
              <label for="type"> supplier Company Name   </label>
              <input class="form-control" id="type" value={supplierCompanyName} onChange={handlemaxcount} placeholder="  " />
            </div>
          </div>

          <div className="row py-3">
            <div class="col-md-3">
              <label for="count"> Supply Items name </label>
              <input class="form-control" type="number" value={SupplyItemsname} onChange={handleAdult} placeholder="  " />
            </div>
            <div class="col-md-4">
              <label for="rent">  Supply Amount </label>
              <input class="form-control" type="number" value={SupplyAmount} onChange={handleChildren} placeholder="  " />
            </div>
            
          </div>

           <br />
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <MDBBtn rounded color="danger" type="submit" onClick={(e) => UpdateData(e)} className="btn btn-warning"> Update  </MDBBtn>
            <a><Link to="/AllSuppliers"><MDBBtn rounded color="warning" type="submit" className="btn btn-success">Back to Home  </MDBBtn></Link></a>
          </div>
        </form>
      </div>
    </div>
  </div>  )
}

export default UpdateSupplyer