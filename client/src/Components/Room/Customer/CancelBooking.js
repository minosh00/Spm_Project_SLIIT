import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateStatusSup = (props) => {

    const [room, setRoom] = useState({
        status: "",
    });

    useEffect(() => {
        const getRoom = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/book/getstatus/${id}`)
                setRoom(res.data);
                console.log('render');
            } catch (err) {
                console.log(err);
            }
        }
        getRoom()
    }, []);


    function sendData(e) {
        e.preventDefault();

        axios.put(`http://localhost:5000/book/updatestatus/${id}`, room)
            .then(res => {
                console.log(res.data)
                alert("Booking Status Updated Sucessfully")
                props.history.push('/profile');
            }).catch((err) => {
                alert(err)
                console.error(err)
            })
    }


    return (
        <div>
            <div>
            <br/><br/>
                <div className="container shadow my-5 update-status">
                    <div className="col p-5 mx-auto">
                        <h3 className=" fw-bolder mb-5"><center>Update Booking Status</center></h3>
                        <form onSubmit={sendData}>
                            <div className="form-group">
                                <select className="form-control" name='itemType'
                                    value={room.status}
                                    onChange={(e) => { setRoom({ status: e.target.value }) }}>
                                    <option>Pending</option>
                                    <option>Cancel</option>
                                    <option>Reject</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 rounded-pill">Update Status</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UpdateStatusSup;