import Preview from "./preview";
import "./css/personal.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDetail } from "../redux/actions";

let Personal = () => {
  let history = useHistory();
  let { fname, lname, address, city, state, phone } = useSelector(
    (state) => state.details
  );
  let dispatch = useDispatch();
  return (
    <div className="Personal">
      <div className="Personal_Details">
        <h2>Personal Details</h2>
        <br></br>
        <br></br>
        <form class="row g-3">
          <div class="col-md-4">
            <label for="inputEmail4" class="form-label">
              First Name
            </label>
            <input
              type="text"
              value={fname}
              class="form-control"
              id="inputEmail4"
              onChange={(e) => {
                dispatch(setDetail({ fname: e.target.value }));
              }}
            />
          </div>
          <div class="col-md-4">
            <label for="inputPassword4" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputPassword4"
              value={lname}
              onChange={(e) => {
                dispatch(setDetail({ lname: e.target.value }));
              }}
            />
          </div>
          <div class="col-8">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={address}
              onChange={(e) => {
                dispatch(setDetail({ address: e.target.value }));
              }}
            />
          </div>
          <div class="col-md-5">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" value={city} onChange={(e) => {
                dispatch(setDetail({ city: e.target.value }));
              }} />
          </div>
          <div class="col-md-5">
            <label for="inputCity" class="form-label">
              State
            </label>
            <input type="text" class="form-control" id="inputCity" value={state} onChange={(e) => {
                dispatch(setDetail({ state: e.target.value }));
              }}/>
          </div>
          <div class="col-md-4">
            <label for="inputZip" class="form-label" >
              PhoneNumber
            </label>
            <input type="number" class="form-control" id="inputZip" value={phone} onChange={(e) => {
                dispatch(setDetail({ phone: e.target.value }));
              }}/>
          </div>
        </form>
        <br></br>
        <br></br>
        <br></br>
        <div class="d-grid gap-2 col-4 mx-auto">
          <button
            class="btn btn-primary"
            type="button"
            onClick={() => {
              history.push("/qualification");
            }}
          >
            Next
          </button>
        </div>
      </div>
      <Preview />
    </div>
  );
};

export default Personal;
