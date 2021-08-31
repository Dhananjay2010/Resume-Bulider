import { useSelector } from "react-redux";
import "./css/preview.css";

let Preview = () => {
  let {
    fname,
    lname,
    address,
    city,
    state,
    phone,
    degree,
    specialization,
    college,
    passOutYear,
    email,
    cgpa,
    isPublic,
  } = useSelector((state) => state.details);

  console.log(isPublic);

  return (
    <div className="container_preview">
      <div className="resume_container">
        <h2>
          <u>Details</u>
        </h2>
        <div className="preview_container">
          <p>
            <b>First Name : -</b> {fname}
          </p>
          <p>
            <b>Last Name : - </b>
            {lname}
          </p>
          <p>
            <b>Address : - </b>
            {address}
          </p>
          <p>
            <b>City : - </b>
            {city}
          </p>
          <p>
            <b>State : - </b>
            {state}
          </p>
          <p>
            <b>Phone No : - </b>
            {phone}
          </p>
          <p>
            <b>Degree : - </b>
            {degree}
          </p>
          <p>
            <b>Specialization : - </b>
            {specialization}
          </p>
          <p>
            <b>College : - </b>
            {college}
          </p>
          <p>
            <b>Year : - </b>
            {passOutYear}
          </p>
          <p>
            <b>Email : - </b>
            {email}
          </p>
          <p>
            <b>CGPA : - </b>
            {cgpa}
          </p>
          {/* <p>{isPublic?"true" : "false"}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Preview;
