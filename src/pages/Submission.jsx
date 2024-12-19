import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import config from "../utils/config";

const Submission = () => {
  const location = useLocation();

  const name = location.state?.name || "Anonymous";

  return (
    <div className="m-10">
      <Header />

      <div className="rounded-lg bg-lime-400 p-5 text-4xl text-white">
        <h1>Oops...</h1>
        <h1>Form Submission Successfull 👍🏻</h1>
        <h4>thank: {name}</h4>
        <p>
          Check here{" "}
          <a target="_blank" href={config.userResponse} className="underline">
            click
          </a>
        </p>
      </div>
    </div>
  );
};

export default Submission;
