import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { setTemplate } from "../redux/actions";
import "./css/home.css";

let Home = () => {
  let user = useSelector((state) => state.user);
  let history = useHistory();
  let dispatch=useDispatch();
  let tid=useSelector((state) => state.tid)

  console.log(tid);
  return (
    <>
      {user ? "" : <Redirect to="/login" />}
      {/*// Agar user nhi hai to use login pe bhej do */}
      <div className="template_container">
        <div
          className="template1_container"
          onClick={() => {
            dispatch(setTemplate("A"))   
            history.push("./personal");
          }}
        >
          <img src="skin1.svg"></img>
        </div>
        <div className="template2_container" onClick={()=>{
          dispatch(setTemplate("B"));
          history.push("./personal")
        }}>
          <img src="skin2.svg"></img>
        </div>
      </div>
      <button
        className="SignOut_button"
        onClick={() => {
          auth.signOut(); // Signout karne ke liye simple kaam
        }}
      >
        Log Out
      </button>
    </>
  );
};

export default Home;
