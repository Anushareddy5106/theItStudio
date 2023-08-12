import Header from "./components/Header.js";
import Table from "./components/Table.js";
import Form from "./components/Form.js";

import { getUsers } from "./actions.js";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [currentId, dispatch]);

  return (
    <BrowserRouter>
      <Header setCurrentId={setCurrentId} />
      <Table setCurrentId={setCurrentId} />
      <Routes>
        <Route
          path="/form"
          exact
          element={
            <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
