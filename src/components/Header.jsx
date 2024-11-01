import logo from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <header id="header">
      <img id="img" src={logo} alt="was soll ich sagen ein Taschen" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
