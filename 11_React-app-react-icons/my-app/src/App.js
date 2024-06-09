import {
  FaWolfPackBattalion,
  FaFacebookF,
  FaSquareYoutube,
  FaEnvelope,
} from "react-icons/fa6";

function App() {
  return (
    <div>
      <h1>React Icons</h1>
      <FaWolfPackBattalion className="icon" />
      <div>
        <FaFacebookF className="icon1" />
        <FaSquareYoutube className="icon1" />
        <FaEnvelope className="icon1" />
      </div>
    </div>
  );
}

export default App;
