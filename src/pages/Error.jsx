import { Link, useLocation } from "react-router-dom";
import Header from "../Components/Header";
const Error = () => {
  const location = useLocation();
  const badword = location.state?.badword || "badwords";
  return (
    <div className="m-10">
    <Header/>
   
    <div className="   rounded-lg bg-red-400 p-5 text-4xl text-white">
      <h1>Oops...</h1>
      <h1>Form Submission Failed 😥</h1>
      <h4>Flagged due to: {badword}</h4>
      <p>Please Try Again <Link to="/" className="underline">Go back</Link></p>
    </div>
    </div>
  );
};

export default Error;
