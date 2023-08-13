import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, sendUsers } from "../actions.js";
import Loader from "./Loader";
import { Link } from "react-router-dom";
const Table = ({ setCurrentId, loading }) => {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(users);
  }, [users]);

  const toggleSend = () => {
    const checkboxEl = document.querySelectorAll(".checkbox-el");
    console.log(checkboxEl);

    checkboxEl.forEach((el) => {
      el.classList.toggle("hidden");

      if (el.children[0] && el.children[0].type === "checkbox")
        el.children[0].checked = false;
    });
  };

  function getSelectedUsers() {
    const selectedUsers = [];
    const checkboxes = document.querySelectorAll(".user");

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedUsers.push(checkbox.value);
      }
    });

    toggleSend();
    if (selectedUsers.length > 0) dispatch(sendUsers(selectedUsers));
    console.log("Selected Users:", selectedUsers);
  }

  return (
    <div className="table-container">
      <table className="table table-div">
        <thead>
          <tr className="t-row head-row">
            <th className="t-span check-b checkbox-el hidden"></th>
            <th className="t-span id">S. No.</th>
            <th className="t-span name">Name</th>
            <th className="t-span email">Email</th>
            <th className="t-span phone">Phone</th>
            <th className="t-span hobbies">Hobbies</th>
            <th className="t-span update"></th>
            <th className="t-span delete"></th>
          </tr>
        </thead>
        {loading ? (
          <Loader />
        ) : (
          <>
            <tbody>
              {users.map((user, id) => {
                return (
                  <tr className="t-row">
                    <td className="t-span check-b checkbox-el hidden">
                      <input
                        type="checkbox"
                        value={user._id}
                        className="user"
                      ></input>
                    </td>
                    <td className="t-span id">{id + 1}</td>
                    <td className="t-span name">{user.name}</td>
                    <td className="t-span email">{user.email}</td>
                    <td className="t-span phone">{user.phone}</td>
                    <td className="t-span hobbies">{user.hobbies}</td>
                    <td className="t-span update">
                      <button
                        className="ud-btn"
                        onClick={() => setCurrentId(user._id)}
                      >
                        <Link to={"/form"}>update</Link>
                      </button>
                    </td>
                    <td className="t-span delete">
                      <button
                        className="ud-btn"
                        onClick={() => dispatch(deleteUsers(user._id))}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </>
        )}
      </table>
      <div className="send-container">
        <button className="send-btn checkbox-el" onClick={() => toggleSend()}>
          select Users
        </button>
        <button
          className="send-btn checkbox-el hidden"
          onClick={() => getSelectedUsers()}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Table;
