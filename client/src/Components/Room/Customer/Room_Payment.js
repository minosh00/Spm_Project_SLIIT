import React, { useState, useEffect } from 'react'
import axios from "axios";

function Room_Payment() {

    const [room, setRoom] = useState();

    useEffect(async () => {
        try {
            const data = await (
                await axios.get("http://localhost:5000/book/viewbook")
            ).data;
            setRoom(data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div>
            <div className="">
                <div className="container">
                    {
                        room && room
                            .map((room) => (
                                <div className="row bs" key={1}><br></br>
                                    <h3> {room.room}</h3>
                                    <h3> {room.fromdate}</h3>
                                    <h3> {room.todate}</h3>
                                    <h3> {room.totAmount}</h3>
                                    <h3> {room.totDates}</h3>
                                    <h3> {room.status}</h3><br /><br />
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Room_Payment