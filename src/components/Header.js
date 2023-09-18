import NavImg from "../images/Troll Face.png";

export default function Header() {
  return (
    <header className="Nav-header">
      <img className="img" src={NavImg} alt="img" />
      <h1 className="Nav-title">Meme Generator</h1>
      <p className="Nav-text">React Course- Project 3</p>
    </header>
  );
}
