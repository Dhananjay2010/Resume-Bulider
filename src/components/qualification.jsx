import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { saveResume, setDetail } from "../redux/actions";
import Preview from "./preview";

let Qualification = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  let { degree, specialization, college, passOutYear, email, cgpa } =
    useSelector((state) => state.details);
  let { uid } = useSelector((state) => state.user);
  let details = useSelector((state) => state.details);
  let tid = useSelector((state) => state.tid);
  let { id } = useSelector((state) => state.saveId);
  return (
    <>
      <div className="Personal">
        <div className="Personal_Details">
          <h2><u>Qualification Details</u></h2>
          <br></br>
          <br></br>
          <form class="row g-3">
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                Degree
              </label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                value={degree}
                onChange={(e) => {
                  dispatch(setDetail({ degree: e.target.value }));
                }}
              />
            </div>
            <div class="col-md-4">
              <label for="inputPassword4" class="form-label">
                Specialization
              </label>
              <input
                type="text"
                class="form-control"
                id="inputPassword4"
                value={specialization}
                onChange={(e) => {
                  dispatch(setDetail({ specialization: e.target.value }));
                }}
              />
            </div>
            <div class="col-8">
              <label for="inputAddress" class="form-label">
                College / University
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                value={college}
                onChange={(e) => {
                  dispatch(setDetail({ college: e.target.value }));
                }}
              />
            </div>
            <div class="col-md-5">
              <label for="inputCity" class="form-label">
                PassOut Year
              </label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                value={passOutYear}
                onChange={(e) => {
                  dispatch(setDetail({ passOutYear: e.target.value }));
                }}
              />
            </div>
            <div class="col-md-5">
              <label for="inputCity" class="form-label">
                E-mail
              </label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                value={email}
                onChange={(e) => {
                  dispatch(setDetail({ email: e.target.value }));
                }}
              />
            </div>
            <div class="col-md-4">
              <label for="inputZip" class="form-label">
                cgpa
              </label>
              <input
                type="number"
                class="form-control"
                id="inputZip"
                value={cgpa}
                onChange={(e) => {
                  dispatch(setDetail({ cgpa: e.target.value }));
                }}
              />
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  onChange={(e) => {
                    dispatch(setDetail({ isPublic: e.target.checked }));
                  }}
                />
                <label class="form-check-label" for="gridCheck">
                  Make Public
                </label>
              </div>
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
                history.push("/personal");
              }}
            >
              Previous
            </button>
          </div>
        </div>
        <Preview />
      </div>
      <button
        className="Save_To_Database_btn"
        style={{
          position: "fixed",
          right: "1rem",
          bottom: "4rem",
        }}
        type="button"
        class="btn btn-primary"
        onClick={() => {
          dispatch(saveResume(uid, details, tid));
        }}
      >
        Save To DataBase
      </button>

      <button
        className="Save_To_Database_btn"
        style={{
          position: "fixed",
          right: "1rem",
          bottom: "10rem",
        }}
        type="button"
        class="btn btn-primary"
        onClick={() => {
          alert(`https://resume-builder-9294b.web.app/publicPreview/${id}`);
        }}
      >
        Generate Link Of Resume
      </button>
    </>
  );
};

export default Qualification;
