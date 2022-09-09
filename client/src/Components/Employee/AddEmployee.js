import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import logo from "../../images/menuss.png";

const AddEmployee = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState();
  const [JobPosition, setJobPosition] = useState("");
  const [gender, setgender] = useState("");
  const [HomeAddress, setHomeAddress] = useState("");
  const [email, setemail] = useState("");
  const [Pnumber, setPnumber] = useState("");

  const changeOnClick = (f) => {
    const Employee = {
      fname,
      lname,
      JobPosition,
      gender,
      HomeAddress,
      email,
      Pnumber,
    };

    axios.post("http://localhost:5000/employee/createEmployee", Employee);

    Swal.fire("Congrats", " New Employee Added  successfully", "success");
  };
  return (
    <div>
      <div>
        <div className="container shadow my-5 mx-auto w-50">
          <div className="col p-3">
            <h3 className=" fw-bolder mb-4"><center>Add New Employee</center></h3>
            <form onSubmit={changeOnClick} encType="">
              <div className='row py-3'>
                  <div class="col-md-6">
                      <label for="" class="form-label">{" "}Employee First Name{" "}</label>
                      <input type="text"
                        class="form-control"
                        id="floatingInput"
                        onChange={(f) => setfname(f.target.value)}
                        required
                        placeholder=" Employee First Name" 
                      />
                  </div>
                  <div class="col-md-6">
                      <label for="" class="form-label">{" "}Employee Last  Name{" "}</label>
                      <input type="text"
                        class="form-control"
                        id="floatingPassword"
                        onChange={(f) => setlname(f.target.value)}
                        required
                        placeholder=" Employee Last Name" 
                      />
                  </div>
              </div>
              <div className='row py-3'>
                <div class="col-md-6">
                  <label for="" class="form-label">{" "}Job Position{" "}</label>
                    <input type="text"
                      class="form-control"
                      id="exampleFormControlTextarea3"
                      onChange={(f) => setJobPosition(f.target.value)}
                      required
                      placeholder=" Job Position " 
                    />
                </div>
                <div class="col-md-6">
                  <label for="" class="form-label">Gender</label>
                  <div className='row py-1 px-2'>
                    <div class="form-check col-md-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          onChange={(f) => setgender(f.target.value)}
                          value="male"
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Male
                        </label>
                    </div>
                    <div class="form-check col-md-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          onChange={(f) => setgender(f.target.value)}
                          value="female"
                          id="flexCheckChecked"
                          checked
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          Female
                        </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row py-3'>
                  <div class="col-md-10">
                      <label for="" class="form-label">{" "}Home Address{" "}</label>
                      <input type="text"
                        class="form-control"
                        id="exampleFormControlTextarea3"
                        onChange={(f) => setHomeAddress(f.target.value)}
                        required
                        placeholder=" Home Address" 
                      />
                  </div>
              </div>
              <div className='row py-3'>
                  <div class="col-md-6">
                      <label for="" class="form-label">{" "}Email{" "}</label>
                      <input type="email"
                        class="form-control"
                        id="exampleFormControlTextarea3"
                        onChange={(f) => setemail(f.target.value)}
                        required
                        placeholder=" Employee Email" 
                      />
                  </div>
                  <div class="col-md-6">
                      <label for="" class="form-label">{" "}Phone Number{" "}</label>
                      <input type="text"
                        class="form-control"
                        id="exampleFormControlTextarea3"
                        onChange={(f) => setPnumber(f.target.value)}
                        required
                        placeholder=" Employee phone number" 
                      />
                  </div>
              </div>
              <div className="row mb-5 px-2">
                <a>
                  <button
                    type="submit"
                    style={{ fontSize: "15px" }}
                    className="btn btn-danger"
                  >
                    Add Employee{" "}
                  </button>
                </a>
                <br></br>
                <br></br>
                <a>
                  <Link to="/AllEmployee">
                    <button
                      type="submit"
                      style={{ fontSize: "10px" }}
                      className="btn btn-success"
                    >
                      Back to Home{" "}
                    </button>
                  </Link>
                </a>
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
