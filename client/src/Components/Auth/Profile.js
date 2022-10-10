import React from "react";
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AuthCustomer } from "../../Services/AuthServices";
import logo from '../Auth/loginn.png'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';


const Profile = () => {


    const navigate = useNavigate();
 

  const handleSubmit = () => {
         localStorage.removeItem("token");
         localStorage.removeItem("userRole");
         navigate("/Login");
     }
 
     const [Fullname, setUserName] = useState("");
     const [email, setUserEmail] = useState("");
     const [currentUserID, setcurrentUserID] = useState("");


     const handleUserName = (e) => {
        setUserName(e.target.value);
    };


    const handleUserEmail = (e) => {
        setUserEmail(e.target.value);
    };




    const details = async () => {
        let token = localStorage.getItem('token');
        let data = await AuthCustomer(token);
        console.log("current User", data?.data);
        setcurrentUserID(data?.data?._id);
        setUserName(data?.data?.Fullname);
        setUserEmail(data?.data?.email);
       
    }


    useEffect(() => {
        details();
    }, [])






  return (


    <div className="vh-100">
        <br></br>
    <MDBContainer className="container py-5 h-100"  style={{ backgroundColor: '#eee' }} >
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol md="12" xl="4">
          <MDBCard style={{ borderRadius: '25px', backgroundColor: '#f7e34a' , width:'400px'}}>
            <MDBCardBody className="text-center">
              <div className="mt-3 mb-4">
                <MDBCardImage src={logo}
                  className="rounded-circle" fluid style={{ width: '100px' }} />
              </div>
              <MDBTypography tag="h4"  onChange={handleUserName} value={Fullname} type="text" readOnly={true} >{Fullname}</MDBTypography>
              <MDBCardText className="text-muted mb-4"  onChange={handleUserEmail}  value={email} type="email" readOnly  >
                 <span className="mx-2" onChange={handleUserEmail}   type="email" readOnly  ></span> {email}<a href="#!"></a>
              </MDBCardText>
              <div className="mb-4 pb-2">
                <MDBBtn outline floating>
                  <MDBIcon fab icon="facebook" size="lg" />
                </MDBBtn>
                <MDBBtn outline floating className="mx-1">
                  <MDBIcon fab icon="twitter" size="lg" />
                </MDBBtn>
                <MDBBtn outline floating>
                  <MDBIcon fab icon="skype" size="lg" />
                </MDBBtn>
              </div>
              <MDBBtn rounded size="lg">
            Your Profile
              </MDBBtn>
           
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <br></br>
    <br></br>
  </div>



  )
}




export default Profile