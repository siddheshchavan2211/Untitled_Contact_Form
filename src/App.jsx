import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Header from "../src/Components/Header";
import Form from "../src/Components/Form";
import Aside from "../src/Components/Aside";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Aside />
        <Form />
      </div>
    </>
  );
}

export default App;
