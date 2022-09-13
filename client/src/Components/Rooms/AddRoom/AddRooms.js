import React, { useState } from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import { ValidateAddNewMenu } from "./Validation";
import { useNavigate } from "react-router-dom";

const AddRooms = () => {
    const [name, setName] = useState("");
    const [rentperday, setrentperday] = useState();
    const [type, settype] = useState("");
    const [maxcount, setmaxcount] = useState("");
    const [features, setfeatures] = useState("");
    const [description, setdescription] = useState("");
    const [imageurls, setimageurls] = useState("");

    const navigate = useNavigate();

    const changeOnClick = (f) => {
        const room = {
            name,
            rentperday,
            type,
            maxcount,
            features,
            description,
            imageurls,
        };

        let validate = ValidateAddNewMenu(room);
        let msg = validate?.message;
        if (validate.status == false) {
            window.alert(`${msg}`);

        } else {
            axios.post("http://localhost:5000/api/rooms", room);
            Swal.fire("Congrats", "New Room Added Successfully", "success")
            navigate("/mainroom");
        }
    };


    return (
        <div>
            <div>
                <div className="container shadow border border-5 my-5 mx-auto w-50">
                    <div className="col p-3">
                        <h3 className=" fw-bolder mb-4"><center>Add Room Details</center></h3>
                        <form onSubmit={changeOnClick} encType="">
                            <div className="row py-3">
                                <div className="col-md-6">
                                    <label for="name" class="form-label">Room Name</label>
                                    <input type='text' className='form-control' name='name' onChange={(f) => setName(f.target.value)} placeholder='Room Name' required></input>
                                </div>
                                <div className="col-md-6">
                                    <label for="name" class="form-label">Type of the Room</label>
                                    <input type='text' className='form-control' name='type' onChange={(f) => settype(f.target.value)} placeholder='Enter Type of the Room' ></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label for="name" class="form-label">Rent Per Day: (LKR)</label>
                                    <input type='Number' className='form-control' name='rentperday' onChange={(f) => setrentperday(f.target.value)} placeholder='Enter Rent Per Day'></input>
                                </div>
                                <div className="col-md-4">
                                    <label for="name" class="form-label">Max Count</label>
                                    <input type='Number' className='form-control' name='maxcount' onChange={(f) => setmaxcount(f.target.value)} placeholder='Enter Max Count'></input>
                                </div>
                                <div className="col-md-4">
                                    <label for="name" class="form-label">Image URL</label>
                                    <input type='text' className='form-control' name='imageurls' onChange={(f) => setimageurls(f.target.value)} placeholder='Enter Image URL'></input>
                                </div>
                            </div> <br />
                            <div className="col-md-12">
                                <label for="name" class="form-label">Features</label>
                                <textarea type='text' className='form-control' name='features' onChange={(f) => setfeatures(f.target.value)} placeholder='Enter Features' />
                            </div> <br />
                            <div className="col-md-12">
                                <label for="name" class="form-label">Description</label>
                                <textarea type='text' className='form-control' name='description' onChange={(f) => setdescription(f.target.value)} rows='3' placeholder='Enter Description' />
                            </div> <br />
                            <button type="submit" class="btn btn-danger rounded-pill">Add New Room</button> <br />
                            <br />
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default AddRooms;