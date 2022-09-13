import React, { useState } from 'react'
import { Button, Modal, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AllRooms({ room }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (

        <div className="row bs py-5"> <br />
            <h3>{room.name}</h3>
            <div className="col-md-8">  <br />
                <img src={room.imageurls[0]} className='smallimg' alt='room' />
            </div>
            <div className="col-md-4"> <br />
                <h5><b>{room.type}</b> Room</h5> <br />
                <p><b>Features:</b></p>
                <p>{room.features}</p> <br />
                <p><b>Rent Per Day: LKR:</b> {room.rentperday}/=</p>
                <p><b>Max Count:</b> {room.maxcount}</p>
            </div>

            <div>
                <button className='btn btn-success btnw' onClick={handleShow}>View Details</button>
                <Link to={`/bookingroom/${room._id}`}>
                    <button className='btn btn-warning btnw'>Update Room</button>
                </Link>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title><center>{room.type} Room</center></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel prevLabel='' nextLabel=''>
                        {
                            room.imageurls.map(url => {
                                return <Carousel.Item>
                                    <img className='d-block w-100 bigimg' src={url} />
                                    <p>{room.description}</p>
                                </Carousel.Item>
                            })
                        }
                    </Carousel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AllRooms