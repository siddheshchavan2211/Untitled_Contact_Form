import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-8 flex items-center gap-2">
      <Link to="/">
        {" "}
        <img className="w-12" src="../../public/favicon.png" alt="logo" />
      </Link>
      <p className="text-lg font-semibold">Untitled UI</p>
    </header>
  );
};
export default Header;
