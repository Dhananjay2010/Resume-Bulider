import { useSelector } from "react-redux";

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
  return <div>
      <p>{fname}</p>
      <p>{lname}</p>
      <p>{address}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{phone}</p>
      <p>{degree}</p>
      <p>{specialization}</p>
      <p>{college}</p>
      <p>{passOutYear}</p>
      <p>{email}</p>
      <p>{cgpa}</p>
      <p>{isPublic?"true" : "false"}</p>
  </div>;
};

export default Preview;
