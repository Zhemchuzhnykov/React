import reactEmblema from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function gerRandomAdjective(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const adjective = reactDescriptions[gerRandomAdjective(1)];

  return (
    <header>
      <img src={reactEmblema} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {adjective} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
