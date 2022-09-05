import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function RoomCards() {
    const [room, setRoom] = useState([]);

    const getRoom = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/rooms")
            console.log("Data set ", res);
            setRoom(res.data);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getRoom()
    }, []);

    return (
        <div>
            <div className="row m-3 p-3 bs">
                <p>
                    {room.map((item) => {
                        return (
                            <div>
                                <div className="row py-3">
                                    <div className="col-md-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title"> <b className='roomtype'> {item?.RoomType} </b></h5>
                                                <img src={item?.RoomIMG} className="room_img" />
                                                <Link to={`updateroom/${item?._id}`}><button type="button" class="btn btn-warning">Update</button></Link>
                                                <Link to={`viewroom/${item?._id}`}><button type="button" class="btn btn-warning">View</button></Link>
                                                <Link to={`updateroom/${item?._id}`}><button type="button" class="btn btn-warning">Delete</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </p>

                <Link to='/addroom'>
                    <button className='btn btn-success' type='submit'>Add Room</button>
                </Link>
                <Link to='/deleteroom'>
                    <button className='btn btn-warning' type='submit'>Delete Room</button>
                </Link>



            </div>
        </div>
    )
}

export default RoomCards