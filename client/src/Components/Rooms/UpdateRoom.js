import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';

const UpdateRoom = (props) => {
    const [room, setRoom] = useState({
        RoomType: "",
        RoomIMG: "",
        Description: "",
        Features: ""
    });

    const { id } = useParams("");

    function UpadateRoom(e) {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/rooms/${id}`, room)
            .then(res => {
                console.log(res.data)
                alert("Room Updated Successfully")
                props.history.push('/data')
            }).catch((err) => {
                alert(err)
                console.error(err)
            })
    }


    useEffect(() => {
        const getdata = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/rooms/${id}`)
                setRoom(res.data);
                console.log('render');
            } catch (err) {
                console.log(err);
            }
        }
        getdata()
    }, []);


    return (
        <div>
            <form onSubmit={UpadateRoom}>
                <input type="text" className="form-control" id="RoomType" placeholder="Enter Name"
                    value={room.RoomType}
                    onChange={(e) => { setRoom({ name: e.target.value }) }}></input>
                    <input type="text" className="form-control" id="RoomIMG" placeholder="Enter Name"
                    value={room.RoomIMG}
                    onChange={(e) => { setRoom({ name: e.target.value }) }}></input>
                    <input type="text" className="form-control" id="Description" placeholder="Enter Name"
                    value={room.Description}
                    onChange={(e) => { setRoom({ name: e.target.value }) }}></input>
                    <input type="text" className="form-control" id="Features" placeholder="Enter Name"
                    value={room.Features}
                    onChange={(e) => { setRoom({ name: e.target.value }) }}></input>
            </form>

        </div>
    )
}

export default UpdateRoom