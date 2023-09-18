import { useEffect, useState } from "react";

export default function Meme() {
  const [Meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  // This fetches the data from external source
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  //This function generates random meme images from the Api
  function getMemeImg() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevState) => {
      return { ...prevState, randomImage: url };
    });
  }

  // This is the event handler function
  function memeUpdate(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form-container">
        <div className="inputform">
          <input
            type="text"
            name="topText"
            onChange={memeUpdate}
            value={Meme.topText}
            placeholder="Top Text"
          />

          <input
            type="text"
            name="bottomText"
            onChange={memeUpdate}
            value={Meme.bottomText}
            placeholder="Bottom Text"
          />
        </div>

        <div onClick={getMemeImg} className="btn">
          GET A NEW IMAGE
        </div>
      </div>
      <div className="meme">
        <img className="HeroImage" src={Meme.randomImage} alt="" />
        <h2 className="meme--text top">{Meme.topText}</h2>
        <h2 className="meme--text buttom">{Meme.bottomText}</h2>
      </div>
    </main>
  );
}
