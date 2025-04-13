import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaBook, FaDumbbell, FaMusic } from "react-icons/fa";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { addHabitApi } from "../services/AllApi";
import { getUserApi } from "../services/AllApi";
import { useEffect } from "react";

function AddHabit() {
  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // to store user

  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const result = await getUserApi(); // This should fetch the user from the server
      console.log(result.data);

      setUsers(result.data); // Set the user data in state
    };
    fetchUser();
  }, []);

  if(users){
    console.log(users[0]);
  }

  // state to store
  const [habitdetails, setHabitdetails] = useState({
    habitname: "",
    frequency: "",
    category: "",
  });


  const handleSubmit = async () => {
    // console.log({users});
    
    if (users) {

      const updatedUser = {
        ...users[1], // Retain existing user data
        habit: [...(users[1].habit || []), habitdetails], // Add new habit to the user's existing habits array
      };
      
      
      const result = await addHabitApi(users[1].id,updatedUser);

      console.log(result);

      if (result.status >= 200 && result.status < 300) {
        setShow(false); // Close modal
        setHabitdetails({ name: "", frequency: "", category: "" });
      }
    }
  };

  //   bg color
  const darkPurple = "rgb(87, 16, 87)";
  return (
    <>
      <Button
        onClick={handleShow}
        variant=""
        className=" px-4 py-2 text-white rounded-pill"
        style={{ backgroundColor: darkPurple }}
      >
        <FontAwesomeIcon icon={faPlus} className="me-2" />
        Add a Habit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-5 ">
            <input
              type="text"
              value={habitdetails.habitname}
              onChange={(e) =>
                setHabitdetails({ ...habitdetails, habitname: e.target.value })
              }
              placeholder="Enter Habit Name"
              className="w-100 border p-2 rounded mb-3"
            />

            {/* Frequency Selector */}
            <div className="mb-3 d-flex ">
              <button
                className="btn text-light "
                style={{ backgroundColor: darkPurple }}
              >
                Frequency
              </button>
              <select
                className="form-select"
                value={habitdetails.frequency}
                onChange={(e) =>
                  setHabitdetails({
                    ...habitdetails,
                    frequency: e.target.value,
                  })
                }
              >
                <option value="Daily" data-info="Repeat every day">
                  Daily
                </option>
                <option value="Weekly" data-info="Repeat once a week">
                  Weekly
                </option>
                <option value="Occasionally" data-info="Repeat on occasion">
                  Occasionally
                </option>
              </select>
            </div>

            {/* Category Selector */}
            <div className="mb-3">
              <input
                type="text"
                placeholder="Category (e.g., Health, Fitness)"
                className="form-control"
                value={habitdetails.category}
                onChange={(e) =>
                  setHabitdetails({ ...habitdetails, category: e.target.value })
                }
              />
            </div>
            {/* <div className="mb-3">
              <button
                onClick={handleCategoryClick}
                className="btn text-light w-100 "
                style={{ backgroundColor: darkPurple }}
              >
                Choose Category
              </button>

              {showIcons && (
                <div className="d-flex flex-wrap gap-4 mt-4">
                  <button onClick={() => handleIconSelect("flask")}>
                    <FontAwesomeIcon icon={faFlask} />
                  </button>
                  <button onClick={() => handleIconSelect("book")}>
                    <FontAwesomeIcon icon={faBook} />
                  </button>
                  <button onClick={() => handleIconSelect("globe")}>
                    <FontAwesomeIcon icon={faGlobe} />
                  </button>
                  <button onClick={() => handleIconSelect("exercise")}>
                    <FontAwesomeIcon icon={faDumbbell} title="Exercise" />
                  </button>
                  <button onClick={() => handleIconSelect("read")}>
                    <FontAwesomeIcon icon={faBook} title="Read" />
                  </button>
                  <button onClick={() => handleIconSelect("meditate")}>
                    <FontAwesomeIcon icon={faSpa} title="Meditate" />
                  </button>
                  <button onClick={() => handleIconSelect("sleep")}>
                    <FontAwesomeIcon icon={faBed} title="Sleep" />
                  </button>
                  <button onClick={() => handleIconSelect("journal")}>
                    <FontAwesomeIcon icon={faPenFancy} title="Journal" />
                  </button>
                  <button onClick={() => handleIconSelect("walk")}>
                    <FontAwesomeIcon icon={faWalking} title="Walk" />
                  </button>
                  <button onClick={() => handleIconSelect("study")}>
                    <FontAwesomeIcon icon={faGraduationCap} title="Study" />
                  </button>
                  <button onClick={() => handleIconSelect("noJunk")}>
                    <FontAwesomeIcon icon={faBan} title="Avoid Junk Food" />
                  </button>
                  <button onClick={() => handleIconSelect("earlyWake")}>
                    <FontAwesomeIcon icon={faClock} title="Wake Up Early" />
                  </button>
                </div>
              )}
            </div> */}
          </div>
        </Modal.Body>

        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddHabit;
