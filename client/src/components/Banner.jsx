import logo from "../images/devLogo.png";

export default function Banner() {
  return (
    <header className="banner">
        <img src={logo} alt="Logo" className="logo"/>
        <h1>My Portfolio</h1>
    </header>
  );
}
