import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

import "./Staff.css";
import Form from "react-bootstrap/Form";
import { InsertStaff } from "../../../../api/callApi";
import {
  getUserByID,
  getUserWithoutStaff,
} from "../../../../services/userServices";
import { getPositionList } from "../../../../services/positionServices";
import { updateStaff } from "../../../../services/staff";

const StaffModal = (props) => {
  const [show, setShow] = useState(props.show);
  const [loading, setLoading] = useState(true);

  const [userList, setUserList] = useState([]);
  const [positionList, setPositionList] = useState([]);

  const getUserListData = async () => {
    try {
      const userDT = await getUserWithoutStaff();
      if (userDT && userDT.EC != -1) {
        setUserList(userDT.DT);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getPositionListData = async () => {
    try {
      const data = await getPositionList();
      console.log("position list: ", data);
      if (data && data.EC != -1) {
        setPositionList(data.DT);
        setLoading(false);
      }
    } catch (error) {
      return error.message;
    }
  };

  //name, price, image, type, recipe, status

  const [name, setName] = useState("");
  const [userId, setUserId] = useState(0);
  const [currUser, setCurrUser] = useState({});
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState(1);
  const [address, setAddress] = useState("");
  const [positionId, setPositionId] = useState(1);
  const [startAt, setStart] = useState("");

  const resetInfo = () => {
    setName("");
    setDob("");
    setGender(1);
    setAddress("");
    setPositionId(0);
    setStart("");
  };

  const handleClose = () => {
    setShow(false);
    resetInfo();
  };

  const getUser = async (id) => {
    const data = await getUserByID(id);
    if (data && data.EC != -1) {
      setCurrUser(data.DT[0]);
    }
  };

  const initEditInformation = () => {
    setLoading(true);

    setName(props.staff.Name);
    setDob(props.staff.Birth);
    setGender(props.staff.Gender);
    setAddress(props.staff.Address);
    setPositionId(props.staff.Position);
    setStart(props.staff.startAt);

    setLoading(false);
    // getUser(props.staff.ID);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(
      props.staff.StaffID,
      name,
      dob,
      gender,
      address,
      startAt,
      positionId
    );
    let data = await updateStaff(
      props.staff.StaffID,
      name,
      dob,
      gender,
      address,
      startAt,
      positionId
    );
    if (data && +data.EC === 1) {
      toast.success(data.EM);
      location.reload();
    } else if (data && +data.EC != 1) {
      toast.error(data.EM);
      console.log(data);
    } else {
      toast.error("Error server");
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    let data = await InsertStaff(
      name,
      dob,
      gender,
      startAt,
      positionId,
      address
    );
    console.log(data);
    if (data && +data.EC === 1) {
      toast.success(data.EM);
      location.reload();
    } else if (data && +data.EC != 1) {
      toast.error(data.EM);
      console.log(data);
    } else {
      toast.error("Error server");
    }
  };

  useEffect(() => {
    getPositionListData();
    getUserListData();
    if (props.staff.ID) initEditInformation();
  }, [props.staff, currUser, props.show]);

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
          <Modal.Title className="title">Create Staff</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            {loading && <p>Đang tải dữ liệu...</p>}
            {true && (
              <form className="create-form">
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form6Example1"
                        className="form-control w-100"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form6Example1">
                        Name
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline mb-4">
                      <select
                        className="select w-100"
                        value={positionId}
                        onChange={(e) => {
                          console.log(e.target.value);
                          setPositionId(e.target.value);
                        }}
                      >
                        {!loading &&
                          positionList &&
                          positionList.map((p) => (
                            <option key={p.ID} value={p.ID}>
                              {p.Name}
                            </option>
                          ))}
                      </select>
                      <label className="form-label" htmlFor="form6Example3">
                        Position
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-outline mb-4">
                      <input
                        type="date"
                        id="form6Example3"
                        className="form-control"
                        onChange={(e) => setDob(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form6Example3">
                        Birth
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-outline mb-4">
                      <select
                        className="select w-100"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </select>
                      <label className="form-label" htmlFor="form6Example3">
                        Gender
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-outline mb-4">
                      <input
                        type="date"
                        id="form6Example3"
                        className="form-control"
                        value={startAt}
                        onChange={(e) => setStart(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form6Example3">
                        Start At
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form6Example3"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form6Example3">
                        Address
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {props.staff && !props.staff.StaffID ? (
            <Button
              className=""
              variant="primary"
              onClick={(e) => handleCreate(e)}
            >
              Create
            </Button>
          ) : (
            <Button
              className=""
              variant="primary"
              onClick={(e) => handleUpdate(e)}
            >
              Update
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StaffModal;
