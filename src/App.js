import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Home from "./components/home";
import { useEffect } from "react";
import { auth, firestore } from "./firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions";
import PublicPreview from "./components/publicPreview";
import Personal from "./components/personal";
import Qualification from "./components/qualification";
let App = () => {
  let dispatch = useDispatch();

  useEffect(() => { // ye use effect ek he bar chalega aur ye onauthchanged event ko register kar dega aur ye event tab tab chalega jab mera sigh in hoga ya logout hoga 
    let unsub = auth.onAuthStateChanged(async (user) => {
      dispatch(setUser(user)); // Yahan pe maine setUser wale ko dispatch kiya.

      if (user) { // Agar user hai to mujhe ek user ka object milega
        let { uid, email } = user;

        let docRef = firestore.collection("users").doc(uid); // firestore mai jao users collection mai aur jispe ye uid hai uska reference leke aao
        let doc = await docRef.get(); // document ko leke aao jiska reference docREf hai
        if (!doc.exists) { // agar document hota hai to doc.exist true aata hai
          docRef.set({ email }); // agar document pehle se nhi hai l, to bana aur usme email set karde
        }
      }
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/publicPreview/:rid">
            <PublicPreview />
          </Route>
          <Route path="/qualification">
            <Qualification />
          </Route>
          <Route path="/personal">
            <Personal />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;