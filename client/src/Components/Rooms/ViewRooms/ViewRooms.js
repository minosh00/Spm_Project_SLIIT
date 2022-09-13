import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AllRooms from './AllRooms'

function ViewRooms() {
    const [room, setRoom] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [selects, setSelects] = useState();

    const deleteRoom = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/rooms/${id}`)
            const newRoom = room.filter(room => room._id !== id);
            setRoom(newRoom);
            window.alert("Are you Sure Want to Delete Room Details?");
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const getRoom = async () => {
            try {
                setLoading(true)
                const res = await axios.get("http://localhost:5000/api/rooms")
                setRoom(res.data);
                console.log('render');
                setLoading(false);
            } catch (err) {
                setError(true);
                console.log(err);
                setLoading(false);
            }
        }
        getRoom()
    }, []);

    function SearchItem() {
        axios.get(`http://localhost:5000/api/search/${selects}`)
            .then(res => {
                console.log(res.data)
                setRoom(res.data)
            }).catch(err => console.error(err))
    }

    return (
        <div>
            <div className='container my-5'> <br /> <br />
            <h4 className='search2'>Select Room Type</h4>
                <div class="input-group"> 
                    <select className='form-control w-50' name="type" id="type" placeholder='Search Room Type' value={selects} onChange={e => setSelects(e.target.value)}>
                        <option>None</option>
                        <option>Delux Room</option>
                        <option>Delux Sea-Front</option>
                        <option>Non-Delux</option>
                    </select>
                    <button className='btn btn-primary search-btn' onClick={() => { SearchItem({ selects }) }}>Search Room Type</button> <br /> <br />

                    <div className="row justify-content-center mt-2">
                        
                        {
                            loading ? (<h1>Loading...</h1>) : error ? (<h1>404 | Not Found</h1>) : (room.map(room => {
                                return <div className="col-md-9 mt-2">
                                    <AllRooms room={room} />
                                    <button className='btn btn-danger btnw' onClick={() => deleteRoom(room._id)}>Delete Room</button>
                                </div>
                            }))
                        }
                        <br/> <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewRooms