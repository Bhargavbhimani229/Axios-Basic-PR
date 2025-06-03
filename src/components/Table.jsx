import React from "react";

const Table = ({ handleDelete, handleEdit, users }) => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="table-responsive shadow rounded">
            <table className="table table-striped table-hover align-middle mb-0 bg-white">
              <thead className="table-dark">
                <tr>
                  <th scope="col" style={{ width: "5%" }}>#</th>
                  <th scope="col" style={{ width: "40%" }}>Email</th>
                  <th scope="col" style={{ width: "30%" }}>Password</th>
                  <th scope="col" style={{ width: "25%" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-muted">
                      No users found.
                    </td>
                  </tr>
                ) : (
                  users.map((val, idx) => (
                    <tr key={val.id || idx}>
                      <th scope="row">{idx + 1}</th>
                      <td>{val.email}</td>
                      <td>{val.password}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-warning me-2"
                          onClick={() => handleEdit(val.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(val.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
