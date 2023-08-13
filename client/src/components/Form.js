import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsers, postUsers } from "../actions";
import { useNavigate } from "react-router-dom";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    hobbies: "",
  });

  const user = useSelector((state) =>
    currentId ? state.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (user) setUserData(user);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      if (userData) dispatch(updateUsers(currentId, userData));
    } else {
      if (userData) dispatch(postUsers(userData));
    }
    clear();
    navigate("/");
  };

  const clear = () => {
    setCurrentId(null);
    setUserData({
      name: "",
      phone: "",
      email: "",
      hobbies: "",
    });
  };
  return (
    <div className="modal">
      <div className="form-container">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <span className="cross-btn" onClick={() => navigate("/")}>
              &times;
            </span>
          </div>
          <div className="input-field">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            ></input>
          </div>

          <div className="input-field">
            <label for="phone">Phone</label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Your phone"
              value={userData.phone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            ></input>
          </div>

          <div className="input-field">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            ></input>
          </div>

          <div className="input-field">
            <label for="hobbies">Hobbies</label>
            <input
              type="text"
              id="hobbies"
              name="hobbies"
              placeholder="Your hobbies"
              value={userData.hobbies}
              onChange={(e) =>
                setUserData({ ...userData, hobbies: e.target.value })
              }
            ></input>
          </div>

          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
