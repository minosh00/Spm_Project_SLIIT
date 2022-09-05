import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ViewRooms() {
    const [room, setRoom] = useState([]);

    useEffect(() => {
        const getRoom = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/rooms")
                setRoom(res.data);
                console.log('render');
            } catch (err) {
                console.log(err);
            }
        }
        getRoom()
    }, []);

    return (
        <div>
            <div className='container shadow my-5'>
                <h3 className=" fw-bolder mb-4"><center>Room Details</center></h3>
                <div class="input-group">
                    <table class="table">
                        <thead className='table-dark'>
                            <tr>
                                <th scope='col'>No</th>
                                <th scope="col">Room ID</th>
                                <th scope="col">IMG</th>
                                <th scope="col">Room Type</th>
                                <th scope="col">Description</th>
                                <th scope="col">Features</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            {
                                room.map((room, id) => (
                                    <tr>
                                        <td>{id + 1}</td>
                                        <td>{room.RoomID}</td>
                                        <td>{room.RoomType}</td>
                                        <td><img src={room.RoomIMG} style={{ height: "55px", width: "94px" }} className="container" /></td>
                                        <td>{room.Description}</td>
                                        <td>{room.Features}</td>
                                    </tr>
                                )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default ViewRooms 