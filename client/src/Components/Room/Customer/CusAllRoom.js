import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { DatePicker, Space } from 'antd';
import moment from 'moment'

const CusAllRooms = () => {
  const { RangePicker } = DatePicker;
  const [serachItem, setserachItem] = useState([]);
  const [users, setusers] = useState();
  const [loading, setloading] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fromdate, setFromdate] = useState();
  const [todate, setTodate] = useState();

  useEffect(async () => {
    try {
      const data = await (
        await axios.get("http://localhost:5000/room/getAllRooms/")
      ).data;
      setusers(data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }, []);

  function filterbyDate(dates) 
  {
    console.log(moment(dates[0]).format('YYYY-MM-DD'))
    console.log(moment(dates[1]).format('YYYY-MM-DD'))
    setFromdate(moment(dates[0]).format('YYYY-MM-DD'))
    setTodate(moment(dates[1]).format('YYYY-MM-DD'))
  }

  const deleteRoom = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/room/RemoveRooms/${id}`)
      const newRoom = users.filter(user => user._id !== id);
      setusers(newRoom);
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="container"><br /><br /><br />
      <div className="row">
        <div class="input-group">
          <div className="col-md-6 mx-auto">
            <input type="search" class="form-control" placeholder="Search by Room Name" aria-label="Search" onChange={event => { setserachItem(event.target.value) }}
              aria-describedby="search-addon" />
          </div>
        </div>
        <br></br><br></br>

        <Space direction="vertical" size={12}>
          <RangePicker format='DD-MM-YYYY' onChange={filterbyDate}/>
        </Space>


        <div className="">
          <div className="container">
            {users &&
              users.filter((users) => {
                if (serachItem == "") {
                  return users
                } else if (users.type.toLowerCase().includes(serachItem.toLowerCase())) {
                  return users
                }
              })

                .map((user) => (
                  <div className="row bs" key={1}><br></br>
                    <h3> {user.name}</h3> <br /><br />
                    <div className="col-md-6">
                      <img src={user.imageurls[0]} className="smallimg" alt="" />
                    </div>

                    <div className="col-md-6">
                      <h5> <b>{user.type} Room</b></h5> <br />
                      <h5> <b>Features:</b> </h5>
                      <p className="feat">{user.features}</p> <br />
                      <h6> <b>Rent Per Day:</b> LKR {user.rentperday}/=</h6> <br />
                      <h6> <b>Max Count:</b> {user.maxcount}</h6>
                      {/* <h5> Features: {user.features}</h5>
                       */}

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header>
                          <Modal.Title><center><b>{user.type} Room</b></center></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                          <Carousel prevLabel='' nextLabel=''>
                            {
                              user.imageurls.map(url => {
                                return <Carousel.Item>
                                  <img className='d-block w-100 bigimg' src={url} />
                                  <h5> {user.description}</h5>
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

                      <br /> <br />
                      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className='btn btn-danger' onClick={handleShow}>View Details</button>
                        <Link to={`/updateRoomsByIDcus/${user?._id}/${fromdate}/${todate}`}>
                          <button className='btn btn-success'>Book Room</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CusAllRooms