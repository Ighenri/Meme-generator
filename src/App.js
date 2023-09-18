import Header from "./components/Header";
import Meme from "./components/Meme";

function App(event) {
  console.log(event);

  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
