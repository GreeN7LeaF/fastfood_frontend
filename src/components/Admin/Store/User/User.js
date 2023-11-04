import React, { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import {
  getUserList,
  deleteUserAccount,
} from "../../../../services/userServices";
import { getPositionList } from "../../../../services/positionServices";
import UserModal from "./UserModal";
import { toast } from "react-toastify";
const moment = require("moment");

const User = (props) => {
  const [user, setUser] = useState([]);
  const [position, setPosition] = useState([]);

  const fetchUser = async () => {
    let dataStaff = await getUserList();
    setUser(dataStaff.DT);
  };

  const fetchPosition = async () => {
    let dataPos = await getPositionList();
    setPosition(dataPos.DT);
  };

  const handleDeleteUser = async (id) => {
    let data = await deleteUserAccount(id);
    if (data && +data.EC === 1) {
      toast.success(data.EM);
    }
    if (data && +data.EC != 1) {
      toast.error(data.EM);
    }
    console.log(id);
  };

  useEffect(() => {
    fetchPosition();
    fetchUser();
  }, [user]);

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    let flag = !showModal;
    setShowModal(flag);
  };

  return (
    <div id="body">
      <div className="container">
        <div className="container-fluid main-body">
          <div className="d-flex flex-col">
            <div className="col ms-4">
              <div className="main-content rounded-3 border border-2 py-4 px-3">
                <div className="table-header row">
                  <div className="col-3">
                    <h3 className="title">User List</h3>
                  </div>
                  <div className="col text-end me-2">
                    <button className="btn btn-clr-normal">
                      <a onClick={() => handleShowModal()} className="nav-link">
                        Add User
                      </a>
                    </button>
                  </div>
                </div>
                <br></br>
                <div className="text-white">
                  <div className="bg-white">
                    <table className="table align-middle mb-0">
                      <thead className="">
                        <tr>
                          <th>Email</th>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Created At</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {user.map((user, key) => {
                          return (
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{ width: "45px", height: "45px" }}
                                    className="rounded-circle"
                                  />
                                  <div className="ms-3">
                                    <p className="fw-bold mb-1">{user.Email}</p>
                                    <p className="text-muted mb-0">
                                      {user.Phone}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className="text-muted mb-0">{user.Name}</p>
                              </td>
                              <td>
                                <p className="text-muted mb-0">
                                  {position[user.Position - 1].Name}
                                </p>
                              </td>
                              <td>
                                <p className="text-muted mb-0">
                                  {moment(
                                    moment(user.CreatedAt).toDate()
                                  ).format("DD/MM/YYYY hh:mm:ss")}
                                </p>
                              </td>
                              <td>
                                <div className="d-flex flex-row gap-1">
                                  <a href="./edit.html" className="nav-link">
                                    <AiOutlineEdit className="edit-icon" />
                                  </a>
                                  <span className="nav-link">
                                    <AiOutlineDelete
                                      className="del-icon"
                                      id={user.ID}
                                      onClick={async (e) =>
                                        await handleDeleteUser(e.target.id)
                                      }
                                    />
                                  </span>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserModal show={showModal} onHide={handleShowModal} />
    </div>
  );
};

export default User;
