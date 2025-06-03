import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import Table from "./components/Table";

const App = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [isEditId, setEditId] = useState("");
  const URL = "http://localhost:3000/users";

   const navigator = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFetch = async () => {
    let res = await axios.get(URL);
    let data = res.data;
    setUsers(data);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditId === "") {
      let res = await axios.post(URL, { ...user, id: String(Date.now()) });
      let data = res.data;
      handleFetch();
    } else {
      let res = await axios.put(`${URL}/${isEditId}`, { ...user });
      let data = res.data;
      handleFetch();
      navigator("/table")
    }
    setUser({});
  };

  const handleEdit = (id) => {
    let user = users.find((user) => user.id === id);
    setUser(user);
    setEditId(id);
    navigator("/")
  };

  const handleDelete = async (id) => {
    await axios.delete(`${URL}/${id}`);
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    handleFetch();
  };
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Form
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              user={user}
            />
          }
        />
        <Route
          path="/table"
          element={
            <Table
              users={users}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
