import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import "./css/public.css";

let PublicPreview = () => {
  let [previewData, setPreviewData] = useState(null);
  let [loading, setLoading] = useState("Not_Loaded");

  let { rid } = useParams(); // This rid is what we write in the Route.
  useEffect(() => {
    console.log(rid);
    setLoading("Processing");
    let docRef = firestore.collection("resume").doc(rid);
    console.log(docRef);
    // setLoading(true);
    docRef.get().then((doc) => {
      let data = doc.data(); // data ko call lagana mat bhulna
      setPreviewData(data);
      setLoading("Loaded");
    });
  }, []);

  return (
    <>
      {loading == "Not_Loaded" ? (
        <p>Soon going to be loaded</p>
      ) : loading == "Processing" ? (
        <p>It is Processing</p>
      ) : loading == "Loaded" && previewData.isPublic ? (
        <>
          <div className="container">
            <div className="public_container">
              <h2>
                <u>Resume</u>
              </h2>
              <br></br>
              <div className="personal-Details">
                <h4>
                  <li className="personal-li">
                    <u>Personal Details</u>
                  </li>
                </h4>
                <p>
                  <b>First Name : -</b> {previewData.fname}
                </p>
                <p>
                  <b>Last Name : - </b>
                  {previewData.lname}
                </p>
                <p>
                  <b>Address : - </b>
                  {previewData.address}
                </p>
                <p>
                  <b>City : - </b>
                  {previewData.city}
                </p>
                <p>
                  <b>State : - </b>
                  {previewData.state}
                </p>
                <p>
                  <b>Phone No : - </b>
                  {previewData.phone}
                </p>
              </div>
              <br></br>
              <div className="qualification">
                <h4>
                  <li className="personal-li">
                    <u>Qualification</u>
                  </li>
                </h4>
                <p>
                  <b>Degree : - </b>
                  {previewData.degree}
                </p>
                <p>
                  <b>Specialization : - </b>
                  {previewData.specialization}
                </p>
                <p>
                  <b>College : - </b>
                  {previewData.college}
                </p>
                <p>
                  <b>Year : - </b>
                  {previewData.passOutYear}
                </p>
                <p>
                  <b>Email : - </b>
                  {previewData.email}
                </p>
                <p>
                  <b>CGPA : - </b>
                  {previewData.cgpa}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        "Data is not made public"
      )}
    </>
  );
};

export default PublicPreview;
