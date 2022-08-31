import React, { useState } from 'react'; 
import axios from "axios"; 
 
const AddRooms = () => { 
 
    const [room, setRoom] = useState({ 
        RoomID: "", 
        RoomType: "", 
        Description: "", 
        Features: "" 
    }); 
 
    //const [file, setFile] = useState(''); 
 
    function HandleSubmit (e) { 
        e.preventDefault(); 
        axios 
            .post("http://localhost:5000/api/rooms", room) 
            .then(() => { 
                alert("Create"); 
            }) 
            .catch((err) => { 
                alert(err) 
            }); 
            setRoom ({ 
                RoomID: "", RoomType: "", Description: "", Features: "" 
            }); 
    } 
 
    function onChangeInput (e) { 
        const {name, value} = e.target; 
        setRoom ((preValue) => { 
            return { 
                ...preValue, 
                [name]:value 
            } 
        }) 
    } 
 
    // const handleChange = (e) => { 
    //     const data = e.target.files[0] 
    //     setFile(data) 
    // } 
 
    return ( 
        <div> 
            <div> 
                <div className="container shadow border border-5 my-5 mx-auto w-50"> 
                    <div className="col p-3"> 
                        <h3 className=" fw-bolder mb-4"><center>Add Room Details</center></h3> 
                        <form onSubmit={HandleSubmit}> 
                            <div className='row py-3'> 
                                <div class="col-md-3"> 
                                    <label for="gid" class="form-label">Room ID</label> 
                                    <input name="RoomID" value={room.RoomID} onChange={onChangeInput} type="text" class="form-control" id="RoomID" placeholder='Room ID' required /> 
                                </div> 
                                <div class="col-md-4"> 
                                    <label for="gid" class="form-label">Room ID</label> 
                                    <input name="RoomType" value={room.RoomType}
onChange={onChangeInput} type="text" class="form-control" id="RoomType" placeholder='Enter Room Type' required /> 
                                </div> 
                                <div class="col-md-5"> 
                                    <label for="gid" class="form-label">Images</label> 
                                    {/* <input type="file" onChange={handleChange} className='form-control' /> 
                                    {file && 
                                        <div> 
                                            <span>{file.name}</span> 
                                            <img src={URL.createObjectURL(file)} /> 
                                        </div> 
 
                                    }*/} </div>  
                            </div> 
                            <div className='row py-3'> 
                                <div class="col-md-12"> 
                                    <label for="name" class="form-label">Room Type</label> 
                                    <textarea name="Description" value={room.Description} onChange={onChangeInput} type="text" class="form-control" rows='5' cols='8' placeholder='Add Description' required /> 
                                </div> 
                            </div> 
                            <div class="mb-3"> 
                                <label for="name" class="form-label">Features</label> 
                                <textarea name="Features" value={room.Features} onChange={onChangeInput} type="text" class="form-control" rows='4' cols='8' placeholder='Add Features' required /> 
                            </div> 
                            <button type="submit" class="btn btn-danger rounded-pill">Add New Room</button> 
                            <br /> 
                        </form> 
                    </div> 
                </div> 
            </div> 
        </div> 
    ) 
} 
 
export default AddRooms;