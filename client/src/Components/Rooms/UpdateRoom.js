import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';

const UpdateRoom = () => {
    const [room, setRoom] = useState({
        RoomType: "",
        RoomIMG: "",
        Description: "",
        Features: "",
    });

    const { id } = useParams("");

    useEffect(() => {
        function getRoom() {
            axios
                .get(`http://localhost:5000/api/rooms/${id}`)
                .then((res) => {
                    setRoom(res.data)
                })
                .catch((err) => {
                    alert(err.message)
                })
        }
        getRoom();
    }, []);

    function UpadateRoom(e) {
        e.preventDefault();
        const updateItem = room;
        axios.put(`http://localhost:5000/api/rooms/${id}`, updateItem)
            .then(() => {
                alert('Updated')
            })
            .catch((err) => {
                alert(err)
            })
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setRoom((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    return (
        <div>
            <form onSubmit={UpadateRoom}>
                <input type='text' name="RoomType" onChange={handleChange} value={room.RoomType} placeholder='Room Type' />
                <input type='text' name="RoomIMG" onChange={handleChange} value={room.RoomIMG} placeholder='Room Type' />
                <input type='text' name="Description" onChange={handleChange} value={room.Description} placeholder='Room Type' />
                <input type='text' name="Features" onChange={handleChange} value={room.Features} placeholder='Room Type' />
                <button type='submit'>Update Room</button>
            </form>

        </div>
    )
}

export default UpdateRoom