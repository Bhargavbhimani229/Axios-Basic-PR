import React from "react";

const Form = ({ handleChange, handleSubmit, user }) => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5 shadow p-4 rounded bg-light">
          <h2 className="mb-4 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label fw-semibold">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="emailInput"
                value={user.email || ""}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="passwordInput" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="passwordInput"
                value={user.password || ""}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your password"
                required
                minLength={6}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 fw-bold"
              style={{ letterSpacing: "1px" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
