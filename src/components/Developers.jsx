import React from "react";
import Header from "./Header";
//import "bootstrap/dist/css/bootstrap.min.css";

// Dummy data for five people – add an img field with a public URL or local asset path
const people = [
  {
    id: 1,
    name: "Elba Helen George",
    img: "https://i.pinimg.com/736x/3b/73/48/3b73483fa5af06e3ba35f4f71e541e7a.jpg" // replace with real image
  },
  {
    id: 2,
    name: "Madhav G S ",
    img: "https://i.pinimg.com/736x/3b/73/48/3b73483fa5af06e3ba35f4f71e541e7a.jpg"
  },
  {
    id: 3,
    name: "Moideen Bariz C B",
    img: "https://i.pinimg.com/736x/3b/73/48/3b73483fa5af06e3ba35f4f71e541e7a.jpg"
  },
  {
    id: 4,
    name: "Pooja K",
    img: "https://i.pinimg.com/736x/3b/73/48/3b73483fa5af06e3ba35f4f71e541e7a.jpg"
  },
  {
    id: 5,
    name: "Tefin Bose",
    img: "https://i.pinimg.com/736x/3b/73/48/3b73483fa5af06e3ba35f4f71e541e7a.jpg"
  }
];

/**
 * Card component – now shows an image if provided, otherwise falls back
 * to a Bootstrap icon.
 */
const ProfileCard = ({ name, img }) => (
  <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center mt-5">
    <div
      className="d-flex align-items-center rounded-4 px-4 py-3 shadow"
      style={{ background: "#9834eb", minHeight: 180, minWidth: 320 }}
    >
      {/* Avatar area */}
      <div
        className="d-flex align-items-center justify-content-center rounded-circle overflow-hidden me-4"
        style={{ width: 120, height: 120, background: "#f2f2f2" }}
      >
        {img ? (
          <img
            src={img}
            alt={name}
            className="img-fluid h-100 w-100 object-fit-cover"
          />
        ) : (
          <i className="bi bi-person-circle" style={{ fontSize: 64 }}></i>
        )}
      </div>
      <h5 className="mb-0 text-white fw-bold text-nowrap">{name}</h5>
    </div>
  </div>
);

/**
 * Parent component that lays out five cards responsively.
 */
const EmployeeCards = () => (
  <>
  <Header/>
    <div className="container py-4">
      <h1>Developers</h1>
      <div className="row justify-content-center">
        {people.map((p) => (
          <ProfileCard key={p.id} name={p.name} img={p.img} />
        ))}
      </div>
    </div>
  </>
);

export default EmployeeCards;