import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";

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
        <p>{previewData.specialization}</p>
      ) : (
        "Data is not made public"
      )}
    </>
  );
};

export default PublicPreview;
