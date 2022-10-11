import Swal from "sweetalert2";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import CommentsSection from "../../Comments/CommentsSection";
import StripeCheckout from 'react-stripe-checkout';
import { AuthCustomer } from "../../../Services/AuthServices";
import axios from 'axios'

const Booking = () => {
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

  const { id, fromdate, todate } = useParams();

  const [room, setRoom] = useState([]);

  const [name, setname] = useState("");
  const [totDates, setTotDates] = useState("");
  const [maxcount, setmaxcount] = useState();
  const [rentperday, setrentperday] = useState("");
  const [type, settype] = useState("");
  const [imageurls, setimageurls] = useState("");
  const [features, setfeatures] = useState("");
  const [description, setdescription] = useState("");

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

  useEffect(() => {
    const toDate = new Date(todate);
    const fromDate = new Date(fromdate);

    console.log(toDate);
    console.log(fromDate);
    setTotDates(
      Math.floor(
        (toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24)
      )
    );
  }, [todate, fromdate]);

  const totAmount = room.rentperday * totDates

  useEffect(() => {
    const getRoom = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/room/getRoomsById/${id}`)
        setRoom(res.data);
        console.log('render');
      } catch (err) {
        console.log(err);
      }
    }
    getRoom()
  }, []);

  async function bookRoom() {
    const bookingDetails = {
      room: room.name,
      userid: room._id,
      Fullname,
      email,
      fromdate,
      todate,
      totAmount,
      totDates,
    }

    try {
      const result = await axios.post('http://localhost:5000/book/bookroom', bookingDetails)
    } catch (error) {

    }
  }

  async function handleToken(token) {
    console.log(token);
  }

  function onToken(token) {
    console.log(token);
  }

  // const GetData = async () => {
  //   let data = await getRoomsById(id);
  //   console.log("Update Rooms", data);
  //   setname(data?.data?.name);
  //   setmaxcount(data?.data?.maxcount);
  //   setrentperday(data?.data?.rentperday);
  //   settype(data?.data?.description);
  //   setimageurls(data?.data?.imageurls);
  //   setfeatures(data?.data?.features);
  //   setdescription(data?.data?.description);
  // };

  // useEffect(() => {
  //   GetData();
  // }, []);

  return (
    <div>
      <div className="container shadow border border-5 my-5 mx-auto w-100">
        <div className="col p-3">
          <h3 className=" fw-bolder mb-4">
            <center>Booking Room</center>
          </h3>

          <form>
            <div className="row py-3">
              <div className="col-md-6"> <br/>
                <img src={room.imageurls} className="image-fluid" alt="" />
              </div>
              <div className="col-md-6">
                <b>
                  <h1>Booking Details</h1>
                  <hr />
                  <div>
                    <p>Customer Name: {Fullname}</p>
                    <p>Customer E-mail: {email}</p>
                    <p>Room Name: {room.name}</p>
                    <p>Check-in Date: {fromdate}</p>
                    <p>Check-out Date: {todate}</p>
                  </div><br />
                  <div>
                    <h1>Payment Details</h1>
                    <hr />
                    <p>Rent Per Day: LKR {room.rentperday}/=</p>
                    <p>Total Days: {totDates}</p>
                    <p>Total Amount: LKR {totAmount}/=</p>
                  </div>
                </b>
              </div>
            </div>
            <br />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">

              <Link to="/profile">
                <MDBBtn
                  rounded
                  color="success"
                  type="submit"
                  className="btn btn-success"> Booking Details
                </MDBBtn>
              </Link>

              <a>
                <Link to="/cusroom">
                  <MDBBtn
                    rounded
                    color="warning"
                    type="submit"
                    className="btn btn-success"> Back to Home
                  </MDBBtn>
                </Link>
              </a>
            </div>
          </form>
        </div>
      </div>

      <StripeCheckout
        stripeKey="pk_test_51Lr1EmF53OEZBtIfnDtu50k4oS98pyE6AfE0grktJfgVawhf7fEMAIbuSnQLCjXTDqC9PHNoJa2JkuJuZUeCI26300PQrA3w3S"
        token={handleToken}
        billingAddress
        shippingAddress
        amount={totAmount * 100}
        currency='LKR'>

        <MDBBtn rounded
          color="warning"
          type="submit" className='btn btn-danger' onClick={bookRoom}>Pay Now</MDBBtn>

      </StripeCheckout>

      <div>
        <CommentsSection />
      </div>
    </div>
  );
};

export default Booking;