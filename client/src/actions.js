import axios from "axios";

import { FETCH_ALL, CREATE, UPDATE, DELETE } from "./constants.js";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await API.get("/");
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const postUsers = (user) => async (dispatch) => {
  try {
    const { data } = await API.post("/", user);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUsers = (id, user) => async (dispatch) => {
  try {
    const { data } = await API.patch(`/${id}`, user);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUsers = (id) => async (dispatch) => {
  try {
    const { data } = await API.delete(`/${id}`);
    dispatch({ type: DELETE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const sendUsers = (ids) => async (dispatch) => {
  try {
    await API.post("/send", ids);
  } catch (error) {
    console.log(error.message);
  }
};
