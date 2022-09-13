import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const BookingRoom = () => {
    const [room, setRoom] = useState({
        name: "",
        rentperday: "",
        type: "",
        maxcount: "",
        phonenumber: "",
        description: "",
        imageurls: "",
    });

    const { id } = useParams("");

    useEffect(() => {
        function getRoom(id) {
            console.log(id)
            axios.get(`http://localhost:5000/api/rooms/${id}`)
                .then((res) => {
                    setRoom(res.data)
                    console.log(res?.data)
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
                <input type='text' name="name" onChange={handleChange} value={room.name} placeholder='Room Type' />
                <input type='text' name="rentperday" onChange={handleChange} value={room.rentperday} placeholder='Room Type' />
                <input type='text' name="type" onChange={handleChange} value={room.type} placeholder='Room Type' />
                <input type='text' name="maxcount" onChange={handleChange} value={room.maxcount} placeholder='Room Type' />
                <input type='text' name="phonenumber" onChange={handleChange} value={room.phonenumber} placeholder='Room Type' />
                <input type='text' name="description" onChange={handleChange} value={room.description} placeholder='Room Type' />
                <button type='submit'>Update Room</button>
            </form>

        </div>
    )
}

export default BookingRoom