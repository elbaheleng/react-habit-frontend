import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { registerUserApi } from "../services/AllApi";
import { Link } from "react-router-dom";

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [user, setUser] = useState({
    name: "",
    habit: [],
  });

  const handleUpload = async () => {
    const result = await registerUserApi(user);
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setShow(false);
    }
  };

  return (
    <>
      <Button variant="primary" className="mt-5 justify-content-center" onClick={handleShow}>
    login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="mb-3">
            <input
              value={user.name}
              type="text"
              placeholder="Video Caption"
              className="form-controls w-100 rounded border p-3"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to={"/dashboard"}>
            <Button variant="" onClick={handleUpload} className="btn-warning">
              Upload
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
