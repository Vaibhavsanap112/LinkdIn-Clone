import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faGraduationCap,
  faBriefcase,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/images/linkdinlogo.jpg";
import "./App.css";
import Navbar from "./Components/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="content">
        <div className="login">
          <div className="h2">
            <h2>Welcome To Your </h2>
            <h2>Professional community</h2>
          </div>
          <div className="form">
            <h5>Email or phone</h5>
            <input type="text" name="" id="" />
            <h5>Password</h5>
            <input type="text" name="" id="" />
            <br />
            <h5>Forgot Passowrd ?</h5>
            <button>Sign IN</button>
          </div>
        </div>
        <div className="piture"></div>
      </div>
    </>
  );
}

export default App;
