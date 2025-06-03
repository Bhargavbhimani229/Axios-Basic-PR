import React, { useState } from "react";
import DataTable from "react-data-table-component";

const Table = ({ handleDelete, handleEdit, users }) => {
  const [textFilter, setTextFilter] = useState("");
  let columns = [
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Password",
      selector: (row) => row.password,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => {
        return (
          <>
            <button
              className="btn btn-danger me-1"
              onClick={() => handleDelete(row.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-warning me-1"
              onClick={() => handleEdit(row.id)}
            >
              Edit
            </button>
          </>
        );
      },
      sortable: true,
    },
  ];

  let userData = users.filter((user) => {
    return user.email.toLowerCase().includes(textFilter.toLowerCase());
  });

  return (
 <div className="container py-5">
  <div className="row justify-content-center">
    <div className="col-md-10">
      <div className="shadow rounded p-4 bg-white">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="mb-0">User Data</h4>
          <div className="input-group w-50">
            <input
              className="form-control"
              type="search"
              placeholder="Search users..."
              aria-label="Search"
              onChange={(e) => setTextFilter(e.target.value)}
            />
            <button className="btn btn-dark" type="button">
              Search
            </button>
          </div>
        </div>

        {/* DataTable Component */}
        <div className="table-responsive">
          <DataTable
            columns={columns}
            data={userData}
            pagination
            selectableRows
            highlightOnHover
            pointerOnHover
            responsive
            fixedHeader
            fixedHeaderScrollHeight="300px"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Table;
