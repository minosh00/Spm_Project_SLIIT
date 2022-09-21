import Swal from "sweetalert2";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getRoomsById, updateRoomsByID1 } from "./services/Room";
import { MDBBtn } from 'mdb-react-ui-kit'

const DisplayOneRoom = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setname] = useState("");
  const [maxcount, setmaxcount] = useState();
  const [rentperday, setrentperday] = useState("");
  const [type, settype] = useState("");
  const [imageurls, setimageurls] = useState("");
  const [features, setfeatures] = useState("");
  const [description, setdescription] = useState("");


  const handlename = (e) => {
    setname(e.target.value);
  };

  const handlemaxcount = (e) => {
    setmaxcount(e.target.value);
  };

  const handlerentperday = (e) => {
    setrentperday(e.target.value);
  };

  const handletype = (e) => {
    settype(e.target.value);
  };

  const handleimageurls = (e) => {
    setimageurls(e.target.value);
  };


  const handlefeaturess = (e) => {
    setfeatures(e.target.value);
  };

  const handledescription = (e) => {
    setdescription(e.target.value);
  };

  const GetData = async () => {
    let data = await getRoomsById(id);
    console.log("Update Rooms", data);
    setname(data?.data?.name);
    setmaxcount(data?.data?.maxcount);
    setrentperday(data?.data?.rentperday);
    settype(data?.data?.description);
    setimageurls(data?.data?.imageurls);
    setfeatures(data?.data?.features);
    setdescription(data?.data?.description);

  };

  useEffect(() => {
    GetData();
  }, []);

  const UpdateData = async (e) => {
    e.preventDefault();
    let newdata = {

      name: name,
      maxcount: maxcount,
      rentperday: rentperday,
      description: description,
      type: type,
      imageurls: imageurls,
      features: features,

    };

    let data = await updateRoomsByID1(id, newdata);
    console.log("Update success ", data);
    if (!data?.data?.foodName) {
      {
        Swal.fire('Congrats', 'Update Room Successfully', 'success')
        navigate("/mainroom");
      }

    } else {
      {
        Swal.fire('Congrats', 'Update Room Unsuccessfully', 'success')
        navigate("/mainroom");
      }
    }
  };

  return (

    <div>
      <div className="container shadow border border-5 my-5 mx-auto w-50">
        <div className="col p-3">
          <h3 className=" fw-bolder mb-4"><center>View Room Details</center></h3>
          <form>

            <div className="row py-3">
              <div className="col-md-6">
                <label for="name"> Room Name </label>
                <input type="text" class="form-control" value={name} placeholder="room name " />
              </div>
              <div class="col-md-6">
                <label for="type"> Room Type  </label>
                <input class="form-control" id="type" value={type} placeholder="Enter Room Type" />
              </div>

            </div>

            <div className="row py-3">
              <div class="col-md-3">
                <label for="count"> Max Count </label>
                <input class="form-control" type="number" value={maxcount} placeholder="Enter Max Count" />
              </div>
              <div class="col-md-4">
                <label for="rent">  Rent Per day (LKR) </label>
                <input class="form-control" type="number" value={rentperday} placeholder="Enter Rent Per Day" />
              </div>
              <div class="col-md-5">
                <label for="img">  Image URL </label>
                <input class="form-control" id="url" value={imageurls} placeholder="Enter IMG Url" />
              </div>
            </div>

            <div class="col-md-12">
              <label for="features"> Features </label>
              <textarea class="form-control" type="text" value={features} placeholder="Enter Features" rows="3" /> <br />
            </div>
            <div class="col-md-12">
              <label for="floatingPassword"  >Description   </label>
              <textarea class="form-control" type="text" value={description} placeholder="Enter Description" rows="6" />
            </div> <br />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <a><Link to="/"><MDBBtn rounded color="warning" type="submit" className="btn btn-success">Back to Home  </MDBBtn></Link></a>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
};

export default DisplayOneRoom;

