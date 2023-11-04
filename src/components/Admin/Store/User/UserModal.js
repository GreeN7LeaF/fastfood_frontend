import React, { useState, useEffect } from "react";
// import "../css/main.css";
// import "../css/root.css";
import { Modal, Button } from "react-bootstrap";
import "./User.css";
import {
  getAllStaffWithNoUser,
  updateStaffUser,
} from "../../../../services/staff";
import { insertUser, getUserByEmail } from "../../../../services/userServices";
import { toast } from "react-toastify";

const UserModal = (props) => {
  const [show, setShow] = useState(props.show);
  const [loading, setLoading] = useState(true);

  //name, price, image, type, recipe, status
  const [staffList, setStaffList] = useState([]);

  const [staff, setStaff] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getStaffList = async () => {
    try {
      const staffDT = await getAllStaffWithNoUser();
      if (staffDT && staffDT.EC != -1) {
        console.log(staffDT.DT);
        setStaffList(staffDT.DT);
        setLoading(false);
      }
    } catch (error) {
      setStaffList([]);
      console.log(error.message);
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    console.log("Staff: ", staff);
    if (staff != "") {
      //insert user
      let data = await insertUser(email, password, isAdmin, staff);
      console.log(data);
      if (data && data.EC != -1) toast.success(data.EM);
      else toast.error(data.EM);
    } else {
      toast.error("Vui lòng chọn nhân viên");
    }
  };

  useEffect(() => {
    getStaffList();
  }, [loading]);

  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        className="modal-user"
        onHide={props.onHide}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="title">Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="create-form">
            <div className="row mb-4 ">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form6Example1"
                    className="form-control w-100"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label" for="form6Example1">
                    Email
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form6Example3"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="form-label" for="form6Example3">
                    Password
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-outline mb-4">
                  <select
                    class="select w-100"
                    value={staff}
                    onClick={(e) => {
                      console.log(e.target.value);
                      setStaff(e.target.value);
                    }}
                  >
                    {staffList &&
                      staffList.map((s) => (
                        <option key={s.StaffID} value={s.StaffID}>
                          {s.Name}
                        </option>
                      ))}
                  </select>
                  <label className="form-label" for="form6Example3">
                    Staff
                  </label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-outline mb-4">
                  <input
                    type="date"
                    id="form6Example3"
                    className="form-control"
                    // value={startAt}
                    // onChange={(e) => setStart(e.target.value)}
                  />
                  <label className="form-label" for="form6Example3">
                    Crreated At
                  </label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-outline mb-4">
                  <select
                    value={isAdmin}
                    onClick={(e) => setIsAdmin(e.target.value)}
                    className="form-control"
                    // value={startAt}
                    // onChange={(e) => setStart(e.target.value)}
                  >
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                  <label className="form-label" for="form6Example3">
                    Admin?
                  </label>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            className=""
            variant="primary"
            onClick={(e) => handleCreateUser(e)}
          >
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserModal;
